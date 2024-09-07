const express = require('express');
const axios = require('axios');
const youtubedl = require('youtube-dl');
const fs = require('fs');
const { google } = require('googleapis');
const speech = require('@google-cloud/speech');
const speechClient = new speech.SpeechClient();

const app = express();
const port = 3000;

// Replace with your YouTube Data API key
const YOUTUBE_API_KEY = 'AIzaSyDeaMyzqatQshJJttR11W-EHhvHjXh1iNc';
const GOOGLE_SPEECH_API_KEY = 'AIzaSyChRFHYeHQVArhF-QoRtrYxgkksB0r-M7Y';

// Route to accept YouTube 
app.get('/generate-debate-data', async (req, res) => {
  const youtubeUrl = req.query.url;

  if (!youtubeUrl) {
    return res.status(400).json({ error: 'YouTube URL is required' });
  }

  try {
    // Step 1: Extract video ID from URL
    const videoId = extractVideoId(youtubeUrl);

    // Step 2: Fetch video metadata from YouTube API
    const videoData = await getVideoData(videoId);
    console.log('Video Metadata:', videoData);

    // Step 3: Download subtitles
    const subtitlesPath = await downloadSubtitles(videoId);
    console.log('Subtitles downloaded at:', subtitlesPath);

    // Step 4: Convert Speech-to-Text using Google Cloud API
    const transcript = await convertSpeechToText(subtitlesPath);
    console.log('Transcript:', transcript);

    // Step 5: Analyze Transcript and Generate Debate Data
    const debateData = analyzeTranscript(transcript);
    console.log('Debate Data:', debateData);

    res.json(debateData);
  } catch (error) {
    console.error('Error generating debate data:', error);
    res.status(500).json({ error: 'Failed to generate debate data' });
  }
});

function extractVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

async function getVideoData(videoId) {
  const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`);
  return response.data.items[0];
}

function downloadSubtitles(videoId) {
  return new Promise((resolve, reject) => {
    const subtitleFile = `${videoId}.vtt`;
    youtubedl.exec(`https://www.youtube.com/watch?v=${videoId}`, ['--write-auto-sub', '--skip-download'], {}, (err, output) => {
      if (err) return reject(err);
      fs.writeFileSync(subtitleFile, output.join('\n'));
      resolve(subtitleFile);
    });
  });
}

async function convertSpeechToText(subtitleFile) {
  const file = fs.readFileSync(subtitleFile);
  const audioBytes = file.toString('base64');

  const request = {
    audio: { content: audioBytes },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    },
  };

  const [response] = await speechClient.recognize(request);
  const transcript = response.results.map(result => result.alternatives[0].transcript).join('\n');
  return transcript;
}

function analyzeTranscript(transcript) {
  // Analyze the transcript to generate debate data using AI models (GPT-4, etc.)
  // This could be sentiment analysis, topic extraction, etc.
  // For now, just return a placeholder object.
  return {
    topics: ['Healthcare', 'Economy', 'Immigration'],
    sentimentAnalysis: [
      { topic: 'Healthcare', sentiment: 'Positive', confidence: 0.9 },
      { topic: 'Economy', sentiment: 'Neutral', confidence: 0.75 },
      { topic: 'Immigration', sentiment: 'Negative', confidence: 0.65 },
    ],
  };
}

app.listen(port, () => {
  console.log(`Debate Analyzer API running at http://localhost:${port}`);
});

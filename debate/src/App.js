import React from 'react';
import SentimentChart from './components/Barchart.jsx';
const dataEpisode2 = [
  {Topic: "Healthcare", Panellist: "Panellist A", Party: "Labour", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.8, Time_of_Discussion: 25},
  {Topic: "Healthcare", Panellist: "Panellist B", Party: "Conservative", Viewpoint: "Opposition", Sentiment: "Mildly Negative", Sentiment_Intensity: -0.3, Time_of_Discussion: 20},
  {Topic: "Healthcare", Panellist: "Panellist C", Party: "Liberal Democrat", Viewpoint: "Neutral", Sentiment: "Neutral", Sentiment_Intensity: 0, Time_of_Discussion: 15},
  {Topic: "Healthcare", Panellist: "Panellist D", Party: "SNP", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.7, Time_of_Discussion: 18},
  {Topic: "Immigration", Panellist: "Panellist A", Party: "Conservative", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.6, Time_of_Discussion: 12},
  {Topic: "Immigration", Panellist: "Panellist B", Party: "Labour", Viewpoint: "Opposition", Sentiment: "Negative", Sentiment_Intensity: -0.4, Time_of_Discussion: 25},
  {Topic: "Immigration", Panellist: "Panellist C", Party: "Liberal Democrat", Viewpoint: "Neutral", Sentiment: "Neutral", Sentiment_Intensity: 0, Time_of_Discussion: 22},
  {Topic: "Immigration", Panellist: "Panellist D", Party: "SNP", Viewpoint: "Opposition", Sentiment: "Mildly Negative", Sentiment_Intensity: -0.5, Time_of_Discussion: 21},
  {Topic: "Education", Panellist: "Panellist A", Party: "SNP", Viewpoint: "Neutral", Sentiment: "Strongly Positive", Sentiment_Intensity: 0.9, Time_of_Discussion: 19},
  {Topic: "Education", Panellist: "Panellist B", Party: "Conservative", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.8, Time_of_Discussion: 14},
  {Topic: "Education", Panellist: "Panellist C", Party: "Labour", Viewpoint: "Opposition", Sentiment: "Negative", Sentiment_Intensity: -0.6, Time_of_Discussion: 23},
  {Topic: "Education", Panellist: "Panellist D", Party: "Liberal Democrat", Viewpoint: "Neutral", Sentiment: "Neutral", Sentiment_Intensity: 0, Time_of_Discussion: 17},
  {Topic: "Economy", Panellist: "Panellist A", Party: "Labour", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.7, Time_of_Discussion: 24},
  {Topic: "Economy", Panellist: "Panellist B", Party: "Conservative", Viewpoint: "Opposition", Sentiment: "Negative", Sentiment_Intensity: -0.5, Time_of_Discussion: 22},
  {Topic: "Climate Change", Panellist: "Panellist A", Party: "Liberal Democrat", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.8, Time_of_Discussion: 18},
  {Topic: "Climate Change", Panellist: "Panellist B", Party: "Labour", Viewpoint: "Opposition", Sentiment: "Negative", Sentiment_Intensity: -0.4, Time_of_Discussion: 15}
  ];
const App = () => {
  const data = [
    { Topic: "Healthcare", Panellist: "Panellist A", Party: "Liberal Democrat", Viewpoint: "Opposition", Sentiment: "Mildly Negative", Sentiment_Intensity: 0.9, Time_of_Discussion: 29 },
    { Topic: "Healthcare", Panellist: "Panellist B", Party: "Liberal Democrat", Viewpoint: "Neutral", Sentiment: "Positive", Sentiment_Intensity: 0.8, Time_of_Discussion: 24 },
    { Topic: "Healthcare", Panellist: "Panellist C", Party: "Liberal Democrat", Viewpoint: "Neutral", Sentiment: "Neutral", Sentiment_Intensity: 0, Time_of_Discussion: 13 },
    //...rest of the data
  ];

  return (
    <>
    
  
  <div style={{ backgroundColor: "skyblue"}}>
<h1>Political debate</h1>
<div style = {{height: "50vh",overflow:"hidden", objectFit:"cover"}}> 
      <SentimentChart data={data} />
    </div>
    <div style = {{height: "50vh",overflow:"hidden", objectFit:"cover"}}> 
    <SentimentChart data={dataEpisode2} />
  </div>
  </div>
  </>
  );
};

export default App;

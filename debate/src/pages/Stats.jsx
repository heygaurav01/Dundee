import React from 'react'
//import React from 'react';
import Barchart from '../components/Barchart.jsx';
//import Navbar from '../components/navbar.jsx'; // Import the Navbar component
import Piechart from '../components/Piechart.jsx';
import LineChart1 from '../components/LineChart1.jsx';

import LineChart2 from '../components/LineChart2.jsx';
 // Import the Piechart component
import '../Rpp.css'; 

const Stats = () => {
    const dataEpisode1 = [
        { Topic: "Healthcare", Panellist: "Panellist A", Party: "Liberal Democrat", Viewpoint: "Opposition", Sentiment: "Mildly Negative", Sentiment_Intensity: 0.9, Time_of_Discussion: 29 },
        { Topic: "Healthcare", Panellist: "Panellist B", Party: "Liberal Democrat", Viewpoint: "Neutral", Sentiment: "Positive", Sentiment_Intensity: 0.8, Time_of_Discussion: 24 },
        { Topic: "Healthcare", Panellist: "Panellist C", Party: "Liberal Democrat", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.7, Time_of_Discussion: 30 },
        { Topic: "Healthcare", Panellist: "Panellist D", Party: "Conservative", Viewpoint: "Support", Sentiment: "Neutral", Sentiment_Intensity: 0.9, Time_of_Discussion: 26 },
        { Topic: "Healthcare", Panellist: "Panellist E", Party: "Labour", Viewpoint: "Neutral", Sentiment: "Strongly Positive", Sentiment_Intensity: -0.5, Time_of_Discussion: 17 },
        // Add more data entries as needed
      ];
      const dataEpisode3 = [
        { Date: '2024-01-01', Topic: 'Healthcare', Intensity: 0, Sentiment: 'Neutral' },
        { Date: '2024-01-01', Topic: 'Healthcare', Intensity: -0.5, Sentiment: 'Strongly Positive' },
        { Date: '2024-01-01', Topic: 'Immigration', Intensity: 0, Sentiment: 'Mildly Negative' },
        { Date: '2024-01-01', Topic: 'Immigration', Intensity: -0.5, Sentiment: 'Mildly Negative' },
        { Date: '2024-01-01', Topic: 'Immigration', Intensity: -0.7, Sentiment: 'Neutral' },
        { Date: '2024-01-01', Topic: 'Immigration', Intensity: 0, Sentiment: 'Positive' },
        { Date: '2024-01-01', Topic: 'Immigration', Intensity: -0.7, Sentiment: 'Strongly Positive' },
        { Date: '2024-01-01', Topic: 'Immigration', Intensity: 0, Sentiment: 'Strongly Positive' },
        { Date: '2024-01-01', Topic: 'Education', Intensity: -0.7, Sentiment: 'Strongly Positive' },
        { Date: '2024-01-01', Topic: 'Education', Intensity: 0, Sentiment: 'Neutral' },
        { Date: '2024-01-01', Topic: 'Education', Intensity: 0.8, Sentiment: 'Negative' },
        { Date: '2024-01-01', Topic: 'Education', Intensity: 0, Sentiment: 'Strongly Positive' },
        { Date: '2024-01-01', Topic: 'Education', Intensity: 0.8, Sentiment: 'Mildly Negative' },
        { Date: '2024-01-01', Topic: 'Education', Intensity: 0, Sentiment: 'Mildly Negative' },
        { Date: '2024-01-01', Topic: 'Economy', Intensity: 0.9, Sentiment: 'Mildly Negative' },
        { Date: '2024-01-01', Topic: 'Economy', Intensity: 0.9, Sentiment: 'Strongly Positive' },
        { Date: '2024-01-01', Topic: 'Economy', Intensity: 0.9, Sentiment: 'Mildly Negative' },
        { Date: '2024-01-01', Topic: 'Economy', Intensity: -0.7, Sentiment: 'Negative' },
        { Date: '2024-01-01', Topic: 'Economy', Intensity: 0.8, Sentiment: 'Neutral' },
        { Date: '2024-01-01', Topic: 'Economy', Intensity: -0.7, Sentiment: 'Mildly Negative' },
        { Date: '2024-01-01', Topic: 'Climate Change', Intensity: 0.9, Sentiment: 'Positive' },
        { Date: '2024-01-01', Topic: 'Climate Change', Intensity: -0.5, Sentiment: 'Mildly Negative' },
        { Date: '2024-01-01', Topic: 'Climate Change', Intensity: 0.9, Sentiment: 'Positive' },
        { Date: '2024-01-01', Topic: 'Climate Change', Intensity: -0.5, Sentiment: 'Positive' },
        { Date: '2024-01-01', Topic: 'Climate Change', Intensity: 0, Sentiment: 'Negative' },
        { Date: '2024-01-01', Topic: 'Climate Change', Intensity: -0.5, Sentiment: 'Neutral' },
        { Date: '2024-01-01', Topic: 'Housing', Intensity: 0, Sentiment: 'Positive' },
        { Date: '2024-01-01', Topic: 'Housing', Intensity: 0.9, Sentiment: 'Positive' },
        { Date: '2024-01-01', Topic: 'Housing', Intensity: -0.5, Sentiment: 'Positive' },
        { Date: '2024-01-01', Topic: 'Housing', Intensity: -0.5, Sentiment: 'Strongly Positive' },
        { Date: '2024-01-01', Topic: 'Housing', Intensity: -0.7, Sentiment: 'Neutral' },
        { Date: '2024-01-01', Topic: 'Housing', Intensity: 0.8, Sentiment: 'Strongly Positive' }
      ];
      const dataEpisode2 = [
        { Topic: "Healthcare", Panellist: "Panellist A", Party: "Labour", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.8, Time_of_Discussion: 25 },
        { Topic: "Healthcare", Panellist: "Panellist B", Party: "Conservative", Viewpoint: "Opposition", Sentiment: "Mildly Negative", Sentiment_Intensity: -0.3, Time_of_Discussion: 20 },
        { Topic: "Healthcare", Panellist: "Panellist C", Party: "Liberal Democrat", Viewpoint: "Neutral", Sentiment: "Neutral", Sentiment_Intensity: 0, Time_of_Discussion: 15 },
        { Topic: "Healthcare", Panellist: "Panellist D", Party: "SNP", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.7, Time_of_Discussion: 18 },
        // Add more data entries as needed
      ];
      const dataEpisode4 = [
        { Topic: "Healthcare", Panellist: "Panellist A", Party: "Labour", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.8, Time_of_Discussion: 25 },
        { Topic: "Healthcare", Panellist: "Panellist B", Party: "Conservative", Viewpoint: "Opposition", Sentiment: "Mildly Negative", Sentiment_Intensity: -0.3, Time_of_Discussion: 20 },
        { Topic: "Healthcare", Panellist: "Panellist C", Party: "Liberal Democrat", Viewpoint: "Neutral", Sentiment: "Neutral", Sentiment_Intensity: 0, Time_of_Discussion: 15 },
        { Topic: "Healthcare", Panellist: "Panellist D", Party: "SNP", Viewpoint: "Support", Sentiment: "Positive", Sentiment_Intensity: 0.7, Time_of_Discussion: 18 },
        // Add more data entries as needed
      ];
  return (
    <div><div className="app-container">
    <section id="barchart" className="chart-container">
      <h1 className="app-header">Political Debate - Bar Chart</h1>
      <Barchart data={dataEpisode1} />
    </section>
    <section id="piechart" className="chart-container">
      <h1 className="app-header">Political Debate - Pie Chart</h1>
      <Piechart data={dataEpisode2} />
    </section >
    <section id="LineChart1" className="chart-container">
      <h1 className="app-header">Political Debate</h1>
    <LineChart1 data={dataEpisode3 }/>
    </section>
    
<div>
  <h1>Time-Intensity Wave Chart</h1>
  <LineChart2 data={dataEpisode4} />
</div>


    
  </div></div>
  )
}

export default Stats
import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart2.css';  // Import the CSS file

const LineChart2 = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.Time_of_Discussion), // X-axis labels as Time of Discussion
    datasets: [
      {
        label: 'Time',  // Blue line for Time
        data: data.map(item => item.Time_of_Discussion),
        borderColor: 'blue',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Intensity',  // Green line for Intensity
        data: data.map(item => item.Sentiment_Intensity),
        borderColor: 'green',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Sentiment',  // Red line for Sentiment
        data: data.map(item => item.Sentiment),
        borderColor: 'red',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="linechart2-container">
      <h2 className="linechart2-heading">Time vs Intensity vs Sentiment</h2>
      <div className="linechart2">
        <Line data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default LineChart2;

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import './LineChart1.css'; // Create and link the CSS file

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChart1 = () => {
  const data = [
    { date: '2024-01-01', topic: 'Healthcare', intensity: 0, sentiment: 'Neutral' },
    { date: '2024-01-01', topic: 'Healthcare', intensity: -0.5, sentiment: 'Strongly Positive' },
    { date: '2024-01-01', topic: 'Immigration', intensity: 0, sentiment: 'Mildly Negative' },
    { date: '2024-01-01', topic: 'Immigration', intensity: -0.5, sentiment: 'Mildly Negative' },
    { date: '2024-01-01', topic: 'Immigration', intensity: -0.7, sentiment: 'Neutral' },
    { date: '2024-01-01', topic: 'Immigration', intensity: 0, sentiment: 'Positive' },
    { date: '2024-01-01', topic: 'Immigration', intensity: -0.7, sentiment: 'Strongly Positive' },
    { date: '2024-01-01', topic: 'Immigration', intensity: 0, sentiment: 'Strongly Positive' },
    { date: '2024-01-01', topic: 'Education', intensity: -0.7, sentiment: 'Strongly Positive' },
    { date: '2024-01-01', topic: 'Education', intensity: 0, sentiment: 'Neutral' },
    { date: '2024-01-01', topic: 'Education', intensity: 0.8, sentiment: 'Negative' },
    { date: '2024-01-01', topic: 'Education', intensity: 0, sentiment: 'Strongly Positive' },
    { date: '2024-01-01', topic: 'Education', intensity: 0.8, sentiment: 'Mildly Negative' },
    { date: '2024-01-01', topic: 'Education', intensity: 0, sentiment: 'Mildly Negative' },
    { date: '2024-01-01', topic: 'Economy', intensity: 0.9, sentiment: 'Mildly Negative' },
    { date: '2024-01-01', topic: 'Economy', intensity: 0.9, sentiment: 'Strongly Positive' },
    { date: '2024-01-01', topic: 'Economy', intensity: 0.9, sentiment: 'Mildly Negative' },
    { date: '2024-01-01', topic: 'Economy', intensity: -0.7, sentiment: 'Negative' },
    { date: '2024-01-01', topic: 'Economy', intensity: 0.8, sentiment: 'Neutral' },
    { date: '2024-01-01', topic: 'Economy', intensity: -0.7, sentiment: 'Mildly Negative' },
    { date: '2024-01-01', topic: 'Climate Change', intensity: 0.9, sentiment: 'Positive' },
    { date: '2024-01-01', topic: 'Climate Change', intensity: -0.5, sentiment: 'Mildly Negative' },
    { date: '2024-01-01', topic: 'Climate Change', intensity: 0.9, sentiment: 'Positive' },
    { date: '2024-01-01', topic: 'Climate Change', intensity: -0.5, sentiment: 'Positive' },
    { date: '2024-01-01', topic: 'Climate Change', intensity: 0, sentiment: 'Negative' },
    { date: '2024-01-01', topic: 'Climate Change', intensity: -0.5, sentiment: 'Neutral' },
    { date: '2024-01-01', topic: 'Housing', intensity: 0, sentiment: 'Positive' },
    { date: '2024-01-01', topic: 'Housing', intensity: 0.9, sentiment: 'Positive' },
    { date: '2024-01-01', topic: 'Housing', intensity: -0.5, sentiment: 'Positive' },
    { date: '2024-01-01', topic: 'Housing', intensity: -0.5, sentiment: 'Strongly Positive' },
    { date: '2024-01-01', topic: 'Housing', intensity: -0.7, sentiment: 'Neutral' },
    { date: '2024-01-01', topic: 'Housing', intensity: 0.8, sentiment: 'Strongly Positive' }
  ];

  const chartData = {
    labels: data.map(d => d.topic),
    datasets: [{
      label: 'Intensity',
      data: data.map(d => d.intensity),
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      pointBackgroundColor: 'white',
      pointBorderColor: 'rgba(255, 99, 132, 1)',
      pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointHoverBorderColor: 'white',
      pointRadius: 6,
      fill: false,
      tension: 0.3,
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        min: -1,
        max: 1,
        ticks: {
          stepSize: 0.5,
          color: 'black',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      },
      x: {
        ticks: {
          color: 'black',
        },
        grid: {
          color: 'rgba(204, 255, 204, 1)',
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            const dataPoint = data[context.dataIndex];
            return `Topic: ${dataPoint.topic}, Intensity: ${dataPoint.intensity}, Sentiment: ${dataPoint.sentiment}`;
          }
        }
      }
    }
  };

  return (
    <div className="trends-container">
      <h1 className="trends-title"> Trends Visualization</h1>
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart1;

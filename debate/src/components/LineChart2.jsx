import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import './LineChart2.css'; // Create and link the CSS file

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChart2 = () => {
  const data = [
    { date: '2024-01-01', topic: 'Healthcare', intensity: 0, sentiment: 'Neutral', party: 'Party A' },
    { date: '2024-01-01', topic: 'Healthcare', intensity: -0.5, sentiment: 'Strongly Positive', party: 'Party B' },
    { date: '2024-01-01', topic: 'Immigration', intensity: 0, sentiment: 'Mildly Negative', party: 'Party A' },
    { date: '2024-01-01', topic: 'Immigration', intensity: -0.5, sentiment: 'Mildly Negative', party: 'Party B' },
    { date: '2024-01-01', topic: 'Immigration', intensity: -0.7, sentiment: 'Neutral', party: 'Party C' },
    { date: '2024-01-01', topic: 'Immigration', intensity: 0, sentiment: 'Positive', party: 'Party A' },
    // ... (more data)
    { date: '2024-01-01', topic: 'Housing', intensity: 0.8, sentiment: 'Strongly Positive', party: 'Party C' }
  ];

  const filteredData = (party) => data.filter(item => item.party === party);

  const chartData = {
    labels: data.map(d => d.topic),
    datasets: [
      {
        label: 'Party A',
        data: filteredData('Party A').map(d => d.intensity),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: '#0E7337',
        pointBackgroundColor: 'white',
        pointBorderColor: '#239A52',
        pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointHoverBorderColor: 'white',
        pointRadius: 6,
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Party B',
        data: filteredData('Party B').map(d => d.intensity),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgba(255, 99, 132, 1)',
        pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointHoverBorderColor: 'white',
        pointRadius: 6,
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Party C',
        data: filteredData('Party C').map(d => d.intensity),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'white',
        pointBorderColor: '#239A52',
        pointHoverBackgroundColor: '#1B8043',
        pointHoverBorderColor: 'white',
        pointRadius: 6,
        fill: false,
        tension: 0.3,
      }
    ]
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
          color: 'rgba(255, 255, 255, 0.1)',
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
    <div className="triple-graph-container">
      <h1 className="triple-graph-title">Triple Line Graph:  Trends by Party</h1>
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart2;

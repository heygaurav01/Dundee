import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Piechart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = ({ data }) => {
  const chartData = {
    labels: data.map(item => `${item.Topic} (${(item.Sentiment_Intensity * 100).toFixed(0)}%)`),
    datasets: [
      {
        data: data.map(item => item.Sentiment_Intensity * 100),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  };

  const chartOptions = {
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`;
          },
        },
      },
    },
  };

  return (
    <div className="piechart-container">
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default Piechart;

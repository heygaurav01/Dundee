// GraphComponent.jsx
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-adapter-luxon'; // Import the date adapter

const GraphComponent = () => {
  const [days, setDays] = useState(365); // Initial time duration
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if any
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      // Generate time-based data
      const labels = Array.from({ length: days }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString(); // ISO string for compatibility
      }).reverse();

      const data = Array.from({ length: days }, () => Math.floor(Math.random() * 100));

      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Sample Data',
            data: labels.map((label, index) => ({
              x: new Date(label).getTime(),
              y: data[index]
            })),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day', // Change this to 'month' or 'year' as needed
              },
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Value'
              }
            }
          },
          plugins: {
            zoom: {
              zoom: {
                enabled: true,
                mode: 'x',
                speed: 0.1,
                sensitivity: 3
              },
              pan: {
                enabled: true,
                mode: 'x'
              }
            }
          }
        }
      });
    }

    return () => {
      // Clean up chart instance on unmount
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [days]); // Re-render chart when days change

  return (
    <div>
      <canvas ref={chartRef} width="800" height="400"></canvas>
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="timeRange">Time Range: {days} days</label>
        <input
          type="range"
          id="timeRange"
          min="30"
          max="365"
          step="1"
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value, 10))}
        />
      </div>
    </div>
  );
};

export default GraphComponent;

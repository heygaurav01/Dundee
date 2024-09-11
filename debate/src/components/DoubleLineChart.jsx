import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import './MultiAxisLineChart.css';

const MultiAxisLineChart = () => {
  const chartRef = useRef(null);
  const [timeRange, setTimeRange] = useState([new Date('2022-01-01'), new Date('2023-12-01')]);
  const [rangeValue, setRangeValue] = useState(0);

  const data = [
     { date: '2022-01-01', series1: 30, series2: 50 },
    { date: '2022-02-01', series1: 45, series2: 65 },
    { date: '2022-03-01', series1: 60, series2: 55 },
    { date: '2022-04-01', series1: 75, series2: 70 },
    { date: '2022-05-01', series1: 85, series2: 90 },
    { date: '2022-06-01', series1: 100, series2: 95 },
    { date: '2022-07-01', series1: 110, series2: 120 },
    { date: '2022-08-01', series1: 125, series2: 115 },
    { date: '2022-09-01', series1: 140, series2: 130 },
    { date: '2022-10-01', series1: 150, series2: 145 },
    { date: '2022-11-01', series1: 160, series2: 155 },
    { date: '2022-12-01', series1: 170, series2: 165 },
    { date: '2023-01-01', series1: 30, series2: 50 },
    { date: '2023-02-01', series1: 70, series2: 60 },
    { date: '2023-03-01', series1: 80, series2: 40 },
    { date: '2023-04-01', series1: 60, series2: 70 },
    { date: '2023-05-01', series1: 90, series2: 85 },
    { date: '2023-06-01', series1: 100, series2: 95 },
    { date: '2023-07-01', series1: 120, series2: 110 },
    { date: '2023-08-01', series1: 140, series2: 130 },
    { date: '2023-09-01', series1: 160, series2: 150 },
    { date: '2023-10-01', series1: 170, series2: 165 },
    { date: '2023-11-01', series1: 180, series2: 175 },
    { date: '2023-12-01', series1: 190, series2: 185 }
  ];

  

  useEffect(() => {
    const margin = { top: 20, right: 80, bottom: 100, left: 50 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    const parseDate = d3.timeParse('%Y-%m-%d');
    data.forEach(d => {
      d.date = parseDate(d.date);
    });

    const x = d3.scaleTime().range([0, width]);
    const y1 = d3.scaleLinear().range([height, 0]);
    const y2 = d3.scaleLinear().range([height, 0]);

    x.domain(timeRange);
    y1.domain([0, d3.max(data, d => d.series1)]);
    y2.domain([0, d3.max(data, d => d.series2)]);

    d3.select(chartRef.current).select('svg').remove();

    const svg = d3.select(chartRef.current)
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom);

// Define the glow filter
const defs = svg.append('defs');

// Basic glow
defs.append('filter')
  .attr('id', 'glow')
  .append('feGaussianBlur')
  .attr('in', 'SourceGraphic')
  .attr('stdDeviation', '3')
  .attr('result', 'blur');

// Stronger glow effect for hover
defs.append('filter')
  .attr('id', 'glow-hover')
  .append('feGaussianBlur')
  .attr('in', 'SourceGraphic')
  .attr('stdDeviation', '6')  // Increased blur for hover
  .attr('result', 'blur');

defs.select('#glow')
  .append('feMerge')
  .append('feMergeNode')
  .attr('in', 'blur');

defs.select('#glow')
  .append('feMerge')
  .append('feMergeNode')
  .attr('in', 'SourceGraphic');

defs.select('#glow-hover')
  .append('feMerge')
  .append('feMergeNode')
  .attr('in', 'blur');

defs.select('#glow-hover')
  .append('feMerge')
  .append('feMergeNode')
  .attr('in', 'SourceGraphic');


    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const line1 = d3.line()
      .x(d => x(d.date))
      .y(d => y1(d.series1));

    const line2 = d3.line()
      .x(d => x(d.date))
      .y(d => y2(d.series2));

    const xAxis = d3.axisBottom(x);
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .attr('class', 'x-axis')
      .call(xAxis);

    const yAxisLeft = d3.axisLeft(y1);
    g.append('g')
      .attr('class', 'y-axis-left')
      .call(yAxisLeft);

    const yAxisRight = d3.axisRight(y2);
    g.append('g')
      .attr('transform', `translate(${width},0)`)
      .attr('class', 'y-axis-right')
      .call(yAxisRight);

    g.append('path')
      .data([data])
      .attr('class', 'line line1')
      .attr('d', line1)
      .style('filter', 'url(#glow)') // Apply glow effect
      .transition()
      .duration(2000)
      .ease(d3.easeCubicInOut)
      .attrTween('stroke-dasharray', function () {
        const len = this.getTotalLength();
        return d3.interpolateString('0,' + len, len + ',' + len);
      });

    g.append('path')
      .data([data])
      .attr('class', 'line line2')
      .attr('d', line2)
      .style('filter', 'url(#glow)') // Apply glow effect
      .transition()
      .duration(2000)
      .ease(d3.easeCubicInOut)
      .attrTween('stroke-dasharray', function () {
        const len = this.getTotalLength();
        return d3.interpolateString('0,' + len, len + ',' + len);
      });

    const zoom = d3.zoom()
      .scaleExtent([1, 10])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]])
      .on('zoom', zoomed);

    g.call(zoom);

    function zoomed(event) {
      const transform = event.transform;
      const newX = transform.rescaleX(x);

      g.select('.x-axis').call(xAxis.scale(newX));
      g.selectAll('.line').attr('d', function(d) {
        return d3.line()
          .x(d => newX(d.date))
          .y(d => {
            return this.classList.contains('line1') ? y1(d.series1) : y2(d.series2);
          })(d);
      });
    }

  }, [timeRange]);

  const handleTimeRangeChange = (e) => {
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2023-12-01');
    const value = e.target.value;
    const newStart = new Date(startDate.getTime() + (value * (endDate.getTime() - startDate.getTime())) / 100);
    setTimeRange([newStart, endDate]);
    setRangeValue(value);
  };

  return (
    <div >
      <div ref={chartRef} style={{overflow:'hidden'}}></div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={rangeValue} 
        onChange={handleTimeRangeChange} 
      />
    </div>
  );
};

export default MultiAxisLineChart;

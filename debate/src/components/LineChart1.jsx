import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart1 = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Set dimensions and margins
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Clear previous content
    svg.selectAll('*').remove();

    // Set up scales
    const x = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.Date)))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([d3.min(data, d => d.Intensity) - 1, d3.max(data, d => d.Intensity) + 1])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Set up line generator
    const line = d3.line()
      .x(d => x(new Date(d.Date)))
      .y(d => y(d.Intensity));

    // Draw the line
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    // Add axes
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Add labels
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height - 10)
      .attr('text-anchor', 'middle')
      .text('Date');

    svg.append('text')
      .attr('x', -height / 2)
      .attr('y', 15)
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Intensity');

  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default LineChart1;

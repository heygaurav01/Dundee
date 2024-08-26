import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../Barchart.css';

const Barchart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Clear previous chart before drawing new chart
    d3.select(svgRef.current).selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 60 },
      width = 900 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

    // Set up SVG container
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Set up scales
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.Panellist + ' (' + d.Topic + ')'))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.Sentiment_Intensity)])
      .range([height, 0]);

    // Add X axis
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .attr('text-anchor', 'end')
      .attr('class', 'axis-label');

    // Add Y axis
    svg.append('g').call(d3.axisLeft(y)).selectAll('text').attr('class', 'axis-label');

    // Add bars
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.Panellist + ' (' + d.Topic + ')'))
      .attr('y', (d) => y(d.Sentiment_Intensity))
      .attr('width', x.bandwidth())
      .attr('height', (d) => height - y(d.Sentiment_Intensity))
      .attr('fill', 'steelgreen')
      .on('mouseover', function (event, d) {
        d3.select(this).transition().duration(200).attr('fill', 'darkgreen');
      })
      .on('mouseout', function (event, d) {
        d3.select(this).transition().duration(200).attr('fill', 'orange');
      });

    // Add text labels on bars
    svg
      .selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', (d) => x(d.Panellist + ' (' + d.Topic + ')') + x.bandwidth() / 2)
      .attr('y', (d) => y(d.Sentiment_Intensity) - 5)
      .attr('text-anchor', 'middle')
      .text((d) => d.Sentiment_Intensity);
  }, [data]);

  return (
    <div>
      <h2>Sentiment Intensity by Panellist and Topic</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Barchart;

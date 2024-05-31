import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TrendChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 80, bottom: 30, left: 50 },
          width = 1500 - margin.left - margin.right,
          height = 700 - margin.top - margin.bottom;

    const svg = d3.select(chartRef.current).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const line = d3.line()
      .x(d => x(d.original_listed_time_readable))
      .y(d => y(d.count));

    const focus = svg.append('g')
      .attr('class', 'focus')
      .style('display', 'none');

    focus.append('circle').attr('r', 4.5);
    focus.append('text').attr('x', 9).attr('dy', '.35em');

    svg.append('rect')
      .attr('class', 'overlay')
      .attr('width', width)
      .attr('height', height)
      .on('mouseover', () => focus.style('display', null))
      .on('mouseout', () => focus.style('display', 'none'));

    let overallXDomain;

    function calculateOverallXDomain() {
      const promises = [
        d3.csv('./Filtered_Job_Postings_Data.csv'),
        d3.csv('./Filtered_work_type.csv'),
        d3.csv('./Filtered_remote.csv')
      ];

      Promise.all(promises).then(datasets => {
        const allDates = datasets.flat().map(d => d3.timeParse('%Y-%m-%d %H:%M:%S')(d.original_listed_time_readable));
        overallXDomain = d3.extent(allDates);
        overallXDomain[1] = d3.timeMonth.offset(overallXDomain[1], 1);
        updateChart('./data/trend/Filtered_Job_Postings_Data.csv', 'industry');
      });
    }

    function updateChart(dataUrl, key) {
      d3.csv(dataUrl).then(data => {
        const parseDate = d3.timeParse('%Y-%m-%d %H:%M:%S');
        data.forEach(d => {
          d.original_listed_time_readable = parseDate(d.original_listed_time_readable);
          d.count = +d.count;
        });

        x.domain(overallXDomain);
        y.domain([0, d3.max(data, d => d.count)]);
        color.domain(Array.from(new Set(data.map(d => d[key]))));

        const groups = d3.groups(data, d => d[key]);

        svg.selectAll('.line').remove();
        svg.selectAll('.legend').remove();

        groups.forEach(group => {
          svg.append('path')
            .datum(group[1])
            .attr('class', 'line')
            .attr('d', line)
            .style('stroke', color(group[0]))
            .attr(`data-${key}`, group[0]);
        });

        svg.selectAll('g.axis').remove();

        svg.append('g')
          .attr('class', 'axis')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(x).ticks(d3.timeMonth.every(1)).tickFormat(d3.timeFormat('%Y-%m')))
          .selectAll('text')
          .style('font-size', '20px');

        svg.append('g')
          .attr('class', 'axis')
          .call(d3.axisLeft(y))
          .selectAll('text')
          .style('font-size', '14px');

        const legend = svg.selectAll('.legend')
          .data(color.domain())
          .enter().append('g')
          .attr('class', 'legend')
          .attr('transform', (d, i) => `translate(-30,${i * 30})`);

        legend.append('rect')
          .attr('x', width - 18)
          .attr('width', 24)
          .attr('height', 24)
          .style('fill', color)
          .on('mouseover', highlight)
          .on('mouseout', unhighlight);

        legend.append('text')
          .attr('x', width - 24)
          .attr('y', 12)
          .attr('dy', '.35em')
          .style('text-anchor', 'end')
          .style('font-size', '18px')
          .text(d => d);

        function highlight(event, d) {
          d3.selectAll('.line').style('opacity', 0.1);
          d3.select(`.line[data-${key}='${d}']`).style('opacity', 1);
        }

        function unhighlight() {
          d3.selectAll('.line').style('opacity', 1);
        }

        svg.select('.overlay')
          .on('mousemove', function (event) {
            mousemove(event, data);
          });

        function mousemove(event, data) {
          const bisectDate = d3.bisector(d => d.original_listed_time_readable).left;
          const x0 = x.invert(d3.pointer(event)[0]);
          const i = bisectDate(data, x0, 1);
          const d0 = data[i - 1];
          const d1 = data[i];
          const d = (x0 - d0.original_listed_time_readable > d1.original_listed_time_readable - x0) ? d1 : d0;
          if (d && d.original_listed_time_readable) {
            focus.attr('transform', `translate(${x(d.original_listed_time_readable)},${y(d.count)})`);
            focus.select('text').text(d.count);
          }
        }
      }).catch(error => {
        console.error('Error loading or parsing data:', error);
      });
    }

    document.getElementById('chartSelect').addEventListener('change', function () {
      const value = this.value;
      if (value === 'industry') {
        updateChart('./data/trend/Filtered_Job_Postings_Data.csv', 'industry');
      } else if (value === 'work_type') {
        updateChart('./data/trend/Filtered_work_type.csv', 'work_type');
      } else if (value === 'remote_allowed') {
        updateChart('./data/trend/Filtered_remote.csv', 'remote_allowed');
      }
    });

    calculateOverallXDomain();
  }, []);

  return (
    <div>
      <select id="chartSelect" style={{ fontSize: '18px', padding: '10px' }}>
        <option value="industry">Industry</option>
        <option value="work_type">Work Type</option>
        <option value="remote_allowed">Remote Allowed</option>
      </select>
      <div id="chart" ref={chartRef}></div>
    </div>
  );
};

export default TrendChart;

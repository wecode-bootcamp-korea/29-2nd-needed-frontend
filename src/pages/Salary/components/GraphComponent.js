import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function GraphComponent({ data, selectedYear }) {
  return (
    <Graph>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="rgba(51,51,51,0.2)" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              borderRadius: 5,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: 0,
              padding: 6,
            }}
            cursor={false}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff', fontSize: 14 }}
          />
          <Bar dataKey="연봉" barSize={20}>
            {data.map((entry, idx) => (
              <Cell
                key={idx}
                fill={
                  entry.name === selectedYear
                    ? 'rgba(255,255,255,0.8)'
                    : 'rgba(51,51,51,0.2)'
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Graph>
  );
}

const Graph = styled.div`
  width: 74%;
  margin-right: 20px;
  min-height: 472px;

  .recharts-wrapper .recharts-cartesian-grid-vertical {
    stroke-opacity: 0;
  }
  .recharts-wrapper .recharts-cartesian-grid-horizontal {
    stroke-width: 1px;
  }
  .recharts-cartesian-axis-line {
    stroke-width: 1px;
    fill: rgba(51, 51, 51, 0.3);
  }

  .recharts-cartesian-axis-tick-line {
    stroke-opacity: 0;
  }
  .recharts-tooltip-wrapper {
    background-color: rgba(51, 51, 51, 0.8);
  }
  .recharts-cartesian-axis-line {
    stroke: rgba(51, 51, 51, 0.3);
  }
  .recharts-tooltip-label {
    font-size: 14px;
  }
  tspan {
    font-size: 12px;
    color: #333;
  }
`;

export default GraphComponent;

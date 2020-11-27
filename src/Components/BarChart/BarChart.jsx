import React from "react";

import { getX, getY, getSeries, getColor, intToString } from "./transformer";

const BarChart = ({ data, max }) => {
  const countries = data.map((d) => d.name);
  const final = data.map((d) => ({
    offset: max - d.coverage,
    ...d,
  }));
  const width = window.innerWidth - 100;
  const height = data.length * 50;
  const series = getSeries(final);
  const X = getX([0, max], [0, width]);
  const Y = getY(countries, [0, height], 0.1);
  const fill = getColor(series);
  const stroke = getColor(series, ["#d6465b", "#c2cfd8"]);

  return (
    <svg width={width} height={height}>
      <g>
        {series.map((d) => {
          return (
            <>
              {d.map((r) => {
                return (
                  <rect
                    x={X(r[0])}
                    y={Y(r.data.name)}
                    width={X(r[1]) - X(r[0])}
                    height={40}
                    stroke={stroke(d.key)}
                    fill={fill(d.key)}
                  />
                );
              })}
            </>
          );
        })}
        {series.map((d) => {
          return (
            <>
              {d.map((r) => {
                return (
                  <>
                    {d.key === "coverage" ? (
                      <text
                        x={X(r[0]) + 10}
                        y={Y(r.data.name) + 25}
                        fill="#000"
                        textAnchor="start"
                      >
                        {r.data.name}
                      </text>
                    ) : (
                      <text x="0" y="0" fill="white" textAnchor="end">
                        <tspan
                          x={X(r[1]) - 10}
                          y={Y(r.data.name) + 17}
                          fill="#000"
                          fontSize="11px"
                        >
                          Coverage: {intToString(r.data.coverage)}
                        </tspan>
                        <tspan
                          x={X(r[1]) - 10}
                          y={Y(r.data.name) + 33}
                          fill="#000"
                          fontSize="11px"
                        >
                          Cofirmed: {intToString(r.data.confirmed)}
                        </tspan>
                      </text>
                    )}
                  </>
                );
              })}
            </>
          );
        })}
        {}
      </g>
    </svg>
  );
};

export default BarChart;

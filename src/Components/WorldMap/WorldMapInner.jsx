import React from "react";

import "./WorldMapInner.css";

const WorldMapInner = ({
  countries,
  path,
  projection,
  height,
  width,
  data = [],
}) => {
  const { features = [] } = countries;
  return (
    <svg width={width} height={height}>
      <g>
        {features.map((obj, i) => (
          <path
            key={`country${i}`}
            d={path(obj)}
            fill="#e4d5e8"
            stroke="#000"
            strokeWidth="0.2px"
          />
        ))}
      </g>
    </svg>
  );
};

export default WorldMapInner;

import React from "react";
import ReactTooltip from "react-tooltip";
import { getColor } from "./utils";
import "./WorldMapInner.css";

const WorldMapInner = ({
  countries,
  path,
  projection,
  height,
  width,
  data = {},
  activeCountry,
}) => {
  const chinaTooltip = React.useRef(null);
  const other = React.useRef(null);
  const { features = [] } = countries;
  React.useEffect(() => {
    ReactTooltip.rebuild();
    ReactTooltip.show(chinaTooltip.current);
  });
  const color = getColor(5, 10000);
  return (
    <>
      <svg width={width} height={height} className="svgContainer">
        <g>
          {features.map((obj, i) => {
            const { confirmed = 0, coverage = 0 } =
              data[obj?.properties?.countryCode] || {};
            const tooltip_text = `<div style="text-align:start">
            <div style="padding-bottom:5px">${obj.properties.name}</div>
            <div>Confirmed: ${confirmed?.toLocaleString()}</div>
            <div>Coverage: ${coverage?.toLocaleString()}</div>
            </div>
           `;

            return (
              <path
                key={`country${i}`}
                ref={obj.properties.name === "China" ? chinaTooltip : other}
                d={path(obj)}
                fill={color(confirmed)}
                stroke={
                  obj.properties.name === activeCountry ? "#4a5c6a" : "#000"
                }
                strokeWidth={
                  obj.properties.name === "China" ||
                  obj.properties.name === activeCountry
                    ? "1px"
                    : "0.2px"
                }
                data-for={
                  obj.properties.name === "China"
                    ? "first-click"
                    : "second-click"
                }
                data-html
                data-tip={tooltip_text}
                onMouseEnter={() => {
                  ReactTooltip.show(chinaTooltip.current);
                }}
                onMouseLeave={() => {
                  ReactTooltip.show(chinaTooltip.current);
                }}
              />
            );
          })}
        </g>
      </svg>
      <ReactTooltip
        id="first-click"
        overridePosition={(e, _, b) => {
          const { height: pHeight = 50 } = b.getBoundingClientRect();
          return { left: e.left, top: e.top + pHeight / 2 };
        }}
        multiline
        className="tooltip"
      />
      <ReactTooltip id="second-click" multiline data-html className="tooltip" />
    </>
  );
};

export default WorldMapInner;

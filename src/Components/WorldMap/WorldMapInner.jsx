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
}) => {
  const inputEl = React.useRef(null);
  const t = React.useRef(null);
  const { features = [] } = countries;
  React.useEffect(() => {
    ReactTooltip.rebuild();
    ReactTooltip.show(inputEl.current);
  });
  const color = getColor(5, 10000);
  return (
    <>
      <svg width={width} height={height}>
        <g>
          {features.map((obj, i) => {
            const { confirmed = 0, coverage = 0 } =
              data[obj?.properties?.countryCode] || {};
            const tooltip_text = `<div style="text-align:start">
            <div style="padding-bottom:5px">${obj.properties.name}</div>
            <div>Confirmed: ${confirmed}</div>
            <div>Coverage: ${coverage}</div>
            </div>
           `;
            // const [cx, cy] = projection([
            //   obj.properties.lon,
            //   obj.properties.lat,
            // ]);
            // console.log(cx, cy);
            return (
              <path
                key={`country${i}`}
                ref={obj.properties.name === "China" ? inputEl : t}
                d={path(obj)}
                fill={color(confirmed)}
                stroke="#000"
                strokeWidth={obj.properties.name === "China" ? "1px" : "0.2px"}
                data-for={
                  obj.properties.name === "China"
                    ? "first-click"
                    : "second-click"
                }
                data-html
                data-tip={tooltip_text}
                onMouseEnter={() => {
                  ReactTooltip.show(inputEl.current);
                }}
                onMouseLeave={() => {
                  ReactTooltip.show(inputEl.current);
                }}
              />
            );
          })}
        </g>
      </svg>
      <ReactTooltip
        id="first-click"
        overridePosition={(e) => {
          return { left: e.left, top: e.top + 50 };
        }}
        multiline
        className="tooltip"
      />
      <ReactTooltip id="second-click" multiline data-html className="tooltip" />
    </>
  );
};

export default WorldMapInner;

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
  const test = React.useRef(null);
  const other = React.useRef(null);
  const { features = [] } = countries;

  React.useEffect(() => {
    ReactTooltip.rebuild();
    ReactTooltip.show(chinaTooltip.current);
  });
  React.useEffect(() => {
    if (activeCountry) {
      ReactTooltip.show(test.current);
      ReactTooltip.rebuild();
    } else {
      ReactTooltip.hide(test.current);
      ReactTooltip.rebuild();
    }
  }, [activeCountry]);

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
                ref={
                  obj.properties.name === "China"
                    ? chinaTooltip
                    : obj.properties.name === activeCountry
                    ? test
                    : other
                }
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
                    : obj.properties.name === activeCountry
                    ? "test"
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
      {activeCountry && (
        <ReactTooltip
          id="test"
          place="top"
          afterHide={() => (test.current = null)}
          overridePosition={(e, _, b) => {
            const isUS = activeCountry === "United States";
            const isRNZ =
              activeCountry === "Russian Federation" ||
              activeCountry === "New Zealand";

            const {
              height: pHeight = 50,
              width: pWidth,
              left,
              right,
              top,
            } = b.getBoundingClientRect();
            const off = pWidth / 7;
            console.log(b.getBoundingClientRect(), e);
            return {
              left: isUS ? left + off : isRNZ ? right - off - off : e.left,
              top: isRNZ ? top + pHeight / 3 : e.top + pHeight / 2,
            };
          }}
          multiline
          className="tooltip"
        />
      )}
      <ReactTooltip id="second-click" multiline data-html className="tooltip" />
    </>
  );
};

export default WorldMapInner;

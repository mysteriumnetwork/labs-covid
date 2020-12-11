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
  const [activeValue, setActiveValue] = React.useState("");
  const chinaTooltip = React.useRef(null);
  const widgetTooltip = React.useRef(null);
  const hoverTooltip = React.useRef(null);
  const other = React.useRef(null);

  const { features = [] } = countries;
  React.useEffect(() => {
    ReactTooltip.rebuild();
    ReactTooltip.show(chinaTooltip.current);
    ReactTooltip.show(hoverTooltip.current);
    ReactTooltip.show(widgetTooltip.current);
  });
  React.useEffect(() => {
    if (activeCountry) {
      ReactTooltip.show(widgetTooltip.current);
      ReactTooltip.rebuild();
    } else {
      ReactTooltip.hide(widgetTooltip.current);
      ReactTooltip.rebuild();
    }
  }, [activeCountry]);

  const color = getColor(5, 10000);
  return (
    <>
      <svg width={width} height={height} className="svgContainer">
        <g>
          {features.map((obj, i) => {
            const { c = 0, a = 0, d = 0 } =
              data[obj?.properties?.countryCode] || {};
            const tooltip_text = `<div style="text-align:start">
            <div style="padding-bottom:5px">${obj.properties.name}</div>
            <div>Confirmed: ${c?.toLocaleString()}</div>
            <div>Deaths: ${d?.toLocaleString()}</div>
            <div>Coverage: <strong>${a?.toLocaleString()}</strong></div>
            </div>
           `;
            return (
              <path
                key={`country${i}`}
                ref={
                  obj.properties.name === "China"
                    ? chinaTooltip
                    : obj.properties.name === activeCountry
                    ? widgetTooltip
                    : obj.properties.name === activeValue
                    ? hoverTooltip
                    : other
                }
                d={path(obj)}
                fill={color(c)}
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
                    ? "china-tooltip"
                    : obj.properties.name === activeCountry
                    ? "widget-tooltip"
                    : "hover-tooltip"
                }
                data-html
                data-tip={tooltip_text}
                onMouseEnter={() => {
                  setActiveValue(obj.properties.name);
                  ReactTooltip.show(chinaTooltip.current);
                }}
                onMouseLeave={() => {
                  ReactTooltip.show(chinaTooltip.current);
                  setActiveValue("");
                }}
              />
            );
          })}
        </g>
      </svg>

      <ReactTooltip
        id="china-tooltip"
        overridePosition={(e, _, b) => {
          const { height: pHeight = 50 } = b.getBoundingClientRect();
          return { left: e.left, top: e.top + pHeight / 2 };
        }}
        multiline
        className="tooltip"
      />
      {activeCountry && (
        <ReactTooltip
          id="widget-tooltip"
          place="top"
          afterHide={() => (widgetTooltip.current = null)}
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
            return {
              left: isUS ? left + off : isRNZ ? right - off - off : e.left,
              top: isRNZ ? top + pHeight / 3 : e.top + pHeight / 2,
            };
          }}
          multiline
          className="tooltip"
        />
      )}
      <ReactTooltip
        id="hover-tooltip"
        multiline
        data-html
        className="tooltip"
        overridePosition={(e, _, b, i, o) => {
          const { height: pHeight, width: pWidth } = i.getBoundingClientRect();
          return { left: _.clientX - pWidth / 2, top: _.clientY - pHeight };
        }}
      />
    </>
  );
};

export default WorldMapInner;

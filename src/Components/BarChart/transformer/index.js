import * as d3shape from "d3-shape";
import * as d3scale from "d3-scale";

export const getSeries = (data) =>
  d3shape.stack().keys(["coverage", "offset"])(data);

export const getX = (domain, range) =>
  d3scale.scaleLinear().domain(domain).range(range);

export const getY = (domain, range, padding) =>
  d3scale.scaleBand().domain(domain).range(range).padding(padding);

export const getColor = (series, range = ["#eba2ad", "#ffffff"]) =>
  d3scale
    .scaleOrdinal()
    .domain(series.map((d) => d.key))
    .range(range);
export const intToString = (value) => {
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

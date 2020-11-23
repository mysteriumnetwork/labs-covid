import * as d3projection from "d3-geo-projection";
import * as d3geo from "d3-geo";
import * as d3scale from "d3-scale";
import * as d3interpolate from "d3-interpolate";

export const getProjections = (width, height, countries) =>
  d3projection
    .geoKavrayskiy7()
    .fitSize([width * 1.2, height * 1.2], countries)
    .translate([width * 0.46, height * 0.6]);

export const getPaths = (projection) => d3geo.geoPath(projection);
export const getColor = (min, max, color = ["#fde7e8", "#ff8b8f"]) =>
  d3scale
    .scaleSequential(d3interpolate.interpolateRgbBasis(color))
    .domain([min, max]);

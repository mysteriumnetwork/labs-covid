import * as d3projection from "d3-geo-projection";
import * as d3geo from "d3-geo";

export const getProjections = (width, height, countries) =>
  d3projection
    .geoKavrayskiy7()
    .fitSize([width * 1.2, height * 1.2], countries)
    .translate([width * 0.46, height * 0.6]);

export const getPaths = (projection) => d3geo.geoPath(projection);

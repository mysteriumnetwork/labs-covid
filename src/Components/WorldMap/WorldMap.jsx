import React, { useState, useEffect } from "react";
import * as topojson from "topojson-client";

import WorldMapInner from "./WorldMapInner";
import { getPaths, getProjections } from "./utils";
const WorldMap = ({ width = 400, height = 200, data }) => {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    fetch("/json/50m.json")
      .then((res) => res.json())
      .then((world) => {
        const countries = topojson.feature(world, world.objects.countries);
        console.log(world, countries);
        setCountries(countries);
      })
      .catch(() => console.error("countries data not found"));
  }, []);
  const projection = getProjections(width, height, countries);
  const path = getPaths(projection);
  return (
    <WorldMapInner
      width={width}
      height={height}
      countries={countries}
      path={path}
      data={data}
      projection={projection}
    />
  );
};

export default WorldMap;

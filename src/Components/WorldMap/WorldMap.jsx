import React, { useState, useEffect } from "react";
import * as topojson from "topojson-client";

import WorldMapInner from "./WorldMapInner";
import { getPaths, getProjections } from "./utils";
const WorldMap = ({ width = 400, height = 200, data, activeCountry }) => {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    fetch("/json/country.json")
      .then((res) => res.json())
      .then((world) => {
        const countries = topojson.feature(world, world.objects.countries);
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
      activeCountry={activeCountry}
    />
  );
};

export default WorldMap;

import React, { useEffect, useState } from "react";

import PageMobileViewInner from "./PageMobileViewInner";

const getTopData = (data, type = "coverage") => {
  const { dates = [], data: d = {} } = data;
  return dates.reduce((final, date) => {
    const activeData = d[date];
    const chinaDetail = activeData["CN"] || {};
    const other = Object.keys(activeData)
      .filter((code) => code !== "CN" && activeData[code]?.coverage !== 0)
      .map((e) => activeData[e])
      .sort((a, b) => b.coverage - a.coverage)
      .slice(0, 10);
    const max = [chinaDetail, ...other].reduce((prev, current) =>
      prev.coverage > current.coverage ? prev : current
    );
    return {
      ...final,
      [date]: { chinaDetail, other, max: max.coverage },
    };
  }, {});
};
const PageMobileView = ({ data }) => {
  const [barData, setTransformedData] = useState({});
  const [hasMore, setHasMore] = useState(true);
  const [activeData, setActiveData] = useState([]);

  useEffect(() => {
    if (data?.dates?.length) {
      const transformedData = getTopData(data);
      setTransformedData(transformedData);
      setActiveData(data.dates.slice(0, 5));
    }
  }, [data]);
  const loadFunc = (a) => {
    if (data?.dates?.length) {
      const activeLength = activeData.length;
      const nextSlice = data.dates.slice(activeLength, activeLength + 5);
      setActiveData([...activeData, ...nextSlice]);
      setHasMore(activeLength < data?.dates?.length);
    }
  };

  return (
    <PageMobileViewInner
      data={barData}
      dates={activeData || []}
      loadFunc={loadFunc}
      hasMore={hasMore}
    />
  );
};

export default PageMobileView;

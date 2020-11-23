import React, { useState, useEffect, useRef } from "react";

import PageCoverageTimelineInner from "./PageCoverageTimelineInner";
import { transformData } from "./transformer";

const PageCoverageTimeline = ({ width = 400, height = 200 }) => {
  const [coverageData, setCoverageData] = useState({});
  const [covidData, setCovidData] = useState({});
  const [transformedData, setTransformData] = useState({});
  const [activeDateIndex, setActiveDateIndex] = useState(0);
  const [isStop, setStop] = useState(false);
  const timeoutID = useRef(0);
  useEffect(() => {
    fetch("/json/daily-covid-report-by-country.json")
      .then((res) => res.json())
      .then((data) => {
        setCovidData(data);
      })
      .catch(() =>
        console.error("daily-covid-report-by-country data not found")
      );
    fetch("/json/daily-coverage-by-country.json")
      .then((res) => res.json())
      .then((data) => {
        setCoverageData(data);
      })
      .catch(() => console.error("daily-coverage-by-country data not found"));
  }, []);
  useEffect(() => {
    setTransformData(transformData(coverageData, covidData));
    setStop(false);
    play(activeDateIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverageData, covidData]);

  const onTimelineClick = (index) => {
    stop();
    setActiveDateIndex(index);
  };

  const { dates = [], data = {} } = transformedData;

  const play = (n) => {
    const { dates = [] } = transformedData;
    window.clearTimeout(timeoutID.current);
    timeoutID.current = window.setTimeout(() => {
      setActiveDateIndex(n++);
      if (n < dates.length) {
        play(n);
      } else {
        play(0);
      }
    }, 1000);
  };

  const stop = () => {
    if (timeoutID.current) {
      setStop(true);
      window.clearTimeout(timeoutID.current);
    }
  };

  return (
    <>
      <PageCoverageTimelineInner
        width={width}
        dates={dates}
        data={data}
        activeDateIndex={activeDateIndex}
        activeData={data[dates[activeDateIndex]]}
        onDateClick={onTimelineClick}
      />
      <button
        onClick={() => {
          if (isStop) {
            play(activeDateIndex);
            setStop(false);
          } else {
            stop();
          }
        }}
      >
        {isStop ? "Play" : "Stop"}
      </button>
    </>
  );
};

export default PageCoverageTimeline;

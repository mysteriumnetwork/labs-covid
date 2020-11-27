import React, { useState, useEffect } from "react";
import PageCoverageTimeline from "./Components/PageCovergeTimeline";
import PageMobileView from "./Components/PageMobileView";
import Tabs from "./Components/Tabs/Tabs";
import { transformData } from "./utils";

import "./App.css";
import LoadingBar from "./Components/LoadingBar/LoadingBar";

const DEFAULT_TAB = [
  { id: 0, name: "World coverage timeline" },
  { id: 1, name: "Top article sources" },
  { id: 2, name: "China comparison" },
];
const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [coverageData, setCoverageData] = useState({});
  const [covidData, setCovidData] = useState({});
  const [transformedData, setTransformData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coverageData, covidData]);
  return (
    <div className="App">
      {!isLoading && (
        <Tabs
          tabs={DEFAULT_TAB}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}
      {isLoading && <LoadingBar />}
      {!isLoading && window.innerWidth > 480 ? (
        <PageCoverageTimeline data={transformedData} />
      ) : (
        <PageMobileView data={transformedData} />
      )}
    </div>
  );
};

export default App;

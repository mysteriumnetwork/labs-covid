import React from "react";
import WorldMap from "../WorldMap";
import TimeLine from "../TimeLine";
import DetailCard from "../DetailCard/DetailCard";
import PlayButton from "../PlayButton/PlayButton";

import "./PageCoverageTimelineInner.css";
const PageCoverageTimelineInner = ({
  width = 400,
  height,
  activeDateIndex,
  dates = [],
  onDateClick,
  activeData,
  data,
  handleBtnClick,
  isStop,
  setActiveCountry,
  activeCountry,
}) => {
  const mapWidth = window.innerWidth - window.innerWidth / 5 - 100;
  const mapHeight = window.innerHeight - window.innerHeight / 6 - 50;
  return (
    <div className="pageRoot">
      <div className="mapContainer">
        <div className="detail">
          <div>
            <p className="dateText">{dates[activeDateIndex]}</p>
            <DetailCard
              data={activeData}
              title="News Coverage"
              type="coverage"
              setActiveCountry={setActiveCountry}
            />
          </div>
          <DetailCard
            data={activeData}
            title="Confirmed Cases"
            type="confirmed"
            setActiveCountry={setActiveCountry}
          />
        </div>
        <div className="map">
          <WorldMap
            width={mapWidth}
            height={mapHeight}
            data={activeData}
            activeCountry={activeCountry}
          />
        </div>
      </div>
      <div className="timelineContainer">
        <div style={{ flexGrow: 4, height: "100px" }}>
          <TimeLine
            dates={dates}
            activeDateIndex={activeDateIndex}
            onDateClick={onDateClick}
          />
        </div>
        <div className="buttonContainer">
          <PlayButton
            onClick={handleBtnClick}
            btnText={isStop ? "Play" : "Stop"}
          />
        </div>
      </div>
    </div>
  );
};

export default PageCoverageTimelineInner;

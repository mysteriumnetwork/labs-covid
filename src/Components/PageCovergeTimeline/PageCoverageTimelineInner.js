import React from "react";
import WorldMap from "../WorldMap";
import TimeLine from "../TimeLine";

const PageCoverageTimelineInner = ({
  width = 400,
  height,
  activeDateIndex,
  dates = [],
  onDateClick,
  activeData,
  data,
}) => {
  return (
    <div>
      <WorldMap width={800} height={600} data={activeData} />
      <div style={{ height: "100px" }}>
        <TimeLine
          dates={dates}
          activeDateIndex={activeDateIndex}
          onDateClick={onDateClick}
        />
      </div>
    </div>
  );
};

export default PageCoverageTimelineInner;

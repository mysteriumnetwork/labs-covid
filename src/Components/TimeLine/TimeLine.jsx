import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const TimeLine = ({ activeDateIndex = 0, dates, onDateClick }) => {
  return (
    dates.length && (
      <HorizontalTimeline
        index={activeDateIndex}
        indexClick={onDateClick}
        values={dates}
        minEventPadding={50}
        maxEventPadding={50}
        labelWidth={100}
        linePadding={100}
        styles={{
          background: "#f8f8f8",
          foreground: "#8b5cf6",
          outline: "#8b5cf6",
        }}
      />
    )
  );
};

export default TimeLine;

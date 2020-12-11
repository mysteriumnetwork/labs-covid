import React from "react";

import StopIcon from "./StopIcon";
import PlayIcon from "./PlayIcon";
import "./PlayButton.css";

const PlayButton = ({ btnText, onClick }) => (
  <button type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700"
          onClick={onClick}>
    <div className="mr-2">
      {btnText === "Stop" ? <StopIcon /> : <PlayIcon />}
    </div>
    {btnText}
  </button>
);
export default PlayButton;

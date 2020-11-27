import React from "react";

import StopIcon from "./StopIcon";
import PlayIcon from "./PlayIcon";
import "./PlayButton.css";

const PlayButton = ({ btnText, onClick }) => (
  <button type="button" class="buttonStyle" onClick={onClick}>
    {btnText === "Stop" ? <StopIcon /> : <PlayIcon />}
    {btnText}
  </button>
);
export default PlayButton;

import React from "react";

//import your icons here
import StopIcon from "./StopIcon";
import PlayIcon from "./PlayIcon";
import "./PlayButton.css";

const PlayButton = ({ btnText, onClick }) => {
  //this function will identify what icon to render

  return (
    <button type="button" class="buttonStyle" onClick={onClick}>
      {btnText === "Stop" ? <StopIcon /> : <PlayIcon />}
      {btnText}
    </button>
  );
};

export default PlayButton;

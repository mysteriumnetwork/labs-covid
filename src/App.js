import React from "react";
import PageCoverageTimeline from "./Components/PageCovergeTimeline";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PageCoverageTimeline
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}

export default App;

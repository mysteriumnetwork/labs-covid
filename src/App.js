import React from "react";
import WorldMap from "./Components/WorldMap/WorldMap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WorldMap width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
}

export default App;

import React from "react";

import "./Tabs.css";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="dataPreviewTabs">
      {tabs.map((tab, i) => {
        return (
          <div
            key={tab.name + i}
            className={`previewTab ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            <p>{tab.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

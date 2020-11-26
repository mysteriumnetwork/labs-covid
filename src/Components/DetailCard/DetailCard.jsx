import React from "react";
import "./DetailCard.css";

const getTopData = (data, type = "coverage") => {
  const chinaDetail = data["CN"] || {};
  const topCountries = Object.keys(data)
    .filter((code) => code !== "CN")
    .map((e) => data[e])
    .sort((a, b) => b[type] - a[type]);
  return { chinaDetail, topCountries };
};

const DetailCard = ({
  title = "News coverage",
  type = "coverage",
  setActiveCountry,
  data,
}) => {
  const { chinaDetail = {}, topCountries = [{}, {}, {}, {}, {}] } = data
    ? getTopData(data, type)
    : {};
  return (
    <div className="cardRoot">
      <div className="chinaDetail">
        <div>{title}</div>
        <div style={{ fontWeight: 600 }}>
          China: {chinaDetail[type] && chinaDetail[type]?.toLocaleString()}
        </div>
      </div>
      <div className="otherDetails">
        {topCountries.map((obj) => (
          <div
            onMouseEnter={() => setActiveCountry(obj.name)}
            onMouseLeave={() => setActiveCountry("")}
          >
            {obj.code} : {obj[type] && obj[type]?.toLocaleString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailCard;

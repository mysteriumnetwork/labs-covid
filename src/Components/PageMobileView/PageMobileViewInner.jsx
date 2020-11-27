import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import BarChart from "../BarChart/BarChart";
import LoadingBar from "../LoadingBar/LoadingBar";

import "./PageMobileViewInner.css";
const PageMobileViewInner = ({ data, dates = [], loadFunc, hasMore }) => {
  return dates.length && data[dates[0]] ? (
    <div className="pageRoot">
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {dates.map((date) => {
          const { chinaDetail, domain, max, other } = data[date];
          return (
            <div className="listItem">
              {date && (
                <div
                  style={{ width: window.innerWidth - 100 }}
                  className="dateText"
                >
                  {date}
                </div>
              )}
              <BarChart data={[chinaDetail]} domain={domain} max={max} />
              <div className="otherItem">
                <BarChart data={other} domain={domain} max={max} />
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  ) : (
    <LoadingBar />
  );
};

export default PageMobileViewInner;

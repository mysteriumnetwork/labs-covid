import React from 'react'
import WorldMap from '../WorldMap'
import TimeLine from '../TimeLine'
import DetailCard from '../DetailCard/DetailCard'
import PlayButton from '../PlayButton/PlayButton'

import './PageCoverageTimelineInner.css'

const PageCoverageTimelineInner = ({
                                     activeDateIndex,
                                     dates = [],
                                     onDateClick,
                                     activeData,
                                     data,
                                     handleBtnClick,
                                     isStop,
                                     setActiveCountry,
                                     activeCountry,
                                   }) => {
  const mapWidth = window.innerWidth - window.innerWidth / 5 - 100
  const mapHeight = window.innerHeight - window.innerHeight / 6 - 50

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="flex flex-shrink-0">
        <div className="flex flex-col w-96">
          <div className="flex flex-col h-0 flex-1 bg-gray-200">
            <DetailCard
              data={ activeData }
              title="News Coverage"
              type="coverage"
              setActiveCountry={ setActiveCountry }
            />
            <DetailCard
              data={ activeData }
              title="Confirmed Cases"
              type="confirmed"
              setActiveCountry={ setActiveCountry }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between">
                <h1 className="flex text-2xl font-semibold text-gray-900">
                  Covid timeline
                </h1>
                <h1 className="flex align-center p-2 rounded-md font-semibold bg-purple-500 text-white">
                  { dates[activeDateIndex] }
                </h1>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <WorldMap
                  width={ mapWidth }
                  height={ mapHeight }
                  data={ activeData }
                  activeCountry={ activeCountry }
                />
                <TimeLine
                  dates={ dates }
                  activeDateIndex={ activeDateIndex }
                  onDateClick={ onDateClick }
                />
              </div>
            </div>
          </div>
        </main>
        <div>
          <PlayButton
            onClick={ handleBtnClick }
            btnText={ isStop ? 'Play' : 'Stop' }
          />
        </div>
      </div>
    </div>
  )
}

export default PageCoverageTimelineInner

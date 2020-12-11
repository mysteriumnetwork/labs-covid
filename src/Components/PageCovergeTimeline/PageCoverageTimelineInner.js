import React from 'react'
import WorldMap from '../WorldMap'
import TimeLine from '../TimeLine'
import DetailCard from '../DetailCard/DetailCard'
import PlayButton from '../PlayButton/PlayButton'

import './PageCoverageTimelineInner.css'
import KeyEvent from '../KeyEvent/KeyEvent'

const PageCoverageTimelineInner = ({
                                     activeDateIndex,
                                     dates = [],
                                     onDateClick,
                                     activeData,
                                     handleBtnClick,
                                     isStop,
                                     setActiveCountry,
                                     activeCountry,
                                   }) => {
  const mapWidth = window.innerWidth - window.innerWidth / 5 - 100
  const mapHeight = window.innerHeight - window.innerHeight / 6 - 200

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
      <div className="flex flex-1 h-100">
        <div id="sidebar" className="flex flex-shrink-0">
          <div className="flex flex-col w-96">
            <div className="flex flex-col flex-1 bg-gray-200">
              <div className="p-2">
                <KeyEvent date={ dates[activeDateIndex] }/>
              </div>
              <DetailCard
                data={ activeData }
                title="News Coverage"
                type="a"
                setActiveCountry={ setActiveCountry }
              />
              <DetailCard
                data={ activeData }
                title="Confirmed Cases"
                type="c"
                setActiveCountry={ setActiveCountry }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 h-100">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex content-center">
                  <h1 className="flex p-1 text-2xl font-semibold text-gray-900">
                    Covid timeline
                  </h1>
                  <h1 className="flex align-center ml-4 p-2 rounded-md font-semibold bg-purple-500 text-white">
                    { dates[activeDateIndex] }
                  </h1>
                </div>
              </div>
              <div className="max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <WorldMap
                    width={ mapWidth }
                    height={ mapHeight }
                    data={ activeData }
                    activeCountry={ activeCountry }
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="flex h-32 px-4">
        <div className="w-full h-full p-4 mx-4">
          <TimeLine
            dates={ dates }
            activeDateIndex={ activeDateIndex }
            onDateClick={ onDateClick }
          />
        </div>
        <div className="flex px-4 items-center">
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

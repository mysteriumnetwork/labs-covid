import React, { useState, useEffect, useRef } from 'react'
import LoadingBar from '../LoadingBar/LoadingBar'

import PageCoverageTimelineInner from './PageCoverageTimelineInner'

const PageCoverageTimeline = ({ data: dailyData }) => {
  const [activeDateIndex, setActiveDateIndex] = useState(0)
  const [isStop, setStop] = useState(false)
  const [activeCountry, setActiveCountry] = useState('cn')
  const timeoutID = useRef(0)

  let dates = Object.keys(dailyData)

  useEffect(() => {
    setStop(false)
    dates = Object.keys(dailyData)
    play(activeDateIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dailyData])

  const onTimelineClick = (index) => {
    stop()
    setActiveDateIndex(index)
  }

  const play = (n) => {
    window.clearTimeout(timeoutID.current)
    timeoutID.current = window.setTimeout(() => {
      setActiveDateIndex(n++)
      if (n < dates.length) {
        play(n)
      } else {
        play(0)
      }
    }, 3000)
  }

  const stop = () => {
    if (timeoutID.current) {
      setStop(true)
      window.clearTimeout(timeoutID.current)
    }
  }

  const handleBtnClick = () => {
    if (isStop) {
      play(activeDateIndex)
      setStop(false)
    } else {
      stop()
    }
  }
  return dates.length ? (
    <PageCoverageTimelineInner
      dates={ dates }
      data={ dailyData }
      activeDateIndex={ activeDateIndex }
      activeData={ dailyData[dates[activeDateIndex]] }
      onDateClick={ onTimelineClick }
      handleBtnClick={ handleBtnClick }
      isStop={ isStop }
      setActiveCountry={ setActiveCountry }
      activeCountry={ activeCountry }
    />
  ) : (
    <LoadingBar/>
  )
}

export default PageCoverageTimeline

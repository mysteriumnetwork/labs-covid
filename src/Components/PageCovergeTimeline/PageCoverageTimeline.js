import React, { useState, useEffect, useRef } from 'react'
import LoadingBar from '../LoadingBar/LoadingBar'

import PageCoverageTimelineInner from './PageCoverageTimelineInner'

const PageCoverageTimeline = ({ data: transformedData }) => {
  const [activeDateIndex, setActiveDateIndex] = useState(0)
  const [isStop, setStop] = useState(false)
  const [activeCountry, setActiveCountry] = useState('cn')
  const timeoutID = useRef(0)

  useEffect(() => {
    console.log('useEffect')

    setStop(false)
    play(activeDateIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transformedData])

  const onTimelineClick = (index) => {
    stop()
    setActiveDateIndex(index)
  }

  const play = (n) => {
    const { dates = [] } = transformedData
    window.clearTimeout(timeoutID.current)
    timeoutID.current = window.setTimeout(() => {
      setActiveDateIndex(n++)
      if (n < dates.length) {
        play(n)
      } else {
        play(0)
      }
    }, 1000)
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
  const { dates = [], data = {} } = transformedData
  return dates.length ? (
    <PageCoverageTimelineInner
      dates={ dates }
      data={ data }
      activeDateIndex={ activeDateIndex }
      activeData={ data[dates[activeDateIndex]] }
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

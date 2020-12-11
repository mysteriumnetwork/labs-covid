import React, { useState, useEffect } from 'react'
import PageCoverageTimeline from './Components/PageCovergeTimeline'
import PageMobileView from './Components/PageMobileView'

import './App.css'
import LoadingBar from './Components/LoadingBar/LoadingBar'

const App = () => {
  const [covidData, setCovidData] = useState({})
  const [transformedData, setTransformData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/json/daily-report.json')
      .then((res) => res.json())
      .then((data) => {
        setCovidData(data)
      })
      .catch(() =>
        console.error('daily-covid-report-by-country data not found')
      )
  }, [])

  useEffect(() => {
    setTransformData(covidData)
    setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [covidData])

  if (isLoading) {
    return <LoadingBar/>
  }

  return (
    <div>
      <PageCoverageTimeline data={ transformedData }/>
    </div>
  )
}

export default App

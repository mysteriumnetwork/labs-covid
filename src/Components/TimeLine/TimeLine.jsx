import React from 'react'
import HorizontalTimeline from 'react-horizontal-timeline'
import dayjs from 'dayjs'

const datesToDays = (dates, currentIndex) => {
  const months = {}

  const current = dayjs(dates[currentIndex], 'YYYY-MM-DD')
  for (let i = 0; i < dates.length; i++) {
    const date = dayjs(dates[i], 'YYYY-MM-DD')
    const year = date.year()
    const month = date.month()

    if(!months[year+month]) {
      months[year+month] = {
        index: i,
        active: current.format('YYYY-MM') === date.format('YYYY-MM'),
        label: date.format('MMM')
      }
    }
  }

  return months
}

const TimeLine = ({ activeDateIndex = 0, dates, onDateClick }) => {
  const months = datesToDays(dates, activeDateIndex)

  return (
    <div className="relative flex flex-col w-full">
      <div className="flex h-24">
        { dates.length && (
          <HorizontalTimeline
            index={ activeDateIndex }
            indexClick={ onDateClick }
            values={ dates }
            isTouchEnabled={ true }
            minEventPadding={ 50 }
            maxEventPadding={ 50 }
            labelWidth={ 100 }
            linePadding={ 100 }
            styles={ {
              background: '#f8f8f8',
              foreground: '#8b5cf6',
              outline: '#8b5cf6',
            } }
          />
        ) }
      </div>
      <div className="absolute bottom-0 w-full">
        <ul className="flex justify-between mx-10">
          {Object.values(months).map((month) => {
            return (
              <li className="text-purple-500 cursor-pointer px-4 py-1" onClick={() => onDateClick(month.index)}>
                {month.active ? <strong>{month.label}</strong> : month.label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TimeLine

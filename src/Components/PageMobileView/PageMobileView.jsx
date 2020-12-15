import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import _ from 'lodash'
import { byCountry } from 'country-code-lookup'
import COUNTRY_CODES from '../../utils/countryCode'

const processData = (data, sortBy = 'articles') => {
  const months = {}
  const totals = {}

  for (let date in data) {
    const d = dayjs(date, 'YYYY-MM-DD')
    const monthId = d.format('YYYY-MM')

    if (!months[monthId]) {
      months[monthId] = {
        month: monthId,
        name: d.format('MMMM'),
        countries: {}
      }
    }

    // find max values in each country
    for (let country in data[date]) {
      const cid = monthId + '-' + country
      let countryName = country
      if(COUNTRY_CODES[country.toLowerCase()]) {
        countryName = COUNTRY_CODES[country.toLowerCase()].name
      }
      const report = {
        country: country,
        countryName: countryName,
        articles: data[date][country].a ?? 0,
        deaths: data[date][country].d ?? 0,
        confirmed: data[date][country].c ?? 0,
      }

      if (!totals[cid]) {
        totals[cid] = report
      } else {
        if (report.articles > totals[cid].articles) {
          totals[cid].articles = report.articles
        }
        if (report.deaths > totals[cid].deaths) {
          totals[cid].deaths = report.deaths
        }
        if (report.confirmed > totals[cid].confirmed) {
          totals[cid].confirmed = report.confirmed
        }
      }

      months[monthId].countries[country] = totals[cid]
    }
  }

  return Object.values(months).map((month) => {
    month.countries = _.orderBy(Object.values(month.countries), [sortBy], ['desc'])

    return month
  })
}

const renderCountryRow = ({ country, countryName, articles, confirmed, deaths }, highlight) => {
  const bgClass = highlight ? ' bg-red-500 text-white' : ' bg-white text-purple-500'
  const titleClass = !highlight ? ' text-gray-400' : ' text-white'

  return (
    <div key={country}>
    <div className="text-md">{ countryName }</div>
    <div
      className={ 'flex justify-between rounded-md border border-gray-200 p-2 mb-2'
      + bgClass
      }>
      <div>
        <div className={"text-sm" + titleClass}>News coverage</div>
        <div className="text-xl">{ (articles || 0).toLocaleString() }</div>
      </div>
      <div>
        <div className={"text-sm" + titleClass}>Confirmed cases</div>
        <div className="text-xl">{ (confirmed || 0).toLocaleString() }</div>
      </div>
      <div>
        <div className={"text-sm" + titleClass}>Deaths</div>
        <div className="text-xl">{ (deaths || 0).toLocaleString() }</div>
      </div>
    </div>
    </div>
  )
}

const PageMobileView = ({ data }) => {
  const [currentMonth, setCurrentMonth] = useState('2020-01')

  let dates = Object.keys(data)
  let processedData = processData(data)
  console.log(processedData)
  const list = dates.length && data[dates[0]] ? (
    <ul className="divide-y divide-gray-200">
      {
        processedData.map((month) => {
          // display only the current month
          if (month.month !== currentMonth) {
            return null
          }

          return (
            <li>
              <div className="flex flex-col px-4 py-4">
                <h2 className="p-1 text-xl text-center font-semibold text-gray-900">
                  { month.name }
                </h2>
                { renderCountryRow(_.find(month.countries, (a) => a.country === 'CN'), true) }
                {
                  month.countries.map((country) => {
                    return country.country === 'CN'
                      ? null
                      : renderCountryRow(country, false)
                  })
                }
              </div>
            </li>
          )
        })
      }
    </ul>
  ) : null

  return (
    <div className="h-screen flex flex-col overflow-y-auto bg-gray-100">
      <div className="fixed w-full bg-white pb-4">
        <h1 className="p-2 text-2xl font-semibold text-purple-800 text-center border-b border-gray-100 mb-2">
          COVID-19 news coverage timeline
        </h1>
        <div>
          <ul className="flex justify-between mx-2 overflow-x-auto">
            { processedData.map((month) => {
              return (
                <li className="text-purple-500 cursor-pointer px-2 py-1 rounded-sm border-purple-100"
                    onClick={ () => setCurrentMonth(month.month) }
                >
                  { month.month === currentMonth ? <strong>{ month.name }</strong> : month.name }
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
      <div className="mt-24">
        { list }
      </div>
    </div>
  )
}

export default PageMobileView

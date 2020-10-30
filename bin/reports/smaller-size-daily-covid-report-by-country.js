const { StringStream } = require('scramjet')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const lookup = require('country-code-lookup')
const dayjs = require('dayjs')
dayjs.extend(require('dayjs/plugin/customParseFormat'))

const confirmedCasesURL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
const deathsURL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'
const recoveredURL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv'

const report = {}
const missingCountryMap = {
  'Bahamas': 'The Bahamas',
  'Burma': 'Myanmar (Burma)',
  'Cabo Verde': 'Cape Verde',
  'Congo (Brazzaville)': 'Democratic Republic of the Congo',
  'Congo (Kinshasa)': 'Democratic Republic of the Congo',
  'Czechia': 'Czech Republic',
  'Gambia': 'The Gambia',
  'Holy See': 'Holy See (Vatican City)',
  // 'Diamond Princess': 'Canada',
  'Korea, South': 'South Korea',
  'Kosovo': 'Republic of Kosovo',
  'Taiwan*': 'Taiwan',
  'US': 'United States',
  'West Bank and Gaza': 'Palestinian Territory' // not sure if this is correct,
}

const formatDate = (date) => {
  return dayjs(date, 'M/DD/YY').format('YYYY-MM-DD')
}

const getCountryCode = (country) => {
  if (typeof missingCountryMap[country] !== 'undefined') {
    country = missingCountryMap[country]
  }

  let c = lookup.byCountry(country)
  if (!c) {
    console.log('Missing country mapping', country)
    return null
  }

  return c.iso2 || null
}
const fetchFile = (url, type = '') => {
  return (async () => {
    const response = await fetch(url)

    if (response.ok) {
      return StringStream.from(response.body).CSVParse({
          delimiter: ',',
          header: true,
          skipEmptyLines: true,
          worker: true,
          step: function (results) {
            const row = results.data

            delete row.Lat
            delete row.Long
            delete row['Province/State']

            const country = getCountryCode(row['Country/Region'])
            if (country === null) {
              return
            }

            delete row['Country/Region']

            for (let date in row) {
              const newDate = formatDate(date)
              if (typeof report[newDate] === 'undefined') {
                report[newDate] = {}
              }
              if (typeof report[newDate][country] === 'undefined') {
                report[newDate][country] = {}
              }
              if (typeof report[newDate][country][type] === 'undefined') {
                report[newDate][country][type] = 0
              }

              report[newDate][country][type] += parseInt(row[date], 10)
            }
          }
        })
        .batch(5000)
        .catch((e) => console.log(e))
        .run()
    }

    throw new Error(`unexpected response ${ response.statusText }`)
  })()
}

Promise.all([
  fetchFile(confirmedCasesURL, 'confirmed'),
  fetchFile(deathsURL, 'deaths'),
  fetchFile(recoveredURL, 'recovered'),
]).then(() => {
  fs.writeFileSync(path.join(__dirname, '../../data/generated/daily-covid-report-by-country.json'), JSON.stringify(report, null, 2))
})

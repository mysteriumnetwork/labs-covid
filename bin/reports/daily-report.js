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
  let d = dayjs(date, 'M/DD/YY')
  if(!d.isValid()) {
    d = dayjs(date, 'M/D/YY')
  }

  return d.format('YYYY-MM-DD')
}

const getCountryCode = (country) => {
  if (typeof missingCountryMap[country] !== 'undefined') {
    country = missingCountryMap[country]
  }

  let c = lookup.byCountry(country)
  if (!c) {
    // console.log('Missing country mapping', country)
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
              if (typeof report[newDate][country][type[0]] === 'undefined') {
                report[newDate][country][type[0]] = 0
              }

              report[newDate][country][type[0]] += parseInt(row[date], 10)
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

const rawReport = []
fs.readFileSync(path.join(__dirname, '../../data/raw/covid-article-summary.json'))
  .toString()
  .split('\n')
  .forEach((line) => {
    if (!line) {
      return
    }

    const obj = JSON.parse(line)
    if(obj.count === 0) {
      return
    }
    rawReport.push({
      date: obj.date,
      country: obj.contextCountry, // reported about
      sourceCountry: obj.sourceCountry, // reported by
      count: obj.count
    })
  })


const articleReport = () => {
  rawReport.forEach((r) => {
    if (typeof report[r.date] === 'undefined') {
      report[r.date] = {}
    }

    const countryCode = r.sourceCountry || 'unknown'

    if (typeof report[r.date][countryCode] === 'undefined') {
      report[r.date][countryCode] = {a: parseInt(r.count, 10)}
    } else {
      report[r.date][countryCode].a += parseInt(r.count, 10)
    }
  })
}

Promise.all([
  fetchFile(confirmedCasesURL, 'confirmed'),
  fetchFile(deathsURL, 'deaths'),
  fetchFile(recoveredURL, 'recovered'),
  articleReport()
]).then(() => {
  for(let date in report) {
    for(let country in report[date]) {
      const item = report[date][country]
      const sum = item.c + item.d + item.r
      if(sum === 0) {
        delete report[date][country]
      }
    }
  }
  fs.writeFileSync(path.join(__dirname, '../../public/json/daily-report.json'), JSON.stringify(report))
})

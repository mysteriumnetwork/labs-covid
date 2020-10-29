const fs = require('fs')
const path = require('path')

const rawReport = []
fs.readFileSync(path.join(__dirname, '../../data/raw/covid-article-summary.json'))
  .toString()
  .split('\n')
  .forEach((line) => {
    if (!line) {
      return
    }

    const obj = JSON.parse(line)
    rawReport.push({
      date: obj.date,
      country: obj.contextCountry, // reported about
      sourceCountry: obj.sourceCountry, // reported by
      count: obj.count
    })
  })

const report = {}
rawReport.forEach((r) => {
  if (typeof report[r.date] === 'undefined') {
    report[r.date] = {}
  }

  const countryCode = r.sourceCountry || 'unknown'

  if (typeof report[r.date][countryCode] === 'undefined') {
    report[r.date][countryCode] = parseInt(r.count, 10)
  } else {
    report[r.date][countryCode] += parseInt(r.count, 10)
  }
})

fs.writeFileSync(path.join(__dirname, '../../data/generated/daily-coverage-by-country.json'), JSON.stringify(report, null, 2))

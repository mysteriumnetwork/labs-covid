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
  const countryCode = r.sourceCountry || 'unknown'

  if (typeof report[countryCode] === 'undefined') {
    report[countryCode] = parseInt(r.count, 10)
  } else {
    report[countryCode] += parseInt(r.count, 10)
  }
})

fs.writeFileSync(path.join(__dirname, '../../public/json/total-coverage-by-country.json'), JSON.stringify(report, null, 2))

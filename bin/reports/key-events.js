const { StringStream } = require('scramjet')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const lookup = require('country-code-lookup')
const dayjs = require('dayjs')
dayjs.extend(require('dayjs/plugin/customParseFormat'))

const formatDate = (date) => {
  return dayjs(date, 'M/DD/YY').format('YYYY-MM-DD')
}

let str = ''

str = fs.readFileSync(path.join(__dirname, '../../data/raw/key-events.csv'))
  .toString()

str = str.replace(/\"\n/, '')

str = str.split('\n')
  .map((line) => {
    if (line.includes(',,')) {
      return ''
    }

    return line
  }).join('\n')

const events = {}
const fetchFile = (str) => {
  return StringStream.fromString(str).CSVParse({
      delimiter: ',',
      header: false,
      skipEmptyLines: true,
      worker: true,
      step: function (results) {
        const row = results.data

        const date = formatDate(row[0].replace('\n', ''))
        const title = row[1]
        const url = row[2]

        const event = {
          title,
        }

        if (date === 'Invalid Date') {
          return
        }

        if (!title) {
          return
        }

        if (url.length !== 0) {
          if(url.includes('http')) {
            event.url = url
          }
        }

        events[date] = event
      }
    })
    .batch(5000)
    .catch((e) => console.log(e))
    .run()
}

fetchFile(str).then(() => {
  fs.writeFileSync(path.join(__dirname, '../../src/data/key-events.js'), 'module.exports = ' + JSON.stringify(events, null, 2))
})

// Promise.all([
//   fetchFile(),
// ]).then(() => {
// })

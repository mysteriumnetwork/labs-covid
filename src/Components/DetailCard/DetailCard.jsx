import React from 'react'
import './DetailCard.css'
import COUNTRY_CODES from '../../utils/countryCode'

const pinnedCountryCode = 'CN'
const pinnedCountryName = COUNTRY_CODES[pinnedCountryCode.toLowerCase()].name

const getPinnedCountryMetric = (data, type = 'c') => {
  if (typeof data[pinnedCountryCode] !== 'undefined' && typeof data[pinnedCountryCode][type] !== 'undefined') {
    return data[pinnedCountryCode][type]
  }
  return 0
}

const getTopCountries = (data, type = 'c') => {
  const topCountries = Object.keys(data)
    .filter((countryCode) => {
      if(!COUNTRY_CODES[countryCode.toLowerCase()]) {
        console.log('missing country code record', countryCode)
      }
      return !(countryCode === pinnedCountryCode || !data[countryCode] || !data[countryCode][type]) && COUNTRY_CODES[countryCode.toLowerCase()]
    })
    .map((countryCode) => {
      return {
        code: countryCode,
        name: COUNTRY_CODES[countryCode.toLowerCase()].name,
        value: data[countryCode][type] ?? 0
      }
    })
    .sort((a, b) => b.value - a.value)
  return topCountries
}

const DetailCard = ({
                      title = 'News coverage',
                      type = 'c',
                      setActiveCountry,
                      data,
                    }) => {

  const topCountries = getTopCountries(data, type)
  const pinnedCountryMetric = getPinnedCountryMetric(data, type)

  return (
    <div className="divide-y divide-gray-200">
      <div className="p-4">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">
          { title }
        </h3>
        <h3 className="text-lg rounded-md p-2 bg-purple-500 text-white leading-6 font-medium">
          { pinnedCountryName }: { pinnedCountryMetric }
        </h3>
        <div className="rounded-md mt-2 h-40 overflow-y-auto">
          { topCountries.map((country) => (
            <h3 key={ country.code } className="rounded-md p-2 mb-2 bg-white leading-6 font-medium text-gray-900"
                onMouseEnter={ () => setActiveCountry(country.name) }
                onMouseLeave={ () => setActiveCountry('') }>
              { country.name }: { country.value || 0 }
            </h3>
          )) }
        </div>
      </div>
    </div>
  )
}

export default DetailCard

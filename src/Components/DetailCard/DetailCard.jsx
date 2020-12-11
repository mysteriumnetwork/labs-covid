import React from 'react'
import './DetailCard.css'

const getTopData = (data, type = 'coverage') => {
  const chinaDetail = data['CN'] || {}
  const topCountries = Object.keys(data)
    .filter((code) => code !== 'CN')
    .map((e) => data[e])
    .sort((a, b) => b[type] - a[type])
  return { chinaDetail, topCountries }
}

const DetailCard = ({
                      title = 'News coverage',
                      type = 'coverage',
                      setActiveCountry,
                      data,
                    }) => {
  const { chinaDetail = {}, topCountries = [{}, {}, {}, {}, {}] } = data
    ? getTopData(data, type)
    : {}
  return (
    <div className="divide-y divide-gray-200">
      <div className="p-4">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-3">
          { title }
        </h3>
        <h3 className="text-lg rounded-md p-2 bg-purple-500 text-white leading-6 font-medium">
          China: { chinaDetail[type] && chinaDetail[type]?.toLocaleString() }
        </h3>
        <div className="rounded-md mt-2 h-40 overflow-y-auto">
          { topCountries.map((obj) => (
            <h3 key={obj.code} className="rounded-md p-2 mb-2 bg-white leading-6 font-medium text-gray-900"
                onMouseEnter={ () => setActiveCountry(obj.name) }
                onMouseLeave={ () => setActiveCountry('') }>
              { obj.name }: { obj[type] && obj[type]?.toLocaleString() }
            </h3>
          )) }
        </div>
      </div>
    </div>
  )
}

export default DetailCard

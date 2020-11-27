import compare_asc from "date-fns/compare_asc";

import COUNTRY_CODES from "./countryCode";

export const transformData = (coverageData, covidData) => {
  const covidDates = Object.keys(covidData);
  const countrycodes = Object.keys(COUNTRY_CODES);
  const dateObject = covidDates
    .filter((d) => d !== "Invalid Date")
    .sort((a, b) => compare_asc(a, b));
  const data = dateObject.reduce((final, date, index) => {
    const preDate = index > 0 ? dateObject[index - 1] : "";
    const covidDatum = covidData[date] || {};
    const coverageDatum = coverageData[date] || {};
    const preDatum = final[preDate] || {};
    const details = countrycodes.reduce((result, code) => {
      const { deaths = 0, recovered = 0, confirmed = 0 } =
        covidDatum[code.toUpperCase()] || {};
      const coverage = coverageDatum[code.toUpperCase()] || 0;
      const {
        deaths: pDeaths = 0,
        recovered: pRecovered = 0,
        confirmed: pConfirmed = 0,
        confirmed: pCoverage = 0,
      } = preDatum[[code.toUpperCase()]] || {};

      return {
        ...result,
        [code.toUpperCase()]: {
          deaths: deaths || pDeaths,
          recovered: recovered || pRecovered,
          confirmed: confirmed || pConfirmed,
          coverage: coverage || pCoverage,
          code: code.toUpperCase(),
          ...COUNTRY_CODES[code],
        },
      };
    }, {});
    return { ...final, [date]: { ...details } };
  }, {});
  return { dates: dateObject, data };
};

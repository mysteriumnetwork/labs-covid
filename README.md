# Mysterium Network labs project: Covid-19 report

A small [CRA](https://reactjs.org/docs/create-a-new-react-app.html) app to build a Covid-19 map.

## Data generation

### Data locations

Pre-processed data is stored in `data/raw` directory.

Post-processed data is stored in `public/json` directory.

### Processing scripts

If the raw data changes, update it using:
```shell
node bin/reports/all.js
```

## Running the project
To start the development server run:

```shell
yarn start
```

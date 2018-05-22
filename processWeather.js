const _ = require('lodash')
const moment = require('moment')
const api = require('./api')
const table = require('./table')
const symbols = require('./symbols')
const ora = require('ora')

module.exports = (location) => {
  const spinner = ora('Loading weather').start()

  api.findLocation(location)
    .then(res => {
      if (_.isEmpty(res)) {
        throw new Error('API_ERROR: Unidentified Location, Please try some other location')
      }
      if (!res[0]) {
        throw new Error('API_ERROR: No identifier part returned by API')
      }

      return api.getLocations(res[0].woeid)
    }).then(data => {
      spinner.stop()

      if (!data.consolidated_weather) {
        throw new Error('API_ERROR: Consilidated Weather could not be found')
      }
      if (!(data.consolidated_weather instanceof Array)) {
        throw new Error('API_ERROR: Consilidated Weather is not an array')
      }

      // Build array for feeding to Table
      let info = data.consolidated_weather.map(day => {
        return [
          moment(day.applicable_date).format('DD/MM/YYYY'),
          _.round(day.the_temp, 1),
          day.weather_state_name
        ]
      })

      // Remove today's info from array
      info.shift()
      const tblOutput = table(info)

      // Display Today's info
      let todayData = data.consolidated_weather[0]

      console.log(tblOutput)
      console.log('----------------------------------------')
      console.log(`    Today's Weather for ${location}`)
      console.log('----------------------------------------')
      console.log(symbols('lc'))
      console.log('Weather overview: ', todayData.weather_state_name)
      console.log('Min Temp: ', _.round(todayData.min_temp, 0))
      console.log('Max Temp: ', _.round(todayData.max_temp, 0))
      console.log('Wind Speed: ', _.round(todayData.wind_speed, 2) + 'Km/h')
      console.log('Humidity: ', _.round(todayData.humidity, 0) + '%')
    }).catch(e => {
      spinner.stop()
      if (e instanceof Error) {
        console.error(e.message)
      } else {
        console.error(e)
      }
    })
}

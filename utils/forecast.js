const { key } = require('../key')
const request = require('request')

const forecast = (lat, long, callback) => {

  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${lat},${long}`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connection to weather server', undefined)
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      const { temperature, feelslike, weather_descriptions } = response.body.current
      callback(undefined, `Weather description: ${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
    }

  })

}

module.exports = forecast
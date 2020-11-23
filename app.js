const request = require('request')
const { key, gelocation } = require('./key')

const url = `http://api.weatherstack.com/current?access_key=${key}&query=lublin`

request({ url: url, json: true }, (error, response) => {

  if (error) {
    console.log('Unable to connection to weather server')
  } else if (response.body.error) {
    console.log('Unable to find location')
  } else {
    const { temperature, feelslike, weather_descriptions } = response.body.current

    console.log(`It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
    console.log(`${weather_descriptions[0]}`)
  }

})

const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/lublin.json?access_token=${gelocation}`

request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connection to geolocation server')
  } else if (response.body.message) {
    console.log('Unable to find location')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location')
  } else {
    const { center } = response.body.features[0]
    const lat = center[1]
    const long = center[0]
    console.log(`The latitude and logtitude is ${lat}, ${long}`)
  }
})
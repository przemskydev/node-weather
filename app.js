const request = require('request')
const { key, gelocation } = require('./key')

// const url = `http://api.weatherstack.com/current?access_key=${key}&query=lublin`

// request({ url: url, json: true }, (error, response) => {

//   if (error) {
//     console.log('Unable to connection to weather server')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     const { temperature, feelslike, weather_descriptions } = response.body.current

//     console.log(`It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
//     console.log(`${weather_descriptions[0]}`)
//   }

// })

// const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/lublin.json?access_token=${gelocation}`

// request({ url: geoUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connection to geolocation server')
//   } else if (response.body.message) {
//     console.log('Unable to find location')
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location')
//   } else {
//     const { center } = response.body.features[0]
//     console.log(`The latitude and logtitude is ${center[1]}, ${center[0]}`)
//   }
// })

const geocode = (address, callback) => {
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${gelocation}`

  request({ url: geoUrl, json: true }, (error, response) => {

    if (error) {
      callback('Unable to connection to geolocation server', undefined)
    } else if (response.body.message) {
      callback('Unable to find location', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to find location', undefined)
    } else {
      const { center, place_name } = response.body.features[0]
      callback(undefined, {
        latitude: center[1],
        longtitude: center[0],
        location: place_name
      })
    }

  })

}

geocode('Lublin', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
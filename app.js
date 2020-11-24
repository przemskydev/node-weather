const request = require('request')
const { key } = require('./key')
const geocode = require('./utils/geocode')

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

geocode('Lublin', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
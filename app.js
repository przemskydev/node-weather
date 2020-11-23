const request = require('request')
const key = require('./key')

const url = `http://api.weatherstack.com/current?access_key=${key}&query=lublin`

request({ url: url, json: true }, (error, response) => {
  const { temperature, feelslike } = response.body.current

  console.log(`It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
})
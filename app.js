const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2].toString()

if (!location) {
  console.log('Please provide location')
} else {
  geocode(location, (error, { latitude, longtitude, location }) => {

    if (error) return console.log(error)

    forecast(latitude, longtitude, (error, forecastData) => {

      if (error) return console.log(error)

      console.log(location)
      console.log(forecastData)

    })

  })

}


const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {

  console.log('Please provide location')

} else {

  /**
   * 
   * "TypeError: Cannot destructure property 'latitude' of 'undefined' as it is undefined."
   * if location error exist, destructuring second argument which is undefined generate error,
   * adding empty obj as default second parameter fix error
   * 
   **/
  
  geocode(location, (error, { latitude, longtitude, location } = {}) => {

    if (error) return console.log(error)

    forecast(latitude, longtitude, (error, forecastData) => {

      if (error) return console.log(error)

      console.log(location)
      console.log(forecastData)

    })

  })

}
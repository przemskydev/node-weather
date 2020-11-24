const request = require('request')
const { gelocation } = require('../key')

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


module.exports = geocode
const request = require('request')
const { gelocation } = require('../key')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${gelocation}`

  request({ url, json: true }, (error, { body }) => {

    if (error) {
      callback('Unable to connection to geolocation server', undefined)
    } else if (body.message) {
      callback('Unable to find location', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location', undefined)
    } else {
      const { center, place_name } = body.features[0]
      callback(undefined, {
        latitude: center[1],
        longtitude: center[0],
        location: place_name
      })
    }

  })

}


module.exports = geocode
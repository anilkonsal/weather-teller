const API_BASE = 'http://www.metaweather.com/api/'
const REQUEST = require('request')

module.exports = {
  getLocations (wid) {
    
    return new Promise((resolve, reject) => {
      REQUEST(`${API_BASE}location/${wid}`, (err, response, body) => {
        if (err) return reject(err)

        return resolve(JSON.parse(body))
      })
    })
  },

  findLocation (location) {
    return new Promise((resolve, reject) => {
      REQUEST(`${API_BASE}location/search/?query=${location}`, (err, response, body) => {
        if (err) return reject(err)

        return resolve(JSON.parse(body))
      })
    })
  }
}

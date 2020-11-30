const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=b72794fd75108b0f755ac78a8f8f73d6&query=" + latitude + "," + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect!", undefined)
        } else if (body.error) {
            callback("Unable to find location!", undefined)
        } else {
            const data = {
                description: body.current.weather_descriptions[0],
                current: body.current.temperature,
                feelsLike: body.current.feelslike,
                humidity: body.current.humidity
            }
            callback(undefined, data.description + '! It is currently ' + data.current + ' degrees out. It feels like ' + data.feelsLike + ' degrees out. The humidity is ' + data.humidity + ' percent.')
        }
    })
}

module.exports = forecast
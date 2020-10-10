import * as R from 'ramda';

const baseUrl = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export function fetchCity(search, callback) {
    getFromUrl(`${baseUrl}search/?keyword=${search}&token=${API_KEY}`, callback)
}

export function fetchAirQuality(city, callback) {
    getFromUrl(`${baseUrl}feed/@${city}/?token=${API_KEY}`, callback)
}

export function getFromUrl(url, callback) {
    try {
        fetch(url)
            .then(R.invoker(0, 'json'))
            .then(R.prop('data'))
            .then(callback)
    } catch (error) {
        console.error(error)
    }
}
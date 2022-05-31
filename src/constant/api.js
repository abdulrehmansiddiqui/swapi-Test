import axios from 'axios';

const BASE_URL = "https://swapi.dev/api/"

export default {
    get(url) {
        return axios.get(`${BASE_URL}${url}`)
            .then(response => {
                return response
            })
            .catch(e => {
                console.log(e, 'error')
                return e.response.data
            })
    },
    post(url) {
        return axios.get(`${BASE_URL}${url}`)
            .then(response => {
                return response
            })
            .catch(e => {
                console.log(e, 'error')
                return e.response.data
            })
    },

}
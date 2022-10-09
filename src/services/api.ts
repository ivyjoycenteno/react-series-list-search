import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.tvmaze.com',
    headers: {
        'Content-type': 'application/json'
    },
    timeout: 30000,
})

export default instance
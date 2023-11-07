import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8087',
})

export default instance
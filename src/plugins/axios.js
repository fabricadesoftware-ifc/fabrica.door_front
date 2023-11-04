import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://',
    headers: { 
        Authorization: 'Bearer ' 
    }
})

export default instance
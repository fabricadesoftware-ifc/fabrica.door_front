import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://d331-138-118-28-255.ngrok-free.app/',
})

export default instance
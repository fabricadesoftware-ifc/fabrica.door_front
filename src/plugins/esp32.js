import axios from 'axios'

const instance = axios.create({
  baseURL: 'http:/esp32:3000'
})

export default instance

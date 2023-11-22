import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://191.52.57.199/'
})

export default instance

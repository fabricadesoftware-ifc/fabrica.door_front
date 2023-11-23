import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://porta.app1.fabricadesoftware.ifc.edu.br/'
})

export default instance

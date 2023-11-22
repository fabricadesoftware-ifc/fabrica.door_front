import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://porta.app1.fabricadesoftware.ifc.edu.br/'
})

export default instance

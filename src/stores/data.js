import api from '../plugins/axios.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { io } from 'socket.io-client'

export const useDataStore = defineStore('data', () => {
  const data = ref({
    users: [],
    tags: [],
    notUsed: [],
    notOwner: [],
    lastUsed: ''
  })

  const socket = io('https://porta.app1.fabricadesoftware.ifc.edu.br/', {
    reconnectionDelayMax: 10000
  })

  socket.on('connect', () => {
    console.log('connected')
  })

  socket.on('updateFront', (e) => {
    if (e) {
      fetchData()
    }
  })

  const fetchData = async () => {
    const response = await api.get('users')
    data.value.users = []
    data.value.users = response.data

    const tags = await api.get('rfid')
    data.value.tags = []
    data.value.tags = tags.data

    const last = await api.get('last')
    data.value.lastUsed = ''
    data.value.lastUsed = last.data

    data.value.tags.forEach((tag) => {
      if (tag.valid == false) {
        data.value.notUsed.push(tag)
      }
    })

    data.value.users.forEach((user) => {
      if (user.rfid == null) {
        data.value.notOwner.push(user)
      }
    })
  }

  return {
    data,
    fetchData
  }
})

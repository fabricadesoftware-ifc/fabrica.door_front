import api from '../plugins/axios.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStore = defineStore('data', () => {
  const data = ref({
    users: [],
    tags: [],
    notUsed: [],
    notOwner: [],
    lastUsed: ''
  })

  const fetchData = async () => {
    const response = await api.get('users')
    data.value.users = response.data

    const tags = await api.get('rfid')
    data.value.tags = tags.data

    const last = await api.get('last')
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

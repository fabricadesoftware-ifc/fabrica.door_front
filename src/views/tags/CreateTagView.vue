<script setup>
import { ref } from 'vue'
import { useDataStore } from '../../stores/data'
import instance from '../../plugins/axios'
import sidebar from '../../components/SideBar.vue'

const rfid = ref()
const userId = ref()
const sucess = ref(false)
const error = ref(false)
const Data = useDataStore()

async function returnToFalse() {
  sucess.value = false
  error.value = false
}

async function fillUp(rfidTag) {
  rfid.value = rfidTag.rfid
}

async function fillUpUser(user) {
  userId.value = user.id
}

async function doSignup() {
  if (!rfid.value || !userId.value) {
    error.value = true
    setTimeout(returnToFalse, 3000)
    return
  }

  try {
    const response = await instance.post('assign', {
      rfid: rfid.value,
      userId: userId.value
    })
    console.log(response)
    sucess.value = true
  } catch (error) {
    console.log(error)
    error.value = true
  }
}
</script>
<template>
  <div class="flex">
    <sidebar />
    <div class="container mx-auto mt-12">
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Usuários</div>
          <div
            class="mt-1 text-xl font-semibold text-gray-900"
            v-for="person in Data.data.notOwner"
            v-bind:key="person.uid"
            @click="fillUpUser(person)"
          >
            {{ person.name }}
          </div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Criar Tag</div>
          <div v-if="error">
            <h1 class="text-red-700 text-sm font-bold text-center">
              Ocorreu um erro ao registrar sua tag.
            </h1>
          </div>
          <div class="mt-1 text-xltext-gray-900">
            <form>
              <input
                type="text"
                placeholder="Id da tag"
                class="bg-transparent p-2 border rounded-2xl border-gray-600 outline-none w-full"
                v-model="rfid"
              />

              <input
                type="text"
                placeholder="Id do usuário"
                class="bg-transparent p-2 mt-3 border rounded-2xl border-gray-600 outline-none w-full"
                v-model="userId"
              />
            </form>
            <div class="flex w-full justify-end mt-4">
              <button
                class="border border-emerald-600 bg-emerald-500 rounded-2xl p-2 text-slate-100"
                @click="doSignup"
              >
                Cadastrar tag
              </button>
            </div>
          </div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Tags para liberar</div>

          <div v-for="(rfidTag, index) in Data.data.notUsed" v-bind:key="index">
            <div
              class="mt-1 text-3xl font-semibold text-gray-900"
              @click="fillUp(Data.data.notUsed[index])"
            >
              {{ rfidTag.rfid }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

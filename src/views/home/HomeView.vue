<script setup>
import sidebar from '../../components/SideBar.vue'
import { useDataStore } from '../../stores/data'
import { onMounted } from 'vue'

const Data = useDataStore()

onMounted(async () => {
  if (!Data.data.tags.length) {
    await Data.fetchData()
  }
})
</script>

<template>
  <div class="flex">
    <sidebar />
    <div class="container mx-auto mt-12">
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Tags e usuários</div>
          <div
            class="mt-1 text-3xl font-semibold text-gray-900"
            v-for="(item, index) in Data.data.tags"
            v-bind:key="index"
          >
            {{ item.rfid }}
          </div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Última pessoa a utilizar</div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">João Felipi</div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Utilizações hoje</div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">{{ Data.data.tags.length }}</div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Acessos não validados</div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">
            {{ Data.data.notUsed.length }}
          </div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Aguardando aprovação</div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">
            {{ Data.data.notUsed.length }}
          </div>
        </div>
        <div class="w-full px-4 py-5 bg-white rounded-lg shadow">
          <div class="text-sm font-medium text-gray-500 truncate">Última tag</div>
          <div class="mt-1 text-3xl font-semibold text-gray-900">{{ Data.data.lastUsed }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import esp32 from '../plugins/esp32';

async function openDoor() {
  try {
    const response = await esp32.post('/');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <div class="m-auto w-1/2 flex flex-col bg-white h-screen justify-center items-center gap-6">
    <div>
      <img src="/logo-tela-branca.png" alt="Logo fábrica de software">
    </div>
    <div class="flex flex-col gap-5">
      <RouterLink :to="{ name: 'dashboard'}">
      <div class="relative flex items-center">
        <button class="bg-orange-500 hover:bg-orange-600 p-4 rounded-2xl text-xl text-white font-black mt-4 w-full">
          Dashboard
        </button>
      </div>
    </RouterLink>

      <RouterLink :to="{ name: 'signup' }">
        <div class="relative flex items-center">
          <button class="bg-green-600 hover:bg-green-700 p-4 rounded-2xl text-xl text-white font-black mt-4">
            Registre uma nova TAG
          </button>
        </div>
      </RouterLink>

      <div class="relative flex items-center">
        <button class="bg-red-600 hover:bg-red-700 p-4 rounded-2xl text-xl text-white font-black mt-4 w-full" @click="openDoor()">
          Open the Door!!!!!
        </button>
      </div>
    </div>
  </div>
</template>

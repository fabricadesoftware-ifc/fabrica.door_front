<script setup>


</script>
<template>
  <div class="m-auto w-1/2 flex flex-col bg-white h-screen justify-center items-center gap-6">
    <div class="flex flex-col gap-5">
      <RouterLink :to="{ name: 'dashboard'}">
      <div class="relative flex items-center">
        <button class="bg-orange-600 p-4 rounded-2xl text-xl text-white font-black mt-4 w-full">
          Dashboard
        </button>
      </div>
    </RouterLink>

      <RouterLink :to="{ name: 'signup' }">
        <div class="relative flex items-center">
          <button class="bg-cyan-700 p-4 rounded-2xl text-xl text-white font-black mt-4">
            Registre uma nova TAG
          </button>
        </div>
      </RouterLink>

      <div class="relative flex items-center">
        <button class="bg-red-700 p-4 rounded-2xl text-xl text-white font-black mt-4 w-full">
          Open the Door!!!!!
        </button>
      </div>
    </div>
  </div>
</template>

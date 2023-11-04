<script setup>
import { ref } from 'vue';



const showPassword = ref(false)
</script>
<template>
  <div class="m-auto w-1/2 flex flex-col bg-white h-screen justify-center items-center gap-6">
    <div>
      <img src="/logo-tela-branca.png" alt="Logo fábrica de software">
    </div>
    <div class="flex flex-col h-1/2 text-start w-2/3 gap-3">
      <h1 class="text-3xl font-bold text-center">Login</h1>
      <div class="flex flex-col gap-5">
        <div class="relative flex items-center">
          <i class="fa-solid fa-user absolute pl-4 text-2xl"></i>
          <input type="text" placeholder="Dono-TAG" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12">
        </div>
        <div class="relative flex items-center ">
          <i class="fa-solid fa-lock  absolute pl-4 text-2xl"></i>
          <div class="w-full relative flex items-center">
            <input type="text" placeholder="Id-TAG" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12">
          </div>
        </div>
        <div class="relative flex items-center ">
          <i class="fa-solid fa-lock  absolute pl-4 text-2xl"></i>
          <div class="w-full relative flex items-center">
            <input :type="showPassword ? 'text' : 'password'" placeholder="Senha-ADMIN" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12">
            <i class="fa-solid fa-eye absolute text-2xl justify-self-end right-0 mr-4 cursor-pointer" @click="showPassword = !showPassword"></i>
          </div>
        </div>
      </div>

      <div class="flex flex-col h-1/2 text-center w-3/3 gap-3">
      <RouterLink :to=" {name: 'main'}">
      <button class="bg-cyan-700 p-4 rounded-2xl text-xl text-white font-black">Login</button>
    </RouterLink>
    </div>
    </div>
  </div>
  
</template>
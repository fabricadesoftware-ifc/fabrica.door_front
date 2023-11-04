<script setup>


</script>
<template>
  <div class="m-auto w-1/2 flex flex-col bg-white h-screen items-center gap-6">
    <div class="mt-16">
      <img src="/logo-tela-branca.png" alt="Logo fábrica de software">
    </div>
    <div class="flex flex-col h-1/2 text-start w-2/3 gap-3">
      <h1 class="text-3xl font-bold text-center">Registre uma TAG</h1>
      <div class="flex flex-col gap-6">
        <div class="relative flex items-center">
          <i class="fa-solid fa-envelope absolute pl-4 text-2xl"></i>
          <input type="email" placeholder="Email" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12">
        </div>
        <div class="relative flex items-center ">
          <i class="fa-solid fa-lock  absolute pl-4 text-2xl"></i>  
          <input type="text" placeholder="Id-TAG" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12">
        </div>
        <div class="relative flex items-center ">
          <i class="fa-solid fa-user absolute pl-4 text-2xl"></i>
          <div class="w-full relative flex items-center">
            <input type="text" placeholder="Dono-TAG" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12" v-model="password">
          </div>
        </div>
      </div>
      <button class="bg-green-600 hover:bg-green-700 p-4 rounded-2xl text-xl text-white font-black mt-4" @click="doSignup()">Registre a TAG </button>
    </div>
  </div>
  
</template>
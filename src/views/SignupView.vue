<script setup>
import { ref } from 'vue';
import instance from '../plugins/axios';


const rfid = ref('');
const email = ref('');
const sucess = ref(false);
const error = ref(false);


async function doSignup() {
  try {
    const response = await instance.post('/rfid/', {
      rfid: rfid.value,
      email: email.value,
    });
    console.log(response);
    sucess.value = true;
  } catch (error) {
    console.log(error);
    error.value = true;
  }

}
</script>
<template>
  <div class="m-auto w-1/2 flex flex-col bg-white h-screen items-center gap-6">
    <div class="mt-16">
      <img src="/logo-tela-branca.png" alt="Logo fábrica de software">
    </div>
    <div class="flex flex-col h-1/2 text-start w-2/3 gap-3">
      <h1 v-if="error" class="text-red-700 text-3xl font-bold text-center">Ocorreu um erro ao registrar sua tag</h1>
      <h1 v-if="sucess" class="text-green-700 text-3xl font-bold text-center">O cadastro foi realizado!</h1>
      <h1 class="text-3xl font-bold text-center">Registre uma TAG</h1>
      <div class="flex flex-col gap-6">
       
        <div class="relative flex items-center ">
          <i class="fa-solid fa-lock  absolute pl-4 text-2xl"></i>  
          <input type="text" placeholder="Id da tag" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12" v-model="rfid">
        </div>
        <div class="relative flex items-center ">
          <i class="fa-solid fa-user absolute pl-4 text-2xl"></i>
          <div class="w-full relative flex items-center">
            <input type="text" placeholder="Email do dono da Tag" class="bg-transparent p-4 border-2 rounded-2xl border-black outline-none w-full pl-12" v-model="email">
          </div>
        </div>
      </div>
      <button class="bg-green-600 hover:bg-green-700 p-4 rounded-2xl text-xl text-white font-black mt-4" @click="doSignup()">Registre a TAG </button>
    </div>
  </div>
  
</template>
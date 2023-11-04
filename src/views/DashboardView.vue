<script setup></script>

<template>
  <div class="flex justify-center py-3">
    <img src="/logo-tela-branca.png" alt="Logo fábrica de software" />
  </div>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
      <!--Metric Card-->
      <div
        class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5"
      >
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-5 bg-green-600">
                <i class="fas fa-users fa-2x fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h2 class="font-bold uppercase text-gray-600">TAGS-CADASTRADAS</h2>
            <p class="font-bold text-3xl">
             
            </p>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
      <!--Metric Card-->
      <div
        class="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5"
      >
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-5 bg-red-600">
                <i class="fa-solid fa-thumbs-down fa-2x"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h2 class="font-bold uppercase text-gray-600">TAGS-REMOVIDAS</h2>
            <p class="font-bold text-3xl">
              
            </p>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-6">
      <!--Metric Card-->
      <div
        class="bg-gradient-to-b from-orange-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5"
      >
        <div class="flex flex-row items-center">
          <div class="flex-shrink pr-4">
            <div class="rounded-full p-5 bg-yellow-600">
              <i class="fas fa-user-plus fa-2x fa-inverse"></i>
            </div>
          </div>
          <div class="flex-1 text-right md:text-center">
            <h2 class="font-bold uppercase text-gray-600">TAGS-ADMIN</h2>
            <p class="font-bold text-3xl">
             
            </p>
          </div>
        </div>
      </div>
      <!--/Metric Card-->
    </div>
  </div>
</template>

<style scoped></style>

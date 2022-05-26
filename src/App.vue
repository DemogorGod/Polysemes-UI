<script setup>
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-center"> 
      <!-- <img src="../public/Logo.svg" class="w-9">  -->
      <h1 class="text-3xl font-bold text-primary-2 mt-2">
        Polysemes UI
      </h1>
    </div>

    <hr class="primary-2 w-[90%] mx-[5%]">

  </div>
  
  <div class="py-[2.5%] px-[5%]">
    <router-view></router-view>
  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script setup>
import NavBar from "./components/NavBar.vue";

// Icon Example
// import MenuIcon from 'vue-material-design-icons/Menu.vue';

</script>

<template>
  <div>
    <div class="nav-container">
      <NavBar />
    </div>
    <div class="body-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>

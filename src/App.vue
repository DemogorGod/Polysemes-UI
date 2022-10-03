<script setup>
import NavBar from "./components/NavBar.vue";

import router from "./composables/router";

// Icon Example
// import MenuIcon from 'vue-material-design-icons/Menu.vue';

</script>

<template>
  <div>
    <div class="nav-container" v-if="router.currentRoute.value.fullPath != '/auth'">
      <NavBar />
    </div>
    <div class="body-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
</style>

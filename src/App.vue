<script setup>
import NavBar from "./components/NavBar.vue";
import router from "./composables/router";
</script>

<template>
  <div>
    <div class="nav-container" v-if="router.currentRoute.value.fullPath.split('/')[1] != 'auth'">
      <NavBar />
    </div>
    <div class="body-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div>
    <div class="nav-container" v-if="$route.fullPath.split('/')[1] != 'auth'">
      <NavBar />
    </div>
    <div class="body-container">
      <router-view></router-view>
    </div>
  </div>
</template>
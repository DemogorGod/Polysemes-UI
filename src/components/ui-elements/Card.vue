<script setup>
// import { ref } from 'vue'

defineProps({
  width: String,
  height: String,
  backgroundColor: String,
  radius: String,
  border: String,
  outline: String,
})

</script>

<template>
  <div class="flex justify-center">
    <div
    :style="{ 
      'width': width,
      'height': height,
      'background-color': backgroundColor,
      'border-radius': radius,
      'border': border,
      'outline': outline
    }"
    >
    </div>
  </div>
  
   
</template>

<style scoped>
</style>

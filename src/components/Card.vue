<script setup>
import { ref } from 'vue'

defineProps({
  width: String,
  height: String,
  backgroundColor: String,
  borderRadius: String,
})

</script>

<template>
  <div class="flex justify-center">
    <div
    :style="{ 
      'width': width,
      'height': height,
      'background-color': backgroundColor,
      'border-radius': borderRadius,
    }"
    >
  </div>
  </div>
  
   
</template>

<style scoped>
</style>

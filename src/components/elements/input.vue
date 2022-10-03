<script setup>
    import { ref, watch } from 'vue';
    import CloseIcon from 'vue-material-design-icons/Close.vue';

    const props = defineProps({
        placeholder: String,
        value: String,
        onChange: Function 
    })

    const input = ref('')

    watch([input], (newValue, oldValue) => {
        props.onChange(newValue)
    })
</script>

<template>
    <div class="input flex justify end">
        <input
        type="text"
        v-model="input"
        :placeholder="props.placeholder"  
        class="outline-none bg-transparent w-full">
        <CloseIcon class="hover:text-primary2 cursor-pointer" @click="input = ''"/>
    </div>
</template>

<style scoped>
</style>
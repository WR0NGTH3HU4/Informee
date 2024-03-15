<script setup lang="ts">
import { getAllJSDocTags } from 'typescript';
import { defineProps } from 'vue';
const props = defineProps(['modelValue','type']);
const emit= defineEmits();
const updateModel = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
}

</script>
<template>
  <input :type="type" name="" class="mezo" id="alap" placeholder="Placeholder" @input="updateModel">
</template>




<style scoped>
.mezo {
width: 50%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 7px;
box-sizing: border-box;
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
input[type="text"]:disabled {
background: #E5E5E5;
}
::placeholder {
color: #D4D4D4;

}
input[type="text"]:disabled::placeholder {
color: #A3A3A3;
}
input:focus {
outline: none !important;
border-color: #FB923C;
transition: border-color 0.3s ease;
}

input:not(:focus){
outline: none !important;
border-color: #ccc;
transition: border-color 0.3s ease; 
}

</style>
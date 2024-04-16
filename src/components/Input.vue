<script setup lang="ts">
import { getAllJSDocTags } from 'typescript';
import { defineProps } from 'vue';

const props = defineProps(['modelValue', 'type']);
const emit = defineEmits();
const updateModel = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <input class="border border-neutral-300 rounded-md px-3 py-2 shadow-sm" :type="type" name="" id="alap" placeholder="Placeholder" @input="updateModel" />
</template>

<style scoped>
input[type='text']:disabled {
  background: #e5e5e5;
}
::placeholder {
  color: #d4d4d4;
}
input[type='text']:disabled::placeholder {
  color: #a3a3a3;
}
input:focus {
  outline: none !important;
  border-color: #fb923c;
  transition: border-color 0.3s ease;
}

input:not(:focus) {
  outline: none !important;
  border-color: #ccc;
  transition: border-color 0.3s ease;
}
</style>

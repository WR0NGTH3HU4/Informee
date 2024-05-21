<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['modelValue', 'type']);
const emit = defineEmits();
const updateModel = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
  <component
    :is="type === 'textarea' ? 'textarea' : 'input'"
    class="border border-neutral-300 rounded-md px-3 py-2 shadow-sm font-normal text-neutral-500 w-full"
    :type="type === 'textarea' ? undefined : type"
    placeholder="Placeholder"
    @input="updateModel"
    v-bind="$attrs"
  />
</template>

<style scoped>
input[type='text']:disabled,
textarea:disabled {
  background: #e5e5e5;
}
::placeholder {
  color: #d4d4d4;
}
input[type='text']:disabled::placeholder,
textarea:disabled::placeholder {
  color: #a3a3a3;
}
input:focus,
textarea:focus {
  outline: none !important;
  border-color: #fb923c;
  transition: border-color 0.3s ease;
}
input:not(:focus),
textarea:not(:focus) {
  outline: none !important;
  border-color: #ccc;
  transition: border-color 0.3s ease;
}

textarea {
  resize: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
}
</style>

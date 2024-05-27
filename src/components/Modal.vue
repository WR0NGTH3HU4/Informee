<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';
import { useUserStore } from '@/stores/user';
import Button from './Button.vue';

const userStore = useUserStore();
const shown = defineModel<boolean>();

const currentStatus = ref<number | null>(); // Initialize with default value

const closeModal = () => {
  shown.value = false;
};

watch(
  () => userStore.getStatus(),
  (status) => {
    currentStatus.value = status;
  }
);
</script>
<template>
  <div
    v-if="shown"
    class="absolute z-50 inset-0 overflow-y-auto bg-black/50 flex flex-col justify-center content-center items-center"
  >
    <div
      class="flex flex-col content-center items-center justify-center rounded-md bg-neutral-50 border-neutral-300 drop-shadow-lg w-1/5 min-w-[300px]"
    >
      <div class="p-8">
        <slot></slot>
      </div>
      <div class="border-t-[1px] flex flex-col justify-end content-center items-end border-neutral-300 p-4 w-full">
        <Button @click.prevent="closeModal" type="primary" text="Bezárás"></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

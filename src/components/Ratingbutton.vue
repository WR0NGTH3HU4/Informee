<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  type: string;
  number: string;
}>();

const getClass = () => {
  if (props.type === 'like') {
    return 'like';
  } else if (props.type === 'dislike') {
    return 'dislike';
  }
};
</script>

<template>
  <button
    :class="getClass()"
    class="flex flex-row justify-center content-center items-center gap-3 rounded p-2 text-neutral-50 drop-shadow-lg"
  >
    <span v-if="props.type === 'like'" class="material-symbols-outlined"> thumb_up </span>
    <span v-else class="material-symbols-outlined"> thumb_down </span>
    {{ number }}
  </button>
</template>

<style scoped lang="scss">
.like {
  @apply bg-orange-500;
}
.dislike {
  @apply bg-neutral-800;
}
</style>

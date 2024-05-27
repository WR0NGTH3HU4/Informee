<script setup lang="ts">
import { ApiWrapper } from '@/composables/ApiWrapper';
import { useUserStore } from '@/stores/user';
import { type Review as ReviewSchema } from '@/types/Review';

const userStore = useUserStore();

const props = defineProps<{
  type: keyof typeof icons;
  review: ReviewSchema;
}>();

async function del() {
  await ApiWrapper.delete(`review/${props.review._id}`, null);
  window.location.reload();
}

const icons = {
  '1': 'check',
  '0': 'exposure_zero',
  '-1': 'close'
};
</script>
<template>
  <div :class="`${props.review.value}`" class="flex flex-row justify-between content-center items-center p-5 w-11/12 bg-neutral-100 border-[1px] gap-2">
    <div class="flex flex-col justify-center content-center items-start">
      <h3 class="text-2xl text-neutral-700">{{ review.author.displayName }}</h3>
      <p class="text-neutral-600">{{ review.content }}</p>
    </div>
    <span v-if="review.author._id == userStore.getUserData()?.id" class="material-symbols-outlined ml-auto text-neutral-600 cursor-pointer" @click="del">delete</span>
    <span class="material-symbols-outlined font-extrabold text-4xl cursor-pointer">
      {{ icons[props.review.value] }}
    </span>
  </div>
</template>
<style>
div[class^='1'] {
  @apply border-green-300 rounded drop-shadow-lg text-green-500;
}
div[class^='0'] {
  @apply border-neutral-300 rounded drop-shadow-lg text-neutral-500;
}
div[class^='-1'] {
  @apply border-red-300 rounded drop-shadow-lg text-red-500;
}
</style>

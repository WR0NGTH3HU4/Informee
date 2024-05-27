<script setup lang="ts">
const props = defineProps<{
  type: keyof typeof icons;
}>();

const icons = {
  positive: 'check',
  neutral: 'exposure_zero',
  negative: 'close'

};
</script>
<template>
    <div :class="props.type">
        <div class="flex flex-col justify-center content-center items-start">
            <h3 class="text-2xl text-neutral-700">Molnár Krisztián</h3>
            <p class="text-neutral-600">Itt egy comment</p>
        </div>
        <span  class="material-symbols-outlined font-extrabold text-4xl cursor-pointer">
            {{ icons[props.type] }}
        </span>
    </div>
</template>
<style>
.positive{
    @apply flex flex-row justify-between content-center items-center p-5 w-11/12 bg-neutral-100 border-[1px] border-green-300 rounded drop-shadow-lg text-green-500
}
.neutral{
    @apply flex flex-row justify-between content-center items-center p-5 w-11/12 bg-neutral-100 border-[1px] border-neutral-300 rounded drop-shadow-lg text-neutral-500
}
.negative{
    @apply flex flex-row justify-between content-center items-center p-5 w-11/12 bg-neutral-100 border-[1px] border-red-300 rounded drop-shadow-lg text-red-500
}
</style>
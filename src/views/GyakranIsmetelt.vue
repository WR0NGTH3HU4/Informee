<script setup lang="ts">
import FAQBox from '../components/FAQBox.vue';
</script>
<template>
  <div class="flex flex-col justify-center content-center items-center w-full h-full">
    <h3 class="text-8xl text-neutral-600 mt-16">FAQ</h3>
    <div class="Boxes flex flex-row justify-center content-center items-center w-full h-full gap-x-28 px-20">
      <FAQBox class="Faq"></FAQBox>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media only screen and (max-width: 700px) {
  .Boxes {
    @apply flex-col;
  }
}
@media only screen and (max-width: 1000px) {
  .Boxes {
    @apply px-10 gap-x-5;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import Input from './Input.vue';
</script>

<template>
  <div class="flex flex-col justify-center content-center items-start w-full gap-y-8 h-full">
    <div class="flex flex-row justify-between content-center items-center w-1/2">
      <h3 class="text-neutral-800 text-4xl font-bold">Posztszerkesztő</h3>
      <h3 class="self-start text-neutral-500 font-medium">(mentve)</h3>
    </div>
    <div class="flex flex-col justify-center content-center items-center w-full gap-y-3 flex-grow">
      <div class="Post">
        <h3 class="InputName">Cím</h3>
        <Input class="w-full" type="text" />
      </div>
      <div class="Post">
        <h3 class="InputName">Leírás</h3>
        <Input class="w-full" type="text" />
      </div>
      <div class="Post flex-grow">
        <h3 class="InputName">Tartalom</h3>
        <Input class="w-full flex-grow h-full" type="textarea" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Post {
  @apply flex flex-col justify-center content-center items-start w-full gap-y-1;
}
.InputName {
  @apply text-neutral-500 font-medium text-lg;
}
</style>

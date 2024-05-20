<script setup lang="ts">
import { ref } from 'vue';
import Button from '../components/Button.vue';
import Post from '@/components/Post.vue';
import Bio from '@/components/Bio.vue';
</script>

<template>
  <div class="FullPage flex flex-row w-full h-full">
    <Bio></Bio>
    <div class="Post flex flex-col justify-start content-center items-center w-3/4 mx-3 overflow-y-auto">
      <Post></Post>
    </div>
  </div>
</template>

<style scoped lang="scss">

.Post {
  max-height: calc(100vh - 3rem); 
  overflow-y: auto;
}
@media only screen and (max-width:1000px) {
  .FullPage{
    @apply flex-col
  }
}
</style>
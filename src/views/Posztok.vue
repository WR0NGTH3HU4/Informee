<script lang="ts" setup>
import Post from '@/components/Post.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="flex p-4 gap-4">
    <!--Sidebar-->
    <div class="flex flex-col font-medium">
      <!-- TODO: FILL WITH CIMKEK MERT CSAK -->
      <span class="font-medium">CIMKEK</span>
      <span class="p-4 text-neutral-500 font-medium">cimke</span>
    </div>
    <div class="flex flex-col w-full gap-4">
      <!--Searchbar-->
      <div class="flex gap-4">
        <Input class="w-full" type="text" placeholder="Keresés" />
        <Button type="primary" text="Keresés"></Button>
        <Button type="secondary" text="Rendezés"></Button>
      </div>
      <!--Postlist-->
      <div class="flex flex-col gap-2">
        <Post />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

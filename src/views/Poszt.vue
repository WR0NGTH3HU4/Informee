<script setup lang="ts">
import Button from '@/components/Button.vue';
import ReviewBox from '@/components/ReviewBox.vue'
import comment from '@/components/comment.vue'
</script>
<template>
  <div class="flex flex-col justify-center content-center items-center gap-y-10 mt-10 w-full">
    <div class="flex flex-col w-3/4 gap-y-5">
      <div class="flex flex-row justify-between content-center items-center w-full">
        <Button type="secondary" text="Vissza"></Button>
        <Button type="primary" text="Értékelés"></Button>
      </div>
      <div class="flex flex-col w-full rounded p-3 bg-neutral-100 border-[1px] border-neutral-300 min-h-[400px]">
        <div class="flex flex-row justify-between content-center items-center">
        <div class="flex flex-row justify-center content-center items-center gap-x-3">
            <div class="w-[50px] h-[50px]">
              <!--ProfilePic-->
            </div>
            <h3 class="font-semibold text-lg text-neutral-800">
              Molnár Krisztián
            </h3>
        </div>
        <div class="flex flex-row justify-center content-center items-center gap-x-3">
          <h3 class="text-neutral-500">~10 perc olvasás</h3>
          <h3 class="text-neutral-800 font-semibold">2024.05.27</h3>
        </div>

      </div>
        <div class="flex flex-col justify-center content-center items-center gap-y-5">
          <h3 class="font-bold text-2xl text-neutral-800">Title</h3>
          <p class="text-neutral-800 text-justify">Content</p> <!--Content-->
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center content-center items-center gap-y-10 w-full">
    <ReviewBox class="w-3/4"></ReviewBox>
    <comment type="positive"></comment>
    <comment type="neutral"></comment>
    <comment type="negative"></comment>
  </div>
  </div>
</template>
<style>

</style>

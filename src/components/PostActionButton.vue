<script setup lang="ts"></script>

<template>
  <button :class="class" @click="click">
    <span class="material-symbols-outlined">
add_box
</span>
  </button>
</template>

<style scoped>
.upvote {
  border-radius: 10px;
  background-color: #22c55e;
  color: #FAFAFA;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
</style>

<script setup lang="ts">
 
</script>

<template>
  <button :class="class" @click="click">
    <span class="material-symbols-outlined"> add_box </span>
  </button>
</template>

<style scoped>
.like {
  border-radius: 10px;
  background-color: #22c55e;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dislike {
  border-radius: 10px;  
  background-color: #EF4444;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.share {
  border-radius: 10px;  
  background-color: #EA580C;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.report { 
  border-radius: 10px;  
  background-color: #404040;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

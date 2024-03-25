<script setup lang="ts">
defineProps(['text', 'linkButton', 'click'])
</script>

<template>
  <button :class="linkButton" @click="click">
    {{ text }} <span class="material-symbols-outlined"> link </span>
  </button>
</template>

<style scoped>
.linkButton {
    display: flex;
    background-color: #ef4444;
    color: #fafafa;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
}
</style>

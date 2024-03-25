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
    border-radius: 10px;
    padding: 8px;
    width: fit-content;
}

.WeboldalLink{
   display: flex;
    background-color: #525252;
    color: #fafafa;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    border-radius: 10px;
    padding: 8px;
    width: fit-content;
}

.EmailLink{
    display: flex;
    background-color: #A3A3A3;
    color: #fafafa;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    border-radius: 10px;
    padding: 8px;
    width: fit-content;
}

.SteamLink {
    display: flex;
    background-color: #172554;
    color: #fafafa;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    border-radius: 10px;
    padding: 8px;
    width: fit-content;
}

.FacebookLink {
    display: flex;
    background-color: #3B82F6;
    color: #fafafa;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    border-radius: 10px;
    padding: 8px;
    width: fit-content;
}

span {
  margin-right: 5px;
}
</style>

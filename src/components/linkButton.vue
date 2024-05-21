<script setup lang="ts">
defineProps(['text', 'linkButton', 'click', 'url']);
</script>

<template>
  <a :href="url">
    <button :class="linkButton" @click="click">{{ text }} <span class="material-symbols-outlined"> link </span></button>
  </a>
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

.WeboldalLink {
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

.EmailLink {
  display: flex;
  background-color: #a3a3a3;
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
  background-color: #3b82f6;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  border-radius: 10px;
  padding: 8px;
  width: fit-content;
}

.GithubLink {
  display: flex;
  background-color: #6e5494;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  border-radius: 10px;
  padding: 6px;
  width: fit-content;
}

.ShareButton {
  display: flex;
  background-color: #945454;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  border-radius: 10px;
  padding: 6px;
  width: fit-content;
}

.DiscordButton {
  display: flex;
  background-color: #5865f2;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  border-radius: 10px;
  padding: 6px;
  width: fit-content;
}
.InstagramLink {
  display: flex;
  background-color: #515bd4;
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

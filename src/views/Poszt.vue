<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>
<template>
  <div class="container">
    <div class="actions">
      <Button type="secondary" text="Vissza"></Button>
      <Button type="primary" text="Értékelés"></Button>
    </div>
    <div class="post">
      <div class="head">
        <div class="profile">
          <img src="../assets/logo.svg" alt="" />
          <h3>Molnár Krisztián</h3>
        </div>
        <div class="infos">
          <h3 class="estimated">1perc</h3>
          <h3>2024.jún.1.</h3>
        </div>
      </div>
      <div class="Title">xd</div>
      <div class="Text">xddddd</div>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
img {
  width: 8rem;
  margin-right: 10px;
}
.container {
  @apply flex flex-col justify-center content-center items-center;
  min-width: 100%;
}
.actions {
  @apply flex flex-row justify-between content-center;
  width: 60%;
}
.post {
  @apply bg-neutral-100 drop-shadow flex flex-col justify-start content-center;
  width: 60%;
  height: 52rem;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
}
.head {
  @apply flex flex-row justify-between content-center;
}
.profile {
  @apply flex flex-row justify-between content-center items-end;
}
.infos {
  @apply flex flex-row justify-between content-center items-center;
}
.estimated {
  margin-right: 10px;
}
.Title {
  @apply flex flex-row justify-center content-center items-center text-4xl text-neutral-800;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.Text {
  @apply flex flex-row justify-center content-center items-center text-xl text-neutral-800;
  width: 100%;
}
</style>

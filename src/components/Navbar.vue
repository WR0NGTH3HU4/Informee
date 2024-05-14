<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Logo from './Logo.vue'
import { ref } from 'vue'
import Button from './Button.vue'

interface Link {
  Id: number
  Title: string
  Url: string
}
//Global Var helyett
let IsLoggedIn = true

const LoggedInContent = ref<Link[]>([
  { Id: 0, Title: 'Posztok', Url: '/Posztok' },
  { Id: 1, Title: 'Saját posztok', Url: '/SajatPosztok' }
])
const LoggedOutContent = ref<Link[]>([
  { Id: 0, Title: 'Kezdőlap', Url: '/Kezdolap' },
  { Id: 1, Title: 'Rólunk', Url: '/Rolunk' }
])
</script>

<template>
  <nav class="flex justify-between items-center px-4">
    <div class="flex">
      <!--Logo-->
      <Logo class="w-[150px]" />
      <!--Separator-->
      <svg
        id="separator"
        width="3"
        height="48"
        viewBox="0 0 3 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="self-center"
      >
        <line x1="1.60449" x2="1.60449" y2="61" stroke="#A3A3A3" stroke-width="2" />
      </svg>
      <!--NavLinks-->
      <span class="flex items-center gap-4">
        <a class="text-neutral-700 text-lg" v-for="link in LoggedInContent" :key="link.Id" :href="link.Url">{{
        link.Title
        }}</a>
    </span>
    </div>
    <RouterLink to="Bejelentkezes">
      <Button text="Bejelentkezés"></Button>
    </RouterLink>
  </nav>
</template>

<style scoped>
#separator {
  @apply mx-4;
}
</style>

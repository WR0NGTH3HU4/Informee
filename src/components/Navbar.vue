<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Logo from './Logo.vue';
import { ref } from 'vue';
import Button from './Button.vue';
import { useUserStore } from '@/stores/user';

interface Link {
  Id: number;
  Title: string;
  Url: string;
}
//Global Var helyett
const userStore = useUserStore();

const LoggedInContent = ref<Link[]>([
  { Id: 0, Title: 'Posztok', Url: '/posztok' },
  { Id: 1, Title: 'Saját posztok', Url: '/sajatposztok' },
]);
const LoggedOutContent = ref<Link[]>([
  { Id: 0, Title: 'Kezdőlap', Url: '/' },
  { Id: 1, Title: 'Rólunk', Url: '/rolunk' },
  { Id: 1, Title: 'GYIK', Url: '/faq' },
]);
</script>

<template>
  <nav class="flex justify-between items-center px-4">
    <div class="flex">
      <!--Logo-->
      <RouterLink :to="userStore.loggedIn() ? '/Posztok' : '/'">
        <Logo class="w-[150px]" />
      </RouterLink>

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
        <RouterLink
          class="text-neutral-700 text-lg font-medium"
          v-for="link in userStore.loggedIn() ? LoggedInContent : LoggedOutContent"
          :key="link.Id"
          :to="link.Url"
        >
          {{ link.Title }}
        </RouterLink>
      </span>
    </div>
    <RouterLink v-if="!userStore.loggedIn()" to="Bejelentkezes">
      <Button text="Bejelentkezés"></Button>
    </RouterLink>
    <img v-else src="https://img.itch.zone/aW1nLzgzNDY4MjEuZ2lm/original/PjfoQj.gif" alt="">
  </nav>
</template>

<style scoped>
#separator {
  @apply mx-4;
}
</style>

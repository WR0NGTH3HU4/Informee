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
const MenuUnfold = ref(false);
const triggerMenu = () =>{
  MenuUnfold.value = ! MenuUnfold.value
}
</script>

<template>
  <nav v-if="!MenuUnfold" class="Hambimenu w-full">
    <div class="flex flex-col justify-center content-center items-center w-full">
      <div class="flex flex-row justify-between content-center items-center p-3 w-full">
        <svg @click.prevent="triggerMenu" width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="menuBTN hover:fill-neutral-500  active:fill-neutral-700 duration-200 " d="M0 20V17.2223H30V20H0ZM0 11.3889V8.61112H30V11.3889H0ZM0 2.77775V0H30V2.77775H0Z" fill="#525252"/>
        </svg>
        <Logo></Logo>
        <div class="ProfilePic drop-shadow-lg">

        </div>
      </div>
    </div>
  </nav>
  <nav v-else class="Hambimenu w-full  bg-neutral-100">
    <div class="flex flex-col justify-center content-center items-center w-full ">
      <div class="flex flex-row justify-between content-center items-center w-full p-3">
  <svg @click.prevent="triggerMenu" class=" hover:fill-neutral-500  active:fill-neutral-700 duration-200 fill-neutral-600" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
  <Logo></Logo>
  <h3 class="text-xl text-neutral-800">Menü</h3>
</div>
<div v-for="link in userStore.loggedIn() ? LoggedInContent : LoggedOutContent" :key="link.Id" :to="link.Url" class="menuItems p-6 hover:bg-neutral-50 active:bg-neutral-200 w-full duration-200 flex flex-row items-center justify-center content-center">
  <h3>{{ link.Title }}</h3>
</div>
</div>
  </nav>
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
          :to="link.Url">
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


<style scoped lang="scss">
#separator {
  @apply mx-4;
}
@media only screen and (max-width: 600px){
  nav{
    display: none;
  }
  .Hambimenu{
    display: flex;

  }
}
@media only screen and (min-width: 600px){
  .Hambimenu{
    display: none;
  }
  nav{
    display: flex;
  }
}
.ProfilePic{
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-image: url('../assets/Andras.png');
  background-size: cover;
}
.menuItems:last-child{
  @apply drop-shadow-lg
}
.FullProfile{
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-image: url('../assets/Andras.png');
  background-size: cover
}
.ProfileMenu{
  border-radius: 30px;
}
.Kredit{
  border-radius: 30px;
  
}
</style>

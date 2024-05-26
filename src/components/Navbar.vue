<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Logo from './Logo.vue';
import { onMounted, ref } from 'vue';
import Button from './Button.vue';
import { useUserStore } from '@/stores/user';
import { ApiWrapper } from '@/composables/ApiWrapper';
import { options } from 'node_modules/axios/index.cjs';
import router from '@/router';


interface Link {
  Id: number;
  Title: string;
  Url: string;
}
//Global Var helyett
const userStore = useUserStore();

const LoggedInContent = ref<Link[]>([
  { Id: 0, Title: 'Posztok', Url: '/posztok' },
  { Id: 1, Title: 'Saját posztok', Url: '/sajatposztok' }
]);
const LoggedOutContent = ref<Link[]>([
  { Id: 0, Title: 'Kezdőlap', Url: '/' },
  { Id: 1, Title: 'Rólunk', Url: '/rolunk' },
  { Id: 1, Title: 'GYIK', Url: '/faq' }
]);
const Logout = () =>{
  OptionsUnfold.value = false;
  userStore.clearUser();
  router.push('/')
}
const MenuUnfold = ref(false);
const OptionsUnfold= ref(false);

const success = ref(false)
const shareProfileLink = () => {
  const currentLink = window.location.href;
  
  navigator.clipboard.writeText(currentLink)
    .then(() => {
      window.alert("Link sikeresen másolva!");
      success.value = true;
      setTimeout(() => {
        success.value = false;
      }, 1000); // Set timeout to revert back to white after 1 second
    })
    .catch(() => {
      window.alert("Valamiért nem tudtuk kimásolni a linket!");
      success.value = false;
    });
};

const triggerMenu = () => {
  MenuUnfold.value = !MenuUnfold.value;
};
const triggerOptions = () =>{
  OptionsUnfold.value = ! OptionsUnfold.value;
};


async function newPost() {
  alert('trasd')
  await ApiWrapper.post('post', null);
}
</script>

<template>
  <div v-if="!OptionsUnfold" class="w-full">
    <nav v-if="!MenuUnfold" class="Hambimenu w-full">
    <div class="flex flex-col justify-center content-center items-center w-full">
      <div class="flex flex-row justify-between content-center items-center p-3 w-full">
        <svg
          @click.prevent="triggerMenu"
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="menuBTN hover:fill-neutral-500 active:fill-neutral-700 duration-200"
            d="M0 20V17.2223H30V20H0ZM0 11.3889V8.61112H30V11.3889H0ZM0 2.77775V0H30V2.77775H0Z"
            fill="#525252"
          />
        </svg>
        <Logo></Logo>
        <div @click.prevent="triggerOptions" class="ProfilePic drop-shadow-lg"></div>
      </div>
    </div>
  </nav>
  <nav v-else class="Hambimenu w-full bg-neutral-100">
    <div class="flex flex-col justify-center content-center items-center w-full">
      <div class="flex flex-row justify-between content-center items-center w-full p-3">
        <svg
          @click.prevent="triggerMenu"
          class="hover:fill-neutral-500 active:fill-neutral-700 duration-200 fill-neutral-600"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <Logo></Logo>
        <h3 @click.prevent="triggerOptions"  class="text-xl text-neutral-800">Beállítások</h3>
      </div>
      <RouterLink
        v-for="link in userStore.loggedIn() ? LoggedInContent : LoggedOutContent"
        :key="link.Id"
        :to="link.Url"
        class="menuItems p-6 hover:bg-neutral-50 active:bg-neutral-200 w-full duration-200 flex flex-row items-center justify-center content-center"
      >
        <h3>{{ link.Title }}</h3>
      </RouterLink>
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
          :to="link.Url"
        >
          {{ link.Title }}
        </RouterLink>
      </span>
    </div>
    <RouterLink v-if="!userStore.loggedIn()" to="Bejelentkezes">
      <Button text="Bejelentkezés"></Button>
    </RouterLink>
    <span v-else class="flex items-center gap-4">
      <RouterLink to="PosztSzerkeszto">
        <Button text="Új poszt" type="primary" @click="newPost"></Button>
      </RouterLink>
      <img @click.prevent="triggerOptions" src="https://img.itch.zone/aW1nLzgzNDY4MjEuZ2lm/original/PjfoQj.gif" alt="" />
    </span>
  </nav>
  </div>
  <div v-else class="flex flex-col w-full  justify-end content-center relative">
    <nav v-if="!MenuUnfold" class="Hambimenu w-full">
    <div class="flex flex-col justify-center content-center items-center w-full">
      <div class="flex flex-row justify-between content-center items-center p-3 w-full">
        <svg
          @click.prevent="triggerMenu"
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="menuBTN hover:fill-neutral-500 active:fill-neutral-700 duration-200"
            d="M0 20V17.2223H30V20H0ZM0 11.3889V8.61112H30V11.3889H0ZM0 2.77775V0H30V2.77775H0Z"
            fill="#525252"
          />
        </svg>
        <Logo></Logo>
        <div @click.prevent="triggerOptions" class="ProfilePic drop-shadow-lg"></div>
      </div>
    </div>
  </nav>
  <nav v-else class="Hambimenu w-full bg-neutral-100">
    <div class="flex flex-col justify-center content-center items-center w-full">
      <div class="flex flex-row justify-between content-center items-center w-full p-3">
        <svg
          @click.prevent="triggerMenu"
          class="hover:fill-neutral-500 active:fill-neutral-700 duration-200 fill-neutral-600"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <Logo></Logo>
        <h3 @click.prevent="triggerOptions"  class="text-xl text-neutral-800">Beállítások</h3>
      </div>
      <RouterLink
        v-for="link in userStore.loggedIn() ? LoggedInContent : LoggedOutContent"
        :key="link.Id"
        :to="link.Url"
        class="menuItems p-6 hover:bg-neutral-50 active:bg-neutral-200 w-full duration-200 flex flex-row items-center justify-center content-center"
      >
        <h3>{{ link.Title }}</h3>
      </RouterLink>
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
          :to="link.Url"
        >
          {{ link.Title }}
        </RouterLink>
      </span>
    </div>
    <RouterLink v-if="!userStore.loggedIn()" to="Bejelentkezes">
      <Button text="Bejelentkezés"></Button>
    </RouterLink>
    <span v-else class="flex items-center gap-4">
      <RouterLink to="PosztSzerkeszto">
        <Button text="Új poszt" type="primary" @click="newPost"></Button>
      </RouterLink>
      <img @click.prevent="triggerOptions" src="https://img.itch.zone/aW1nLzgzNDY4MjEuZ2lm/original/PjfoQj.gif" alt="" />
    </span>
  </nav>
    <div class="dropdown w-[250px] h-[180px] bg-neutral-100 rounded border-neutral-300 border-[1px] drop-shadow-lg self-end mx-3"><!--Dropdown-->

      <RouterLink to="profil">
        <div class="Option">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.7502 20.5L7.3502 17.3C7.13353 17.2167 6.92936 17.1167 6.7377 17C6.54603 16.8833 6.35853 16.7583 6.1752 16.625L3.2002 17.875L0.450195 13.125L3.0252 11.175C3.00853 11.0583 3.0002 10.9458 3.0002 10.8375V10.1625C3.0002 10.0542 3.00853 9.94167 3.0252 9.825L0.450195 7.875L3.2002 3.125L6.1752 4.375C6.35853 4.24167 6.5502 4.11667 6.7502 4C6.9502 3.88333 7.1502 3.78333 7.3502 3.7L7.7502 0.5H13.2502L13.6502 3.7C13.8669 3.78333 14.071 3.88333 14.2627 4C14.4544 4.11667 14.6419 4.24167 14.8252 4.375L17.8002 3.125L20.5502 7.875L17.9752 9.825C17.9919 9.94167 18.0002 10.0542 18.0002 10.1625V10.8375C18.0002 10.9458 17.9835 11.0583 17.9502 11.175L20.5252 13.125L17.7752 17.875L14.8252 16.625C14.6419 16.7583 14.4502 16.8833 14.2502 17C14.0502 17.1167 13.8502 17.2167 13.6502 17.3L13.2502 20.5H7.7502ZM9.5002 18.5H11.4752L11.8252 15.85C12.3419 15.7167 12.821 15.5208 13.2627 15.2625C13.7044 15.0042 14.1085 14.6917 14.4752 14.325L16.9502 15.35L17.9252 13.65L15.7752 12.025C15.8585 11.7917 15.9169 11.5458 15.9502 11.2875C15.9835 11.0292 16.0002 10.7667 16.0002 10.5C16.0002 10.2333 15.9835 9.97083 15.9502 9.7125C15.9169 9.45417 15.8585 9.20833 15.7752 8.975L17.9252 7.35L16.9502 5.65L14.4752 6.7C14.1085 6.31667 13.7044 5.99583 13.2627 5.7375C12.821 5.47917 12.3419 5.28333 11.8252 5.15L11.5002 2.5H9.5252L9.1752 5.15C8.65853 5.28333 8.17936 5.47917 7.7377 5.7375C7.29603 5.99583 6.89186 6.30833 6.5252 6.675L4.0502 5.65L3.0752 7.35L5.2252 8.95C5.14186 9.2 5.08353 9.45 5.0502 9.7C5.01686 9.95 5.0002 10.2167 5.0002 10.5C5.0002 10.7667 5.01686 11.025 5.0502 11.275C5.08353 11.525 5.14186 11.775 5.2252 12.025L3.0752 13.65L4.0502 15.35L6.5252 14.3C6.89186 14.6833 7.29603 15.0042 7.7377 15.2625C8.17936 15.5208 8.65853 15.7167 9.1752 15.85L9.5002 18.5ZM10.5502 14C11.5169 14 12.3419 13.6583 13.0252 12.975C13.7085 12.2917 14.0502 11.4667 14.0502 10.5C14.0502 9.53333 13.7085 8.70833 13.0252 8.025C12.3419 7.34167 11.5169 7 10.5502 7C9.56686 7 8.7377 7.34167 8.0627 8.025C7.3877 8.70833 7.0502 9.53333 7.0502 10.5C7.0502 11.4667 7.3877 12.2917 8.0627 12.975C8.7377 13.6583 9.56686 14 10.5502 14Z" fill="#525252"/>
          </svg>
          <h3 class="OptionItem">Beállítások</h3>
        </div>
      </RouterLink>

      <div @click.prevent="shareProfileLink" :class="{'bg-green-100': success, 'bg-neutral-100':!success}" class="Option transition-colors duration-500 animate-ease-in-out cursor-pointer">
        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 20.5C14.1667 20.5 13.4583 20.2083 12.875 19.625C12.2917 19.0417 12 18.3333 12 17.5C12 17.3833 12.0083 17.2625 12.025 17.1375C12.0417 17.0125 12.0667 16.9 12.1 16.8L5.05 12.7C4.76667 12.95 4.45 13.1458 4.1 13.2875C3.75 13.4292 3.38333 13.5 3 13.5C2.16667 13.5 1.45833 13.2083 0.875 12.625C0.291667 12.0417 0 11.3333 0 10.5C0 9.66667 0.291667 8.95833 0.875 8.375C1.45833 7.79167 2.16667 7.5 3 7.5C3.38333 7.5 3.75 7.57083 4.1 7.7125C4.45 7.85417 4.76667 8.05 5.05 8.3L12.1 4.2C12.0667 4.1 12.0417 3.9875 12.025 3.8625C12.0083 3.7375 12 3.61667 12 3.5C12 2.66667 12.2917 1.95833 12.875 1.375C13.4583 0.791667 14.1667 0.5 15 0.5C15.8333 0.5 16.5417 0.791667 17.125 1.375C17.7083 1.95833 18 2.66667 18 3.5C18 4.33333 17.7083 5.04167 17.125 5.625C16.5417 6.20833 15.8333 6.5 15 6.5C14.6167 6.5 14.25 6.42917 13.9 6.2875C13.55 6.14583 13.2333 5.95 12.95 5.7L5.9 9.8C5.93333 9.9 5.95833 10.0125 5.975 10.1375C5.99167 10.2625 6 10.3833 6 10.5C6 10.6167 5.99167 10.7375 5.975 10.8625C5.95833 10.9875 5.93333 11.1 5.9 11.2L12.95 15.3C13.2333 15.05 13.55 14.8542 13.9 14.7125C14.25 14.5708 14.6167 14.5 15 14.5C15.8333 14.5 16.5417 14.7917 17.125 15.375C17.7083 15.9583 18 16.6667 18 17.5C18 18.3333 17.7083 19.0417 17.125 19.625C16.5417 20.2083 15.8333 20.5 15 20.5ZM15 4.5C15.2833 4.5 15.5208 4.40417 15.7125 4.2125C15.9042 4.02083 16 3.78333 16 3.5C16 3.21667 15.9042 2.97917 15.7125 2.7875C15.5208 2.59583 15.2833 2.5 15 2.5C14.7167 2.5 14.4792 2.59583 14.2875 2.7875C14.0958 2.97917 14 3.21667 14 3.5C14 3.78333 14.0958 4.02083 14.2875 4.2125C14.4792 4.40417 14.7167 4.5 15 4.5ZM3 11.5C3.28333 11.5 3.52083 11.4042 3.7125 11.2125C3.90417 11.0208 4 10.7833 4 10.5C4 10.2167 3.90417 9.97917 3.7125 9.7875C3.52083 9.59583 3.28333 9.5 3 9.5C2.71667 9.5 2.47917 9.59583 2.2875 9.7875C2.09583 9.97917 2 10.2167 2 10.5C2 10.7833 2.09583 11.0208 2.2875 11.2125C2.47917 11.4042 2.71667 11.5 3 11.5ZM15 18.5C15.2833 18.5 15.5208 18.4042 15.7125 18.2125C15.9042 18.0208 16 17.7833 16 17.5C16 17.2167 15.9042 16.9792 15.7125 16.7875C15.5208 16.5958 15.2833 16.5 15 16.5C14.7167 16.5 14.4792 16.5958 14.2875 16.7875C14.0958 16.9792 14 17.2167 14 17.5C14 17.7833 14.0958 18.0208 14.2875 18.2125C14.4792 18.4042 14.7167 18.5 15 18.5Z" fill="#525252"/>
        </svg>
        <h3 class="OptionItem">Profil megosztása</h3>
      </div>

      <div @click.prevent="Logout" class="Option border-t-[1px] border-neutral-300">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 18.5C1.45 18.5 0.979167 18.3042 0.5875 17.9125C0.195833 17.5208 0 17.05 0 16.5V2.5C0 1.95 0.195833 1.47917 0.5875 1.0875C0.979167 0.695833 1.45 0.5 2 0.5H9V2.5H2V16.5H9V18.5H2ZM13 14.5L11.625 13.05L14.175 10.5H6V8.5H14.175L11.625 5.95L13 4.5L18 9.5L13 14.5Z" fill="#DC2626"/>
        </svg>
        <h3 class="text-lg font-semibold text-red-600">Kijelentkezés</h3>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
#separator {
  @apply mx-4;
}
.dropdown{
  z-index: 1000;
  position: relative;

  @apply flex flex-col justify-between content-center items-start
}
.Option{
  @apply flex flex-row justify-start content-center items-center p-3 gap-x-3 w-full
}
.OptionItem{
  @apply text-neutral-600 text-lg font-semibold
}
@media only screen and (max-width: 600px) {
  nav {
    display: none;
  }
  .Hambimenu {
    display: flex;
  }
}
@media only screen and (min-width: 600px) {
  .Hambimenu {
    display: none;
  }
  nav {
    display: flex;
  }
}
.ProfilePic {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background-image: url('../assets/Andras.png');
  background-size: cover;
}
.menuItems:last-child {
  @apply drop-shadow-lg;
}
.FullProfile {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-image: url('../assets/Andras.png');
  background-size: cover;
}
.ProfileMenu {
  border-radius: 30px;
}
.Kredit {
  border-radius: 30px;
}
</style>

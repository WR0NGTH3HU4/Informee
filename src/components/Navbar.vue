<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import Logo from './Logo.vue';
import { onMounted, ref } from 'vue';
import Button from './Button.vue';
import { useUserStore } from '@/stores/user';
import { ApiWrapper } from '@/composables/ApiWrapper';
import { options } from 'node_modules/axios/index.cjs';
import type { Post } from '@/types/Post';

const router = useRouter();

interface Link {
  Id: number;
  Title: string;
  Url: string;
}
//Global Var helyett
const userStore = useUserStore();

const LoggedInContent = ref<Link[]>([
  { Id: 0, Title: 'Posztok', Url: '/posztok' },
  { Id: 1, Title: 'Profilom', Url: '/profil/@me' }
]);
const LoggedOutContent = ref<Link[]>([
  { Id: 0, Title: 'Kezdőlap', Url: '/' },
  { Id: 1, Title: 'Rólunk', Url: '/rolunk' },
  { Id: 1, Title: 'GYIK', Url: '/faq' }
]);
const Logout = () => {
  OptionsUnfold.value = false;
  MenuUnfold.value = false;

  userStore.clearUser();
  router.push('/');
};
const MenuUnfold = ref(false);
const OptionsUnfold = ref(false);

const success = ref(false);
const shareProfileLink = () => {
  navigator.clipboard
    .writeText('ez meg nem mukodik')
    .then(() => {
      window.alert('Link sikeresen másolva!');
      success.value = true;
    })
    .catch(() => {
      window.alert('Valamiért nem tudtuk kimásolni a linket!');
      success.value = false;
    });
};

const triggerMenu = () => {
  MenuUnfold.value = !MenuUnfold.value;
};
const triggerOptions = () => {
  OptionsUnfold.value = !OptionsUnfold.value;
};

async function newPost() {
  const res = await ApiWrapper.post<Post>('post', null);
  router.push(`/posztszerkeszto/${res.data._id}`);
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
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
          <Logo></Logo>
          <h3 @click.prevent="triggerOptions" class="text-xl text-neutral-800">Beállítások</h3>
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
        <img
          @click.prevent="triggerOptions"
          src="https://img.itch.zone/aW1nLzgzNDY4MjEuZ2lm/original/PjfoQj.gif"
          alt=""
        />
      </span>
    </nav>
  </div>
  <div v-else class="flex flex-col w-full justify-end content-center relative">
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
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
          <Logo></Logo>
          <h3 @click.prevent="triggerOptions" class="text-xl text-neutral-800">Beállítások</h3>
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
        <Button text="Új poszt" type="primary" @click="newPost"></Button>
        <img
          @click.prevent="triggerOptions"
          src="https://img.itch.zone/aW1nLzgzNDY4MjEuZ2lm/original/PjfoQj.gif"
          alt=""
        />
      </span>
    </nav>
    <div
      class="dropdown bg-neutral-100 rounded border-neutral-300 border-[1px] drop-shadow self-end mx-4"
    >
      <!--Dropdown-->

      <RouterLink class="w-full" to="profil">
        <div class="Option text-neutral-600">
          <span class="material-symbols-outlined text-lg">settings</span>
          <span class="OptionItem">Beállítások</span>
        </div>
      </RouterLink>

      <div @click.prevent="shareProfileLink" class="Option text-neutral-600">
        <span class="material-symbols-outlined text-lg">share</span>
        <span class="OptionItem">Profil megosztása</span>
      </div>

      <div @click.prevent="Logout" class="Option text-red-600 border-t-[1px] border-neutral-300">
        <span class="material-symbols-outlined text-lg">logout</span>
        <span class="OptionItem">Kijelentkezés</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#separator {
  @apply mx-4;
}
.dropdown {
  z-index: 1000;
  position: relative;

  @apply flex flex-col justify-between content-center items-start;
}
.Option {
  @apply flex flex-row justify-start content-center items-center gap-2 py-2 px-4 w-full hover:bg-neutral-200 active:bg-neutral-50 duration-200 text-sm cursor-pointer;
}
.OptionItem {
  @apply font-medium;
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

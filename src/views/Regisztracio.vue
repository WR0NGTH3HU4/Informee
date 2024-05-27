<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ref } from 'vue';
import Button from '../components/Button.vue';
import Input from '@/components/Input.vue';
import passwdShown from '@/components/passwdShown.vue';
import passwdHidden from '@/components/passwdHidden.vue';
import { onMounted } from 'vue';
import { ApiWrapper } from '@/composables/ApiWrapper';
import { useUserStore } from '@/stores/user';
import Modal from '@/components/Modal.vue';

const userStore = useUserStore();
const router = useRouter();
const email = ref('');
const userName = ref('');
const passwd = ref('');
const modalShown = ref(false);

let passShown = ref<boolean>(false);

const onShown = () => {
  passShown.value = !passShown.value;
};

const onSignUp = async () => {
  try{
    const res = await ApiWrapper.post('auth/register', {
    email: email.value,
    password: passwd.value,
    username: userName.value,
    displayName: userName.value
  });
  if (res.type == 'success') {
    const userReq = async () => {
      const userRes = await ApiWrapper.post<{ token: string }>('auth/login', {
        email: email.value,
        password: passwd.value
      });

      if (userRes.type == 'success') {
        userStore.setJwt(userRes.data.token);
        router.push('Posztok');
      }else{
        modalShown.value = true;
      }
      
    };
  }
  }catch(error: any){
    modalShown.value = true;
  }

};

onMounted(() => {
  passShown.value = false;
  modalShown.value = false
});
</script>

<template>
    <Teleport to="#modals">
    <Modal v-model="modalShown">
      <div class="h-full flex flex-col items-center justify-center">
        <span class="material-symbols-outlined text-neutral-600 text-6xl">error</span>
        <h3 class="ErrorMsg text-center text-2xl font-bold text-neutral-700">nemtom</h3>
        <p class="Explanation text-center text-neutral-500">turros rendszergazda vagyok</p>
      </div>
    </Modal>
  </Teleport>
  <main class="flex justify-center items-center h-full">
    <div
      class="flex flex-col p-6 bg-neutral-100 shadow-md justify-between items-center content-center border border-neutral-300 rounded-lg gap-4"
    >
      <div class="w-full flex justify-start">
        <h1 class="text-neutral-800 text-3xl font-semibold">Regisztráció</h1>
      </div>
      <div class="InputContainer">
        <h3 class="inputName">E-mail</h3>
        <Input type="text" id="email" placeholder="E-mail" v-model="email" />
      </div>
      <div class="InputContainer">
        <h3 class="inputName">Felhasználónév</h3>
        <Input type="text" id="username" placeholder="Felhasználónév" v-model="userName" />
      </div>
      <div class="InputContainer">
        <h3 class="inputName">Jelszó</h3>
        <div class="passwdCon">
          <Input
            :type="passShown ? 'text' : 'password'"
            id="passwdinput"
            :class="{ hide: !passShown }"
            class="relative w-full"
            placeholder="Jelszó"
            v-model="passwd"
          />
          <span v-if="passShown" @click.prevent="onShown" class="material-symbols-outlined"> visibility_off </span>
          <span v-else @click.prevent="onShown" class="material-symbols-outlined"> visibility </span>
        </div>
      </div>
      <div class="flex flex-row justify-between content-center items-center w-full gap-8">
        <h5 class="text-neutral-500 font-medium flex flex-row">
          Van már fiókod?<RouterLink to="Bejelentkezes"
            ><h5 class="text-orange-500 underline" id="Reg">Jelentkezz be!</h5></RouterLink
          >
        </h5>
        <Button text="Regisztráció" type="primary" @click.prevent="onSignUp"></Button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.InputContainer {
  @apply w-full flex flex-col justify-center content-center;
}
.inputName {
  @apply text-neutral-500 mb-1 font-medium;
}
.passwdCon {
  @apply flex flex-row justify-between content-center items-center w-full relative;

  & span {
    @apply text-neutral-500 absolute right-2 mt-[1px] text-[22px];
  }
}
.show {
  width: 3rem;
  height: 3rem;
  padding: 5px;
}

#email {
  width: 100%;
}
#passwdinput {
  @apply tracking-normal;
  &.hide {
    @apply tracking-widest;
  }
}
#Reg {
  padding-left: 5px;
}
</style>

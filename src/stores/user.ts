import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/types/User';

export const useUserStore = defineStore('user', () => {
  const currentUser: Ref<User | null> = ref(null);

  function clearUser() {
    currentUser.value = null;
  }

  function setJwt(token: string) {
    currentUser.value = {
      jwt: token
    };
  }

  function loggedIn(): boolean {
    return currentUser.value != null;
  }

  function getUser(): any {
    return currentUser.value;
  }

  return { loggedIn, getUser, setJwt, clearUser };
});

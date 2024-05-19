import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/types/User';

export const useUserStore = defineStore('user', () => {
  const currentUser: Ref<User | null> = ref(null);

  function clearUser() {
    currentUser.value = null;
  }

  function setJwt(token: string): void {
    currentUser.value = {
      jwt: token
    };
  }

  function loggedIn(): boolean {
    return currentUser.value != null;
  }

  function getUser(): User | null {
    return currentUser.value;
  }

  function getJwt(): string | undefined {
    if (loggedIn()) 
      return currentUser.value?.jwt;

    return;
  }

  function getUserData(): User['data'] {
    if (loggedIn()) 
      return currentUser.value?.data;

    return;
  }

  return { loggedIn, getUser, getUserData, getJwt, setJwt, clearUser };
});

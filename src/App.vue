<script setup lang="ts">
import { ref, watch } from 'vue';
import Modal from '@/components/Modal.vue';
import { useUserStore } from '@/stores/user';
import Navbar from './components/Navbar.vue';



const ModalShown = ref<boolean>(false);

const userStore = useUserStore();
const isModalShown = ref(false);

watch(
  () => userStore.getStatus(),
  (newStatus) => {
    isModalShown.value = newStatus !== null && newStatus !== 200;
  }
);


const closeModal = () => {
  isModalShown.value = false;
  userStore.setStatus(null);
};

</script>

<template>

  <div id="app">
    <Navbar></Navbar>
    <Modal :isShown="isModalShown" @close="closeModal" />
    <RouterView />
  </div>

</template>

<style>
  body {
    font-family: 'Nunito', sans-serif;
  }
</style>

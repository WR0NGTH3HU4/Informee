<script setup lang="ts">
import { ref, watch } from 'vue';
import Modal from '@/components/Modal.vue';
import { useUserStore } from '@/stores/user';
import Navbar from './components/Navbar.vue';



const ModalShown = ref<boolean>(false);

const userStore = useUserStore();
const isUserLoggedIn = ref(false); // Start with false assuming the user is not logged in initially
const isModalShown = ref(false); // Track whether the modal is shown

watch(() => userStore.getStatus(), (status) => {
  // Check if the status indicates that the user is not logged in
  if (status !== 200) {
    isUserLoggedIn.value = false;
    isModalShown.value = true; // Show modal when user is not logged in
  } else {
    isUserLoggedIn.value = true;
    isModalShown.value = false; // Hide modal when user is logged in
  }
});


const closeModal = () => {
  isModalShown.value = false; // Close the modal
  userStore.clearStatus(); // Clear the status
};
</script>
<template>

  <div id="app">
    <Navbar></Navbar>
    
    <RouterView />

    <!-- Show modal only if user is not logged in -->
    <Modal :isShown="isModalShown" @close="closeModal"></Modal>
  </div>

</template>

<style>
  body {
    font-family: 'Nunito', sans-serif;
  }
</style>
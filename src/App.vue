<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Logo from './components/Logo.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
import { onMounted, ref } from 'vue';


const ModalShown = ref<boolean>(false);

const closeModal = () => {
  ModalShown.value = false;
};

onMounted(() => {
  ModalShown.value = false;
});
</script>

<template>
  <Navbar />
  <RouterView />
  
  <Modal :isShown="ModalShown" @close="closeModal" />
</template>

<style scoped>

</style>
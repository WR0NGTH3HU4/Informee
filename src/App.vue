<script setup lang="ts">
import { ref, watch } from 'vue';
import Modal from '@/components/Modal.vue';
import { useUserStore } from '@/stores/user';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import router from './router';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const route = useRoute();
const isUserLoggedIn = ref(false); 
const isModalShown = ref(false); 

watch(() => userStore.getStatus(), (status) => {
 
  if (status !== 200) {
    isUserLoggedIn.value = false;
    isModalShown.value = true; 
  } else {
    isUserLoggedIn.value = true;
    isModalShown.value = false; 
  }
});


const closeModal = () => {
  isModalShown.value = false; 
  userStore.clearStatus(); 
};


</script>
<template>
  <div id="modals"></div>
  <Navbar class="z-10 relative"></Navbar>
  <RouterView />
  <Footer v-if="route.name ==='Kezdolap'|| route.name ==='Rolunk'"> </Footer>
</template>

<style>
</style>
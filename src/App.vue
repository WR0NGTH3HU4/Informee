<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'*/
import Logo from './components/Logo.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

function asd() {
  alert('asdasdasd')
}
</script>

<template>

    <Navbar />
    <RouterView/>
    

</template>

<style scoped>
</style>

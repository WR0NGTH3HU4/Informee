<script setup lang="ts">
/*import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'*/
import Navbar from './components/Navbar.vue'
import Button from './components/Button.vue';
  

</script>

<template>
    <div ref="ParentCompRef">

    </div>

    <Navbar></Navbar>
    <Button text="Primary button" type="primary"></Button>
    <Button text="Danger button" type="danger"></Button>
</template>

<style scoped>

</style>

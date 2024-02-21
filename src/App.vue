<script setup lang="ts">
/*import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'*/
import Logo from './components/Logo.vue';
import Navbar from './components/Navbar.vue'
import Button from './components/Button.vue';
function asd() {
    alert("asdasdasd")
}  

</script>

<template>
    <div ref="ParentCompRef">

    </div>

    <Navbar></Navbar>
    <!--
        <Button text="Primary button" type="primary"></Button>
        <Button text="Danger button" type="danger"></Button>
        <Button text="Muted button" type="muted"></Button>
        <Button text="Success button" type="success"></Button>
    -->
    <Logo></Logo>
    <Button text="Primary button" type="primary"></Button>
    <Button text="Danger button" type="danger"></Button>
</template>

<style scoped>

</style>

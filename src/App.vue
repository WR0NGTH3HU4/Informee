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

  <!--<Button text="Primary button" type="primary"></Button>-->
  <!--<Button text="Danger button" type="danger"></Button>-->
  <!--<PostActionButton class="upvote"></PostActionButton>-->
  <RouterView class=""/>


  <Footer />

</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    
  }


</style>

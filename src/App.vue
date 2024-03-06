<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'*/
import Logo from './components/Logo.vue'
import Navbar from './components/Navbar.vue'
import Button from './components/Button.vue'
import PostActionButton from './components/PostActionButton.vue'

function asd() {
  alert('asdasdasd')
}
</script>

<template>
  <Navbar />
  <Button text="Primary button" type="primary"></Button>
  <Button text="Danger button" type="danger"></Button>
  <PostActionButton class="upvote"></PostActionButton>
  <PostActionButton class="dislike"></PostActionButton>
  <PostActionButton class="share"></PostActionButton>
  <PostActionButton class="report"></PostActionButton>
  <RouterView />
</template>

<style scoped></style>

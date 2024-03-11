<script setup>
import Button from '../components/Button.vue'
import PostActionButton from '../components/PostActionButton.vue'
</script>

<template>
    <div>
        <h2>kezdes lapja</h2>
        
  <Button text="Primary button" type="primary"></Button>
  <Button text="Danger button" type="danger"></Button>
  <PostActionButton class="upvote"></PostActionButton>
  <PostActionButton class="dislike"></PostActionButton>
  <PostActionButton class="share"></PostActionButton>
  <PostActionButton class="report"></PostActionButton>
    </div>
</template>
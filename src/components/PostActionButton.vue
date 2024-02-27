<script setup lang="ts">

</script>

<template>
    <button :class="type" @click="click">{{ text }}</button>
</template>

<style scoped>
    .upVote {
        border-radius: 10px;
    }
   
</style>

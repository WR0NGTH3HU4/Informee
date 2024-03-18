<script lang="ts" setup>
    import { RouterLink, RouterView } from 'vue-router'
    import {ref} from 'vue'
    import Button from '../components/Button.vue'
    import Postediting from '@/components/Postediting.vue';
    import Uploaded from '@/components/Uploaded.vue'
    import UploadFile from '@/components/UploadFile.vue'
</script>
<template>
    
    <div class="balloldal">
        <h2>SajatPosztok</h2>
    </div>
    <div class="jobboldal">
        <h2>SajatPosztok</h2>
    </div>
</template>
<style>
.balloldal{
    background-color: brown;
    @apply flex flex-row justify-between content-center;
        height: 100%;
        width: 30%;
        margin: 10px
        
}
.jobboldal{
    background-color: blue;
    @apply flex flex-row justify-between content-center;
        height: 100%;
        width: 50%;
        margin: 10px
}
</style>

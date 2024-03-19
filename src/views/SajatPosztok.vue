<script lang="ts" setup>
    import { RouterLink, RouterView } from 'vue-router'
    import {ref} from 'vue'
    import Button from '../components/Button.vue'
    import Postediting from '@/components/Postediting.vue';
    import Uploaded from '@/components/Uploaded.vue'
    import UploadFile from '@/components/UploadFile.vue'
    import Post from '@/components/Post.vue'
    import Bio from '@/components/Bio.vue'
</script>
<template>
<div class="full_page">


    <div class="bio">
        <Bio/>
    </div>
   <!-- <div class="posztok">
        <Post/>
    </div>-->
</div>
</template>
<style>
.full_page{
    @apply flex  justify-between content-center;
}

.posztok{
    background-color: blue;
    @apply flex flex-row justify-between content-center;
        
    margin-top:30px
        
        
        
}
</style>

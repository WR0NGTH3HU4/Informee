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
   <div class="posztok">
       <div class="poszt">
            <Post/>
       </div>
       
        
    </div>
</div>
</template>
<style>
.full_page{
    @apply flex  justify-between content-center;
}

.posztok{
    
    @apply flex flex-col justify-between content-center;
        
    width: 70%;

    
        
        
}
.poszt{
    margin-left: 10px;
    margin-right: 10px;
    height: auto;
}

@media (max-width: 800px) {
    .full_page{
    @apply flex flex-col justify-between content-center;
}
}
@media (min-width: 800px) {
    .bio{
        width: 550px;
    }
}

</style>

<script lang="ts" setup>
import Button from '../components/Button.vue'

</script>
<template>
<div class="full_bio">
    
    <div class="fejlec">
        <img src="../assets/fooldal_logo.svg" alt="">
        <div class="name">
            <h4>molnarkiki</h4>
            <h3>Molnár Krisztián</h3>
        </div>
        
    </div>
    <div class="bio">
        <div>
            <h3>Bio</h3>
        </div>

    </div>
</div>


</template>
<style lang="scss">
    .full_bio{
        @apply flex flex-col justify-center content-center ;
        background-color:lightblue;
    }
    .fejlec{
        @apply flex flex-row justify-center content-center ;
        background-color: cadetblue;
        //padding: 30px;
        width: 100%;
        height: 40%;
    }
    img{
        width: 8rem;
        padding: 10px;
    }
    .name{
        @apply flex flex-col justify-center content-center ;
    }
</style>
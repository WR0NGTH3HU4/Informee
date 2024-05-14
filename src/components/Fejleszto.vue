<script lang="ts" setup>

import Input from '../components/Input.vue'
import linkButton from './linkButton.vue';
</script>


<template>
    <div class="fejleszto">
        <div class="fejlec">
        <img src="/powerpoint/IMG/kulimak.png" alt="">
        <div class="name">
            
            
            <h3>Molnár Krisztián</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid, repudiandae cum doloremque officia quibusdam quis. Maiores, natus odio molestiae ipsum ex architecto vero harum libero, deleniti consequuntur neque excepturi.
            </p>
        </div>
        
    </div>
    </div>





</template>
<style lang="scss">
    .fejleszto{
        @apply flex flex-col justify-start content-center;
        background-color: red;
        border-radius: 20px;
        width: 800px;
        height: 400px;
    }
    .fejlec{
        @apply flex flex-row justify-start content-center drop-shadow-lg border-neutral-300 ;
        //background-color: cadetblue;
        //height: 40%;
        border-radius: 10px;
    }
    img{
        
        border-radius: 100%;
        width: 300px;
        height: 300px;
    }
    .tartalom{
        @apply flex flex-col justify-start content-center
    }

</style>
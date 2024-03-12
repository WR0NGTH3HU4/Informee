<script lang="ts" setup>
    import { RouterLink, RouterView } from 'vue-router'
    import {ref} from 'vue'
    import Button from '../components/Button.vue'
    
    import Postediting from '@/components/Postediting.vue';
</script>
<template>

    <div class="head">
        <h1 class="text-neutral-800 text-4xl">Posztszerkesztő</h1>
        <div class="validating">
            <Button type="secondary" text="Módosítások eldobása"></Button>
            <Button id="Mentes" type="primary" text="Mentés"></Button>
        </div>
    </div>
    <!--Posztszerkesztő-->
    <Postediting/>
    <!--Feltöltött anyagok-->
    <!--Anyag feltöltése-->

</template>
<style>

    .head{
        @apply w-full flex flex-row justify-between content-center items-center;
        padding: 0px 5px 0px 10px;
        margin-top: 3%;
        margin-bottom: 3%;
    }
    .validating{
       @apply flex flex-row justify-between content-center items-center;
       
    }
    #Mentes{
        margin: 0 10px;
    }
</style>
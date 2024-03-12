<script setup lang="ts">
    import {ref} from 'vue'
    import Input from './Input.vue';
</script>
<template>
    
    <div class="container">
            <div class="cim Title">
                <h3>Cím</h3>
                <Input id="cim" placeholder="Cím"/>
            </div>
            <div class="leiras Title">
                <h3>Leírás</h3>
                <Input id="leriras" placeholder="Leírás"/>
            </div>
            <div class="tartalom Title flex-grow">
                <h3>Tartalom</h3>
                <Input id="tartalom" placeholder="Tartalom"/>
            </div>
    </div>
</template>
<style lang="scss" scoped>
    .container{
        @apply flex flex-col justify-start content-center;
        height: 100%;
        margin: 0px 10px;
    }
    #tartalom{
        height: 92%;
        
    }
    #tartalom::placeholder {
        vertical-align: top; 
    }
    .Title{
        @apply text-neutral-500
    }
    
</style>
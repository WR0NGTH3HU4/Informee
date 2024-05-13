<script lang="ts" setup>
    import Input from './Input.vue';
    import Button from './Button.vue';
    import {ref} from 'vue'


</script>
<template>
    <div class="searchbar">
        <Input id="bar" type="text" placeholder="Keresés"/>
        <Button type="primary" text="Keresés"></Button>
        <Button type="secondary" text="Rendezés"></Button>
        
    </div>
</template>
<style lang="scss" scoped>
    .searchbar{
        @apply flex flex-row justify-between content-center items-center w-full;
        #bar{
            width: 80%;
        }
    }

</style>
<script lang="ts" setup>

import Fejleszto from '../components/Fejleszto.vue'
import linkButton from './linkButton.vue';
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue'
import Button from '../components/Button.vue'

</script>
<template>
    <div class="full_page">
        
        <Fejleszto/>
            
            
    </div>
</template>
<style>
.full_page{
    @apply flex  justify-between content-center;
}
</style>
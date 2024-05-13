<script lang="ts" setup>

import Input from '../components/Input.vue'
import linkButton from './linkButton.vue';
</script>


<template>
    <div class="fejleszto">
        <img src="" alt="">
        <div class="tartalom">
            <h4>Molnár Kirsztián</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias repellendus sequi accusantium aliquam quas pariatur, distincti</p>
            <div class="linkek">
                <linkButton text="YouTube" class="linkButton full-width"></linkButton>
                <linkButton text="Weboldal" class="WeboldalLink full-width"></linkButton>
            </div>
        </div>
    </div>





</template>
<style lang="scss">
    .fejleszto{
        @apply flex flex-col justify-start content-center
        background-color: #E5E5E5;
        border-radius: 20px;
        width: 800px;
        height: 400px;
    }
    img{
        
        border-radius: 100%;
        width: 300px;
    }
    .tartalom{
        @apply flex flex-row justify-start content-center
    }

</style>
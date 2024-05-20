<script setup lang="ts">
    
</script>
<template>
    <div class="container w-full">
        <h3 class="Title">Feltöltött anyagok</h3>
        <div class="file">
            <img src="../assets/logo.svg" alt="">
            <h3 class="Text text-2xl">kép</h3>
            <a class="Text" href="">valami</a>
            <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.13896 30C4.37507 30 3.72114 29.728 3.17716 29.184C2.63319 28.6401 2.36121 27.9861 2.36121 27.2222V4.16663H0.666748V1.38888H8.66675V0H19.3334V1.38888H27.3334V4.16663H25.639V27.2222C25.639 27.9722 25.3635 28.6227 24.8126 29.1736C24.2617 29.7245 23.6112 30 22.8612 30H5.13896ZM22.8612 4.16663H5.13896V27.2222H22.8612V4.16663ZM9.19454 23.7222H11.9723V7.63888H9.19454V23.7222ZM16.0279 23.7222H18.8056V7.63888H16.0279V23.7222Z" fill="#EF4444"/>
            </svg>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .container{
        @apply flex flex-col justify-center content-center
    }
    .file{
        @apply flex flex-row justify-between content-center items-center;
        padding:5% 20px;
    }
    .Title{
        @apply text-neutral-800 text-3xl
    }
    .Text{
        @apply text-neutral-600 font-bold
    }
    img{
        width:10rem;
    }
</style>    





<script setup lang="ts">
import Button from '@/components/Button.vue';

</script>

<template>

    <div class="hatter">
      <div class="hullamocskak">

      </div>
    </div>

    <div class="tartalom">

      <div class="tartalom-bal">
        <h1>Valami menő text</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam consectetur dolore quidem quae? Laboriosam assumenda, ducimus illum molestias quo in illo quis pariatur accusamus consequuntur obcaecati, provident fugit? Aut.</p>
        <Button class="primary" text="Bejelentkezés"></Button>
        <h5 class="text-neutral-500 font-medium flex flex-row">vagy <RouterLink to="/Registration"><h5 class="text-neutral-500 underline" id="Reg"> Regisztrálj!</h5></RouterLink></h5>
      </div>
      

      <div class="tartalom-jobb">
        <img src="../assets/fooldal_logo.svg" alt="">
      </div>
    </div>


    <linkButton text="link" class="linkButton"></linkButton>


<!--Footer-->

</template>

<style scoped>
    .hullamocskak {
      position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/hullamcock.svg');
    background-size: cover; /* Adjusts background size to cover entire container */
    background-position: center; /* Centers the background image */
    z-index: -1;
    }
     .tartalom{
      @apply flex flex-row justify-between content-center items-center;
      width: 100%;
      padding: 10%;
    }
    
    .tartalom-jobb{
      @apply flex flex-col justify-center content-center items-center;
    }
    .tartalom-bal{
      @apply flex flex-col justify-center content-center items-center w-full
    }
    h1{
      @apply text-7xl text-neutral-800;
      margin-bottom: 80px
    }
    #Reg{
        padding-left: 5px;
    }
    svg{
      width: 100%;
      height: 100%;
    }
    .hatter{
      width: 100%;
    }
</style>
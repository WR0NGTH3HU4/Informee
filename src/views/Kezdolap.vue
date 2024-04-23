<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>

<template>

    <div class="hatter">
      <div class="hullamocskak">

      </div>
    </div>

    <div class="flex flex-row justify-evenly content-center items-center h-full">

      <div class="flex flex-col w-[600px] gap-8">
        <h1 class="text-neutral-800 text-6xl">Informee</h1>
        <p class="text-neutral-700 font-normal">Mindig is vágytál egy helyre, ahol segítséget kérhetsz másoktól? Vagy esetleg szeretnél segíteni másoknak? Ezen az odalon mindkettőre lehetőséged van! Ha esetleg kérdésed lenne akkor nézd meg a gyakran ismételt kérdések oldalunkat <a href="#">itt</a>.</p>
        <span class="text-neutral-500 font-medium flex flex-row items-center gap-4">
          <Button class="primary" text="Jelentkezz be"></Button>
          <RouterLink to="Regisztracio">
            <span class="text-neutral-500 underline" id="Reg">vagy kezdj hozzá it!</span>
          </RouterLink>
        </span>
      </div>
      

      <div class="flex flex-col justify-center content-center items-center aspect-square w-[500px]">
        <img src="../assets/fooldal_logo.svg" alt="">
      </div>
    </div>





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

    .hatter{
      width: 100%;
    }
</style>
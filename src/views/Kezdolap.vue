<script setup lang="ts">
import Button from '@/components/Button.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="hatter">
    <div class="hullamocskak"></div>
  </div>

  <div class="FullPage flex flex-row justify-evenly content-center items-center h-full min-h-[100vh] px-3">
    <div class="content flex flex-col w-[600px] gap-8">
      <h1 class="text-neutral-800 text-6xl font-urbanist leading-[70px] font-[500]">Mert a tudás mindenkinek jár</h1>
      <p class="text-neutral-700 font-normal">
        Az Informee Magyarország legújabb tudás-orientált fórumja. Oszd meg a saját vázlataid, tételeid és válogass
        közösségünk könyvtárából. Ha esetleg kérdésed lenne, nézd meg a gyakran ismételt kérdések oldalunkat
        <RouterLink to="/faq"><b>itt.</b></RouterLink>
      </p>
      <span class="text-neutral-500 font-medium flex flex-row items-center gap-4">
        <RouterLink to="bejelentkezes">
          <Button class="primary" text="Jelentkezz be"></Button>
        </RouterLink>
        <RouterLink to="Regisztracio">
          <span class="text-neutral-500 underline" id="Reg">vagy kezdj hozzá itt!</span>
        </RouterLink>
      </span>
    </div>

    <div class="flex flex-col justify-center content-center items-center aspect-square w-[500px]">
      <img src="../assets/fooldal_logo.svg" alt="" />
    </div>
  </div>


</template>

<style scoped>
.hullamocskak {
  position: fixed;
  top:0;
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/hullamcock.svg');
  background-position: center; 
  background-size: cover;
  z-index: -5;
}

.hatter {
  width: 100%;
  
  
}
@media only screen and (max-width: 800px) {
  .FullPage {
    @apply flex-col-reverse;
  }
}
@media only screen and (max-width: 650px) {
  img {
    @apply w-3/4;
  }
  .content {
    @apply w-3/4;
  }
}
@media only screen and (max-width: 520px) {
  img {
    @apply w-3/5;
  }
  .content {
    @apply w-3/5;
  }
  h1 {
    @apply text-3xl;
  }
}
</style>

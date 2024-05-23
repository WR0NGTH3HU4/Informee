<script setup lang="ts">
import DEVbio from '../components/DEVbio.vue';
const Kevin = new URL('@/assets/Kevin.png', import.meta.url).href;
const Andras = new URL('@/assets/Andras.png', import.meta.url).href;
const Mate = new URL('@/assets/Kulimak.png', import.meta.url).href;
const Levente = new URL('@/assets/Levente.png', import.meta.url).href;
const Dominik = new URL('@/assets/Dominik.png', import.meta.url).href;
</script>

<template>
  <div class="Rolunk flex flex-col justify-center content-center items-center">
    <h3 class="text-3xl text-neutral-800 my-20">Fejlesztők</h3>
    <div class="Cards flex flex-row flex-wrap justify-center content-center items-center p-3">

      <DEVbio 
        name="Csanádi Kevin" 
        :pic="Kevin" 
        firstLinkURL="" 
        secondLinkURL="" 
        firstLinkName="Facebook" 
        secondLinkName="Instagram" 
        text="Bro doesn't exist I guess."
      ></DEVbio>
      <DEVbio 
        name="Császár András" 
        :pic="Andras" 
        firstLinkURL="" 
        secondLinkURL="" 
        firstLinkName="Facebook" 
        secondLinkName="Instagram" 
        text="..."
      ></DEVbio>
      <DEVbio 
        name="Kulimák Máté" 
        :pic="Mate" 
        firstLinkURL="" 
        secondLinkURL="" 
        firstLinkName="Facebook" 
        secondLinkName="Instagram" 
        text="Sziasztok, van horgászengedélyem és nagyon szeretek programozni. ❤️Informee❤️"
      ></DEVbio>
      <DEVbio 
        name="Kővágó Levente" 
        :pic="Levente" 
        firstLinkURL="" 
        secondLinkURL="" 
        firstLinkName="Facebook" 
        secondLinkName="Instagram" 
        text="Hello! A Türr Istán technikum 12.a osztályos tanulója vagyok szoftverfejlesztői ágazaton, Baján. Szerbiában egy kis faluban élek, Bezdánban. Versenyszinten kajakozok és napi szinten edzek. A projektben az én feladatom volt figmában a grafikus tervek elkészítése, illetve a logó megtervezése."
      ></DEVbio>
      <DEVbio 
        name="Tátrai Dominik Oszkár" 
        :pic="Dominik" 
        firstLinkURL="" 
        secondLinkURL="" 
        firstLinkName="Facebook" 
        secondLinkName="Instagram" 
        text="Hello! Szoftverfejlesztőnek tanulok, ez mellett gitározok, és a bajai logiscoolban tanítok gyerekeket programozni. A feladataim az oldal design-jára (kódolás) és dinamikusságára terjedtek ki, valamint grafikus terveket is készítettem."
      ></DEVbio>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media only screen and (max-width: 860px) {
  .Cards {
    @apply flex flex-col justify-center content-center items-center;
  }
}
</style>

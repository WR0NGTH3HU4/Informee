<script setup lang="ts">
import { defineProps } from 'vue';
import LinkButton from './linkButton.vue';

const props = defineProps<{
  name: string;
  pic: string;
  firstLinkURL: string;
  secondLinkURL: string;
  firstLinkName: string;
  secondLinkName: string;
  text: string;
}>();
</script>

<template>
  <div class="DEVbio flex flex-row justify-between content-center items-center  w-4/12 bg-neutral-100 rounded p-3 border-neutral-300 drop-shadow-lg relative m-5">
    <div class="svg"></div>
    <div class="flex flex-col justify-center content-center items-start">
      <div class="BioIMG" :style="{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', width: '15em', height: '15em' }"></div>
    </div>
    <div class="bio flex flex-col justify-between content-center items-center ml-3 w-full">
      <div>
        <h3>{{ name }}</h3>
      </div>
      <div class="w-full">
        <p>{{ text }}</p>
      </div>
      <div class="flex flex-row justify-start content-start items-start w-full">
        <LinkButton :text="firstLinkName" :href="firstLinkURL" class="FacebookLink mr-3"></LinkButton>
        <LinkButton :text="secondLinkName" :href="secondLinkURL" class="InstagramLink"></LinkButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DEVbio {
  border-width: 1px;
  position: relative;
}

.BioIMG {
  border-radius: 100%;
}

.svg {
  background-image: url("../assets/BioWave.svg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; // Set the appropriate width for your SVG
  height: 100%; // Make it fill the height of the parent container
  background-size: contain; // Ensure the SVG fits within the container
  background-repeat: no-repeat;
  z-index: -1;
  margin-top: 0.1px;
  margin-left: 0.1px
}
</style>
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

  <div class="DEVbio flex flex-row justify-between content-center items-center  w-4/12 min-h-[350px]  bg-neutral-100 rounded pl-6 pr-6 pb-3 pt-3 border-neutral-300 drop-shadow-lg relative m-5">

    <div class="svg"></div>
    <div class="flex flex-col justify-center content-center items-center">
      <div
        class="BioIMG drop-shadow-xl"
        :style="{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', width: '13em', height: '13em' }"
      ></div>
    </div>
    <div class="bio flex flex-col justify-between content-center items-start ml-3 w-full">
      <div>
        <h3 class="text-neutral-700 font-medium text-lg my-3">{{ name }}</h3>
      </div>
      <div class="w-full">
        <p class="text-neutral-700 font-medium text-base text-justify">{{ text }}</p>
      </div>
      <div class="flex flex-row justify-start content-start items-start w-full my-3">
        <LinkButton :text="firstLinkName" :href="firstLinkURL" class="FacebookLink mr-3"></LinkButton>
        <LinkButton :text="secondLinkName" :href="secondLinkURL" class="InstagramLink"></LinkButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DEVbio {
  border-width: 1px;
}

.BioIMG {
  border-radius: 100%;
}

.svg {
  background-image: url('../assets/BioWave.svg');
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; // Set the appropriate width for your SVG
  height: 100%; // Make it fill the height of the parent container
  background-size: contain; // Ensure the SVG fits within the container
  background-repeat: no-repeat;
  z-index: -1;
  margin-top: 0.1px;
  margin-left: 0.1px;
}
@media only screen and (max-width: 1445px) {
  .DEVbio {
    @apply w-3/6;
  }
  @media only screen and (max-width: 1250px) {
    .DEVbio {
      @apply w-1/2;
    }
  }
  @media only screen and (max-width: 970px) {
    .DEVbio {
      @apply w-3/4;
    }
  }
  @media only screen and (max-width: 660px) {
    .DEVbio {
      @apply w-full flex-wrap;
    }
  }
}
</style>

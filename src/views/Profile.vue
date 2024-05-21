<script setup lang="ts">
import Bio from '../components/Bio.vue';
import TextBox from '@/components/TextBox.vue';
import Button from '@/components/Button.vue';
import linkButton from '@/components/linkButton.vue';
</script>
<template>
  <div class="FullPage w-full h-full">
    <div class="Profile flex flex-col justify-center content-center items-start bg-neutral-50 p-5">
      <div class="Banner flex flex-row justify-between content-center items-center w-full">
        <div class="flex flex-col justify-center content-center items-start">
          <h3 class="text-neutral-400">molnarKiki</h3>
          <h3 class="text-neutral-400">Molnar Krisztian</h3>
        </div>
        <div class="ProfilePic w-96 aspect-square bg-no-repeat bg-cover"></div>
      </div>
      <div class="flex flex-row justify-between content-center items-center w-full my-3">
        <div class="flex flex-row justify-between content-center items-center w-full mr-3">
          <h3 class="user">Felhasználónév:</h3>
          <TextBox class="w-full"></TextBox>
        </div>
        <div class="flex flex-row justify-between content-center items-center w-full">
          <h3 class="user">Név:</h3>
          <TextBox class="w-full"></TextBox>
        </div>
      </div>
      <div class="Infos flex flex-col justify-center content-center items-center w-full">
        <h3>Profilkép:</h3>
        <div class="flex flex-col justify-center content-center items-center w-full">
          <Button type="primary" text="Feltöltés" class="w-full m-1"></Button>
          <Button type="secondary" text="Töröl" class="w-full m-1"></Button>
        </div>
        <div class="flex flex-col justify-center content-center items-center w-1/2 my-3">
          <h3>Bio</h3>
          <TextBox class="w-full"></TextBox>
        </div>
        <h3>Linkek</h3>
        <div class="flex flex-row justify-center content-center items-center">
          <linkButton text="Weboldal" class="WeboldalLink"></linkButton>
        </div>
        <div class="flex flex-col justify-center items-center content-center w-full">
          <div class="flex flex-row justify-between items-center content-center w-full my-3">
            <h3>Link:</h3>
            <Button type="primary" text="Hozzáad"></Button>
          </div>
          <div class="flex flex-col justify-center items-center content-center w-full">
            <TextBox class="w-full"></TextBox>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-between content-center items-center w-full">
        <Button type="primary" text="Mentés" class="w-full Mentes my-3"></Button>
        <Button type="secondary" text="Vissza" class="w-full Vissza my-3"></Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Profile {
  border: 1px solid;
  @apply border-neutral-300 rounded-lg drop-shadow-md;
}
.FullPage {
  padding: 5%;
}
.ProfilePic {
  background-image: url('../assets/logo.svg');
}
.Mentes {
  margin-right: 7.5px;
}
.Vissza {
  margin-left: 7.5px;
}
.user {
  @apply mr-3;
}
</style>

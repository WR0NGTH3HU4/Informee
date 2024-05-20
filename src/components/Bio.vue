<script setup lang="ts">
import Button from '../components/Button.vue';
import Input from '../components/Input.vue';
import LinkButton from './linkButton.vue';
import TextBox from './TextBox.vue';
import RatingButton from "../components/Ratingbutton.vue"
</script>

<template>
    <div class="FullBio flex flex-col justify-between content-center items-center bg-neutral-50 rounded border-neutral-300 drop-shadow-lg mt-3">
        <div class="Banner flex flex-row justify-start content-center items-end w-full bg-neutral-800 rounded drop-shadow-lg p-3">
            <div class="ProfilePic rounded"></div>
            <div class="Usernames flex flex-col justify-center content-center items-start mx-1">
                <h3 class="text-neutral-400 font-normal">Bezdan</h3>
                <h3 class="text-neutral-50 font-normal">Kovago Levente</h3>
            </div>
        </div>
        <div class="content flex flex-col justify-evenly content-center items-center h-full p-3 w-full">
            <div class="BioPhrase w-full flex flex-col justify-center content-center items-start ">
                <h3>Bio</h3>
                <TextBox class="w-full"></TextBox>
            </div>
            <div class="Ratings w-full flex-col justify-center content-center items-start">
                <h3>Értékelések</h3>
                <div class="flex flex-row justify-center content-center items-center w-full gap-3">
                    <RatingButton type="like" number="12" class="w-full"></RatingButton>
                    <RatingButton type="dislike" number="1" class="w-full"></RatingButton>
                </div>
            </div>
            <div class="Links flex flex-row flex-wrap justify-center content-center items-center w-full gap-3">
                <LinkButton text="YouTube" class="linkButton"></LinkButton>
                <LinkButton text="YouTube" class="WeboldalLink"></LinkButton>
                <LinkButton text="YouTube" class="EmailLink"></LinkButton>
                <LinkButton text="YouTube" class="SteamLink"></LinkButton>
                <LinkButton text="YouTube" class="FacebookLink"></LinkButton>
            </div>
            <Button text="Szerkesztés" type="secondary" class="w-full"></Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.FullBio {
    border-width: 1px;
}
.Banner {
    background-image: url('../assets/banner.svg');
    background-size: cover;
}
.ProfilePic {
    background-image: url('../assets/Levente.png');
    background-size: cover;
    width: 10rem;
    height: 10rem;
}
@media only screen and (max-width:1000px) {
    .content{
        @apply gap-y-10
    }
}
</style>
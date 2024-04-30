<script setup lang="ts">
    import Bio from "../components/Bio.vue"
</script>
<template>
    <div class="FullPage w-full h-full ">
        <div class="Profile flex flex-col justify-center content-center items-start bg-neutral-50 p-10 ">
            <div class="Banner  flex flex-row justify-between content-center items-center w-full">
                <div class="flex flex-col justify-center content-center items-start">
                    <h3>molnarKiki</h3>
                    <h3>Molnar Krisztian</h3>
                </div>
                <div class="ProfilePic w-96 aspect-square bg-no-repeat bg-cover"></div>
                
            </div>
            <div class="flex flex-row justify-between content-center items-center w-full">
                <div class="">
                    <h3>Felhasználónév:</h3>
                    
                    <!--Tbox-->
                </div>
                <div class="">
                    <h3>Név:</h3>
                    <!--Tbox-->
                </div>
            </div>
            <div class="Infos flex flex-col justify-center content-center items-center w-full">
                <h3>Profilkép:</h3>
                <div class="PhotoButtons"></div>
                <h3>Bio</h3>
                <div>

                </div>
                <h3>Linkek</h3>
                <div class="flex flex-row justify-center content-center">

                </div>
                <div>
                    <h3>Link:</h3>
                    <h3>Hozzáad</h3>
                </div>
                <div>

                </div>
                
                
            </div>
            <div class="Link">
                <div class="ProfileButtons"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .Profile{
        
        border: 1px solid;  
        @apply border-neutral-300 rounded-lg drop-shadow-md
    }
    .FullPage{
        padding: 10%;
    }
    .ProfilePic{
        background-image: url("../assets/logo.svg");

    }
</style>
<script setup lang="ts">
    import Bio from "../components/Bio.vue"
</script>
<template>
    <div class="FullPage w-full h-full ">
        <div class="Profile flex flex-col justify-center content-center items-start bg-neutral-50 ">
            <div class="Banner">
                <div class="ProfilePic"></div>
            </div>
            <div class="Infos flex flex-col justify-center content-center items-center w-full">
                <h3>Profilkép:</h3>
                <div class="PhotoButtons"></div>
                <h3>Bio</h3>
                <div>

                </div>
                <h3>Linkek</h3>
                <div>

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
        background-image: url("../assets/logo.svg")
    }
</style>
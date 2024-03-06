<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import {ref} from 'vue'
    import Button from '../components/Button.vue'
    
    import Input from '@/components/Input.vue';
</script>
<template>
    <!--     <div class="container w-full flex flex-col justify-center items-center"> -->
        <div class=" flex flex-column justify-center content-center items-center h-screen">
            <div class="loginWindow rounded-lg border-2 border-neutral-300 bg-neutral-100 drop-shadow-lg flex flex-col justify-between items-center content-center">

            <div class="TitleContainer w-full flex justify-start">
                <h1 class="text-neutral-800 text-3xl" id="Title">Regisztráció</h1>
            </div>
                <div class="w-full flex flex-col justify-center content-center">
                    <h3 class="text-neutral-500">E-mail</h3>
                    <Input id="email" placeholder="E-mail"/>
                </div>
                <div class="w-full flex flex-col justify-center content-center">
                    <h3 class="text-neutral-500">User name</h3>
                    <Input id="username" placeholder="User name"/>
                </div>
                <div class="w-full flex flex-col justify-center content-center">
                    <h3 class="text-neutral-500">Display name</h3>
                    <Input id="displayname" placeholder="E-mail"/>
                </div>
                <div class="w-full flex flex-col justify-center content-center">
                    <h3 class="text-neutral-500">Jelszó</h3>
                    <Input id="passwd" placeholder="Jelszó"/>
                </div>
                <div class="w-full flex flex-col justify-center content-center">
                    <h3 class="text-neutral-500">Jelszó megerősítés</h3>
                    <Input id="passwdconf" placeholder="Jelszó"/>
                </div>
                
                <!--PassWd input field-->

                <div class="GoToPages flex flex-row justify-between content-center items-end">

                    <h5 class="text-neutral-500 font-medium flex flex-row">Van már fiókod?<RouterLink to="/Login"><h5 class="text-orange-500 underline" id="Reg">Jelentkezz be!</h5></RouterLink></h5> 
                    <!--Login button-->
                    <Button text="Regisztráció" type="primary"></Button>
                </div>


            </div>
        </div>
        
    <!--</div> -->
    <!--Footer-->
    
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;

    }
    #email{
        width: 100%;
    }
    #passwd{
        width: 100%;
    }
    #username{
        width: 100%;
    }
    #displayname{
        width: 100%;
    }
    #passwdconf{
        width: 100%;
    }
    .loginWindow{
        width: 30%;
        height: 70%;
        padding: 2rem 1rem 2rem 1rem;
    }
    .GoToPages{
        width: 100%;
    }
    #Reg{
        padding-left: 5px;
    }

</style>
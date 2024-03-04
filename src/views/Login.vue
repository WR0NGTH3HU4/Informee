<script lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import {ref} from 'vue'
    import Button from '../components/Button.vue'
</script>
<template>
    <div class="container h-screen flex flex-col justify-center items-center content-center">
        <div class="loginWindow rounded-lg border-2 border-neutral-300 bg-neutral-100 drop-shadow-lg flex flex-col justify-between items-center content-center">

                <div class="TitleContainer w-full flex justify-start">
                    <h1 class="text-neutral-800 text-3xl" id="Title">Bejelentkezés</h1>
                </div>

                <h5>E-mail</h5>
                <!--UserName input field-->
                <h3>Jelszó</h3>
                <!--PassWd input field-->
                
                <div class="GoToPages flex flex-row justify-between">

                    <h5 class="text-neutral-500 font-medium flex flex-row">Nincs még fiókod?<RouterLink to="/Registration"><h5 class="text-orange-500 underline" id="Reg">Regisztrálj!</h5></RouterLink></h5> 
                    <!--Login button-->
                    <Button text="Bejelentkezés" type="primary"></Button>
                </div>
                
            
        </div>
    </div>
    <!--Footer-->
    
</template>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        max-width: 100vw;
        max-height: 100vw;
    }
    .loginWindow{
        width: 40vw;
        height: 30vw;
        padding: 2% 1% 2% 1%;
    }
    .GoToPages{
        width: 100%;
    }
    #Reg{
        padding-left: 5px;
    }

</style>
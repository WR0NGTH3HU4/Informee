<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import {ref} from 'vue'
    import Button from '../components/Button.vue'
    import Input from '@/components/Input.vue';
    import passwdShown from '@/components/passwdShown.vue';
    import passwdHidden from '@/components/passwdHidden.vue';
    import { onMounted } from 'vue';


    let passShown = ref<boolean>(false);
    let passConfShown = ref<boolean>(false);
    const onPasswdShown = () =>{
        
        passShown.value =!passShown.value
        
    }
    

    const onPasswdConfShown = () =>{
        passConfShown.value =! passConfShown.value
    }
    onMounted(()=>{
        passShown.value = false
        passConfShown.value = false
    })
</script>
<template>
    
        <div class="RegContainer">
            <div class="loginWindow">

            <div class="TitleContainer">
                <h1 class="" id="Title">Regisztráció</h1>
            </div>
                <div class="InputContainer">
                    <h3 class="inputName">E-mail</h3>
                    <Input id="email" placeholder="E-mail"/>
                </div>
                <div class="InputContainer">
                    <h3 class="inputName">Felhasználónév</h3>
                    <Input id="username" placeholder="Felhasználónév"/>
                </div>
                <div class="InputContainer">
                    <h3 class="inputName">Megjelenített név</h3>
                    <Input id="displayname" placeholder="Megjelenített név"/>
                </div>
                <div class="InputContainer">
                    <h3 class="inputName">Jelszó</h3>
                    <div class="passwdCon">
                        <Input :type="passShown ? 'text' : 'password'" class="passwd" placeholder="Jelszó"/>
                        <div v-if="passShown" class="PasswdSVG">
                            <passwdShown @click.prevent="onPasswdShown" class="show"/>
                        </div>
                        <div v-else class="PasswdSVG">
                            <passwdHidden @click.prevent="onPasswdShown" class="show"/>
                        </div>
                    </div>
                </div>
                <div class="InputContainer">
                    <h3 class="inputName">Jelszó megerősítés</h3>
                    <div class="passwdCon">
                        <Input :type="passConfShown ? 'text' : 'password'" class="passwd" placeholder="Jelszó"/>
                        <div v-if="passShown" class="PasswdSVG">
                            <passwdShown @click.prevent="onPasswdConfShown" class="show"/>
                        </div>
                        <div v-else class="PasswdSVG">
                            <passwdHidden @click.prevent="onPasswdConfShown" class="show"/>
                        </div>
                    </div>

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
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .loginWindow{
        @apply rounded-lg border-2 border-neutral-300 bg-neutral-100 drop-shadow-lg flex flex-col justify-between items-center content-center;
        width: 40%;
        height: 70%;
        padding: 2rem 1rem 2rem 1rem;
    }
    .GoToPages{
        @apply w-full;
    }
    .InputContainer {
        @apply w-full flex flex-col justify-center content-center;
    }
    .TitleContainer{
        @apply w-full flex justify-start
    }
    .RegContainer{
        @apply flex flex-col justify-center content-center items-center h-screen
    }
    .inputName{
        @apply text-neutral-500
    }
    .passwdCon{
        @apply flex flex-row justify-between content-center items-center w-full
    }
    .show{
        width: 3rem;
        height: 3rem;
        padding: 5px;
    }
    #email{
        width: 100%;
    }
    .passwd{
        @apply tracking-widest;
        width: 90%;
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
    #Reg{
        padding-left: 5px;
    }
    #Title{
        @apply text-neutral-800 text-3xl
    }

</style>
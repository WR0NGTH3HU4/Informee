<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import {ref} from 'vue'
    import Button from '../components/Button.vue'
    import Input from '@/components/Input.vue';
    import passwdShown from '@/components/passwdShown.vue';
    import passwdHidden from '@/components/passwdHidden.vue';
    import { onMounted } from 'vue';
    import axios from 'axios';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

    const userStore = useUserStore();
    const router = useRouter();

    const Email = ref('');
    const Passwd = ref('');
    
   
    let passShown = ref<boolean>(false);

    const onShown = () =>{
        
        passShown.value =!passShown.value
        
    }

    const onLogIn = async () =>{
        console.log(Email.value, Passwd.value)
        const res = await axios.post('http://localhost:3000/auth/login', {
            email: Email.value,
            password: Passwd.value,
        });

        userStore.setUser(res.data.data.token);
                console.log(userStore.loggedIn())
                router.push('Posztok');
    }
    onMounted(()=>{
        passShown.value = false
    })
</script>
<template>
    <div class="FullPage">
        <div class="loginWindow">
            <div class="TitleContainer">
                <h1 class="Title" id="Title">Bejelentkezés</h1>
            </div>
            <div class="InputContainer">
                <h3 class="inputName">E-mail</h3>
                <Input type="text" id="email" placeholder="E-mail" v-model="Email"/>
            </div>
            <div class="InputContainer">
                <h3 class="inputName">Jelszó</h3>
                <div class="passwdCon">
                    <Input :type="passShown ? 'text' : 'password'" id="passwdinput" :class="{'hide' : !passShown}" placeholder="Jelszó" v-model="Passwd"/>
                    <div v-if="passShown" class="PasswdSVG">
                        <passwdShown @click.prevent="onShown" class="show"/>
                    </div>
                    <div v-else class="PasswdSVG">
                        <passwdHidden @click.prevent="onShown" class="show"/>
                    </div>
                </div>
            </div>
            <div class="GoToPages">
                <h5 class="text-neutral-500 font-medium flex flex-row">Nincs még fiókod?<RouterLink to="/Registration"><h5 class="text-orange-500 underline" id="Reg">Regisztrálj!</h5></RouterLink></h5> 
                <Button text="Bejelentkezés" type="primary" @click.prevent="onLogIn"></Button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .FullPage{
        @apply flex flex-col justify-center content-center items-center h-screen
    }
    .loginWindow{
        @apply rounded-lg border-2 border-neutral-300 bg-neutral-100 drop-shadow-lg flex flex-col justify-between items-center content-center;
        width: 40%;
        height: 50%;
        padding: 2rem 1rem 2rem 1rem;
    }
    .TitleContainer{
        @apply w-full flex justify-start; 
    }
    .InputContainer{
        @apply w-full flex flex-col justify-center content-center
    }
    .GoToPages{
        @apply flex flex-row justify-between content-center items-end w-full
    }
    .Title{
        @apply text-neutral-800 text-3xl;
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
    #passwdinput{
        @apply tracking-normal;
        width: 90%;
        &.hide{
            @apply tracking-widest
        }
    }
    #Reg{
        padding-left: 5px;
    }
    
</style>
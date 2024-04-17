<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import {ref} from 'vue'
    import Button from '../components/Button.vue'
    import Input from '@/components/Input.vue';
    import passwdShown from '@/components/passwdShown.vue';
    import passwdHidden from '@/components/passwdHidden.vue';
    import { onMounted } from 'vue';

    const Email = ref('');
    const UserName = ref('');
    const DisplayName = ref('');
    const Passwd = ref('');
    const PasswdConf = ref('');

    let passShown = ref<boolean>(false);
    let passConfShown = ref<boolean>(false);

    const onPasswdShown = () =>{
        passShown.value =!passShown.value
    }

    const onPasswdConfShown = () =>{
        passConfShown.value =! passConfShown.value
    }

    function onSignUp() {

    }

    onMounted(()=>{
        passShown.value = false
        passConfShown.value = false
    })
</script>

<template>
    <main class="flex justify-center items-center h-full">
        <div class="flex flex-col p-6 bg-neutral-100 shadow-md justify-between items-center content-center border border-neutral-300 rounded-lg gap-4">
            <div class="w-full flex justify-start">
                <h1 class="text-neutral-800 text-3xl" id="Title">Regisztracio</h1>
            </div>
            <div class="InputContainer">
                <h3 class="inputName">E-mail</h3>
                <Input type="text" id="email" placeholder="E-mail" v-model="Email"/>
            </div>
            <div class="InputContainer">
                <h3 class="inputName">Username</h3>
                <Input type="text" id="email" placeholder="E-mail" v-model="Email"/>
            </div>
            <div class="InputContainer">
                <h3 class="inputName">Jelszó</h3>
                <div class="passwdCon">
                    <Input :type="passShown ? 'text' : 'password'" id="passwdinput" :class="{'hide' : !passShown}" placeholder="Jelszó" v-model="Passwd"/>
                    <div v-if="passShown" class="PasswdSVG">
                        <passwdShown @click.prevent="onPasswdShown" class="show"/>
                    </div>
                    <div v-else class="PasswdSVG">
                        <passwdHidden @click.prevent="onPasswdShown" class="show"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-between content-center items-center w-full gap-8">
                <h5 class="text-neutral-500 font-medium flex flex-row">Van mar fiokod?<RouterLink to="Bejelentkezes"><h5 class="text-orange-500 underline" id="Reg">Jelentkezz be!</h5></RouterLink></h5> 
                <Button text="Regisztracio" type="primary" @click.prevent="onSignUp"></Button>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    .InputContainer{
        @apply w-full flex flex-col justify-center content-center;
    }
    .inputName{
        @apply text-neutral-500;
    }
    .passwdCon{
        @apply flex flex-row justify-between content-center items-center w-full;
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
            @apply tracking-widest;
        }
    }
    #Reg{
        padding-left: 5px;
    }
</style>
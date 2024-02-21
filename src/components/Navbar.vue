<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
    import Logo from './Logo.vue'   
    import {ref} from 'vue'
    import Button from './Button.vue';

    interface Link{
        Id: number,
        Title: string,
        Url: string,
    }
    //Global Var helyett
    let IsLoggedIn= false;

    const LoggedInContent = ref<Link[]>([
        {Id:0,Title:"Posztok", Url:"/Posztok"},
        {Id:1,Title:"Saját posztok", Url:"/SajatPosztok"}
    ])
    const LoggedOutContent = ref<Link[]>([
        {Id:0,Title:"Kezdőlap", Url:"/Kezdolap"},
        {Id:1,Title:"Rólunk", Url:"/Rolunk"},

    ])

</script>

<template>
    <div class="FullNav">
        <div class="NavLeft">
            <!--Logo-->
            <Logo/>
            <!--Separator-->
            <svg id="separator" width="3" height="61" viewBox="0 0 3 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.60449" x2="1.60449" y2="61" stroke="#A3A3A3" stroke-width="2"/>
            </svg>
            <!--NavLinks-->
            <ul class="NavLinks">
                <li v-if="IsLoggedIn">
                    <a id="NavLink" v-for="link in LoggedInContent" :key="link.Id" :href="link.Url">{{ link.Title }}</a>
                </li>
                <li v-else>
                    <a id="NavLink" v-for="link in LoggedOutContent" :key="link.Id" :href="link.Url">{{ link.Title }}</a>
                </li>
            </ul>
            
        </div>
    <RouterLink to="/Login">
        <Button text="Bejelentkezés"></Button>
    </RouterLink>

        
    </div>



    
</template>

<style scoped>
*{
    padding: 0;
}

.FullNav{
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    
}
.NavLeft{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
}
.NavLinks{
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
#separator{
margin: 0 2rem;

}
li a{
    margin-right: 2rem;
    font-size: 125%;
    text-decoration: none;
    /*Tail-wind color*/ 
    color: #404040;
}
#NavLink:hover{
    font-size: 130%;
    font-weight: 600;
    color: #171717;
}

</style>
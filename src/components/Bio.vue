<script lang="ts" setup>
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
</script>
<template>
<div class="full_bio">
    
    <div class="fejlec">
        <img src="../assets/fooldal_logo.svg" alt="">
        <div class="name">
            <h4>molnarkiki</h4>
            <h3>Molnár Krisztián</h3>
        </div>
        
    </div>
    <div class="tartalom">
        <div class="bio">
            <div>
                <h3>Bio</h3>
                <Input id="biotext"/>
            </div>
            <div>
                <h3>Értékelések</h3>
                <div class="like">
                    <Button text="ikon" ></Button>
                    <Button text="ikon" ></Button>
                </div>
            </div>
            <div>
                <h3>Linkek</h3>
                <div >
                    <Button text="Linkek"></Button>
                    <Button text="Linkek"></Button>
                    <Button text="Linkek"></Button>
                    <Button text="Linkek"></Button>
                </div>
            </div>

        </div>
    </div>
</div>


</template>
<style lang="scss">
    .full_bio{
        @apply flex flex-col justify-center content-center ;
        background-color:lightblue;
        
    }
    .tartalom{
        margin: 10px
    }
    .fejlec{
        @apply flex flex-row justify-start content-center ;
        background-color: cadetblue;
        //padding: 30px;
        //width: 100%;
        height: 40%;
    }
    img{
        width: 9rem;
        margin-top: 30px;
        margin-right:20px ;
        padding: 10px;
    }
    .name{
        @apply flex flex-col justify-end content-center ;
    }
    Button {
        margin: 5px;
        
    }
    #biotext{
        width: 100%;
        height: 200px;
        
    }
    .like{
        @apply flex flex-row justify-center content-center ;
    }
    
    
</style>
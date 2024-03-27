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
            <div class="fullbio">
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
        @apply flex flex-col justify-center content-center drop-shadow-lg border-neutral-300 ;
        background-color: #F5F5F5;
       border-radius: 10px;
       box-sizing: 5px;
       margin: 5px;
        
    }
    .tartalom{
        margin: 10px
    }
    .fejlec{
        @apply flex flex-row justify-start content-center drop-shadow-lg border-neutral-300 ;
        background-color: cadetblue;
        //padding: 30px;
        //width: 100%;
        height: 40%;
        border-radius: 10px;
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
    @media (max-width: 800px) {
        .full_bio{
        @apply flex flex-col justify-center content-center drop-shadow-lg border-neutral-300 ;
        background-color: #D4D4D4;
       border-radius: 10px;
       box-sizing: 5px;
       margin: 10px;
      
        
    
    }
}
    
</style>
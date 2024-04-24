<script lang="ts" setup>
import Button from '../components/Button.vue'
import Input from '../components/Input.vue'
import linkButton from './linkButton.vue';
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
                    <Button text="ikon" class="full-width"></Button>
                    <Button text="ikon" class="full-width"></Button>
                </div>
            </div>
            <div>
                <h3>Linkek</h3>
                <div class="link">
                    <linkButton text="YouTube" class="linkButton full-width"></linkButton>
                    <linkButton text="Weboldal" class="WeboldalLink full-width"></linkButton>
                    <linkButton text="Email" class="EmailLink full-width"></linkButton>
                    <linkButton text="Steam" class="SteamLink full-width"></linkButton>
                    <linkButton text="Facebook" class="FacebookLink full-width"></linkButton>
                </div>
            </div>
            
                <Button text="Edit" class="edit full-width"></Button>
            
        </div>
    </div>
</div>


</template>
<style lang="scss">
    .full_bio{
        @apply flex flex-col justify-center content-center drop-shadow-lg border-neutral-300 ;
        background-color: #f5f5f5;
        border-radius: 10px;
        margin-left: 10px;
        margin-right: 10px;
        width: 500px;
        border-color: #D4D4D4;
        border: 1px;
    }
    
    .tartalom{
        margin: 10px;
        width:auto;
    }
    .bio{
        width: 100%;
    }

    .bio > div {
        width: auto;
        margin-bottom: 10px;
    }

    .fejlec{
        @apply flex flex-row justify-start content-center drop-shadow-lg border-neutral-300 ;
        background-color: cadetblue;
        height: 40%;
        border-radius: 10px;
    }

    img{
        width: 9rem;
        margin-top: 30px;
        margin-right:20px ;
        padding: 10px;
    }

    .link{
        @apply flex flex-row  justify-start content-center ;
        flex-wrap: wrap;
        width: auto;
    }

    .name{
        @apply flex flex-col justify-end content-center ;
    }

    Button, linkButton {
        margin: 5px;
    }

    #biotext{
        width:100%;
        
        height: 200px;
        float: center;

    }

    .edit{
       width: auto;
        margin: 0
    }

    .like{
        @apply flex flex-row justify-center content-center ;
        width:100%;
    }

    .full-width {
        width: 100%;
    }

    @media (max-width: 799px) {
        .full_bio{
            @apply flex flex-col justify-center content-center drop-shadow-lg border-neutral-300 ;
            background-color: #D4D4D4;
            border-radius: 10px;
            margin: 10px;
        }

        #biotext{
            width: 100%;
            height: 200px;
            float: center;
        }
    }
    @media (max-width: 1000px) {
    
    .Abio{
       width: 100%;
    }
    .posztok{
        width: 100%;
    }
    .Locked{
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .full_bio{
        width: auto;
        
    }
    .bio{
        width: auto;
    }
    img{
        width: 15rem;
    }
}
</style>

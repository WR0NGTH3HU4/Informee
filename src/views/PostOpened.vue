<script setup lang="ts">
    import Button from '@/components/Button.vue'
</script>
<template>
    <div class="container">
        <div class="actions">
            <Button type="secondary" text="Vissza"></Button>
            <Button type="primary" text="Értékelés"></Button>
        </div>
        <div class="details">
            <div class="profile">
                <img src="../assets/logo.svg" alt=""><!--Profile pic-->
                <h3>Molnár Krisztián</h3> <!--Profile name-->
            </div>
            <div class="infos">
                <h3>10 perc olvasás</h3><!--Estimated time-->
                <h3>2024. jún. 13.</h3>
            </div>
            <div class="post">
                <h1>Nulaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
                <p>
                    kudjetek peeezt
                </p>
            </div>
        </div>
    </div>
</template>
<style>
    img{
        width: 8rem
    }
    .container{
        @apply flex flex-col justify-center content-center items-center ;
        min-width: 100%;
        
    }
    .actions{
        @apply flex flex-row justify-between content-center;
        width: 60%;

    }
    .details{
        @apply flex flex-col justify-start content-center items-center bg-neutral-100 drop-shadow;
        border-radius: 10px;
        width: 60%;
        min-height: 52rem;
        margin-top: 10px;
    }

</style>
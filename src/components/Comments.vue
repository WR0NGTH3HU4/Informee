<script setup lang="ts" >
    import Input from '../components/Input.vue'
    import Button from '../components/Button.vue'
</script>
<template>
    <div class="w-full flex flex-col justify-center content-center items-center">
        <div class="flex flex-col justify-center content-center items-center w-3/4 gap-y-10">
            <h3>Értékeld a posztot!</h3>
            <p>Ha szeretnél a poszthoz hozzáfűzni valamit, az alábbi három kategóriában megteheted !</p>
            <div class="flex flex-row justify-between content-center items-center w-1/4">
                <span class="material-symbols-outlined">
                    check
                </span>
                <span class="material-symbols-outlined">
                    exposure_zero
                </span>
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
            <Input></Input>
            <Button type="primary" text="Mentes"></Button>
        </div>
    </div>
</template>
<style>

</style>
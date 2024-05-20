<script setup lang="ts">
    import {ref} from 'vue'
    const UploadedFiles = ref([])
    const IsDragging = ref(true)
    
    const OnUpload = () =>{

    }   

</script>
<template>
    <div class="container flex flex-col justify-start content-center items-start gap-y-5 w-full">
        <h3 class="text-3xl">Anyag feltöltése</h3>
        <div v-if="IsDragging == false" class="upload" @click.prevent="OnUpload">
            <svg width="68" height="84" viewBox="0 0 68 84" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.0832 70.9585H37.3332V50.021L45.8748 58.5627L50.2498 54.1877L33.9998 38.3543L17.9582 54.396L22.3332 58.771L31.0832 50.021V70.9585ZM6.9165 83.6668C5.24984 83.6668 3.7915 83.0418 2.5415 81.7918C1.2915 80.5418 0.666504 79.0835 0.666504 77.4168V6.5835C0.666504 4.91683 1.2915 3.4585 2.5415 2.2085C3.7915 0.958496 5.24984 0.333496 6.9165 0.333496H44.5207L67.3332 23.146V77.4168C67.3332 79.0835 66.7082 80.5418 65.4582 81.7918C64.2082 83.0418 62.7498 83.6668 61.0832 83.6668H6.9165ZM41.3957 25.9585V6.5835H6.9165V77.4168H61.0832V25.9585H41.3957Z" fill="#737373"/>
            </svg>
            <h3 class="Text">
                Válaszd ki vagy húzd ide a feltölteni kívánt fájlt
            </h3>
        </div>
        <div v-else class="upload" @click.prevent="OnUpload">
            <svg width="68" height="84" viewBox="0 0 68 84" fill="" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.0832 70.9585H37.3332V50.021L45.8748 58.5627L50.2498 54.1877L33.9998 38.3543L17.9582 54.396L22.3332 58.771L31.0832 50.021V70.9585ZM6.9165 83.6668C5.24984 83.6668 3.7915 83.0418 2.5415 81.7918C1.2915 80.5418 0.666504 79.0835 0.666504 77.4168V6.5835C0.666504 4.91683 1.2915 3.4585 2.5415 2.2085C3.7915 0.958496 5.24984 0.333496 6.9165 0.333496H44.5207L67.3332 23.146V77.4168C67.3332 79.0835 66.7082 80.5418 65.4582 81.7918C64.2082 83.0418 62.7498 83.6668 61.0832 83.6668H6.9165ZM41.3957 25.9585V6.5835H6.9165V77.4168H61.0832V25.9585H41.3957Z" fill="#737373"/>
            </svg>
            <h3 class="Text">
                Válaszd ki vagy húzd ide a feltölteni kívánt fájlt
            </h3>
            <input name="file" type="file" class="file">
        </div>
    </div>
</template>
<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .upload{
        @apply overflow-hidden flex flex-col justify-center content-center items-center bg-neutral-200 border-4 border-neutral-500 border-dashed w-full;
        height:20rem;
        margin-bottom: 10px;
        border-radius: 10px;
        border-width: 2px;
    }
    .upload:hover{
        path{
            @apply fill-neutral-800 animate-pulse animate-infinite animate-ease-in-out;
            
        }
        h3{
            @apply text-neutral-800
        }
        @apply border-neutral-800 
    }
    .Text{
        @apply text-neutral-500 text-2xl;;
        margin-top: 30px;
    }
    h3{
        @apply text-neutral-800;
    }
</style>
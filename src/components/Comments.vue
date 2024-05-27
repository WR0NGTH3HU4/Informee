<script setup lang="ts">
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { ref } from 'vue'
import { onMounted } from 'vue';
import comment from "@/components/comment.vue"

const positive = ref<boolean>(false);
const neutral = ref<boolean>(false);
const negative = ref<boolean>(false);
const Comment = ref<string>('')

const setRating = (type: string) => {
    if (type === 'positive') {
        positive.value = true;
        neutral.value = false;
        negative.value = false;
    } else if (type === 'neutral') {
        positive.value = false;
        neutral.value = true;
        negative.value = false;
    } else if (type === 'negative') {
        positive.value = false;
        neutral.value = false;
        negative.value = true;
    }
}

onMounted(()=>{
    positive.value = false;
    neutral.value = false;
    negative.value = false;
})
</script>

<template>
    <div class="w-full flex flex-col justify-center content-center items-center">
        <div class="flex flex-col justify-center content-center items-center w-full gap-y-10 bg-neutral-100 p-3 border-neutral-300 border-[1px] drop-shadow-lg rounded">
            <h3 class="text-2xl">Értékeld a posztot!</h3>
            <p >Ha szeretnél a poszthoz hozzáfűzni valamit, az alábbi három kategóriában megteheted !</p>
            <div class="flex flex-row justify-between content-center items-center w-1/4">
                <span  @click="setRating('positive')" :class="{ 'text-green-500 bg-green-200 p-3 rounded-lg': positive, 'text-green-500': !positive }" class="material-symbols-outlined font-extrabold text-4xl cursor-pointer">
                    check
                </span>
                <span @click="setRating('neutral')" :class="{ 'text-neutral-500 bg-neutral-200 p-3 rounded-lg': neutral, 'text-neutral-500': !neutral }" class="material-symbols-outlined font-extrabold text-4xl cursor-pointer">
                    exposure_zero
                </span>
                <span @click="setRating('negative')" :class="{ 'text-red-500 bg-red-200 p-3 rounded-lg': negative, 'text-red-500': !negative }" class="material-symbols-outlined font-extrabold text-4xl cursor-pointer">
                    close
                </span>
            </div>
            <Input placeholder="Comment" v-modal="Comment"></Input>
            <Button type="primary" text="Mentes"></Button>
        </div>
    </div>
</template>

<style>
</style>
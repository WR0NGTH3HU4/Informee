<script setup lang="ts">
defineProps(['text', 'type', 'click']);
</script>

<template>
    <button class="shadow-md" :class="type" @click="click">{{ text }}</button>
</template>

<style scoped>
    .primary { @apply bg-orange-500 hover:bg-orange-400 active:bg-orange-600; }

    .danger { @apply bg-red-500 hover:bg-red-400 active:bg-red-600}

    .muted { @apply bg-neutral-500 cursor-default; }

    .success { @apply bg-green-500 hover:bg-green-400 active:bg-green-600; }

    button {
        @apply px-4 py-2 rounded-md border-none shadow-md duration-200 text-zinc-100 cursor-pointer;
    }

    button:not(.primary):not(.danger):not(.muted):not(.success) {
        @apply bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-950;
    }
</style>

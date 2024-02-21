<script setup lang="ts">
defineProps(['text', 'type', 'click']);
</script>

<template>
    <button :class="type" @click="click">{{ text }}</button>
</template>

<style scoped>
    .primary {
        background-color: #F97316;
    }

    .primary:hover {
        background-color: #FB923C;
    }

    .primary:active {
        background-color: #EA580C;
    }

    .danger {
        background-color: #EF4444;
    }

    .danger:hover {
        background-color: #F87171;
    }

    .danger:active {
        background-color: #DC2626;
    }

    .muted, .muted:hover, .muted:active {
        background-color: #D4D4D4;
        cursor: default;
    }

    .success {
        background-color: #22C55E;
    }

    .success:hover {
        background-color: #4ADE80;
    }

    .success:active {
        background-color: #16A34A;
    }

    button {
        padding: 10px 20px 10px 20px;
        height: 60px;
        border-radius: 5px;
        background-color: #262626;
        color: #FAFAFA;
        border: none;
        font-size: 1em;
        transition-duration: 0.2s;
        cursor: pointer;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    button:hover {
        background-color: #404040;
    }

    button:active {
        background-color: #171717;
    }
</style>

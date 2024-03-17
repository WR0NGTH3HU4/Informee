<script lang="ts" setup>
    import Sidebar from '@/components/Sidebar.vue';
    import Searchbar from '@/components/Searchbar.vue';
</script>
<template>
    <div class="FullPostPage">
        <!--Sidebar-->
        <Sidebar/>
        <div class="Posts">
            <!--Searchbar-->
            <Searchbar/>
            <!--Postlist-->
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .FullPostPage{
        @apply flex flex-row justify-start content-center items-start
    }
    .Posts{
        @apply w-full
    }
</style>
<script lang="ts" setup>
    import Sidebar from '@/components/Sidebar.vue';
    import Searchbar from '@/components/Searchbar.vue';
    import Post from '@/components/Post.vue';
    import linkButton from '@/components/linkButton.vue';
</script>
<template>
    <div class="FullPostPage">
        <!--Sidebar-->
        <Sidebar/>
        <div class="Posts">
            <!--Searchbar-->
            <Searchbar/>
            <!--Postlist-->
            <div class="Postlist">
                <Post/>
            </div>
        </div>
    </div>

    <linkButton text="YouTube" class="linkButton"> </linkButton>
    <linkButton text="Weboldal" class="WeboldalLink"> </linkButton>
    <linkButton text="Email" class="EmailLink"> </linkButton>
    <linkButton text="Steam" class="SteamLink"> </linkButton>
    <linkButton text="Facebook" class="FacebookLink"> </linkButton>

</template>
<style lang="scss" scoped>
    .FullPostPage{
        @apply flex flex-row justify-start content-center items-start
    }
    .Posts{
        @apply w-full;
        padding: 0 17px;;
    }
</style>
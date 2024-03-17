<script lang="ts" setup>
    import PostActionButton from './PostActionButton.vue';
</script>
<template>
    <!--Free-->
    <div class="FullPost">
        <div class="head">
            <img src="../assets/logo.svg" alt="">
            <h3>Molnar Krisztián</h3>
        </div>
        <div class="post">
            <h3>vitces cim</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.</p>
        </div>
        <div class="postactions">
            <PostActionButton type="like"></PostActionButton>
            <PostActionButton type="dislike"></PostActionButton>
            <PostActionButton type="share"></PostActionButton>
            <PostActionButton type="report"></PostActionButton>
        </div>
    </div>
    <!--Locked-->

</template>
<style lang="scss" scoped>
    .FullPost{
        @apply flex flex-col justify-between content-start items-start bg-neutral-100 drop-shadow-lg border-neutral-300 w-full;
        border-width: 1px;
        border-radius: 10px;
        padding: 10px;
        height: 80%;
    }
    .head{
        @apply flex flex-row justify-center content-center items-center
    }
    img{
        width: 7rem;
        margin-right: 10px;
    }
    .post h3{
        @apply text-3xl;
        margin:30px 0;
    }
</style>
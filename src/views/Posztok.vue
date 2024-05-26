<script lang="ts" setup>
import Post from '@/components/Post.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { type Post as PostSchema } from '@/types/Post';
import { ApiWrapper } from '@/composables/ApiWrapper';
import { onMounted, ref, type Ref } from 'vue';
import { useUserStore } from '@/stores/user';

let posts: Ref<PostSchema[]> = ref([]);
const userStore = useUserStore();

onMounted(() => {
  ApiWrapper.get<PostSchema[]>('post', null).then(x => {
    x.data.forEach((post: PostSchema) => {
      posts.value.push(post);
    });
  });
});
</script>

<template>
  <div class="flex p-4 gap-4">
    <!--Sidebar-->
    <!--
    <div class="flex flex-col font-medium">
      <span class="font-medium">CIMKEK</span>
      <span class="p-4 text-neutral-500 font-medium">cimke</span>
    </div>
    -->
    <div class="flex flex-col w-full gap-4">
      <!--Searchbar-->
      <div class="flex gap-4">
        <Input class="w-full" type="text" placeholder="Keresés" />
        <Button type="primary" text="Keresés"></Button>
        <Button type="secondary" text="Rendezés"></Button>
      </div>
      <!--Postlist-->
      <div v-if="posts.length > 0" class="flex flex-col gap-2">
        <Post v-for="post in posts" :data="post" :editable="post.authorId == userStore.getUserData().id" :key="post._id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

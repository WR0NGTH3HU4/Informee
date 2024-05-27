<script setup lang="ts">
import Button from '@/components/Button.vue';
import ReviewBox from '@/components/ReviewBox.vue';
import comment from '@/components/comment.vue';
import { ApiWrapper } from '@/composables/ApiWrapper';
import { onMounted, ref, type Ref } from 'vue';
import { type Post as PostSchema } from '@/types/Post';
import { useRoute } from 'vue-router';
import * as marked from 'marked';
import sanitizeHtml from 'sanitize-html';
import moment from 'moment';

const route = useRoute();
const post: Ref<Partial<PostSchema>> = ref({
  content: '',
  title: '',
  creationDate: '',
  author: {
    displayName: '',
    username: '',
  }
});

onMounted(async () => {
  const postRes = await ApiWrapper.get<PostSchema[]>(`post/${route.params.id}?content=true`, null);
  post.value = postRes.data[0];
});
</script>
<template>
  <div class="flex flex-col justify-center content-center items-center gap-y-10 mt-10 w-full">
    <div class="flex flex-col w-3/4 gap-y-5">
      <div class="flex flex-row justify-between content-center items-center w-full">
        <Button type="secondary" text="Vissza" @click="$router.go(-1)"></Button>
        <Button type="primary" text="Értékelés"></Button>
      </div>
      <div class="flex flex-col w-full rounded p-4 bg-neutral-100 border-[1px] border-neutral-300 min-h-[400px]">
        <div class="flex flex-row justify-between content-center items-center">
          <div class="flex flex-row justify-center content-center items-center gap-x-3">
            <div class="w-[50px] h-[50px]">
              <!--ProfilePic-->
            </div>
            <h3 class="font-semibold text-lg text-neutral-800">{{ post.author?.displayName }}</h3>
          </div>
          <div class="flex flex-row justify-center content-center items-center gap-x-3">
            <h3 class="text-neutral-800 font-semibold">{{ moment(post.creationDate).format('L') }}</h3>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-2xl text-neutral-800 text-center py-8">{{ post.title }}</h3>
          <p v-html="sanitizeHtml(marked.parse(post.content, { breaks: true, gfm: true }))" class="text-neutral-800 text-justify w-full break-all"></p>
          <!--Content-->
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center content-center items-center gap-4 w-full">
      <ReviewBox class="w-3/4"></ReviewBox>
      <comment type="positive"></comment>
      <comment type="neutral"></comment>
      <comment type="negative"></comment>
    </div>
  </div>
</template>
<style></style>

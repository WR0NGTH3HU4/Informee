<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import Button from '../components/Button.vue';
import Post from '@/components/Post.vue';
import Bio from '@/components/Bio.vue';
import TextBox from '@/components/TextBox.vue';
import { ApiWrapper } from '@/composables/ApiWrapper';
import { type Post as PostSchema } from '@/types/Post';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';

const route = useRoute();
const posts: Ref<PostSchema[]> = ref([]);
const userStore = useUserStore();
const user = ref({
  displayName: '...',
  username: '...',
});

const isMe = () => route.params.id == '@me' || route.params == userStore.getUserData()?.id;
const meOrSpecified = () => isMe() ? userStore.getUserData()?.id : route.params.id;

onMounted(async () => {
  const postRes = await ApiWrapper.get<PostSchema[]>(`post?from=${meOrSpecified()}`, null);
  postRes.data.forEach((post: PostSchema) => {
    posts.value.push(post);
  });

  const userRes = await ApiWrapper.get(`user/${meOrSpecified()}`, null);
  user.value = {
    displayName: userRes.data.displayName,
    username: userRes.data.username,
  }
});
</script>

<template>
  <div class="flex flex-row w-full h-full p-4 gap-4">
    <!-- <Bio></Bio> -->
    <div class="border-[1px] border-neutral-300 bg-neutral-50 rounded-md max-w-[400px] min-w-[400px] h-min">
      <!-- Banner -->
      <div
        class="p-4 flex items-end gap-2 rounded-md"
        style="
          background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.printablee.com%2Fpostpic%2F2012%2F08%2Fminecraft-creeper-face_428904.jpg');
        "
      >
        <img
          class="aspect-square w-32 rounded-md"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.printablee.com%2Fpostpic%2F2012%2F08%2Fminecraft-creeper-face_428904.jpg"
          alt=""
        />
        <div class="flex flex-col">
          <span class="text-neutral-400 font-medium">{{ user.username }}</span>
          <span class="text-neutral-50 text-2xl font-semibold">{{ user.displayName }}</span>
        </div>
      </div>
      <div class="BioSection">
        <span>Bio</span>
        <TextBox></TextBox>
      </div>
      <div class="BioSection">
        <span>Ertekelesek</span>
        <div class="Reviews flex gap-4">
          <span class="bg-orange-500"> 2000 </span>
          <span class="bg-neutral-800"> 2000 </span>
        </div>
      </div>
      <div class="BioSection">
        <span>Linkek</span>
        <div class="flex"></div>
      </div>
    </div>
    <div v-if="posts.length > 0" class="flex flex-col w-full gap-2 overflow-auto">
      <Post v-for="post in posts" :data="post" :key="post._id" :editable="post.author._id == userStore.getUserData().id" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.BioSection {
  @apply mt-4 flex flex-col px-4;

  & > span:first-child {
    @apply mb-1 text-neutral-700 font-medium;
  }

  &:last-child {
    @apply mb-4;
  }
}

.Reviews > span {
  @apply p-2 rounded-md font-semibold text-neutral-50 w-full;
}
@media only screen and (max-width: 1000px) {
  .FullPage {
    @apply flex-col;
  }
}
</style>

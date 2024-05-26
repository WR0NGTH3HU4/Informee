<script lang="ts" setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import Button from '../components/Button.vue';
import Input from '@/components/Input.vue';
import { ApiWrapper } from '@/composables/ApiWrapper';
import type { Post } from '@/types/Post';
import TextBox from '@/components/TextBox.vue';

const route = useRoute();
let title = ref('');
let description = ref('');
let content = ref('');
let priv = ref(true);

async function save() {
  await ApiWrapper.patch(`post/${route.params.id}`, {
    title: title.value,
    description: description.value,
    content: content.value,
    private: priv.value,
  });
}

onMounted(async () => {
  const res = await ApiWrapper.get<Post[]>(`post/${route.params.id}`, null);

  title.value = res.data[0].title;
  description.value = res.data[0].description;
  content.value = res.data[0].content;
  priv.value = res.data[0].private;
});
</script>
<template>
  <div class="FullPage flex flex-col justify-between content-center items-start m-3 h-full gap-4">
    <div class="flex w-full gap-4 justify-end">
      <RouterLink to="Posztok">
        <Button type="secondary" text="Módosítások elvetése"></Button>
      </RouterLink>
      <Button type="primary" text="Mentés" @click="save"></Button>
    </div>
    <div class="Edit w-1/2 m-auto h-full">
      <div class="flex flex-col justify-center content-center items-start w-full gap-y-8 h-full">
        <div class="flex flex-row content-center items-center w-1/2">
          <h3 class="text-neutral-800 text-4xl font-bold">Posztszerkesztő</h3>
          <h3 class="self-start text-neutral-500 font-medium">(mentve)</h3>
        </div>
        <div class="flex flex-col justify-center items-center w-full gap-2 flex-grow">
          <div class="Post">
            <h3 class="InputName">Privát (Ne lássák más felhasználók)</h3>
            <input type="checkbox" v-model="priv" id="private">
          </div>
          <div class="Post">
            <h3 class="InputName">Cím</h3>
            <Input class="w-full" type="text" v-model="title" />
          </div>
          <div class="Post">
            <h3 class="InputName">Leírás</h3>
            <Input class="w-full" type="text" v-model="description" />
          </div>
          <div class="Post flex-grow">
            <h3 class="InputName">Tartalom</h3>
            <TextBox class="w-full flex-grow h-full" v-model="content" />
          </div>
        </div>
      </div>
    </div>
    <!--

    <div class="Files flex flex-col justify-center content-center items-end w-1/2 h-full gap-y-10">
      <div class="flex flex-row justify-end content-center items-center gap-x-3">
        <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.0602 27.3054C17.5686 27.3054 18.0024 27.1259 18.3614 26.7669C18.7204 26.4079 18.8999 25.9726 18.8999 25.4611C18.8999 24.9495 18.7204 24.5163 18.3614 24.1616C18.0024 23.8068 17.5675 23.6294 17.0569 23.6294C16.5462 23.6294 16.1125 23.8066 15.7557 24.161C15.3989 24.5154 15.2205 24.9499 15.2205 25.4644C15.2205 25.9738 15.3992 26.4079 15.7566 26.7669C16.1139 27.1259 16.5485 27.3054 17.0602 27.3054ZM15.4983 21.111H18.331C18.331 20.3417 18.4265 19.6689 18.6174 19.0926C18.8083 18.5163 19.3685 17.825 20.2978 17.0186C21.0971 16.323 21.6849 15.6305 22.0612 14.9411C22.4375 14.2517 22.6257 13.4703 22.6257 12.5969C22.6257 11.0759 22.1224 9.87527 21.1159 8.99494C20.1093 8.11461 18.8181 7.67444 17.2423 7.67444C15.7849 7.67444 14.5314 8.05456 13.4817 8.81481C12.432 9.57506 11.6783 10.5636 11.2205 11.7805L13.7887 12.7593C14.0476 12.0652 14.4556 11.4797 15.0129 11.0026C15.5701 10.5256 16.271 10.287 17.1157 10.287C17.973 10.287 18.6564 10.5253 19.1657 11.0018C19.6751 11.4783 19.9298 12.0654 19.9298 12.7632C19.9298 13.3284 19.7588 13.8687 19.4169 14.3841C19.0751 14.8995 18.6081 15.4034 18.0161 15.8957C17.0709 16.725 16.4149 17.4791 16.0483 18.1578C15.6816 18.8366 15.4983 19.821 15.4983 21.111ZM17.001 34.4456C14.6691 34.4456 12.4727 34.0017 10.4118 33.1139C8.35086 32.2262 6.55328 31.0152 5.01903 29.481C3.48478 27.9467 2.27379 26.1495 1.38607 24.0891C0.498318 22.0288 0.0544434 19.8327 0.0544434 17.5008C0.0544434 15.1504 0.498318 12.9447 1.38607 10.8838C2.27379 8.82286 3.48443 7.02979 5.01799 5.50457C6.55154 3.97934 8.34862 2.77188 10.4092 1.88219C12.4699 0.992467 14.6663 0.547607 16.9987 0.547607C19.3495 0.547607 21.5556 0.992287 23.617 1.88165C25.6784 2.77104 27.4716 3.97805 28.9965 5.50269C30.5214 7.0273 31.7286 8.82016 32.6181 10.8813C33.5076 12.9424 33.9524 15.1486 33.9524 17.4999C33.9524 19.8325 33.5075 22.0291 32.6178 24.09C31.7281 26.1508 30.5207 27.9481 28.9954 29.4818C27.4702 31.0155 25.6775 32.2262 23.6172 33.1139C21.5568 34.0017 19.3515 34.4456 17.001 34.4456ZM17.0001 31.2892C20.8439 31.2892 24.1031 29.9487 26.7776 27.2677C29.4521 24.5867 30.7894 21.3308 30.7894 17.4999C30.7894 13.6561 29.4521 10.3969 26.7776 7.7224C24.1031 5.0479 20.8428 3.71065 16.9968 3.71065C13.1693 3.71065 9.91475 5.0479 7.23319 7.7224C4.55164 10.3969 3.21086 13.6572 3.21086 17.5032C3.21086 21.3307 4.55136 24.5853 7.23236 27.2668C9.91333 29.9484 13.1692 31.2892 17.0001 31.2892Z"
            fill="#737373"
          />
        </svg>
        <Button type="secondary" text="Módosítások eldobása"></Button>
        <Button type="primary" text="Mentés"></Button>
      </div>
      <div class="flex flex-col justify-between content-center items-center w-full h-full">
        <Uploaded></Uploaded>
        <UploadFile></UploadFile>
      </div>
    </div>

    -->
  </div>

</template>
<style scoped lang="scss">
@media only screen and (max-width: 800px) {
  .FullPage {
    // @apply flex-col-reverse;
  }
  .Edit {
    @apply w-full;
  }
  .Files {
    @apply w-full;
  }
}

.Post {
  @apply flex flex-col justify-center content-center items-start w-full gap-y-1;
}
.InputName {
  @apply text-neutral-500 font-medium text-lg;
}
</style>

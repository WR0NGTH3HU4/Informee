<script lang="ts" setup>
import PostActionButton from './PostActionButton.vue';
import Button from './Button.vue';
import { ref } from 'vue';

const Locked = ref(false);
</script>
<template>
  <div class="flex border-[1px] p-4 border-neutral-300 rounded-lg bg-neutral-100 shadow">
    <div v-if="Locked">le van zarva a post ocskso</div>
    <div class="flex flex-col gap-2">
      <span class="flex items-center">
        <img
          class="aspect-square w-8 rounded-full"
          src="https://img.itch.zone/aW1nLzgzNDY4MjEuZ2lm/original/PjfoQj.gif"
          alt=""
        />
        <span class="text-neutral-600 font-medium">Molnar Krisztian</span>
      </span>
      <div class="flex flex-col">
        <span class="font-urbanist text-3xl text-neutral-800 font-semibold">Mi az a rendszervaltas?</span>
        <span class="text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium placeat et rem excepturi autem
          impedit fugiat tempora accusamus ipsa fugit corrupti ratione ad pariatur dolor libero molestiae, nulla
          voluptates.
        </span>
      </div>
      <div class="flex justify-between">
        <span class="flex gap-2 items-center">
          <PostActionButton type="like" />
          <span class="text-emerald-600 font-medium">0</span>
          <PostActionButton type="dislike" />
          <span class="text-red-600 font-medium">0</span>
        </span>
        <span class="flex gap-2">
          <PostActionButton type="share" />
          <PostActionButton type="report" />
        </span>
      </div>
    </div>
  </div>
  <!--
    <div class="Locked m-3">
        <div v-if="Locked"  class="Credit">
            <div class="Lock">
                <svg width="35" height="44" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75436 43.6501C3.66512 43.6501 2.73266 43.2622 1.95696 42.4866C1.18129 41.7109 0.793457 40.7784 0.793457 39.6892V18.4979C0.793457 17.4009 1.18129 16.4618 1.95696 15.6806C2.73266 14.8993 3.66512 14.5087 4.75436 14.5087H7.68911V10.3305C7.68911 7.58272 8.64187 5.24648 10.5474 3.32181C12.4529 1.39715 14.77 0.434814 17.4985 0.434814C20.227 0.434814 22.5446 1.39715 24.4511 3.32181C26.3576 5.24648 27.3109 7.58272 27.3109 10.3305V14.5087H30.2457C31.3427 14.5087 32.2818 14.8993 33.063 15.6806C33.8442 16.4618 34.2348 17.4009 34.2348 18.4979V39.6892C34.2348 40.7784 33.8442 41.7109 33.063 42.4866C32.2818 43.2622 31.3427 43.6501 30.2457 43.6501H4.75436ZM4.75436 39.6892H30.2457V18.4979H4.75436V39.6892ZM17.5084 32.9436C18.5695 32.9436 19.475 32.5764 20.225 31.842C20.975 31.1076 21.35 30.2248 21.35 29.1936C21.35 28.1936 20.9722 27.2852 20.2166 26.4686C19.461 25.6519 18.5527 25.2436 17.4916 25.2436C16.4305 25.2436 15.525 25.6519 14.775 26.4686C14.025 27.2852 13.65 28.2019 13.65 29.2186C13.65 30.2352 14.0278 31.1102 14.7834 31.8436C15.539 32.5769 16.4473 32.9436 17.5084 32.9436ZM11.6501 14.5087H23.35V10.337C23.35 8.67155 22.7868 7.26968 21.6604 6.13142C20.5339 4.99315 19.1513 4.42401 17.5126 4.42401C15.8738 4.42401 14.487 4.99315 13.3522 6.13142C12.2174 7.26968 11.6501 8.67155 11.6501 10.337V14.5087Z" fill="#262626"/>
                </svg>
                <h3 class="Warning">Ez a cikk le van zárva</h3>
            </div>
            <h3 class="text">Ahhoz, hogy megtekintsd, <a>krediteket</a> kell rá költened.</h3>
            <Button type="primary" text="Megvétel(3000 kredit)"></Button>
        </div>
        <div class="lockedpost">
            <div class="LockedFullPost">
        <div class="head">
            <img src="../assets/logo.svg" alt="">
            <h3>Molnar Krisztián</h3>
        </div>
        <div class="post">
            <h3>vitces cim</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nihil accusantium libero ipsa magnam. Dolorum, ipsa rerum. Cumque dignissimos praesentium, sapiente repellendus natus sed veniam animi atque quod harum beatae.</p>
        </div>
        <div class="flex flex-row justify-between content-center items-center">
            <PostActionButton type="like"></PostActionButton>
            <PostActionButton type="dislike"></PostActionButton>
            <PostActionButton type="share"></PostActionButton>
            <PostActionButton type="report"></PostActionButton>
        </div>
    </div>
        </div>
    </div>
        -->
</template>
<style lang="scss" scoped>
.title {
  font-family: 'Urbanist';
}
</style>

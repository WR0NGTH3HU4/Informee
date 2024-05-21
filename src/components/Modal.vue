<script lang="ts" setup>
import Button from './Button.vue';
import { ref, watch, defineEmits, defineProps } from 'vue';

const props = defineProps<{ isShown: boolean }>();
const emit = defineEmits(['close']);

const ModalShown = ref(props.isShown);

watch(() => props.isShown, (newVal) => {
  ModalShown.value = newVal;
});

const onClose = () => {
  ModalShown.value = false;
  emit('close');
};
</script>

<template>
  <div v-if="ModalShown" class="ModalPos absolute inset-0 overflow-y-auto bg-black bg-opacity-50 flex flex-col justify-center content-center items-center">
    <div class="FullModal flex flex-col jusify-evenly content-center items-center rounded bg-neutral-50 border-neutral-300 drop-shadow-lg w-1/5 min-w-[300px] min-h-[300px]: p-3 pt-8 gap-y-2">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.9984 48C32.7461 48 33.3733 47.7472 33.88 47.2416C34.3867 46.736 34.64 46.1093 34.64 45.3616C34.64 44.6139 34.3872 43.9867 33.8816 43.48C33.376 42.9733 32.7493 42.72 32.0016 42.72C31.2539 42.72 30.6267 42.9728 30.12 43.4784C29.6133 43.984 29.36 44.6107 29.36 45.3584C29.36 46.1061 29.6128 46.7333 30.1184 47.24C30.624 47.7467 31.2507 48 31.9984 48ZM29.84 35.76H34.64V15.52H29.84V35.76ZM32.0216 64C27.6088 64 23.4621 63.16 19.5816 61.48C15.7005 59.8 12.3067 57.5067 9.4 54.6C6.49333 51.6933 4.2 48.2976 2.52 44.4128C0.84 40.528 0 36.3771 0 31.96C0 27.5429 0.84 23.392 2.52 19.5072C4.2 15.6224 6.49333 12.24 9.4 9.36C12.3067 6.48 15.7024 4.2 19.5872 2.52C23.472 0.84 27.6229 0 32.04 0C36.4571 0 40.608 0.84 44.4928 2.52C48.3776 4.2 51.76 6.48 54.64 9.36C57.52 12.24 59.8 15.6267 61.48 19.52C63.16 23.4133 64 27.5661 64 31.9784C64 36.3912 63.16 40.5379 61.48 44.4184C59.8 48.2995 57.52 51.6885 54.64 54.5856C51.76 57.4821 48.3733 59.7755 44.48 61.4656C40.5867 63.1552 36.4339 64 32.0216 64ZM32.04 59.2C39.5867 59.2 46 56.5467 51.28 51.24C56.56 45.9333 59.2 39.5067 59.2 31.96C59.2 24.4133 56.5651 18 51.2952 12.72C46.0253 7.44 39.5936 4.8 32 4.8C24.48 4.8 18.0667 7.43493 12.76 12.7048C7.45333 17.9747 4.8 24.4064 4.8 32C4.8 39.52 7.45333 45.9333 12.76 51.24C18.0667 56.5467 24.4933 59.2 32.04 59.2Z" fill="#404040" />
      </svg>
      <h3 class="ErrorMsg text-center text-2xl font-bold text-neutral-700 w-1/2">Valami hiba</h3>
      <p class="Explanation text-center text-neutral-500 w-1/2">nemtom turros rendszergazda vagyok</p>
      <div class="Close flex flex-col justify-end content-center items-end border-neutral-300 pt-3 w-full">
        <Button @click.prevent="onClose" type="primary" text="Bezárás"></Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.FullModal {
  border-width: 1px;
}
.Close {
  border-top-width: 1px;
}
</style>
<template>
  <button :class="props.type">
    <span class="material-symbols-outlined"> {{ icons[props.type] }} </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: keyof typeof icons;
}>();

const icons = {
  like: 'add',
  dislike: 'remove',
  share: 'share',
  report: 'report',
  edit: 'edit',
  delete: 'delete',
};
</script>

<style scoped>
button {
  border-radius: 10px;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #404040;
}

.like {
  background-color: #22c55e;
}

.dislike {
  background-color: #ef4444;
}
</style>

<template>
  <button :class="props.type" @click="handleClick">
    <span class="material-symbols-outlined"> {{ icons[props.type] }} </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
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
}

.like {
  background-color: #22c55e;
}

.dislike {
  background-color: #ef4444;
}

.share {
  background-color: #ea580c;
}

.report {
  background-color: #404040;
}
</style>

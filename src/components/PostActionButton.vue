<template>
  <button :class="getClassForType()" @click="handleClick">
    <span v-if="props.type === 'like'" class="material-symbols-outlined">
      add_box
    </span>
    <span v-else-if="props.type === 'dislike'" class="material-symbols-outlined">
      remove
    </span>
    <span v-else-if="props.type === 'share'" class="material-symbols-outlined">
      north_east
    </span>
    <span v-else-if="props.type === 'report'" class="material-symbols-outlined">
      report
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  type: String
});

const getClassForType = () => {
  if (props.type === 'like') {
    return 'like';
  } else if (props.type === 'dislike') {
    return 'dislike';
  } else if (props.type === 'share') {
    return 'share';
  } else if (props.type === 'report') {
    return 'report';
  } else {
    return ''; // Default class or handle invalid type
  }
};

const handleClick = () => {
  // Handle button click
};
</script>
<style scoped>
.like {
  border-radius: 10px;
  background-color: #22c55e;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dislike {
  border-radius: 10px;  
  background-color: #EF4444;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.share {
  border-radius: 10px;  
  background-color: #EA580C;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.report { 
  border-radius: 10px;  
  background-color: #404040;
  color: #fafafa;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

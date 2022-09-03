<template>
  <div class="question-list">
    <q-item
      v-for="(item, index) of list"
      :key="`${ index } ${ item.question }`"
      :item="item"
      :index="index"
    >
    </q-item>
  </div>
</template>

<script setup>
import QItem from './question-list-item.vue';

import { onMounted, reactive, toRefs } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default() {
      return [];
    }
  }
});

onMounted(() => {
  console.log('on mounted');
});

</script>

<style lang="scss" scoped>
.question-list {
  width: 100%;
  overflow-y: auto;
  margin-bottom: .44rem;
}
</style>
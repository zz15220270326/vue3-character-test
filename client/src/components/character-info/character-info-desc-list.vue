<template>
  <ul class="desc-list">
    <li class="list-title">{{ title }}</li>
    <li
      class="list-item"
      v-for="(item, index) of list"
      :key="item"
    >
      {{ `${ list.length > 1 ? `${ index + 1 }. ` : '' } ${ item }` }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  title: String,
  list: {
    type: Array,
    default() {
      return [];
    }
  }
});
</script>

<style lang="scss" scoped>
.desc-list {
  width: 100%;
  box-sizing: border-box;

  .list-title {
    font-size: 1rem;
    font-weight: 500;
  }

  .list-item {
    font-size: .88rem;
    padding: .5rem;
    box-sizing: border-box;
  }
}
</style>
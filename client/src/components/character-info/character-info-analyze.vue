<template>
  <ul class="character-analyze">
    <li
      v-for="c of list"
      :key="c.title"
    >
      <h4 class="list-title">
        {{ c.title }}
      </h4>
      <p
        class="list-item"
        v-for="(cDesc, cIdx) of c.desc"
        :key="cIdx"
      >
        {{ `${ cIdx + 1 }. ${ cDesc }` }}
      </p>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  list: {
    type: Array,
    default() {
      return [];
    }
  }
});
</script>

<style lang="scss" scoped>
.character-analyze {
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
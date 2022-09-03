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
    font-size: .18rem;
    font-weight: 500;
  }

  .list-item {
    font-size: .14rem;
    padding: .05rem;
    box-sizing: border-box;
  }
}
</style>
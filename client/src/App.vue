<script setup>
import { useRoute } from 'vue-router';
import { toRef, watch } from 'vue';

const route = useRoute();

const routePath = toRef(route, 'path');

watch(routePath, () => {
  window.scroll(0, 0);
});

</script>

<template>
  <router-view />
</template>


<template>
  <header class="m-header">
    <div class="m-header-left">
      <slot name="left-content"></slot>
    </div>
    <div class="m-header-main">
      <slot />
    </div>
    <div class="m-header-right">
      <slot name="right-content"></slot>
    </div>
  </header>
</template>

<script setup>
import './index.scss';

const props = defineProps({

});
</script>

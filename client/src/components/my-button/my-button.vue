<template>
  <button
    :class="classList"
    @click="onBtnClick"
  >
    <slot name="prefix"></slot>
    <slot>Button</slot>
    <slot name="suffix"></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { btnSizes, btnTypes } from './config';

import './index.scss';

const props = defineProps({
  size: {
    type: String,
    default: 'default',
    validator(value) {
      return btnSizes.includes(value);
    }
  },
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return btnTypes.includes(value);
    }
  }
});
const emit = defineEmits(['click']);

const classList = computed(() => [
  'my-btn',
  props.size === 'default' ? '' : `btn-size-${ props.size }`,
  props.type === 'default' ? '' : `btn-type-${ props.type }`,
]);

const onBtnClick = (...args) => {
  emit('click', ...args);
}

</script>

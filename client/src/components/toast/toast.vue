<template>
  <teleport :to="teleport">
    <transition name="my-toast-fade">
      <div class="my-toast" v-if="visible">
        <div v-show="overlay" class="my-toast-mask"></div>
        <div class="my-toast-inner">
          <header>
            <!-- type-icon -->
            <i :class="toastIconClassList"></i>
            <p class="toast-message">
              <slot>{{ message }}</slot>
            </p>
          </header>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import './index.scss';

import { TOAST_TYPES, TOAST_POS, TOAST_ICONS } from './config';
import { computed, reactive, toRefs } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: 'Toast',
  },
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return TOAST_TYPES.includes(value);
    }
  },
  position: {
    type: String,
    default: 'middle',
    validator(value) {
      return TOAST_POS.includes(value);
    }
  },
  /** toast show duration */
  duration: {
    type: Number,
    default: 2000,
  },
  /** is show mask */
  overlay: Boolean,
  /** is close toast by clicking mask  */
  closeOnClick: Boolean,
  teleport: {
    type: String,
    default: 'body',
  },
});

const toastIconClassList = computed(() => {
  return [
    'toast-icon',
    'iconfont',
    TOAST_ICONS[props.type]
  ];
});

const state = reactive({
  visible: false,
});
const {
  visible,
} = toRefs(state);

const setVisible = (visible, callback) => {
  new Promise((resolve) => {
    state.visible = !!visible;
    let t = setTimeout(() => {
      resolve('hide');
      clearTimeout(t);
      t = null;
    }, 500);
  }).then(() => {
    typeof callback === 'function' && callback();
  });
}

defineExpose({
  setVisible
});

</script>

<style lang="scss" scoped></style>
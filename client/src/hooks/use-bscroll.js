import {
  onMounted,
  // watch,
  // ref,
  nextTick,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue';
import BScroll from 'better-scroll';

const _options = {
  click: true,
  mouseWheel: true,
  tap: true,
};

export default (bsOptions = {}) => {
  let scroll;
  const instance = getCurrentInstance();

  onMounted(() => {
    nextTick(() => {
      if (!instance.refs.pageEl) {
        return;
      }
      scroll = new BScroll(instance.refs.pageEl, Object.assign(
        _options,
        bsOptions,
      ));
      console.log(scroll);
    });
  });
  onBeforeUnmount(() => {
    scroll = null;
  });
};
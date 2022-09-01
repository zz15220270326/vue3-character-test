import MyToast from './toast';
import { createApp } from 'vue';

let timer = null, // 定时器
    vm = null; // 组件实例

function showToast(options = {}) {
  const {
    message = 'Toast',
    type = 'text',
    duration = 2000,
    position = 'middle',
    overlay = false,
    closeOnClick = false,
    multi = false,
    onClosed
  } = options;

  const toast = createApp(MyToast, {
    message,
    type,
    duration,
    position,
    overlay,
    closeOnClick,
  });
  const oFrag = document.createDocumentFragment();

  vm = toast.mount(oFrag);
  document.body.appendChild(oFrag);
  vm.setVisible(true);

  vm.clear = () => {
    vm.setVisible(false, () => {
      if (!multi) {
        toast.unmount();
      }
      typeof onClosed === 'function' && onClosed();
    });
    clearTimeout(timer);
    timer = null;
  };

  timer = setTimeout(() => {
    vm.clear();
  }, duration);

  return vm;
}

['success', 'loading', 'fail'].forEach((type) => {
  showToast[type] = function (message, duration) {
    return showToast({
      type,
      message,
      duration
    });
  }
});

export default showToast;

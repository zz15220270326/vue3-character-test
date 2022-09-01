import MyHeader from '@/components/my-header';
import MyButton from '@/components/my-button';

const components = [
  MyHeader,
  MyButton,
];

export default {
  install(app, options = {}) {
    components.forEach(c => {
      app.component(c.name || c.__name, c);
    })
  }
};
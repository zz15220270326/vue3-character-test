import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import globalPlugin from './libs/global-plugin';

import './assets/css/normalize.scss';
import './assets/css/border.css';

import './assets/js/fastclick.js';
import './assets/js/common.js';

// const isProduction = process.env.NODE_ENV !== 'development';

const app = createApp(App);

app.use(globalPlugin);
app.use(store);
app.use(router);

app.mount('#app');

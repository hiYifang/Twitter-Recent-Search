import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.use(store);
app.use(router);
app.mount('#app');

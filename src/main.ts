import { createApp } from 'vue';
import App from './app.vue';
import { locales } from './locales';
import { router } from './router';
import { store } from './store';
import './main.css';

const app = createApp(App);
app.use(locales);
app.use(router);
app.use(store);
app.mount('#app');

import { createRouter, createWebHistory } from 'vue-router';
import Home from './routes/home-route.vue';
import Counter from './routes/counter-route.vue';
import NotFound from './routes/not-found.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/counter', component: Counter, meta: { title: 'Counter' } },
  { path: '/:path(.*)', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

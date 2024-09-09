import { createRouter, createWebHistory } from 'vue-router';
import Reserve from '../components/ReservePage.vue';

const routes = [
  {
    path: '/reserve',
    component: Reserve,
  },
];

const index = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default index;
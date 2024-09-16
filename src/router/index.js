import { createRouter, createWebHistory } from 'vue-router';
import Reserve from '../components/ReservePage.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/reserve',
    component: Reserve,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];

const index = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default index;
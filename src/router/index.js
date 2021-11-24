import { createRouter, createWebHistory } from 'vue-router';
import Movie from '../views/Movie.vue';

const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

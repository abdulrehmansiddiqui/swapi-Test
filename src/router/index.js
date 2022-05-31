import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmsView from '../views/FilmsView.vue'
import StarshipsView from '../views/StarshipsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/starships',
      name: 'starships',
      component: StarshipsView
    },
    {
      path: '/films',
      name: 'films',
      component: FilmsView
    },
  ]
})

export default router

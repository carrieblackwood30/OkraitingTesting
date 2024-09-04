import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import chooseUser from '@/views/chooseUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'loginPage',
      component: chooseUser
    }
  ]
})

export default router

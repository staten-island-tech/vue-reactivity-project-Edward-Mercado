import { createRouter, createWebHistory } from 'vue-router'
import CreateUser from '@/views/CreateUser.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "home",
      component: HomeView
    },{
      path: '/create-user',
      name: "create-user",
      component: CreateUser
    }
  ],
})

export default router

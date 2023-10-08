import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: ()=>import('../pages/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next)=>{
  next()
})

export default router

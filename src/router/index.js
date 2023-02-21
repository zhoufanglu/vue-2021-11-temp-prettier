import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Login from '@/views/Login.vue'
import ChooseCourse from '@/views/ChooseCourse.vue'

import module_1 from '@/router/module/module_1'
import module_2 from '@/router/module/module_2'

Vue.use(VueRouter)

const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // redirect: '/login',
    meta: {
      requireAuth: false, // 在需要登录的路由的meta中添加响应的权限标识
    },
  },
  {
    path: '/choose-course',
    name: 'choose-course',
    component: ChooseCourse,
    // redirect: '/login',
    meta: {
      requireAuth: false, // 在需要登录的路由的meta中添加响应的权限标识
    },
  },
  {
    path: '/',
    redirect: '/login',
  },
  /* ...module_1,
  ...module_2,*/
]

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

const router = createRouter()

export default router

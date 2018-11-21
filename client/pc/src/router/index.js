import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from '@/components/Home'
import Login from '@/components/Login'
import registered from'@/components/registered'
import Menu from'@/components/Menu'
=======
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Material from '@/components/Material.vue'
import DietHealth from '@/components/DietHealth.vue'
import CookBook from '@/components/CookBook.vue'
>>>>>>> 16eb67ed8d8c5f7b6a7bd21469dc6deb712d0ac6

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/material',
      name: 'Material',
      component: Material,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
<<<<<<< HEAD
      path: '/registered',
      name: 'registered',
      component: registered,
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
=======
      path: '/diet_health',
      name: 'DietHealth',
      component: DietHealth,
    },
    {
      path: '/cook_book',
      name: 'CookBook',
      component: CookBook,
>>>>>>> 16eb67ed8d8c5f7b6a7bd21469dc6deb712d0ac6
    }
  ],
  mode: 'history'
})

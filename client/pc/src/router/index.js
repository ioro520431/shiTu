import Vue from 'vue'
import Router from 'vue-router'
import registered from'@/components/registered'
import Menu from'@/components/Menu'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Material from '@/components/Material.vue'
import DietHealth from '@/components/DietHealth.vue'
import CookBook from '@/components/CookBook.vue'

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
      path: '/registered',
      name: 'registered',
      component: registered,
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/diet_health',
      name: 'DietHealth',
      component: DietHealth,
    },
    {
      path: '/cook_book',
      name: 'CookBook',
      component: CookBook,
    }
  ],
  mode: 'history'
})

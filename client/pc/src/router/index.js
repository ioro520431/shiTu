import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import registered from'@/components/registered'
import Menu from'@/components/Menu'

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
    }
  ],
  mode: 'history'
})

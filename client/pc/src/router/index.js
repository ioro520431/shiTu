import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Material from '@/components/Material.vue'
import Common from '@/components/Common.vue'
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
      path: '/common',
      name: 'Common',
      component: Common,
    }
  ],
  mode: 'history'
})

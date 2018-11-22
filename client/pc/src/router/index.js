import Vue from 'vue'
import Router from 'vue-router'
import registered from'@/components/registered'
import Menu from'@/components/Menu'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Material from '@/components/Material.vue'
<<<<<<< HEAD
import Common from '@/components/Common.vue'
=======
import DietHealth from '@/components/DietHealth.vue'
import CookBook from '@/components/CookBook.vue'
import RecipeVideo from '@/components/RecipeVideo.vue'
import VedioPlayer from '@/components/VedioPlayer.vue'

>>>>>>> 35a2c57c474f46bd92201783110bb9e4e9f0e54d
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
      path: '/common',
      name: 'Common',
      component: Common,
=======
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
    },
    {
      path: '/recipe_video',
      name: 'RecipeVideo',
      component: RecipeVideo,
    },
    {
      path: '/vedio_layer',
      name: 'VedioPlayer',
      component: VedioPlayer,
>>>>>>> 35a2c57c474f46bd92201783110bb9e4e9f0e54d
    }
  ],
  mode: 'history'
})

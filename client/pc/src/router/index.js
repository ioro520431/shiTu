import Vue from 'vue'
import Router from 'vue-router'
import registered from'@/components/registered.vue'
import Menu from'@/components/Menu.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Material from '@/components/Material.vue'
import Common from '@/components/Common.vue'
import DietHealth from '@/components/DietHealth.vue'
import CookBook from '@/components/CookBook.vue'
import Detail from '@/components/Detail.vue'
import MenuDescribe from '@/components/MenuDescribe.vue'
import RecipeVideo from '@/components/RecipeVideo.vue'
import VedioPlayer from '@/components/VedioPlayer.vue'
import Personal from '@/components/Personal.vue'
import Loadding from '@/components/Loadding.vue'
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
      component: Common
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered,
    },
    {
      path: '/menu',
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
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
    {
    	path: '/menuDescribe',
      name: 'MenuDescribe',
      component: MenuDescribe,
    },
    {
      path: '/Loadding',
      name: 'Loadding',
      component: Loadding
    }
  ],
  mode: 'history'
})

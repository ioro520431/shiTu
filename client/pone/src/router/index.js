import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import All from '@/components/All'
import Health from '@/components/Health'
import Menu from '@/components/Menu'
import Video from '@/components/Video'
import Recommend from '@/components/Recommend'
import MenuTwo from '@/components/MenuTwo'
import Dinner from '@/components/Dinner'
import Night from '@/components/Night'
import Carte from '@/components/Carte'
Vue.config.productionTip = false
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/home',
      name: 'Home',
      component: Home
    },
     {
      path: '/all',
      name: 'All',
      component: All
    },
     {
      path: '/health',
      name: 'Health',
      component: Health
    },
     {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
     {
      path: '/video',
      name: 'Video',
      component: Video
    },
     {
      path: '/menuTwo',
      name: 'MenuTwo',
      component: MenuTwo
    },
     {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
     {
      path: '/dinner',
      name: 'Dinner',
      component: Dinner
    },
     {
      path: '/night',
      name: 'Night',
      component: Night
    },
     {
      path: '/carte',
      name: 'Carte',
      component: Carte
    }
  ]
});

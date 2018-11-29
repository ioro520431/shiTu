import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home_page/Home'
import Video from '@/components/video/Video'
import About from '@/components/About/About'
import resign from '@/components/About/resign'
import login from '@/components/About/login'
import Health from '@/components/Health/Health'
import Classify from '@/components/Classify/Classify'
import breakfast from '@/components/detail/breakfast'
import lunch from '@/components/detail/lunch'
import dinner from '@/components/detail/dinner'
import nightsnack from '@/components/detail/nightsnack'
import menu from '@/components/menu-page/menu'
import menuall from '@/components/menu-page/menuall'
Vue.config.productionTip = false
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
 }
   ,
     {
      path: '/classify',
      name: 'Classify',
      component: Classify 
    },
     {
      path: '/health',
      name: 'Health',
      component: Health 
    },
     {
      path: '/video',
      name: 'Video',
      component: Video
    },
       {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/resign',
      name: 'resign',
      component: resign
    },
      {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/breakfast',
      name: 'breakfast',
      component: breakfast
    },
     {
      path: '/lunch',
      name: 'lunch',
      component: lunch
    },
     {
      path: '/dinner',
      name: 'dinner',
      component: dinner
    },
     {
      path: '/nightsnack',
      name: 'nightsnack',
      component: nightsnack
    },
     {
      path: '/menu',
      name: 'menu',
      component: menu
    },
     {
      path: '/menuall',
      name: 'menuall',
      component: menuall
    }
     
  ]
});

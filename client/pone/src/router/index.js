import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import All from '@/components/All'
import Health from '@/components/Health'
import Menu from '@/components/Menu'
import Video from '@/components/Video'
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
    }
  ]
})

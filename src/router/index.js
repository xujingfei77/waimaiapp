/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search/Search.vue'
import Order from '@/views/Order/Order.vue'
import Personal from '@/views/Personal/Personal.vue'
import Login from '@/views/Login/Login.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      // 路由重定向，默认home为第一页
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      // 路由元信息标注那些页面需要通用页脚
      meta: {
        footShow :true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        footShow :true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        footShow :true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        footShow :true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})


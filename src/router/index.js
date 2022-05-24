import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ()=>import('@/components/sub/login')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('@/components/views/home')
    },
    {
      path: '/sort',
      name: 'sort',
      component: ()=>import('@/components/views/sort')
    },
    {
      path: '/cart',
      name: 'cart',
      component: ()=>import('@/components/views/cart')
    },
    {
      path: '/user',
      name: 'user',
      component: ()=>import('@/components/views/user')
    },
    {
      path:'/goods',
      name:'goods',
      component: ()=>import('@/components/sub/goods')
    },
    {
      path:'/search',
      name:'search',
      component: ()=>import('@/components/sub/search')
    },
    {
      path:'/addresslist',
      name:'addresslist',
      component: ()=>import('@/components/views/addresslist')
    },
    {
      path:'/address',
      name:'address',
      component: ()=>import('@/components/views/address')
    },
    {
      path:'/addresss',
      name:'addresss',
      component: ()=>import('@/components/views/addresss')
    },
    {
      path:'/register',
      name:'register',
      component: ()=>import('@/components/sub/register')
    },
    {
      path:'/customer',
      name:'customer',
      component: ()=>import('@/components/sub/customer')
    },
    {
      path:'/new',
      name:'new',
      component: ()=>import('@/components/views/new')
    },
    {
      path:'/collect',
      name:'collect',
      component: ()=>import('@/components/views/collect')
    },
    {
      path:'/pay',
      name:'pay',
      component: ()=>import('@/components/views/pay')
    },
    {
      path:'/order',
      name:'order',
      component: ()=>import('@/components/views/order')
    },
    {
      path:'/promote',
      name:'promote',
      component: ()=>import('@/components/views/promote')
    }
  ]}
)


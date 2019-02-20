import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import(/* webpackChunkName: "book" */ './views/Book.vue')
    },
    {
      path: '/book/items/:id',
      name: 'items',
      component: () => import(/* webpackChunkName: "items" */ './views/Items.vue')
    },
    {
      path: '/attend',
      name: 'attend',
      component: () => import(/* webpackChunkName: "attend" */ './views/Attend.vue')
    },
    {
      path: '/book/attends/:id',
      name: 'attends',
      component: () => import(/* webpackChunkName: "attends" */ './views/Attends.vue')
    },
    {
      path: '/book/item/20181013',
      name: 'item20181013',
      component: () => import(/* webpackChunkName: "item20181013" */ './views/item/20181013.vue')
    },
    {
      path: '/book/item/20181027',
      name: 'item20181027',
      component: () => import(/* webpackChunkName: "item20181027" */ './views/item/20181027.vue')
    },
    {
      path: '/book/item/20181110',
      name: 'item20181110',
      component: () => import(/* webpackChunkName: "item20181110" */ './views/item/20181110.vue')
    },
    {
      path: '/book/item/20181124',
      name: 'item20181124',
      component: () => import(/* webpackChunkName: "item20181124" */ './views/item/20181124.vue')
    },
    {
      path: '/book/item/20181201',
      name: 'item20181201',
      component: () => import(/* webpackChunkName: "item20181201" */ './views/item/20181201.vue')
    },
    {
      path: '/book/item/20181208',
      name: 'item20181208',
      component: () => import(/* webpackChunkName: "item20181208" */ './views/item/20181208.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "items" */ './views/404.vue')
    }
  ]
})

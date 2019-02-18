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
      path: '/book/item/20181013',
      name: 'item20181013',
      component: () => import(/* webpackChunkName: "item20181013" */ './views/item/20181013.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "items" */ './views/404.vue')
    }
  ]
})

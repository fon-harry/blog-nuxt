import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index'
import Categories from '~/pages/categories'
import Category1 from '~/pages/category1'
import Post1 from '~/pages/post1'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'index',
        path: '/',
        component: Index
      },
      {
        name: 'categories',
        path: '/categories',
        component: Categories
      },
      {
        name: 'category1',
        path: '/categories/category1',
        component: Category1
      },
      {
        name: 'post1',
        path: '/post1',
        component: Post1
      }
    ]
  })
}

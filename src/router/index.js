import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../components/Book.vue'
import Cart from '../components/Cart.vue'
import Store from '../components/Store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Book',
    component: Book
  },
  
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
   
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

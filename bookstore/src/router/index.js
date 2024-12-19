import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AddBook from '../components/AddBook.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-book',
    name: 'AddBook',
    component: AddBook
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

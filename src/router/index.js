import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/views/TodoList.vue'
import TodoItem from '@/components/TodoItem.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/:item',
    name: 'TodoItem',
    component: TodoItem
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

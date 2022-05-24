<template lang='pug'>
.todo-list__wrapper
  h1.todo-list__header Todo

  ul.todo-list__container
  TodoItem(
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
    @toggleTask="toggleTask"
    @deleteTask="deleteTask"
  )
  input.todo-list__new-item(
    v-model.trim="taskName"
    @keyup.enter="addTask"
  )
  .todo-list__button
    a(
      class='todo-list__save'
      href='#'
      @click="addTask"
    ) Save
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from '@/components/TodoItem.vue'

const taskName = ref('')

const todos = ref([
  { name: 'function', done: false, id: crypto.randomUUID() },
  { name: 'take a rest', done: false, id: crypto.randomUUID() }
])

function toggleTask(id) {
  const oldTask = todos.value.find(todo => id === todo.id)
  const updatedTask = { ...oldTask, done: !oldTask.done }

  todos.value = todos.value.map(task => {
    if(task.id === id) { return updatedTask }
    return task
  })
}

function deleteTask(id) {
  todos.value = todos.value.filter(todo => id !== todo.id)
}

function addTask() {
  if (taskName.value.length === 0) { return }

  const newTask = {
    name: taskName.value,
    done: false,
    id: crypto.randomUUID()
  }

  todos.value.push(newTask)
  taskName.value = ''
}

</script>

<style>
.todo-list__wrapper
  background-color: rgba(255, 255, 255, 0.4)
  padding: 24px

.todo-list__container
  margin: 0
  padding: 0
  list-style-position: inside

.todo-list__new-item
  margin: 24px 24px 24px 0px
  box-sizing: border-box

.todo-list__button
  text-decoration: none
  display: inline-block
  position: relative
  background: none
  font-weight: 300

.todo-list__button:hover
  background: rgba(255, 255, 255, 0.6)
</style>

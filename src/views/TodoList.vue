<template lang='pug'>
.todo-list__wrapper
  input.todo-list__title(v-model="title" @keyup.enter='title')

  ul.todo-list__container
    TodoItem(
      v-for='todo in todos'
      :key='todo.id'
      :todo='todo'
      @toggleTask='toggleTask'
      @deleteTask='deleteTask'
    )
  .todo-list__call-to-action
    input.todo-list__new-item(
      v-model.trim='taskName'
      @keyup.enter='addTask'
    )
    button.todo-list__button(
        @click='addTask'
      ) add
</template>

<script setup>
import { ref } from 'vue'
import TodoItem from '@/components/TodoItem.vue'

const taskName = ref('')

const title = ref('Todo')

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
  box-sizing: border-box
  margin: 0 16px
  height: 100vh
  display: grid
  grid-template-areas:
    'title-list '
    'todos      '
    'new-task   '
  grid-template-columns: 1fr
  grid-template-rows: 160px auto 120px
  padding: 30px
  font-size: 30px
  position: relative

.todo-list__title
  grid-area: title-list
  border: none
  background: none
  font-family: inherit
  color: inherit
  display: block
  font-size: 2em
  font-weight: bold
  width: 100%

.todo-list__title:focus
  outline: none

.todo-list__container
  grid-area: todos
  margin: 0
  padding: 0
  overflow: hidden

.todo-list__call-to-action
  grid-area: new-task
  align-self: end

.todo-list__new-item
  width: 100%
  margin: 20px 0px
  box-sizing: border-box
  background: none
  border: none
  height: 40px
  box-shadow: 0 5px 30px rgba(55, 63, 81, 0.1)
  background-color: rgba(255, 255, 255, 0.3)

button.todo-list__button
  all: unset
  display: flex
  box-shadow: 0 5px 30px rgba(55, 63, 81, 0.1)
  justify-content: center
  background: none
  cursor: pointer
  height: 40px
  min-width: 100%

button.todo-list__button:hover
  background: rgba(255, 255, 255, 0.2)
</style>

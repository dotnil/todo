<template lang='pug'>
.todo-list__wrapper
  h1.todo-list__header Todo

  ul.todo-list__container
    TodoItem(
      v-for='todo in todos'
      :key='todo.id'
      :todo='todo'
      @toggleTask='toggleTask'
      @deleteTask='deleteTask'
    )
  .todo-list__input
    input.todo-list__new-item(
      v-model.trim='taskName'
      @keyup.enter='addTask'
      placeholder='task'
      type='text'
    )
    input.todo-list__button(
        @click='addTask'
        type='submit'
        value=''
      ) +
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
  display: flex
  flex-direction: column
  padding: 30px
  height: 90vh
  font-size: 30px
  width: 70%

.todo-list__header
  margin-top: 0

.todo-list__container
  margin: 0
  padding: 0

.todo-list__button
  position: relative
  display: inline-block

.todo-list__new-item
  position: relative
  margin: 20px 0px
  box-sizing: border-box
  background: none
  border: none
  height: 40px
  box-shadow: 0 5px 30px rgba(55, 63, 81, 0.1)
  background-color: rgba(255, 255, 255, 0.3)

.todo-list__button
  position:absolute
  display: flex
  text-decoration: none
  background: none
  cursor: pointer
  padding: 0 16px

.todo-list__button:hover
  background: rgba(255, 255, 255, 0.2)
</style>

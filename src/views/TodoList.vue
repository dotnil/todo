<template lang='pug'>
.todo-list__wrapper
  input.todo-list__title(v-model="title" @keyup.enter='title')

  ul.todo-list__container
    TodoItem(
      v-for='todo in todos'
      :key='todo'
      @toggleTask='toggleTask'
      @deleteTask='deleteTask'
    )

  ul.todo-list__container
    .drop-zone(
      @drop='onDrop($event, 1)'
      @dragover.prevent
      @dragenter.prevent)
    TodoItem(
      v-for='todo in todos'
      :key='todo.name'
      @toggleTask='toggleTask'
      @deleteTask='deleteTask'
      draggable='true'
      @dragstart='startDrag($event, item)'
    )

  div
    .drop-zone(@drop='onDrop($event, 1)' @dragover.prevent @dragenter.prevent)
      .drag-el(v-for='item in getList(1)' :key='item.id' draggable='true' @dragstart='startDrag($event, item)') {{ item.title }}

    .drop-zone(@drop='onDrop($event, 2)' @dragover.prevent @dragenter.prevent)
      .drag-el(v-for='item in getList(2)' :key='item.id' draggable='true' @dragstart='startDrag($event, item)') {{ item.title }}

  .todo-list__call-to-action
    input.todo-list__new-item(
      v-model.trim='taskName'
      @keyup.enter='addTask'
    )
    button.todo-list__button(
        @click='addTask'
      ) +
</template>

<script setup>
import { ref , computed } from 'vue'
import TodoItem from '@/components/TodoItem.vue'

const items = ref([
  {
    id: 0,
    title: 'Item A',
    list: 1,
  },
  {
    id: 1,
    title: 'Item B',
    list: 1,
  },
  {
    id: 2,
    title: 'Item C',
    list: 2,
  },
])

const getList = (list) => {
  return items.value.filter((item) => item.list === list)
}

const index = todos.value.map(todo => todo.name).indexOf(name)

const getListNew = (index) => {
  return todos.value.filter((item) => item.name === index)
}

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemName', item.name)
}

const onDrop = (event, list) => {
  const itemName = event.dataTransfer.getData('itemName')
  const item = items.value.find((item) => item.name == itemName)
  item.list = list
}

const taskName = ref('')

const todos = ref([
  { name: 'function', done: false, id: crypto.randomUUID() },
  { name: 'sleep', done: false, id: crypto.randomUUID() },
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
  height: 100vh
  display: grid
  grid-template-areas:
    'title-list title-list'
    'todos      todos     '
    'new-task   submit    '
  grid-template-columns: 2fr
  grid-template-rows: 160px auto 80px
  font-size: 40px
  position: relative

.todo-list__title
  grid-area: title-list
  font-family: "Vensfolk"
  border: none
  background: none
  color: inherit
  display: block
  font-size: 3em
  width: 100vw
  padding: 0

.todo-list__title:focus
  outline: none

.todo-list__container
  grid-area: todos
  margin: 0
  padding: 30px
  overflow: hidden
  font-family: "Montserrat"

.todo-list__call-to-action
  grid-area: new-task
  display: contents
  align-self: end
  box-sizing: border-box

.todo-list__new-item
  grid-area: new-task
  width: 100%
  background: none
  border: none
  box-shadow: 0 5px 30px rgba(55, 63, 81, 0.1)
  background-color: #FAF7F5

button.todo-list__button
  all: unset
  grid-area: submit
  display: flex
  justify-content: center
  cursor: pointer
  background-color: #FAF7F5
  width: 80px
  font-size: 60px
  align-items: center

button.todo-list__button:hover
background-color: #FAF7F5

.a
  grid-area: title-list

.drop-zone
  background-color: #eee
  margin-bottom: 10px
  padding: 10px


.drag-el
  background-color: #fff
  margin-bottom: 10px
  padding: 5px

</style>


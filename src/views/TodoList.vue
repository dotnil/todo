<template lang='pug'>
.todo-list__wrapper
  h1.todo-list__header Todo

  ul.todo-list__container

  input.todo-list__new-item
  .todo-list__button
    a(class='todo-list__save' href='#') Save
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue'

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

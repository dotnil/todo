<template lang='pug'>
li.todo-item
  span.todo-item__name(
    :class="{ 'todo-item__name_completed': todo.done }"
    @click="emitToggleTask"
  ) {{ todo.name }}
  .todo-item__delete(@click="emitDeleteTask") &times;
</template>

<script setup>
const emit = defineEmits(['toggleTask', 'deleteTask'])

const props = defineProps({
  todo: { type: Object, default: () => ({ name: 'task', done: false, id: '' }) },
})

function emitToggleTask() {
  emit('toggleTask', props.todo.id)
}

function emitDeleteTask() {
  emit('deleteTask', props.todo.id)
}
</script>

<style>
.todo-item
  list-style-type: circle
  list-style-position: inside

.todo-item:hover
  list-style-type: disc

.todo-item__name
  cursor: pointer

.todo-item__name_completed
  text-decoration: line-through
  color: #9a8c98

.todo-item__delete
  display: initial
  cursor: pointer
  text-decoration: none
  color: #5a0700
  margin-left: 10px

.todo-item__delete:hover
  color: #8F0000
</style>

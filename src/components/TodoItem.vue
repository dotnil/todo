<template lang='pug'>
li.todo-item
  span.todo-item__name(
    :class="{ 'todo-item__name_completed': todo.done }"
    @click="emitToggleTask"
  ) {{ todo.name }}
  a.todo-item__delete(@click="emitDeleteTask") &times;
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
.todo-item__delete
  cursor: pointer

.todo-item
  padding: 4px 0
</style>

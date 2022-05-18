<template lang='pug'>
li.todo-item
  span.todo-item__name(:class="{ 'todo-item__name_completed': todo.done }" ) {{ todo.name }}
  a.todo-item__delete(href='#' ) &times;
</template>

<script setup>
const props = defineProps({
  todo: { type: Object, default: () => ({ name: 'task', done: false }) },
})

function toggleTask() {

}
</script>

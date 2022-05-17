<template lang='pug'>
li.todo-item
    span.todo-item__name
    a.todo-item__delete(href='#') ×
</template>

<script setup>
import TodoItem from '@/components/TodoItem.vue'

</script>

import { mount } from '@vue/test-utils'
import TodoList from '@/views/TodoList.vue'
import { expect, test } from 'vitest'

import { Crypto } from '@peculiar/webcrypto'
global.crypto = new Crypto()

test('Add a new task with the save button', async () => {
  const todoList = mount(TodoList)

  const input = todoList.find('.todo-list__new-item')
  await input.setValue('feed the cat')

  const saveButton = todoList.find('.todo-list__button')
  await saveButton.trigger('click')

  expect(todoList.text()).toContain('feed the cat')
})

test('Add a new task by pressing the "enter" key', async () => {
  const todoList = mount(TodoList)

  const input = todoList.find('.todo-list__new-item')
  await input.setValue('feed the cat')

  await input.trigger('keyup.enter')

  expect(todoList.text()).toContain('feed the cat')
})

test('Complete the task', async () => {
  const todoList = mount(TodoList)
  const input = todoList.find('.todo-list__new-item')
  await input.setValue('feed the cat')
  await input.trigger('keyup.enter')
  const task = todoList
    .findAll('.todo-item__name')
    .filter(task => task.text() === 'feed the cat')[0]

  expect(task.classes()).not.toContain('todo-item__name_completed')
  await task.trigger('click')
  expect(task.classes()).toContain('todo-item__name_completed')
})

test('Delete the task', async () => {
  const todoList = mount(TodoList)
  const input = todoList.find('.todo-list__new-item')
  await input.setValue('feed the cat')
  await input.trigger('keyup.enter')
  const task = todoList
    .findAll('.todo-item__name')
    .filter(task => task.text() === 'feed the cat')[0]

  const deleteButton = todoList.find('todo-item__delete')
  await deleteButton.trigger('click')
})

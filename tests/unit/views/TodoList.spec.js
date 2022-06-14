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

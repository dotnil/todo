import { mount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'
import { expect, test } from 'vitest'

test('Render default name', () => {
  const wrapper = mount(TodoItem)

  expect(wrapper.text()).toContain('task')
})

test('Render value', () => {
  const wrapper = mount(
    TodoItem, { props: { todo: { name: 'buy milk', done: true } } }
  )

  expect(wrapper.text()).toContain('buy milk')
})

test('Emit @toggleTask', async () => {
  const todoItem = mount(TodoItem)

  await todoItem.find('.todo-item__name').trigger('click')

  expect(todoItem.emitted()).toHaveProperty('toggleTask')
})

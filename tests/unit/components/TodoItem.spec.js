import { mount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'
import { expect, test } from 'vitest'

test('render default name', () => {
  const wrapper = mount(TodoItem)

  expect(wrapper.text()).toContain('task')
})

test('render value', () => {
  const wrapper = mount(
    TodoItem, { props: { todo: {name: 'buy milk', done: true} } }
  )

  expect(wrapper.text()).toContain('buy milk')
})

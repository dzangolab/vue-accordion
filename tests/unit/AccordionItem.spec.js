import {mount} from '@vue/test-utils'
import AccordionItem from '@/components/Item'

describe('AccordionItem', () => {
  const title = 'title'
  const content = 'content'
  const index = 0

  const wrapperFactory = ({props, slots} = {}) => {
    return mount(AccordionItem, {
      props: {
        content,
        index,
        title,
        ...props
      },
      slots: slots
    })
  }

  it('renders title and content', async () => {
    const wrapper = wrapperFactory()

    expect(wrapper.find('[data-el="title"]').text()).toEqual(title)
    expect(wrapper.find('[data-el="content"]').text()).toEqual(content)

    wrapper.unmount()
  })

  it('does not render toggle button', async () => {
    const wrapper = wrapperFactory({
      props: {
        showToggle: false
      }
    })

    const toggle = wrapper.find('[data-el="toggle"]')

    expect(toggle.exists()).toBe(false)

    wrapper.unmount()
  })

  it('emits accordion:select event on click accordion item', async () => {
    const wrapper = wrapperFactory()

    await wrapper.find('[data-el="title"]').trigger('click')

    const event = wrapper.emitted('item:select')

    expect(event).toBeTruthy()

    expect(event[0]).toEqual([index])

    wrapper.unmount()
  })

  it('renders title slot', async () => {
    const wrapper = wrapperFactory({
      slots: {
        title: `<template v-slot:title><h3>${title}</h3></template>`
      }
    })

    const itemTitle = wrapper.find('[data-el="title"]')

    expect(itemTitle.html()).toContain(`<h3>${title}</h3>`)

    wrapper.unmount()
  })

  it('renders content slot', async () => {
    const wrapper = wrapperFactory({
      slots: {
        content: `<template v-slot:content><pre>${content}</pre></template>`
      }
    })

    const itemContent = wrapper.find('[data-el="content"]')

    expect(itemContent.html()).toContain(`<pre>${content}</pre>`)

    wrapper.unmount()
  })
})

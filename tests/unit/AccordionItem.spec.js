import {shallowMount} from '@vue/test-utils'
import AccordionItem from '@/components/Accordion/Item'

describe('AccordionItem', () => {
  const title = 'title'
  const content = 'content'
  const index = 0

  const wrapperFactory = ({propsData, scopedSlots} = {}) => {
    return shallowMount(AccordionItem, {
      propsData: {
        content,
        index,
        title,
        ...propsData
      },
      scopedSlots: {
        ...scopedSlots
      }
    })
  }

  it('renders title and content', async () => {
    const wrapper = wrapperFactory()

    expect(await wrapper.find('[data-el="title"]').text()).toEqual(title)
    expect(await wrapper.find('[data-el="content"]').text()).toEqual(content)

    wrapper.destroy()
  })

  it('does not render toggle button', async () => {
    const wrapper = wrapperFactory({
      propsData: {
        showToggle: false
      }
    })

    const toggle = await wrapper.find('[data-el="toggle"]')

    expect(toggle.exists()).toBe(false)

    wrapper.destroy()
  })

  it('emits accordion:select event on click accordion item', async () => {
    const wrapper = wrapperFactory()

    await wrapper.find('[data-el="title"]').trigger('click')

    const event = wrapper.emitted('item:select')

    expect(event).toBeTruthy()

    expect(event[0]).toEqual([index])

    wrapper.destroy()
  })

  it('renders passed value in title after slot passed', async () => {
    const wrapper = wrapperFactory({
      scopedSlots: {
        title: `<template><h3>${title}</h3></template>`
      }
    })

    const itemTitle = await wrapper.find('[data-el="title"]')

    expect(itemTitle.html()).toContain(`<h3>${title}</h3>`)

    wrapper.destroy()
  })

  it('renders passed value in content after slot passed', async () => {
    const wrapper = wrapperFactory({
      scopedSlots: {
        content: `<template><pre>${content}</pre></template>`
      }
    })

    const itemContent = await wrapper.find('[data-el="content"]')

    expect(itemContent.html()).toContain(`<pre>${content}</pre>`)

    wrapper.destroy()
  })
})

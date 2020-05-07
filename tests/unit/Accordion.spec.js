import {mount, shallowMount} from '@vue/test-utils'
import Accordion from '@/components/Accordion/Index'
import AccordionItem from '@/components/Accordion/Item'

describe('Accordion', () => {
  const items = [
    {
      content: 'some content',
      title: 'Item 1'
    },
    {
      content: 'some more content',
      title: 'Item 2'
    },
    {
      content: 'some other content',
      title: 'Item 3'
    }
  ]

  const generateRandomIndex = () => {
    return Math.floor(Math.random() * items.length)
  }

  const wrapperFactory = (shallow = true, {propsData, scopedSlots} = {}) => {
    const options = {
      propsData: {
        items,
        ...propsData
      },
      scopedSlots: {
        ...scopedSlots
      }
    }

    return shallow ? shallowMount(Accordion, options) : mount(Accordion, options)
  }

  it('renders 0 accordion items', async () => {
    const wrapper = shallowMount(Accordion, {})

    const acccordionItems = await wrapper.findAllComponents(AccordionItem)

    expect(acccordionItems.length).toBe(0)

    wrapper.destroy()
  })

  it('renders accordion items', async () => {
    const wrapper = wrapperFactory()

    const acccordionItems = await wrapper.findAllComponents(AccordionItem)

    expect(acccordionItems.length).toBe(items.length)

    wrapper.destroy()
  })

  it('renders passed value in title after slot passed', async () => {
    const wrapper = wrapperFactory(false, {
      scopedSlots: {
        title: '<template><h3>{{ props.index + 1 }}. {{ props.item.title }}</h3></template>'
      }
    })

    const index = generateRandomIndex()

    const title = await wrapper.find(`[data-el="item-${index}"]`).find('[data-el="title"]')

    expect(title.html()).toContain(`<h3>${index + 1}. ${items[index].title}</h3>`)

    wrapper.destroy()
  })

  it('renders passed value in content after slot passed', async () => {
    const wrapper = wrapperFactory(false, {
      scopedSlots: {
        content: '<template><div>{{ props.index + 1 }}. {{ props.item.content }}</div></template>'
      }
    })

    const index = generateRandomIndex()

    const content = await wrapper.find(`[data-el="item-${index}"]`).find('[data-el="content"]')

    expect(content.html()).toContain(`<div>${index + 1}. ${items[index].content}</div>`)

    wrapper.destroy()
  })

  it('emits accordion:select event on click accordion item', async () => {
    const wrapper = wrapperFactory(false)

    const index = generateRandomIndex()

    await wrapper.find(`[data-el="item-${index}"]`)
      .find('[data-el="title"]')
      .trigger('click')

    expect(wrapper.emitted('accordion:select')).toBeTruthy()

    wrapper.destroy()
  })

  it('toggles first item', async () => {
    const wrapper = wrapperFactory(false)

    const title = await wrapper.find('[data-el="item-0"]')
      .find('[data-el="title"]')

    await title.trigger('click')

    const event = wrapper.emitted('accordion:select')

    expect(event).toBeTruthy()

    expect(event[0]).toEqual([null])

    await title.trigger('click')

    expect(event[1]).toEqual([0])

    wrapper.destroy()
  })
})

import {mount, shallowMount} from '@vue/test-utils'
import Accordion from '@/components/Accordion'
import AccordionItem from '@/components/Item'

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

  const wrapperFactory = (shallow = true, {propsData, slots} = {}) => {
    const options = {
      props: {
        items,
        ...propsData
      },
      shallow: shallow,
      slots: slots,
      stubs: {
        transition: false
      }
    }

    return mount(Accordion, options)
  }

  it('renders 0 accordion items', async () => {
    const wrapper = shallowMount(Accordion, {})

    const acccordionItems = wrapper.findAllComponents(AccordionItem)

    expect(acccordionItems.length).toBe(0)

    wrapper.unmount()
  })

  it('renders accordion items', async () => {
    const wrapper = wrapperFactory()

    const acccordionItems = await wrapper.findAllComponents(AccordionItem)

    expect(acccordionItems.length).toBe(items.length)

    wrapper.unmount()
  })

  it('opens item according to default-item prop', async () => {
    const index = generateRandomIndex()

    const props = {
      'default-index': index
    }

    const wrapper = wrapperFactory(false, {
      propsData: props
    })

    const item = wrapper.find(`[data-el="item-${index}"]`)
      
    expect(item.classes()).toContain('-active')

    wrapper.unmount()
  })

  it('renders title slot', async () => {
    const wrapper = wrapperFactory(false, {
      propsData: {},
      slots: {
        title: '<template v-slot:title="params"><h3>{{ params.index + 1 }}. {{ params.item.title }}</h3></template>'
      }
    })

    const index = generateRandomIndex()

    const title = wrapper.find(`[data-el="item-${index}"]`).find('[data-el="title"]')

    expect(title.html()).toContain(`<h3>${index + 1}. ${items[index].title}</h3>`)

    wrapper.unmount()
  })

  it('renders content slot', async () => {
    const wrapper = wrapperFactory(false, {
      props: {},
      slots: {
        content: '<template v-slot:content="params"><div>{{ params.index + 1 }}. {{ params.item.content }}</div></template>'
      }
    })

    const index = generateRandomIndex()

    const content = wrapper.find(`[data-el="item-${index}"]`).find('[data-el="content"]')

    expect(content.html()).toContain(`<div>${index + 1}. ${items[index].content}</div>`)

    wrapper.unmount()
  })

  it('emits accordion:select event on click accordion item', async () => {
    const wrapper = wrapperFactory(false)

    const index = generateRandomIndex()

    await wrapper.find(`[data-el="item-${index}"]`)
      .find('[data-el="title"]')
      .trigger('click')

    expect(wrapper.emitted('accordion:select')).toBeTruthy()

    wrapper.unmount()
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

    wrapper.unmount()
  })
})

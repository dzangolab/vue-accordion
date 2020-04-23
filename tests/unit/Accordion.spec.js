import {mount, shallowMount} from '@vue/test-utils'
import Accordion from '@/components/Accordion/Index'
import AccordionItem from '@/components/Accordion/Item'

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

describe('Accordion', () => {
  it('renders accordion items', async () => {
    const wrapper = shallowMount(Accordion, {
      propsData: {
        items
      }
    })

    const acccordionItems = await wrapper.findAll(AccordionItem)

    expect(acccordionItems.length).toBe(items.length)

    wrapper.destroy()
  })

  it('renders passed value in title after slot passed', async () => {
    const wrapper = mount(Accordion, {
      propsData: {
        items
      },
      scopedSlots: {
        title: '<template><h3>{{ props.index + 1 }}. {{ props.item.title }}</h3></template>'
      }
    })

    const index = generateRandomIndex()

    const title = await wrapper.find(`[data-el="item-${index}"]`).find('[data-el="title"]')

    expect(title.text()).toEqual(`${index + 1}. ${items[index].title}`)

    wrapper.destroy()
  })

  it('renders passed value in content after slot passed', async () => {
    const wrapper = mount(Accordion, {
      propsData: {
        items
      },
      scopedSlots: {
        content: '<template><div>{{ props.index + 1 }}. {{ props.item.content }}</div></template>'
      }
    })

    const index = generateRandomIndex()

    const content = await wrapper.find(`[data-el="item-${index}"]`).find('[data-el="content"]')

    expect(content.text()).toEqual(`${index + 1}. ${items[index].content}`)

    wrapper.destroy()
  })

  it('emits accordion:select event on click accordion item', async () => {
    const wrapper = mount(Accordion, {
      propsData: {
        items
      }
    })

    const index = generateRandomIndex()

    await wrapper.find(`[data-el="item-${index}"]`)
      .find('[data-el="title"]')
      .trigger('click')

    expect(wrapper.emitted('accordion:select')).toBeTruthy()

    wrapper.destroy()
  })
})

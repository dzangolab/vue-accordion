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

describe('Accordion', () => {
  it('renders accordion items', async () => {
    const wrapper = shallowMount(Accordion, {
      propsData: {
        items
      }
    })

    const acccordionItems = await wrapper.findAll(AccordionItem)

    expect(acccordionItems.length).toBe(3)

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

    const titles = await wrapper.findAll('div[class="c-accordion__title"]')

    expect(titles.at(0).text()).toEqual('1. Item 1')
    expect(titles.at(1).text()).toEqual('2. Item 2')
    expect(titles.at(2).text()).toEqual('3. Item 3')

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

    const contents = await wrapper.findAll('div[class="c-accordion__content"]')

    expect(contents.at(0).text()).toEqual('1. some content')
    expect(contents.at(1).text()).toEqual('2. some more content')
    expect(contents.at(2).text()).toEqual('3. some other content')

    wrapper.destroy()
  })

  it('hides toggle button', async () => {
    const wrapper = mount(Accordion, {
      propsData: {
        items,
        showToggle: false
      }
    })

    const toggle = await wrapper.find('span[class="c-accordion__toggle"]')

    expect(toggle.isEmpty()).toBe(true)

    wrapper.destroy()
  })

  it('emits accordion:select event on click accordion item', async () => {
    const wrapper = mount(Accordion, {
      propsData: {
        items
      }
    })

    await wrapper.find('div[class="c-accordion__title"]').trigger('click')

    expect(wrapper.emitted()['accordion:select']).toBeTruthy()
  })
})

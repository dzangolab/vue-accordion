import {shallowMount} from '@vue/test-utils'
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
  it('render accordion items', async () => {
    const wrapper = shallowMount(Accordion, {
      propsData: {
        items
      }
    })

    expect(wrapper.findAll(AccordionItem).length).toBe(3)

    wrapper.destroy()
  })
})

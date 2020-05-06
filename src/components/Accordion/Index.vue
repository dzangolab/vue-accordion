<template>
  <div class="c-accordion">
    <Item
      @item:select="onItemSelect"
      :active="isActive(key)"
      :content="item.content"
      :data-el="'item-' + key"
      :duration="duration"
      :index="key"
      :key="key"
      :show-toggle="showToggle"
      :title="item.title"
      :transition="transition"
      v-for="(item, key) in items"
    >
      <template v-slot:title>
        <slot
          name="title"
          :index="key"
          :item="item"
        />
      </template>

      <template v-slot:toggle>
        <slot
          name="toggle"
          :active="isActive(key)"
        />
      </template>

      <template v-slot:content>
        <slot
          name="content"
          :index="key"
          :item="item"
        />
      </template>
    </Item>
  </div>
</template>

<script>
import Item from './Item'

import '@/assets/scss/accordion.scss'

export default {
  components: {
    Item
  },

  created () {
    this.prepareComponent()
  },

  data () {
    return {
      index: 0,
      state: [1]
    }
  },

  methods: {
    isActive (index) {
      return !!this.state[index]
    },

    onItemSelect (index) {
      this.index = !this.state[index] ? index : null

      this.prepareComponent()

      this.$emit('accordion:select', this.index)
    },

    prepareComponent () {
      this.state = []

      this.items.forEach((item, index) => {
        this.state.push(index === this.index)
      })
    }
  },

  name: 'Accordion',

  props: {
    duration: {
      default: 350,
      required: false,
      type: Number
    },

    items: {
      default: () => [],
      type: Array
    },

    showToggle: {
      default: true,
      type: Boolean
    },

    transition: {
      default: 'ease',
      required: false,
      type: String
    }
  }
}
</script>

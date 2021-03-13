<script>
import Item from './Item'

import '@/assets/scss/accordion.scss'

export default {
  name: 'Accordion',
  components: {
    Item,
  },

  props: {
    defaultIndex: {
      default: 0,
      type: Number
    },

    duration: {
      default: 350,
      required: false,
      type: Number,
    },

    items: {
      default: () => [],
      type: Array,
    },

    showToggle: {
      default: true,
      type: Boolean,
    },

    transition: {
      default: 'ease',
      required: false,
      type: String,
    },
  },

  data() {
    return {
      index: 0,
      state: [this.default],
    }
  },

  created() {
    this.index = this.defaultIndex
    this.prepareComponent()
  },

  methods: {
    isActive(index) {
      return !!this.state[index]
    },

    onItemSelect(index) {
      this.index = !this.state[index] ? index : null

      this.prepareComponent()

      this.$emit('accordion:select', this.index)
    },

    prepareComponent() {
      this.state = []

      this.items.forEach((item, index) => {
        this.state.push(index === this.index)
      })
    },
  },
}
</script>

<template>
  <div class="c-accordion">
    <Item
      v-for="(item, key) in items"
      :key="key"
      :active="isActive(key)"
      :content="item.content"
      :data-el="'item-' + key"
      :duration="duration"
      :index="key"
      :show-toggle="showToggle"
      :title="item.title"
      :transition="transition"
      @item:select="onItemSelect"
    >
      <template #title>
        <slot
          name="title"
          :index="key"
          :item="item"
        />
      </template>

      <template #toggle>
        <slot name="toggle" :active="isActive(key)" />
      </template>

      <template #content>
        <slot
          name="content"
          :index="key"
          :item="item"
        />
      </template>
    </Item>
  </div>
</template>

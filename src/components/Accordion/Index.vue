<template>
  <div class="c-accordion">
    <Item
      @item:select="onItemSelect"
      :active="isActive(index)"
      :content="item.content"
      :data-el="'item-' + index"
      :duration="duration"
      :index="index"
      :key="index"
      :show-toggle="showToggle"
      :title="item.title"
      :transition="transition"
      v-for="(item, index) in items"
    >
      <template v-slot:title>
        <slot
          name="title"
          v-bind:index="index"
          v-bind:item="item"
        />
      </template>

      <template v-slot:toggle>
        <slot
          name="toggle"
          v-bind:active="isActive(index)"
        />
      </template>

      <template v-slot:content>
        <slot
          name="content"
          v-bind:index="index"
          v-bind:item="item"
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
      if (!this.state[index]) {
        this.index = index
      } else {
        this.index = null
      }

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
      required: false,
      type: String
    }
  }
}
</script>

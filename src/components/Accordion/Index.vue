<template>
  <div class="c-accordion">
    <Item
      @accordion:select="onItemSelect"
      :active="state[index]"
      :content="item.content"
      :index="index"
      :key="index"
      :title="item.title"
      v-for="(item, index) in items"
    >
      <template v-slot:title>
        <slot
          name="title"
          v-bind:index="index"
          v-bind:item="item"
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
      state: [],
    }
  },

  methods: {
    onItemSelect (index) {
      this.index = index

      this.prepareComponent()

      this.$emit('accordion:select', index)
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
    items: {
      default: [],
      type: Array
    }
  }
}
</script>

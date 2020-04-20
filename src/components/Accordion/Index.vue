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
        <slot name="title" v-bind:item="item">
          <h3>{{ index + 1 }}. {{ item.title }}</h3>
        </slot>
      </template>

      <template v-slot:content>
        <slot name="content" v-bind:item="item">
          <pre>{{ item.content }}</pre>
        </slot>
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

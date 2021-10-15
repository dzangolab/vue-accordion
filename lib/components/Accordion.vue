<script>
import Item from './Item'

/**
 * Accordion component for vue.js.
 * 
 * @author Dzango Technologies Limited
 * @license MIT
 */
export default {
  name: 'Accordion',

  components: {
    Item,
  },

  props: {
    /**
     * The item to be opened by default.
     */
    defaultIndex: {
      default: 0,
      type: Number
    },

    /**
     * The duration of the transition when an item is opened.
     */
    duration: {
      default: 350,
      required: false,
      type: Number,
    },

    /**
     * The list of items in the accordion.
     */
    items: {
      default: () => [],
      type: Array,
    },

    /**
     * Whether the toggle button should be shown in each accordion item.
     */
    showToggle: {
      default: true,
      type: Boolean,
    },

    /**
     * The transition to use when opening an accordion item.
     */
    transition: {
      default: 'ease',
      required: false,
      type: String,
    },
  },

data() {
    return {

      /**
       * The index of the currently selected item.
       * @type number
       * @initialValue value of default-index prop
       */
      index: 0,

      /**
       * @private
       */
      state: [this.default],
    }
  },

  created() {
    this.index = this.defaultIndex
    this.prepareComponent()
  },

  methods: {
    /**
     * Whether the item at specified index is open.
     * @param {number} index - the index of the element to be checked
     */
    isActive(index) {
      return !!this.state[index]
    },

    /**
     * @private
     */
    onItemSelect(index) {
      this.index = !this.state[index] ? index : null

      this.prepareComponent()

      /**
       * Fired when an accordion item is selected.
       * @param  {number} index - the zero-based index of the selected item.
       */
      this.$emit('accordion:select', this.index)
    },

    /**
     * @private
     */
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
        <!-- Use this slot to customize each item's title -->
        <slot
          name="title"
          :index="key"
          :item="item"
        />
      </template>

      <template #toggle>
        <!-- Use this slot to customize each item's toggle button -->
        <slot name="toggle" :active="isActive(key)" />
      </template>

      <template #content>
        <!-- Use this slot to customize each item's content -->
        <slot
          name="content"
          :index="key"
          :item="item"
        />
      </template>
    </Item>
  </div>
</template>

<template>
  <div
    :class="{ '-active': active }"
    class="c-accordion__item"
  >
    <div
      @click="onClick"
      class="c-accordion__title"
    >
      <slot name="title" />
      <span class="c-accordion__toggle">
        <slot name="toggle" />
      </span>
    </div>
    <CollapseTransition
      :duration="duration"
      :transition="transition"
    >
      <div
        class="c-accordion__body"
        v-show="active"
      >
        <div
          class="c-accordion__content"
        >
          <slot name="content" />
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import CollapseTransition from './CollapseTransition'

export default {
  components: {
    CollapseTransition
  },

  methods: {
    onClick () {
      this.$emit('accordion:select', this.index)
    }
  },

  name: 'AccordionItem',

  props: {
    active: {
      default: false,
      type: Boolean
    },

    duration: {
      required: false,
      type: Number
    },

    index: {
      required: true,
      type: Number
    },

    transition: {
      required: false,
      type: String
    }
  }
}
</script>

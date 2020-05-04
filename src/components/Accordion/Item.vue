<template>
  <div
    :class="{ '-active': active }"
    class="c-accordion__item"
  >
    <div
      @click="onClick"
      class="c-accordion__title"
      data-el="title"
    >
      <slot name="title">
        <h4>{{ title }}</h4>
      </slot>
      <span
        class="c-accordion__toggle"
        data-el="toggle"
        v-if="showToggle"
      >
        <slot name="toggle">
          <ChevronUp v-if="active" />
          <ChevronDown v-else />
        </slot>
      </span>
    </div>
    <CollapseTransition
      :duration="duration"
      :transition="transition"
    >
      <div
        class="c-accordion__body"
        data-el="body"
        v-show="active"
      >
        <div
          class="c-accordion__content"
          data-el="content"
        >
          <slot name="content">
            {{ content }}
          </slot>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import ChevronDown from './ChevronDown'
import ChevronUp from './ChevronUp'
import CollapseTransition from './CollapseTransition'

export default {
  components: {
    ChevronDown,
    ChevronUp,
    CollapseTransition
  },

  methods: {
    onClick () {
      this.$emit('item:select', this.index)
    }
  },

  name: 'AccordionItem',

  props: {
    active: {
      default: false,
      type: Boolean
    },

    content: {
      required: true,
      type: String
    },

    duration: {
      default: 350,
      required: false,
      type: Number
    },

    index: {
      required: true,
      type: Number
    },

    showToggle: {
      default: true,
      type: Boolean
    },

    title: {
      required: true,
      type: String
    },

    transition: {
      default: 'ease',
      required: false,
      type: String
    }
  }
}
</script>

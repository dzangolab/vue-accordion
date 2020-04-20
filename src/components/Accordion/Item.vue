<template>
  <div
    :class="{ 'active': active }"
    class="c-accordion__item"
  >
    <div
      @click="onClick"
      class="c-accordion__title"
    >
      <slot name="title" />
      <slot name="toggle" />
    </div>
    <div
      class="c-accordion__content"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
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
    index: {
      required: true,
      type: Number
    }
  }
}
</script>

<template>
  <div
    :class="{ 'active': active }"
    class="c-accordion__item"
  >
    <div
      @click="onClick"
      class="c-accordion__title"
    >
      <slot
        name="title"
      >
        <h4>{{ title }}</h4>
      </slot>
    </div>
    <div
      class="c-accordion__content"
    >
      <slot
        name="content"
      >
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick () {
      console.log(this.index)
      this.$emit('accordion:select', this.index)
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
    index: {
      required: true,
      type: Number
    },
    title: {
      required: true,
      type: String
    }
  }
}
</script>

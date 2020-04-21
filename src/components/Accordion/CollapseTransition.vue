<template>
  <transition
    @after-leave="onAfterLeave"
    @enter="onEnter"
    @leave="onLeave"
    :duration="duration"
    :name="name"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      height: '0'
    }
  },

  computed: {
    transitionStyle () {
      return `height ${this.duration}ms ${this.transition}`
    }
  },

  methods: {
    onAfterLeave (el) {
      el.style.overflow = ''
      el.style.transition = ''
      el.style.height = ''
    },

    onEnter (el) {
      const visibility = el.style.visibility
      const display = el.style.display

      el.style.visibility = 'hidden'
      el.style.display = ''
      el.style.position = 'absolute'

      this.height = el.offsetHeight + 'px'

      el.style.visibility = visibility
      el.style.display = display

      el.style.height = '0'
      el.style.overflow = 'hidden'
      el.style.position = null

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(el).height

      el.style.transition = this.transitionStyle

      requestAnimationFrame(() => {
        el.style.height = this.height
      })
    },

    onLeave (el) {
      const visibility = el.style.visibility
      const display = el.style.display

      el.style.visibility = 'hidden'
      el.style.display = ''

      this.height = el.offsetHeight + 'px'

      el.style.visibility = visibility
      el.style.display = display

      el.style.height = this.height

      el.style.overflow = 'hidden'

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(el).height

      el.style.transition = this.transitionStyle

      requestAnimationFrame(() => {
        el.style.height = '0'
      })
    }
  },

  name: 'CollapseTransition',

  props: {
    duration: {
      default: 350,
      required: false,
      type: Number
    },

    name: {
      default: 'collapse',
      required: false,
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

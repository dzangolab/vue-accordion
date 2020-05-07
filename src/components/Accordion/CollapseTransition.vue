<template>
  <transition
    @after-leave="onAfterLeave"
    @enter="onEnter"
    @leave="onLeave"
    :duration="duration"
    :name="name"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  computed: {
    transitionStyle () {
      return `height ${this.duration}ms ${this.transition}`
    }
  },

  methods: {
    computeHeight (el) {
      return el.offsetHeight + 'px'
    },

    forceRepaint (el) {
      // eslint-disable-next-line no-unused-expressions
      getComputedStyle(el).height
    },

    // after-* events are not triggered in the test so ignored this method for coverage purpose.
    // Bug in the vue-test-utils
    /* istanbul ignore next */
    onAfterLeave (el) {
      el.style.overflow = null
      el.style.transition = null
      el.style.height = null
    },

    onEnter (el, done) {
      const height = this.computeHeight(el)

      el.style.height = '0'
      el.style.overflow = 'hidden'

      // Force repaint to make sure the
      // animation is triggered correctly.
      this.forceRepaint(el)

      el.style.transition = this.transitionStyle

      el.style.height = height

      setTimeout(done, this.duration)
    },

    onLeave (el, done) {
      el.style.height = this.computeHeight(el)
      el.style.overflow = 'hidden'

      // Force repaint to make sure the
      // animation is triggered correctly.
      this.forceRepaint(el)

      el.style.transition = this.transitionStyle

      el.style.height = '0'

      setTimeout(done, this.duration)
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

<template>
  <div id="app">
    <main class="container">
      <h1>Dzangolab - Vue Accordion</h1>

      <p>An accordion component for vue.js.</p>

      <section>
        <h2>Simple example</h2>

        <Accordion
          :items="items"
        />
      </section>

      <section>
        <h2>Default item</h2>

        <Accordion
          :default-index="1"
          :items="items"
        />
      </section>

      <section>
        <h2>Slots</h2>

        <Accordion
          :items="items"
        >
          <template #title="{index, item}">
            <h3>{{ index + 1 }}. {{ item.title }}</h3>
          </template>
          <template #content="{index, item}">
            <span>{{ index + 1 }}.</span> {{ item.content }}
          </template>
        </Accordion>
      </section>

      <section>
        <h2>Without toggle buttons</h2>

        <Accordion
          :items="items"
          :show-toggle="false"
        />
      </section>

      <section>
        <h2>Custom toggle</h2>

        <Accordion
          :items="items"
        >
          <template #toggle="{active}">
            <font-awesome-icon
              v-if="active"
              icon="chevron-up"
            />
            <font-awesome-icon
              v-else
              icon="chevron-down"
            />
          </template>
        </Accordion>
      </section>

      <section class="custom">
        <h2>Custom styling</h2>

        <Accordion
          :items="items"
        />
      </section>

      <section class="custom2">
        <h2>Custom styling 2</h2>

        <Accordion
          :items="items"
        />
      </section>

      <section class="custom">
        <h2>Custom transition (transition: 'linear', duration: 800ms)</h2>

        <Accordion
          :items="items"
          :duration="800"
          transition="linear"
        />
      </section>
    </main>
  </div>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import Accordion from './components/Accordion/Index'

library.add(faChevronDown, faChevronUp)

export default {

  name: 'App',

  components: {
    Accordion
  },

  data () {
    return {
      items: [
        {
          content: 'some content',
          title: 'Item 1'
        },
        {
          content: 'some more content',
          title: 'Item 2'
        },
        {
          content: 'some other content',
          title: 'Item 3'
        }
      ]
    }
  },

  methods: {
    getItems () {
      return this.items
    }
  }
}
</script>

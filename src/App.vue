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
        <h2>Slots</h2>

        <Accordion
          :items="items"
        >
          <template v-slot:title="{item}">
            <h4>{{ item.title }}</h4>
          </template>
          <template v-slot:content="{index, item}">
            <div><span>{{ index + 1 }}.</span> {{ item.content }}</div>
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
          <template v-slot:toggle="{active}">
            <font-awesome-icon v-if="active" icon="chevron-up" />
            <font-awesome-icon v-else icon="chevron-down" />
          </template>
        </Accordion>
      </section>


      <section class="custom">
        <h2>Custom styling</h2>

        <Accordion
          :items="items"
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

  name: 'App'
}
</script>

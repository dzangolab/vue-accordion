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
    </main>
  </div>
</template>

<script>
import Accordion from './components/Accordion/Index'

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

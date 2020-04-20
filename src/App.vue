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
          <template v-slot:toggler="{active}">
            <svg v-if="active" class="bi bi-chevron-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clip-rule="evenodd"/>
            </svg>
            <svg v-else class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
            </svg>
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

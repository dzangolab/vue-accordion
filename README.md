# vue-accordion

An accordion component for vue.js.

[![Build Status](https://travis-ci.org/dzangolab/vue-accordion.svg?branch=master)](https://travis-ci.org/dzangolab/vue-accordion)
[![codecov](https://codecov.io/gh/dzangolab/vue-accordion/branch/master/graph/badge.svg)](https://codecov.io/gh/dzangolab/vue-accordion)
![NPM](https://img.shields.io/npm/v/@dzangolab/vue-accordion)
![NPM](https://img.shields.io/npm/l/@dzangolab/vue-accordion)

## Requirements

* vue.js

## Installation

### Global installation

```
import Accordion from '@dzangolab/vue-accordion'
import '@dzangolab/vue-accordion/dist/accordion.css' // import stylesheet

Vue.component(Accordion)
```

### In-component installation

```
import Accordion from '@dzangolab/vue-accordion'
import '@dzangolab/vue-accordion/dist/accordion.css' // import stylesheet

export default {
  components: {
    Accordion
  }
}
```

## Usage

The Accordion is meant to be usable out of the box. Include it in your template and pass it an `items` prop.

```
<Accordion
  :items="items"
/>
```

## Props

### `items`

An Array of standard javascript objects. Each item must have the following properties:

* `title`: the text displayed in the "trigger" element of the accordion item, i.e. the part that is always visible, even when the accordion item is collapsed.
* `content`: the content displayed in the toggleable part of the accordion item, i.e. the part that is visible only when the accordion item is expanded.

### `showToggle`

A boolean indicating whether a toggle button should be displayed in the title or trigger element. Note that the whole title/trigger element is clickable, whether or not the toggle is displayed. The toggle simply acts as a visual clue to the user that the element is expandable/collapsible.

Default value: `true`

### `transition`

Transition for opening/closing accordion item.

Default value: `ease`

### `duration`

Duration of the transition in millisecond(ms).

Default value: `350`

## Customization

The Accordion component is designed with minimal styling.

### SCSS

Instead of importing the css file in component or main.js, you can also import scss file into your app scss file.

```
@import '~@dzangolab/vue-accordion/src/assets/scss/accordion.scss';
```

## Slots
vue-accordion provides scoped slots in order to customize the accordion.

### Scoped Slot `content`

Customizes the content of each accordion item.


```vue
<Accordion
  :items="items"
>
  <template #content="{index, item}">
    <pre>{{ item.title }}</pre>
   </template>
</Accordion>
```

### Scoped Slot `title`

Customizes the title of each accordion item.

```vue
<Accordion
  :items="items"
>
  <template #title="{index, item}">
    <h3>{{ index + 1 }}. {{ item.title }}</h3>
   </template>
</Accordion>
```

### Scoped Slot `toggle`

Customizes the icon of the toggle button.


```vue
<Accordion
  :items="items"
>
  <template #toggle="{active}">
    <button v-if="active">collapse</button>
    <button v-else>expand</button>
   </template>
</Accordion>
```

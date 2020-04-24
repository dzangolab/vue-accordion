# vue-accordion

An accordion component for vue.js.

## Requirements

* vue.js

## Installation

### Global installation

```
import Accordion from '@dzangolab/vue-accordion'

Vue.component(Accordion)
```

### In-component installation

```
import Accordion from '@dzangolab/vue-accordion'

export default {
  components: {
    Accordion
  }
}
```

## Usage

The Accordion is meant to be usable out of the box. Include it in your template
and pass it an `items` prop.

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

### `duration`

## Customization

The Accordion component is designed with minimal styling.

### SCSS variables



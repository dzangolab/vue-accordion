# vue-accordion

An accordion component for vue.js.

[![Build Status](https://travis-ci.org/dzangolab/vue-accordion.svg?branch=master)](https://travis-ci.org/dzangolab/vue-accordion)
[![codecov](https://codecov.io/gh/dzangolab/vue-accordion/branch/master/graph/badge.svg)](https://codecov.io/gh/dzangolab/vue-accordion)
![NPM](https://img.shields.io/npm/v/@dzangolab/vue-accordion)
![NPM](https://img.shields.io/npm/l/@dzangolab/vue-accordion)

## Requirements

* vue.js

## License

This component is released under the MIT license. See LICENSE file for more details.
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

The `items` prop must be in the form of :

```
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
```



## Slots

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| `title`   | Use this slot to customize each item's title         |
| `toggle`  | Use this slot to customize each item's toggle button |
| `content` | Use this slot to customize each item's content       |

## Props

| Name            | Type      | Description                                                       | Default    |
| --------------- | --------- | ----------------------------------------------------------------- | ---------- |
| `default-index` | `Number`  | The item to be opened by default.                                 | `0`        |
| `duration`      | `Number`  | The duration of the transition when an item is opened.            | `350`      |
| `items`         | `Array`   | The list of items in the accordion.                               | `() => []` |
| `show-toggle`   | `Boolean` | Whether the toggle button should be shown in each accordion item. | `true`     |
| `transition`    | `String`  | The transition to use when opening an accordion item.             | `"ease"`   |

## Data

| Name    | Type     | Description                               | Initial value                |
| ------- | -------- | ----------------------------------------- | ---------------------------- |
| `index` | `number` | The index of the currently selected item. | `value of defaultIndex prop` |

## Events

| Name               | Description                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accordion:select` | Fired when an accordion item is selected.<br/>**Arguments**<br/><ul><li>**`index: number`** — the zero-based index of the selected item.</li></ul> |

## Methods

### isActive()

Whether the item at specified index is open.

**Syntax**

```typescript
isActive(index: number): unknown
```

**Parameters**

- `index: number`<br/>
  the index of the element to be checked

import {createApp} from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import App from './App.vue'

import '@/assets/scss/app.scss'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

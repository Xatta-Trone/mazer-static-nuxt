import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faSort } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab, faSort)

Vue.component('font-awesome-icon', FontAwesomeIcon)

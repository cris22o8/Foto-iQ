import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/site.css'
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false

new Vue({
  router,
  vueSmoothScroll,
  render: h => h(App)
}).$mount('#app')

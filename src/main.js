import Vue from 'vue'
import App from './App.vue'
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css'
import store from './store/store.js'

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

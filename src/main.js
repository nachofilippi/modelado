import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts);


new Vue({
  el: '#app',
  render: h => h(App)
})

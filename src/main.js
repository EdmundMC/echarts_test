import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import * as echarts from 'echarts'
import world from './assets/world.json'

echarts.registerMap('world', world);
Vue.prototype.$echarts = echarts;
require('echarts-wordcloud');
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

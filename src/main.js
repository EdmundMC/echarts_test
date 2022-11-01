import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import * as echarts from 'echarts'
import china from './assets/china.json'

echarts.registerMap('china', china);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

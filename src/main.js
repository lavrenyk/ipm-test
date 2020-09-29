import Vue from 'vue'
import App from './App.vue'
import Highcharts from "highcharts";
import HighchartsVue from 'highcharts-vue'
import Gantt from "highcharts/modules/gantt";

Gantt(Highcharts);
Vue.use(HighchartsVue)

Vue.config.productionTip = false

Vue.prototype.$hostname = 'http://localhost:3000';

new Vue({
  render: h => h(App),
}).$mount('#app')

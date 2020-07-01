import Vue from 'vue'
import App from './App'
// 导入router,导入文件时自动寻找index文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

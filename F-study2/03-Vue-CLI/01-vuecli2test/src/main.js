// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //   // 1.creatment('标签',{标签属性},[''])
  render:function (createElement) {
return createElement('h2',
  {class:'box'},
  ['Hello Word!',createElement('button',['按钮'])])
  }

})

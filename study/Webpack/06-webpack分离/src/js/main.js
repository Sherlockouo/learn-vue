//1。使用commonjs的模块化开发规范
const {add, mul} = require('./mathUtils.js')

console.log(add(1, 3))
console.log(mul(1, 3))

//2.使用ES6的模块化规范开发
import * as aa from "./info.js"

console.log(aa.name)
console.log(aa.age)
console.log(aa.height)
//3.依赖css
require('../css/nor.css')

//4.依赖less文件
require('../css/typical.less')

//5.使用vue进行开发
import Vue from 'vue'

// import App from '../vue/app.js'
import App from '../vue/App.vue'
new Vue({
  el: '#app',
  template:'<App/>',
  components:{
    App
  }
})

document.writeln('<span>wahaha</span>')
// document.writeln('<h1>shit why this dosent work</h1>')
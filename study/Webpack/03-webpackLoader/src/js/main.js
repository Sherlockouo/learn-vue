//1。使用commonjs的模块化开发规范
const {add,mul} = require('./mathUtils.js')

console.log(add(1,3))
console.log(mul(1,3))

//2.使用ES6的模块化规范开发
import * as aa from "./info.js"

console.log(aa.name)
console.log(aa.age)
console.log(aa.height)
//3.依赖css
require('../css/nor.css')

//4.依赖less文件
require('../css/typical.less')
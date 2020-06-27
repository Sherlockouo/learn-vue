console.log('aaa');
console.log('bbb');
//1.使用commomjs的模块化规范
const {add,num1}=require('./js/mathUtils')

console.log(add(10, 45));

console.log(num1(10, 16));
//2.使用ES6的模块化规范
import {name,height} from "./js/info.js";

console.log(name);
console.log(height);


//3.依赖css文件
require('./css/normal.css')

//4.依赖less文件(应为安装less版本问题造成错误)
require('./css/special.less')

document.writeln(name)
document.writeln('<h2>你好呀，webpack</h2>')

//5.是使用vue进行开发
import Vue from 'vue'

const app=new Vue({
    el:'#app',
    data:{
        message:'Hello webpack'
    }
})
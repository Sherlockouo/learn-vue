var name='小红'
var age=20


//直接导入export定义的变量
import {num1,height} from "./aaa.js"

console.log(num1)
console.log(height);

//导入export中定义的function
import{num3,Person} from "./aaa.js"

console.log(num3(100,45));

const p=new Person();
p.run()
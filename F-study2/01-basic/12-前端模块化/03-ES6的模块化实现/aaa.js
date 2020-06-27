var name='小红'
var age=18
var flag=true


function sum(num1,num2) {
    return num1+num2
}

export{
   flag,
   sum
}
//1,导出方式一
if(flag){
    console.log(sum(40, 50));
}

//2，导出方式二

export var num1=1000;
export var height=1.88


//3,导出函数或类
export function num3(nm1,num2) {
    return num1*num2
}

export class Person{
    run(){
        console.log('在奔跑中的类');
    }
}

//5，export default的使用

const  address='这里是宜宾市'
export  default address

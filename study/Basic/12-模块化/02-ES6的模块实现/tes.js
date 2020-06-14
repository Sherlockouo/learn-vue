let name = '小明'
let age =12
let flag = true

function sum(s1,s2) {
  return s1+s2
}

if(flag){
  console.log(sum(20, 20));
}

//1.导出方式一
export {
  flag,sum
}

//2.导出方式二
export let num = 1000
export let height = 1.88

// 3。导入函数
export function mul(m1,m2) {
  return m1*m2
}

// 4.导入类
export class Person {
  run(){
    console.log('running...');
  }
}

// 5 export default 默认的东西只有一个
// const addr = 'chengdu'
// export default addr

export default function (arg) {
  console.log(arg)
}


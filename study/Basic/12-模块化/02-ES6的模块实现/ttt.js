import {flag,sum,height,Person} from "./tes.js"

const p = new Person();

if(flag){
  console.log("xixi");
  console.log(sum(2, 4.5))
  console.log(height);
  console.log(p.run());
}

//导入
// import addr  from "./tes.js"
// console.log(addr)

import fun from "./tes.js"

console.log(fun('default args'))

//终极导入法
import * as ths from './tes.js'

console.log(ths.height);

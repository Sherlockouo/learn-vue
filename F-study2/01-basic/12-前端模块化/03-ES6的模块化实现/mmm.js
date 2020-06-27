
import {flag,sum} from "./aaa.js"
if(flag){
    console.log('我就是一个天才，啦啦啦');
}

import add from "./aaa.js"

console.log(add);

//统一的导入
import * as a from "./aaa.js"

console.log(a.flag);
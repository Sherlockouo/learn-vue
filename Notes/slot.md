## Slot——插槽

> 作用：增加组件的扩展性

```
<cpn><h1>放入cpn中的会被替换道插槽中</h1></cpn>
<slot> </slot>

如果没有东西的话，使用默认值
<slot><button>默认</button></slot>
```

- slot作用域

![slot](/Users/wdf/Desktop/program/FRONT-END/learn-vue/Notes/imgs/slot.png)



![slot-field](/Users/wdf/Desktop/slot-field.png)

![](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/slot-ready.png)

- 通过插槽获取子组件的属性

  ```vue
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Title</title>
  </head>
  <body>
  <div id="app">
    <cpn></cpn>
    
  <!--  1.拿到子组件的方法一-->
    <cpn>
      <button @click="getLs"></button>
      <button v-for="item in ls">{{item}}</button>
      <span>shit</span>
    </cpn>
  
  更为普遍的方法
  <!--  2。拿到子组件的方法二-->
    <cpn>
      <template slot-scope="slot">
        <sapn v-for="item in slot.data">{{item}}</sapn><br>
        <span>{{slot.data.join(' * ')}}</span>
      </template>
    </cpn>
  </div>
  
  <template id="cpn">
    <div>
      :data是随意取的名字，可以取别的，比如 :ls 但是要保证父组件通过slot调用的时候是统一的就行
     <slot :data="pLanguages">
       <ul>
         <li v-for="item in pLanguages">{{item}}</li>
       </ul>
     </slot>
    </div>
  </template>
  
  <script src="../../src/vue.min.js"></script>
  <script>
    const app = new Vue({
      el:"#app",
      data:{
        ls:[]
      },
      methods:{
        getLs(){
          this.ls = this.$children[0].pLanguages
        }
      },
      components:{
        cpn:{
          template:`#cpn`,
          data(){
            return {
              pLanguages:['java','c++','c','golang']
            }
          }
        }
      }
    })
  </script>
  </body>
  </html>
  ```

  


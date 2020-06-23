## Promise

![截屏2020-06-20 下午4.52.59](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-20 下午4.52.59.png)



![截屏2020-06-20 下午8.08.03](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-20 下午8.08.03.png)



![截屏2020-06-20 下午8.09.09](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-20 下午8.09.09.png)

```
  //简洁写法
  new Promise(((resolve, reject) => {
    setTimeout(() => {
      resolve('aaa')
    }, 1000)
  })).then(res => {
    console.log(res, '第一层处理一些数据')

    return Promise.resolve(res + '111')
  }).then(res => {
    console.log(res, '第二层处理数据')
    // return Promise.resolve(res + '222')
    //测试拒绝
    return Promise.reject('error message')
  }).then(res => {
    console.log(res, '第三层处理数据') 
  }).catch(error=>{
    console.log(error)
  })
```

```
  //封装多个异步请求
  Promise.all([
      new Promise((resolve, reject) => {
        $ajax({
          url:'www.baidu.com',
          success:function () {
            console.log('111')
          }
        })
      }),
      new Promise((resolve, reject) => {
        $ajax({
          url:'www.baidu.com',
          success:function () {
            console.log('222')
          }
        })
      })
  ]).then(res=>{
    console.log(res)
  })
```


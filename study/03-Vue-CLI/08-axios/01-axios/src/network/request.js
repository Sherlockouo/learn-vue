import axios from 'axios'

//回调方式1
// export function request(config,success,fail) {
//   const instance = axios.create({
//     baseURL:'http://share.sherlockouo.com/share',
//     timeout:5000
//   })
//
//   instance(config)
//     .then(res=>{
//       console.log(res)
//       success(res)
//     })
//     .catch(err=>{
//       console.log(err)
//       fail(err)
//     })
//
// }
//可创建多个实例
// export function instance1() {
//
// }


// 方式二
// export function request(config) {
//     return new Promise(((resolve, reject) => {
//   const instance = axios.create({
//     baseURL:'http://share.sherlockouo.com/share',
//     timeout:5000
//   })
//
//   instance(config.baseconfig)
//     .then(res=>{
//       config.success(res)
//     }).catch(res=>{
//       config.fail(res)
//   })
//     }))
//
// }

export function request(config) {
  //1。创建实例
  const instance = axios.create({
    baseURL:'http://share.sherlockouo.com/share',
    timeout:5000
  })

  //3。axios拦截器
  instance.interceptors.request.use(config=>{
    //拦截config
    //  1。可以对config处理
    //  2。添加动画
    //  3。携带token
    console.log(config)
    //返回config,如果不返回会报错。。
    return config
  },error => {
    console.log(error)
  })

  instance.interceptors.response.use(config=>{
    console.log(config)
    //单返回data
    return config.data
  },error => {
    console.log(error)
  })

  //3。发送请求
  return instance(config)
}

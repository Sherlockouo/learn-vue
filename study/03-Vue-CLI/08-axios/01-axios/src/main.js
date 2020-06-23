import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   // url:'http://httpbin.org/'
//   url:'http://share.sherlockouo.com/share/article/all',
//   method:'GET',
//   params:{
//     pageNo:1,
//     pageSize:10
//   },
//   headers:{
//     'Content-Type':'application/x-www-form-urlencoded'
//   }
// }).then(res=>{
//   console.log(res)
// })

// axios.all([axios({
//   url: 'http://share.sherlockouo.com/share/article/all',
//   method: 'GET',
//   params: {
//     pageNo: 1,
//     pageSize: 10
//   },
// }), axios({
//   url:'http://httpbin.org/get',
//   method:'GET'
// })]).then(results=>{
//   console.log(results)
// })

// 使用全局配置发送请求
// axios.defaults.baseURL='http://share.sherlockouo.com/share'
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   url: '/article/all',
//   method: 'GET',
//   params: {
//     pageNo: 1,
//     pageSize: 10
//   },
// }), axios({
//   url:'http://httpbin.org/get',
//   method:'GET'
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1)
//   console.log(res2)
// }))

// const instance = axios.create({
//   baseURL:'http://share.sherlockouo.com/share',
//   timeout:5000
// })
//
// instance({
//   url:'/article/all',
//   method:'GET',
//   params:{
//     pageNo:1,
//     pageSize:10
//   }
// }).then(res=>{
//   console.log(res)
// })
//
// const httpbin = axios.create({
//   baseURL:'http://httpbin.org',
//   timeout:5000
// })
//
// httpbin({
//   url:'/get',
//   method:'GET',
// }).then(res=>{
//   console.log(res)
// })

import {request} from "./network/request";

// request({
//   baseconfig: {
//     url: '/article/all',
//     params: {
//       pageNo: 1,
//       pageSize: 10
//     }
//   }
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

request({
  url:'/article/all',
  params:{
    pageNo:1,
    pageSize:10
  }
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
  }
)

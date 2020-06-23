# axios

## 1.常见配置选项

![image-20200623085356140](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/image-20200623085356140.png)

## 2.使用axios对网络请求进行封装

```js
export function request(config) {
  const instance = axios.create({
    baseURL:'http://share.sherlockouo.com/share',
    timeout:5000
  })

  //因为instance本身是一个promise
  return instance(config)
}

```


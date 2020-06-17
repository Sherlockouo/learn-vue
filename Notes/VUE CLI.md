# Vue CLI 脚手架

### 1.安装Vue CLI

```
npm install @vue/cli -g
```

安装template

```
npm install @vue/cli-init -g

//创建项目
vue init webpack projectname

```



![截屏2020-06-15 下午11.36.07](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-15 下午11.36.07.png)

### 2.runtime compiler 和 runtime only 区别

#### ![runtime](/Users/wdf/Desktop/runtime.png)

#### 组件渲染过程

其次，我们再来了解一下，组件是怎么被渲染到页面当中去的，这对我们理解上述问题起到关键性的作用

**template -->  ast --> render --> vDom --> 真实的Dom --> 页面**

- ast：抽象语法树
- vDom：虚拟Dom

可以发现，template最终还是会被渲染为 render函数

#### runtime-only

> - 我们在使用 runtime-only 的时候，需要借助 webpack的loader工具，将 `.vue` 文件编译为JavaScript，因为是在编译阶段做的，所以它只包含运行时的 Vue.js 代码，所以代码体积会更轻量。
> - 在将 `.vue` 文件编译为 JavaScript文件的过程中会将组件中的 template 模版编译为 `render` 函数，所以我们得到的是 `render` 函数的版本。所以运行的时候是不带编译的，编译是在离线的时候做的
> - template 会通过 `vue-template-compiler` 转换为 render 函数

#### runtime-compiler

> - 因为在Vue中，最终渲染都是通过 render函数，如果写 template 属性，则会编译为 render 函数，那么这个编译过程会发生在运行时，所以需要带有编译器的版本
> - 编译过程会对性能有一定的损耗

#### 结论

**runtime-only：** 将template在打包的时候，就已经编译为 render函数

**runtime-compiler：** 在运行的时候，才去编译 template

**结果：** 发布生产的时候，runtime-only 构建的项目代码体积更小，运行速度更快

**推荐使用runtime-only构建项目**

![截屏2020-06-16 上午10.04.18](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-16 上午10.04.18.png)

目录结构

![截屏2020-06-16 上午10.05.11](/Users/wdf/Library/Application Support/typora-user-images/截屏2020-06-16 上午10.36.24.png)
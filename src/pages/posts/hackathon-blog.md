---
layout: '../../layouts/blogPostLayout.astro'
title: hackathon blog
pusData: 2016-06-06 16:07:29
tags: []
categories: []
---

报名参加了 [[北京] 6月4号，5号 项目实战之博客系统](https://cnodejs.org/topic/5750d47c491b9c4f36910fe9)，虽然没能按时完成项目，但是还是收获很多的，在这里总结下，同事作为 [hackathon-blog](https://github.com/sumaolin/hackathon-blog) 的readme ，记录下遇到的坑坑坑……

<!-- more -->

# hackathon-blog

参加活动 ： [博客系统实践周末Hackathon](https://cnodejs.org/topic/5750d47c491b9c4f36910fe9)

## 2016-06-04

### 遇到问题

#### 1. `express不是内部或外部命令`

  最新express4.0版本中将命令工具分家出来了(项目地址:<https://github.com/expressjs/generator)所以我们还需要安装一个命令工具,命令如下>:
  `npm install -g express-generator`

#### 2. passport & passport-local 的认证问题

##### 参考

  1. [Easy Node Authentication: Setup and Local](https://scotch.io/tutorials/easy-node-authentication-setup-and-local)

  2. [express-passport-quick-getstarted](https://github.com/rockq-org/express-passport-quick-getstarted)

  3. [使用passportjs进行登录验证](https://segmentfault.com/a/1190000002926232#articleHeader0)

  4. [Express结合Passport实现登陆认证](http://blog.fens.me/nodejs-express-passport/)

  5. [passport doc](http://passportjs.org/docs) 官方文档，先看了几个例子，看完官方文档，豁然开朗了，使用了不同的方法去通过认证

#### 3. `install phantomjs error`

  当时没遇到这个问题，当时的网络自带翻墙功能，回来再次安装的时候报错，无法安装，[参考](https://github.com/rockq-org/hackathon-blog/issues/13) ，就可以解决了

## 2016-06-05

### [react](https://facebook.github.io/react/index.html) & [redux](https://github.com/reactjs/redux) & [react-router](https://github.com/reactjs/react-router)

### 相关工具

  1. [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
  2. [react-devtools](https://github.com/facebook/react-devtools)

### 资料

  1. [React+Redux系列教程](https://github.com/lewis617/react-redux-tutorial)
  2. [Redux 中文文档](http://cn.redux.js.org/)
  3. [文档收集](https://github.com/icefox0801/JSErrorMonitor#应用的框架和库)

## 2016-06-06

  两天的 hackathon 活动，感觉到自己的不足，要恶补下自己的基础知识了，首先完成这个blog 的认为

  1. passport-local 认证     【**2016-06-08 18:04:17** 完成】
  2. react & redux 登录注册页面
  3. blog 编辑器
  4. blog 列表（编辑删除），tag 功能！

## 2016-06-07

  [The Little MongoDB Book  中文版 - v1.0](https://github.com/ilivebox/the-little-mongodb-book) 【介绍的很全面，很适合入门！】

## 2016-06-08

### 疑问

  1. chrome plugin Postman 中 body 类型： form-data， x-www-form-urlencoded， raw， binary 的疑问区别

  > 在hackathon-blog 活动中 推荐使用的postman 并且@hain 演示推荐了 raw 的方式提交数据，回来自己再弄，可是怎么也体检不成功了！一直怀疑自己 body-parse 模块配置有问题，看了下面的文章才豁然开朗

  [四种常见的 POST 提交数据方式](https://github.com/ilivebox/the-little-mongodb-book/blob/master/zh-cn/mongodb.markdown)

  总结下：

* x-www-form-urlencoded 是from 表单默认提交方式， `Content-Type: application/x-www-form-urlencoded`
* form-data 是form 上传文件 时候用到的方式， `Content-Type: multipart/form-data`
* raw 是自定义 提交表单的格式 的，后面可以选择application/json 或者 application/xml 等方式，等同自定义了 `Content-type`的类型；
* binary 根据以前上传文件的理解，是最新的通过二进制的形式上传数据

## 2016-06-12

  端午前接口按规划的弄好了，按计划改实现react &  redux 登录注册页面了，

## 2016-06-15

### 已读

  1. [【译】展望2016，React.js 最佳实践 (中英对照版)](https://blog.jimmylv.info/2016-01-22-React.js-Best-Practices-for-2016/)

  > 很概况全面的介绍了下 react 中用到的相关技术

  2. [如何学习React](https://github.com/petehunt/react-howto/blob/master/README-zh.md)

  > 怎样学习 react 系列

  3. [Redux是如何工作的 (一)](http://chatting8.com/?p=883)

  > redux 通过管理state 树来管理 react 组件熟的更新

  4. [React知识库内容精选：10篇文章让你迅速了解该框架](http://geek.csdn.net/news/detail/81106)

### 未读

  1. 【系列】[和我一起实战react](http://mulgore.github.io/2016/05/23/follow-react-lesson/)

  2. 【系列】[基于CNodeAPI使用react开发一个完整的Web应用](http://mulgore.github.io/2016/06/01/used-CNodeAPI-for-development-of-react-webapp/)

## 2016-07-06

  上面是关于react 资料的搜集，内容太多，后面参照hackathon-blog 中给出的关于react的资料: [React课程学习](http://guoyongfeng.github.io/idoc/index.html), 整个资料循序渐进，挺易懂的！关于学习过程中的问题单开一章： [React课程学习](/2016/07/06/React课程学习/)

---
layout: '../../layouts/blogPostLayout.astro'
title: koa begainer
pubDate: 2016-05-10 18:48:41
tags: [Nodejs, koa]
categories: [Nodejs]
---

想学习下后端的Node or Koa 相关的知识，目标能实现开发，从一个个网上的例子的一行行代码开始敲起！

<!-- more -->
# [kick-off-koa](https://github.com/koajs/kick-off-koa)

## 总结

  总共11 个 exercise 想每天做一个呢，结果一下午 complete all。总结：

  1. 简单的英文提示，基本能看懂大概意思，按提示的点能够独立完成。很简单的入门课程！
  2. 对于异步理解很不到位，最后一个exercise: authentication 一直报错：
    ``` bash
      should be redirected to '/'
    ```
    先'this.redirect="/"' 改为 'this.redirct("/")'，还是一直报错，最后实在没办法，看了下github 中的解决办法，
    才发现'var body = parse(this)' 写错了，应该是'var body = yield parse(this)' 少了yield。现在对于异步的理解还很浅显，感觉是body 调用的时候数据还没parse完。

## 参考

  1. [[Koa系列-1]简单入门](http://www.jscon.cc/koa-action-1/)
  2. [[koa系列-2]路由](http://www.jscon.cc/koa-action-2/)

  > 在kick-off-koa基础上，深入的讲解了下, 其中讲到了两张代码模式：
    1. Express-style，用法来自于express框架，它能够开启app.get, app.put, app.post, app.delete等功能
    2. Middleware-style,此时将 实例化 一个 koa-route 对象，在这个对象中配置路由规则，然后作为一个中间件塞入到app.use方法中。

# [基于 koa 开发论坛系统](http://cnodejs.org/topic/563f6e708e90ab7c391e9f71)

## 2016-05-05

  1. [co 和 koa](http://nswbmw.github.io/N-club/1/1.3.html) 中理解不了thunk函数

## 2016-05-09

  1. [模版系统](https://nswbmw.github.io/N-club/2/2.1.html)

    主要是 [co-ejs](https://github.com/nswbmw/co-ejs) 的各种报错问题，都提交到 [wiki](https://github.com/nswbmw/co-ejs/issues/2) 中，最后通过 项目中的 demo 中的文件找到的 解决方法！

    看了下 [co-ejs setting](https://github.com/nswbmw/co-ejs#settings), 有点被自己蠢哭了，答案都在这里啊！
    > root: view root directory.
      layout: global layout file, default is layout, set false to disable layout.
      viewExt: view file extension (default html).
      cache: cache compiled templates (default true).
      debug: debug flag (default false).
      locals: global locals, can be function type, this in the function is koa's ctx.
      filters: ejs custom filters.
      open: open sequence (default <%).
      close: close sequence (default %>).

## 2016-05-10

  1. [路由](http://nswbmw.github.io/N-club/3/README.html)

    window下安装koa-frouter一直报错，看到 [koa-frouter](https://github.com/nswbmw/koa-frouter) 官网的issus 有这个问题，原因是:`出现这个问题是因为windows的文件命名不能带有通配符*` 所以 @作者修改了该问题发布了 koa-frouter@0.3.3版本修复这个安装时候的问题

    相关 issuse[npm i koa-frouter --save 报错](https://github.com/nswbmw/koa-frouter/issues/4)
    
    话说koa-frouter, co-ejs 都是这个教程的作者写的啊！
  
## 2016-05-11

### [参数验证与错误处理](http://nswbmw.github.io/N-club/4/4.1.html)

  [koa-scheme](https://github.com/nswbmw/koa-scheme) 用于输入输出（this.request, this.response) 数据格式的校验，代码编写后要写测试用例，先看后面的

  [koa-errorhandler](https://github.com/nswbmw/koa-errorhandler)

### [缓存和配置](http://nswbmw.github.io/N-club/5/5.1.html)

  [koa-router-cache](https://github.com/nswbmw/koa-router-cache) 匹配路径 请求的cache，业务逻辑层之前的缓存

  [co-cache](https://github.com/nswbmw/co-cache) 业务逻辑之后，数据层之前，把写经常用的查询数据，缓存起来！ 需要用到mongodb ，后面测试

  [config-lite](https://github.com/nswbmw/config-lite) 配置文件的区分调用plugin

## 2016-05-12

### [测试](http://nswbmw.github.io/N-club/6/README.html)

  主要用到的npm [co-mocha](https://github.com/blakeembrey/co-mocha) 与 [co-supertest](https://github.com/avbel/co-supertest)

  describe // 一直写错了，

  参考了 [测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html) 和 [初识 mocha in NodeJS](https://cnodejs.org/topic/516526766d38277306c7d277)

  [带你入门带你飞Ⅱ 使用Mocha + Chai + SuperTest测试Restful API in node.js](http://www.cnblogs.com/wade-xu/p/4673460.html)
  >.send(obj) post 的请求的时候，发送请求参数

  Anything you can do with superagent, you can do with supertest - for example multipart file uploads!
  测试上传图片的请求

  ```javascript
  request(app)
  .post('/')
  .field('name', 'my awesome avatar')
  .attach('avatar', 'test/fixtures/homeboy.jpg')
  ...
  ```

## 2016-05-13

  继续测试

  ``` javascript
  it('post /signup', function *(done) {
    yield agent.post('/signup')
    .send(param)
    .end(function(err, res){
      return done(err);
    });
  });
  // 报错信息，感觉是因为 生成器函数中，不能使用 done 参数
  Error: timeout of 2000ms exceeded. Ensure the done() callback is being call
  ed in this test.
  ```

## 2016-05-16

  经过前面的铺垫，开始根据第七章构建一个完整的论坛demo

  做完7.5 可以开始初步的调试

## 2016-05-17

### 安装mongodb

  1. [Windows7下安装MongoDB](http://www.cnblogs.com/linjiqin/p/3192159.html)

  吃了路径没有写对的亏，一直启动不成功，以后要注意

### 调试

  1. node app.js 报错:

  ``` bash
    bbs@1.0.0 start f:\Users\dev\bbs
    node app.js

    f:\Users\dev\bbs\node_modules\mongoose\lib\schema.js:556
        throw new TypeError('Undefined type `' + name + '` at `' + path +
        ^

    TypeError: Undefined type `C` at `0`
      Did you try nesting Schemas? You can only nest using refs or arrays.
        at Function.Schema.interpretAsType (f:\Users\dev\bbs\node_modules\mongoose\l
    ib\schema.js:556:11)
        at Schema.path (f:\Users\dev\bbs\node_modules\mongoose\lib\schema.js:464:29)

        at Schema.add (f:\Users\dev\bbs\node_modules\mongoose\lib\schema.js:348:12)
        at new Schema (f:\Users\dev\bbs\node_modules\mongoose\lib\schema.js:94:10)
        at Schema (f:\Users\dev\bbs\node_modules\mongoose\lib\schema.js:67:12)
        at Object.<anonymous> (f:\Users\dev\bbs\models\comment.js:18:18)
        at Module._compile (module.js:409:26)
        at Object.Module._extensions..js (module.js:416:10)
        at Module.load (module.js:343:32)
        at Function.Module._load (module.js:300:12)
        at Module.require (module.js:353:17)
        at require (internal/module.js:12:17)
        at Object.<anonymous> (f:\Users\dev\bbs\models\index.js:13:19)
        at Module._compile (module.js:409:26)
        at Object.Module._extensions..js (module.js:416:10)
        at Module.load (module.js:343:32)

    npm ERR! Windows_NT 6.1.7601
    npm ERR! argv "C:\\Program Files\\nodejs\\node.exe" "C:\\Users\\KevinSu\\AppData
    \\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js" "start"
    npm ERR! node v4.4.3
    npm ERR! npm  v3.8.7
    npm ERR! code ELIFECYCLE
    npm ERR! bbs@1.0.0 start: `node app.js`
    npm ERR! Exit status 1
    npm ERR!
    npm ERR! Failed at the bbs@1.0.0 start script 'node app.js'.
    npm ERR! Make sure you have the latest version of node.js and npm installed.
    npm ERR! If you do, this is most likely a problem with the bbs package,
    npm ERR! not with npm itself.
    npm ERR! Tell the author that this fails on your system:
    npm ERR!     node app.js
    npm ERR! You can get information on how to open an issue for this project with:
    npm ERR!     npm bugs bbs
    npm ERR! Or if that isn't available, you can get their info via:
    npm ERR!     npm owner ls bbs
    npm ERR! There is likely additional logging output above.

    npm ERR! Please include the following file with any support request:
    npm ERR!     f:\Users\dev\bbs\npm-debug.log
  ```
  
  重点错误信息：

  ``` bash
  TypeError: Undefined type `C` at `0`
      Did you try nesting Schemas? You can only nest using refs or arrays.
        at Function.Schema.interpretAsType (f:\Users\dev\bbs\node_modules\mongoose\l
    ib\schema.js:556:11)
  ```

  和 `at Object.<anonymous> (f:\Users\dev\bbs\models\comment.js:18:18)`  定位代码错误的位置

  百度 错误 得到的是 [Mongoose error: nesting Schemas](http://stackoverflow.com/questions/27259449/mongoose-error-nesting-schemas) 没看懂，感觉是mongodb 的使用出问题了，直接去 [mongoose 官网issuse](https://github.com/Automattic/mongoose/issues)

  发现错误 `module.exports = Schema('Comment', CommontSchema);` 写错了，应该是`module.exports = mongoose.model('Comment', CommontSchema);`

## 2016-05-18

  继续昨天的调试

  1. [7.1. 基础项目搭建](http://nswbmw.github.io/N-club/7/README.html) 中`default.js` 关于 routerCacheConf 的配置是以前旧版本的koa-router-cache的使用方法，运行会报错：

  ``` bash
  Error: `key` must be string or generatorFunction!
    at module.exports (f:\Users\dev\bbs\node_modules\koa-router-cache\lib\index.
js:13:13)
    at Object.<anonymous> (f:\Users\dev\bbs\app.js:32:9)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Function.Module.runMain (module.js:441:10)
    at startup (node.js:139:18)
    at node.js:968:3
  ```

  新的配置方法请参考 [koa-router-cache](https://github.com/nswbmw/koa-router-cache)

  2. 然后就可以启动了 简单的`node app.js` 看到没报错启动成功了，可以直接 `http://localhost:3000`页面报错，cli里面不报错，想了半天原因，后面才想去没有index.html 页面，只有signup页面，直接访问 `http://localhost:3000/signup`就OK了！

  7.5章节就OK啦！继续下一节了！

## 2016-05-19

  7.8 章节点code 了，next code  7.9 章节

## 2016-05-20

  昨天调试了几个bug，都是代码单词拼写错误或者分号缺少造成的语法错误，`node app.js`已经可以运行，但是首页打不开，今天继续调试！

  感觉进步啊，不知道为啥，路由的不起作用，

  next:

    1. vscode debug 功能学习下
    2. router/topic/_id 不进入

## 2016-05-23

  /index 不响应，后台不报错， 浏览器无响应，不知道从何入手啊!

  翻了下 [N-club issuse](https://github.com/nswbmw/N-club/issues), 感觉是自己没起redis 服务，在 [co-cache这个模块用到了redis](https://github.com/nswbmw/N-club/issues/5#issuecomment-206723697) 中作者明确说 `需要同时开启mongoDB和redis的`, 参考 [Windows下安装并设置Redis](http://blog.csdn.net/renfufei/article/details/38474435) 安装开启redis 服务

## 2016-05-27

  1. [在windows上部署使用Redis](http://keenwon.com/1275.html) 设置redis 为系统服务

  2. debug 到 `userCard.ejs` 中 `<% var userInfo = yield $User.getUserByName(name) %>` 这行出错了！，再具体的不知道bug 的原因

## 2016-05-30
  
### bug 解决办法

  1. 学习 vscode debug koa 的方法，看下是否可以定位到具体的bug

  参考: [【视频教程】使用vscode调试koa2-example](https://cnodejs.org/topic/572209ea35af8a704195f552)

  2. 学习下一章写测试 test , 关于 '$User.getUserByName(name)' 的测试，看是否能找出bug

### post /signin  bug

  先开始发现mongodb 中存入的密码是明文，然后登陆的时候是 比对的 是md5的值，发现注册的时候，schema中 md5(password) 的值没有赋值给body, 而是赋值给了this，所以body 中的还是明文的密码

  然后登陆 post /signin  是报错了！

  错误提示

  ``` bash
  koa-generic-session set error: Cannot read property 'maxAge' of undefined
    at MongoStore.set$ (f:\Users\dev\bbs\node_modules\koa-generic-session-mongo\dist\store.js:195:33)
    at tryCatch (f:\Users\dev\bbs\node_modules\babel-runtime\regenerator\runtime.js:72:40)
    at GeneratorFunctionPrototype.invoke [as _invoke] (f:\Users\dev\bbs\node_modules\babel-runtime\regenerator\runtime.js:334:22)
    at GeneratorFunctionPrototype.prototype.(anonymous function) [as next] (f:\Users\dev\bbs\node_modules\babel-runtime\regenerator\runtime.js:105:21)
    at onFulfilled (f:\Users\dev\bbs\node_modules\co\index.js:65:19)
    at f:\Users\dev\bbs\node_modules\co\index.js:54:5
    at Object.co (f:\Users\dev\bbs\node_modules\co\index.js:50:10)
    at Object.toPromise (f:\Users\dev\bbs\node_modules\co\index.js:118:63)
    at next (f:\Users\dev\bbs\node_modules\co\index.js:99:29)
    at onFulfilled (f:\Users\dev\bbs\node_modules\co\index.js:69:7)
    at f:\Users\dev\bbs\node_modules\co\index.js:54:5
    at Object.co (f:\Users\dev\bbs\node_modules\co\index.js:50:10)
    at Object.toPromise (f:\Users\dev\bbs\node_modules\co\index.js:118:63)
    at next (f:\Users\dev\bbs\node_modules\co\index.js:99:29)
    at onFulfilled (f:\Users\dev\bbs\node_modules\co\index.js:69:7)
    at f:\Users\dev\bbs\node_modules\co\index.js:54:5
  ```

## 2016-06-01

### bugList

1. [koa-generic-session set error: Cannot read property 'maxAge' of undefined](#signin-post-bug)

2. detail topic/:id

  ``` bash
  NotFoundError: Not Found
      at Object.module.exports.throw (f:\Users\dev\bbs\node_modules\koa\lib\context.js:91:23)
      at Object.error (f:\Users\dev\bbs\node_modules\koa-errorhandler\index.js:70:73)
      at next (native)
      at Object.<anonymous> (f:\Users\dev\bbs\node_modules\koa-compose\index.js:28:19)
      at next (native)
      at onFulfilled (f:\Users\dev\bbs\node_modules\co\index.js:65:19)
      at process._tickCallback (node.js:369:9)
  ```

  **fix** : koa-frouter 在Windows中的配置问题

  ``` javascript
    routerConf: {
      root: './routes',
      wildcard: '_'
    }
  ```

## 2016-06-02

### 继续 `post /signup` 时候的 [bug](#post-signin-bug)

暂时解决办法：app.js

``` javascript
app.use(session({
  store: new MongoStore(config.mongodb),
  beforeSave: function(ctx, sess){
    ctx.session.cookie = sess.cookie = {
      httpOnly: true,
      path: '/',
      overwrite: true,
      signed: true,
      maxAge: & * 24 * 60 * 60 * 1000 //one day in ms
    };
  }
}));
```

通过`koa-generic-session` 中的method ` beforeSave ` 直接添加cookie 的相关设置

## 2016-06-03

### 1. post /create bug

``` bash
ValidationError: Topic validation failed
    at MongooseError.ValidationError (f:\Users\dev\bbs\node_modules\mongoose\lib\error\validation.js:22:11)
    at model.Document.invalidate (f:\Users\dev\bbs\node_modules\mongoose\lib\document.js:1366:32)
    at f:\Users\dev\bbs\node_modules\mongoose\lib\document.js:1242:17
    at validate (f:\Users\dev\bbs\node_modules\mongoose\lib\schematype.js:702:7)
    at f:\Users\dev\bbs\node_modules\mongoose\lib\schematype.js:733:9
    at Array.forEach (native)
    at SchemaString.SchemaType.doValidate (f:\Users\dev\bbs\node_modules\mongoose\lib\schematype.js:707:19)
    at f:\Users\dev\bbs\node_modules\mongoose\lib\document.js:1240:9
    at nextTickCallbackWith0Args (node.js:420:9)
    at process._tickCallback (node.js:349:13)
```

fixed ： post/signin 时候的 session 中添加user 属性 topic schema 定义的user 是对象！ 代码敲错了！

整个代码可以跑起来了，下面 写 test

### 测试 test

  `npm i mocha co-mocha supertest co-supertest --save-dev` 依赖的模块

  test/signup.js 测试注册功能！

### Next Doing

  test/signin.js 登录功能
  test/create.js 发帖功能
  test/comment.js 回帖功能

  部署到coding 演示平台上

# 参考链接

## 系列教程

  1. [kick-off-koa](https://github.com/koajs/kick-off-koa) 【已完成】

    >npm 安装，cli 交互模式学习。应该深入学习 [NodeSchool](http://nodeschool.io/zh-cn/) 下各个课程。

  2. [基于 koa 开发论坛系统](http://cnodejs.org/topic/563f6e708e90ab7c391e9f71) 【进行……】

  3. [使用 Express + MongoDB 搭建多人博客](https://github.com/nswbmw/N-blog)

  4. [Node入门](http://www.nodebeginner.org/index-zh-cn.html)

  5. [使用React、Node.js、MongoDB、Socket.IO开发一个角色投票应用](http://www.kancloud.cn/kancloud/create-voting-app/63977) [github](https://github.com/papersnake/newdenfaces-es6)

  6. [Build a React + Flux App with User Authentication](https://scotch.io/tutorials/build-a-react-flux-app-with-user-authentication)

  7. [和我一起实战react](https://github.com/mulgore/kodo) 【未完成】

  8. [对Node.js中 stream模块的学习积累和理解](https://github.com/zoubin/streamify-your-node-program)

## 入门系列

  1. [koa 中文文档](https://github.com/guo-yu/koa-guide)
  2. [koa 中间件](https://github.com/koajs/koa/wiki)
  3. [一起学koa](http://17koa.com/koa-generator-examples/)
  4. [koa技术分享](https://cnodejs.org/topic/56936889c2289f51658f0926)

## 解读系列

  1. [koa](https://github.com/berwin/Blog/issues/8)
  2. [如何优雅的在 koa 中处理错误](http://taobaofed.org/blog/2016/03/18/error-handling-in-koa/)
  3. [对Node.js中 stream模块的学习积累和理解](https://github.com/zoubin/streamify-your-node-program)
  4. [stream-handbook](link)

## NPM库

  1. [微信公共平台Node库wechat](http://doxmate.cool/node-webot/wechat/index.html)

---
title: React课程学习
pubDate: 2016-07-06 14:38:55
tags: [F2E, React, Redux]
categories: [F2E, React]
---
[上一篇](/2016/06/06/hackathon-blog/)是关于react 资料的搜集，内容太多，后面参照hackathon-blog 中给出的关于react的资料: [React课程学习](http://guoyongfeng.github.io/idoc/index.html), 整个资料循序渐进，挺易懂的！关于学习过程中的问题单开一章
<!-- more -->

## 2016-06-29

### 1. Error

``` bash
Hash: 396f0bfb9d565b6f60f0
Version: webpack 1.13.1
Time: 52ms
   [0] ./src/index.js 0 bytes [built] [failed]

ERROR in ./src/index.js
Module parse failed: F:\Users\react\webpack-demo\src\index.js Unexpected token (9:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (9:6)
    at Parser.pp.raise (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:923:13)
    at Parser.pp.unexpected (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:1490:8)
    at Parser.pp.parseExprAtom (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:333:12)
    at Parser.pp.parseExprSubscripts (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:228:19)
    at Parser.pp.parseMaybeUnary (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:207:17)
    at Parser.pp.parseExprOps (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:154:19)
    at Parser.pp.parseMaybeConditional (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:136:19)
    at Parser.pp.parseMaybeAssign (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:112:19)
    at Parser.pp.parseParenAndDistinguishExpression (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:376:28)
    at Parser.pp.parseExprAtom (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:307:19)
    at Parser.pp.parseExprSubscripts (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:228:19)
    at Parser.pp.parseMaybeUnary (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:207:17)
    at Parser.pp.parseExprOps (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:154:19)
    at Parser.pp.parseMaybeConditional (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:136:19)
    at Parser.pp.parseMaybeAssign (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:112:19)
    at Parser.pp.parseExpression (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:88:19)
    at Parser.pp.parseReturnStatement (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:1872:26)
    at Parser.pp.parseStatement (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:1737:19)
    at Parser.pp.parseBlock (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:2009:21)
    at Parser.pp.parseFunctionBody (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:610:22)
    at Parser.pp.parseMethod (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:579:8)
    at Parser.pp.parseClassMethod (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:2155:23)
    at Parser.pp.parseClass (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:2140:10)
    at Parser.pp.parseStatement (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:1733:19)
    at Parser.pp.parseTopLevel (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:1666:21)
    at Parser.parse (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:1632:17)
    at Object.parse (F:\Users\react\webpack-demo\node_modules\acorn\dist\acorn.js:885:44)
    at Parser.parse (F:\Users\react\webpack-demo\node_modules\webpack\lib\Parser.js:902:15)
    at DependenciesBlock.<anonymous> (F:\Users\react\webpack-demo\node_modules\webpack\lib\NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (F:\Users\react\webpack-demo\node_modules\webpack-core\lib\NormalModuleMixin.js:310:10)

```

#### 原因是， loaders 中 test 匹配正则错误, 没有引号，`/\.js$/`

## 2016-06-30

### 1. webpack 加速

看到了 webpack resolve 模块了，添加了alias， extensions 感觉编译速度并不明显， 从7s多到5s多的样子，只是基本的模块，并没有添加逻辑代码。可是在loaders 中.js 的解析中添加了 `exclude: path.resolve(__dirname, 'node_modules')` 之后编译速度进入1s 内982ms

### 2. webpack 添加resolve 和 解析样式文件的 loaders: [style-loader, css-loader, less-loader] ，报错信息：`Uncaught ReferenceError: require is not defined`

搜索相关的保存信息`Uncaught ReferenceError: require is not defined` 得到的相关 参考文章： [webpack打包react-dom后，浏览器报require is not defined错误?](https://segmentfault.com/q/1010000004429238)
> 问题解决，是我将react-dom加入到webpack的noparse 中了，删掉即可！

同样删掉后，并不能解决问题，只好一步步注释回退到原来的状态，检测出错的模块，最后还是检测到是 webpack noParse的问题，不过webpack-dev-server 命令前要先webpack 下打包文件到build目录下，前面一直掉到这个坑里了！

#### 提示

[Webpack基础: 7.解析样式文件](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/Webpack%E5%9F%BA%E7%A1%80.html#t77.解析样式文件)，还没有实现热更新功能，所以修改less文件需要重新webpack才能看到结果

### 3. react-hot & webpack-dev-server --inline --hot 配置热更新是报错

``` bash
ERROR in ./src/index.js
Module not found: Error: Cannot resolve 'file' or 'directory' F:\Users\react\webpack-demo\node_modules\react\dist\react.js/lib/ReactMount in F:\Users\react\webpack-demo\src
 @ ./src/index.js 1:301-332

ERROR in ./src/container/App.js
Module not found: Error: Cannot resolve 'file' or 'directory' F:\Users\react\webpack-demo\node_modules\react\dist\react.js/lib/ReactMount in F:\Users\react\webpack-demo\src\container
 @ ./src/container/App.js 1:301-332

ERROR in ./src/components/Button/Button.js
Module not found: Error: Cannot resolve 'file' or 'directory' F:\Users\react\webpack-demo\node_modules\react\dist\react.js/lib/ReactMount in F:\Users\react\webpack-demo\src\components\Button
 @ ./src/components/Button/Button.js 1:301-332
```

注释掉 webpack 中的resolve 的alias 模块 这样就可以解析react & react-dom 模块 通过react-hot。webpack 编译通过，可以运行`npm run dev`，浏览器打开后报错：

``` bash
[HMR] Waiting for update signal from WDS...
abstract-xhr.js:132 GET http://localhost:3000/sockjs-node/info?t=1467279375252 net::ERR_CONNECTION_REFUSED
client:70 [WDS] Disconnected!
```

修改 webpack-dev-server 的port 为3000后解决，端口号要一致。 不过并没有实现热更新功能（编辑器修改，浏览器预览效果）

[使用Webpack搭建开发环境工作流](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/%E4%BD%BF%E7%94%A8Webpack%E6%90%AD%E5%BB%BA%E5%BC%80%E5%8F%91%E6%80%81%E5%B7%A5%E4%BD%9C%E6%B5%81.html) 关于自动刷新， 和 HMR 的配置 关于 [WEBPACK DEV SERVER](http://www.jianshu.com/p/941bfaf13be1) 关于webpack-dev-server 的说明挺详细的，提到了关于热更新不起作用的 原因 [The following modules couldn't be hot updated: (They would need a full reload!)](https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md#the-following-modules-couldnt-be-hot-updated-they-would-need-a-full-reload)
>
> 1. webpack dev server 中提到了前后端配合的相关配置
>
  2. troubleshooting.md 各种配置报错的解决办法！

#### 解决办法

webpack 中devSever 配置中把，publicPath 去掉就OK，就可以了，
> loader 中关于js 的loader配置改成了loaders 后面是数组，如果loader 通过! 链接的话也可以

## 2016-07-04

### 1. [React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html)
>
> 入门挺不错的！

### 2. [React Mixin 的前世今生](https://zhuanlan.zhihu.com/p/20361937)
>
> 有点高深的内容，可以完全没读懂啊！

### 3. [github-notetaker应用开发](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/github-notetaker%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91.html)

#### [7.接入真实的数据](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/github-notetaker%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91.html#t97.接入真实的数据)
>
> 用到了mixin

## 2016-07-05

github-note-taker 中使用了firebase ，直接写代码并没有运行，查看了 [firebase](https://console.firebase.google.com/)官网，已经 [ReactFire Guild](https://github.com/firebase/reactfire/blob/master/docs/guide.md)
> 最终没有使用 firebase 通过 state 中的notes mock了相应的数据

### 1. github-note-taker 调试完成，属性了组织开发react的方式和 react-router的基本用法

### 2. [React-router路由实践](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/React-router%E8%B7%AF%E7%94%B1%E5%AE%9E%E8%B7%B5.html)
>
> 明天coding 下

### 3. [React-AJAX的最佳实践](http://guoyongfeng.github.io/idoc/html/React%E8%AF%BE%E7%A8%8B%E4%B8%93%E9%A2%98/React-AJAX%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5.html)
>
> 作者并没写完，只是给提纲！

## 2016-07-06

### 1. coding [React-router路由实践](link)

#### 1

``` bash
invariant.js:39 Uncaught Invariant Violation: findComponentRoot(..., .0): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID ``.
```

## 2016-07-11

看了redux 入门，进入公司项目

## 2016-07-27

继续吧！期望这个星期，这个月底能完成 hackathon-blog 项目，现在先把redux熟悉

## 2016-08-02

redux 入门的todo demo 调试完成，next: Middleware

[React+Redux系列教程](https://github.com/lewis617/react-redux-tutorial#reactredux系列教程)

## 2016-08-04

1. [React实践 - Component Generator](https://zhuanlan.zhihu.com/p/21386862?refer=purerender)
2. [redux middleware 详解](https://zhuanlan.zhihu.com/p/20597452)

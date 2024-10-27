---
layout: '../../layouts/blogPostLayout.astro'
title: readList
pubDate: 2016-04-05 14:39:43
tags: [F2E, 前端, 笔记]
categories: [ReadList]
---

平时好文章 搜集
<!-- more -->

# 这里作为读过的网络文章的链接汇总吧

## F2E

1. [css3用AnimationEnd判断动画是否完成， css3在动画完成后执行事件](http://blog.csdn.net/kongjiea/article/details/38614695)

### 2016-04-05

  1. [HTML代码简写法：Emmet和Haml](http://www.ruanyifeng.com/blog/2013/06/emmet_and_haml.html)

    >Emmet支持的简写规则:
      ``` html
        E 代表HTML标签。
        E#id 代表id属性。
        E.class 代表class属性。
        E[attr=foo] 代表某一个特定属性。
        E{foo} 代表标签包含的内容是foo。
        E>N 代表N是E的子元素。
        E+N 代表N是E的同级元素。
        E^N 代表N是E的上级元素。
      ```

  2. [Emmet快捷方式查询](http://emmet.evget.com/)

### 2016-04-12

  1. [@font-face与性能](http://www.cnblogs.com/demix/archive/2009/11/28/1612715.html)
  2. [图标字体化浅谈](http://isux.tencent.com/icon-font.html)

### 2016-04-14

  1. [javascript将base64编码的图片数据转换为file并提交](http://www.blogjava.net/jidebingfeng/articles/406171.html)
    > 测试chrome 浏览器，和iOS9.3 中可以（微信）【解决了canvas.toBlob()不支持问题】, 代码如下：
    ```javascript
      convertBase64UrlToBlob: function (urlData, type){
          contentType = type || '';
          var bytes=window.atob(urlData.split[','](1));        //去掉url的头，并转换为byte
          //处理异常,将ascii码小于0的转换为大于0
          var ab = new ArrayBuffer(bytes.length);
          var ia = new Uint8Array(ab);
          for (var i = 0; i < bytes.length; i++) {
              ia[i] = bytes.charCodeAt(i);
          }

          return new Blob( [ab] , {type : contentType});
      }
    ```
  2. [Creating a Blob from a base64 string in JavaScript](http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript)
    ``` javascript
      function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);

          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }

          var byteArray = new Uint8Array(byteNumbers);

          byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
      }
    ```
    > 结合第一段代码可以发现，window.atob(b64Data.split[','](1)), 要去掉url的头，而且代码看起来更健壮！

### 2016-04-16

  1. [如何优雅地使用Sublime Text3](http://www.jianshu.com/p/3cb5c6f2421c)【很全的一篇使用指南】

    1. _
_
 build System_
_
 【可以自己构建node 一键运行】
      > 在sublime text中依次打开`Tools -> Build System -> New Build System...`粘贴以下代码后保存`(如Node.sublime-build)`, 然后把Build System设成Automatic
      ```javascript
        { "cmd": ["node", "--use-strict", "--harmony", "$file"], "selector": "source.js"}

      ```
    2. _
_
 WakaTime -- 记录你的Code时间_
_

      > WakaTime可以做到精确地统计到你花在某个项目上的时间;WakaTime针对不同的IDE，拥有不同的插件，在Sublime上安装着插件，就能统计到我使用Sublime进行的所有项目的行为。可以高效管理和知晓自己code时间
    
      sublime & vsCode 都安装了WakaTime 插件了！
    
    3. _
_
 定制属于自己的快捷键_
_

      > 设置快捷键。在SublimeText里，打开Preferences -> Key Bindings - User，设置的快捷键。
    
      这样结合1 就可以 快捷运行当前的node 文件了
    
    4. _
_
 [编写自己的Sublime Text2 插件](http://www.bluesdream.com/blog/write-your-own-sublime-text2-plug.html)_
_
 【很简单的实例】

  Sublime 是迄今为止用的使用的最好用的编辑器了，大部分时间工作时间都在使用，以前了解过其相关的 snipper, hotkey机制，实现了一些自己的定制，现在了解了build System , new Plugin 机制可以更深入的定制了，'一直想写个直接输入当前时间的 plugin'。

  _
_
 刚发现了编辑Markdown 文件时sublime 中Ctrl + P输入 @ 会出现目录，真是神器啊！ _
_

  2. [时间都去哪了?用RescueTime和WakaTime来记录你的时间](https://luolei.org/track-your-time/)

    从上面文章中看到了的，感觉对自己很有用，最近拖延症晚期了，改变下，正使用Pomotodo 改正中……

### 2016-04-18

  1. [React Native 开发指南](http://www.tuicool.com/articles/3EVz2qB) 【Facebook官方出品，中译】

### 2016-04-19 15:12

  1. [移动端底部input 样式布局修复方案](https://mingyili.github.io/2015/11/05.html#pagewrap)

    修复了input 父类元素 postion: abusolut or fixed 软键盘弹出覆盖 input 元素的问题

    通过 transform: translate3D(0,y,0) 整体向上滚动键盘的高度实现

    主要通过window resize() 事件监听触发的键盘弹起事件，这个事件在iOS 中无法监听，只有通过android 可以监听到，而且iOS下没有问题，所以只处理 Android 的resize 的事件就可以了

    知乎的相关讨论 [移动web页面，input获取焦点弹出系统虚拟键盘时，挡住input，求解决方案？](https://www.zhihu.com/question/32746176?sort=created)
  2. 15:25

    Sublime Date plugin: F5 输入date+hour; Shift + F5 输入hour

### 2016-04-20 ###

  1. [Lazy Load Plugin for jQuery](http://www.appelsiini.net/projects/lazyload) 【图片懒加载】

### 2016-04-22 11:20

  1. Dove Wedding 婚礼空间 预览模式下崩溃问题

  昨天确定的swipe 初始化的时候会崩溃

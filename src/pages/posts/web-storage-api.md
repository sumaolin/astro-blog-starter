---
layout: '../../layouts/blogPostLayout.astro'
title: web storage api
pusData: 2016-02-24 10:14:24
tags: [F2E, sessionStorage, localStorage, web storage api]
categories: [F2E]
---
项目中想加入 webStorage 减小网络开销，提高加载速度，增强用户体验，想系统的看下 web storage方面的文章！
<!-- more -->

## Web Storage API

### 参考文章

早上在几个前端同事的桌子上翻到的 [HTML5高级程序设计](http://book.douban.com/subject/5402708/) 相关的基础知识看第9章补充的。然后搜索下网络知识：

  1. [HTML5 localStorage本地存储实际应用举例](http://www.zhangxinxu.com/wordpress/2011/09/html5-localstorage%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8%E5%AE%9E%E9%99%85%E5%BA%94%E7%94%A8%E4%B8%BE%E4%BE%8B/)

  2. [localStorage、sessionStorage用法总结](http://adamed.iteye.com/blog/1698740)

    >不同浏览器无法共享localStorage或sessionStorage中的信息。相同浏览器的不同页面间可以共享相同的localStorage（页面属于相同域名和端口），但是不同页面或标签页间无法共享sessionStorage的信息。这里需要注意的是，页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的。

  3. [本博客零散优化点汇总](https://imququ.com/post/summary-of-my-blog-optimization.html)

  4. [使用 SRI 增强 localStorage 代码安全](https://imququ.com/post/enhance-security-for-ls-code.html)

  5. [Web移动端使用localStorage缓存Js和css文件](http://blog.csdn.net/a497785609/article/details/48321405)   _
_
 推荐 _
_

  6. [基于 postMessage 和 localStorage 的跨域本地存储方案](http://www.w3ctech.com/topic/284)

  7. [【译】在本地存储中保存图片和文件](http://www.w3ctech.com/topic/767)   _
_
 推荐 _
_

  8. [基于 postMessage 和 localStorage 的跨域本地存储方案](http://www.w3ctech.com/topic/284)

  9. [Storing images and files in IndexedDB](https://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)

  10. [Saving images and files in localStorage](https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/)

### 实践

  参考 上面的文章 5 对 所有的js 和 css 进行localStorage 缓存，每个缓存文件的链接可以通过v=new Date().getTime() 进行细化的版本控制，需要更新的添加 参数，不需要的不更新

#### Next

  1. localStorage 本地存储 的require('js') 模式的调用

##### 20160401 更新

  1. [“高三”笔记之动态JS、动态样式](http://www.famanoder.com/bokes/56fd271ad20b0ffc34ae5983)

## 关于 application manifest

  1. [manifest 和 application cache](http://www.cnblogs.com/_franky/archive/2012/11/23/2783947.html)

  2. [HTML5 离线存储实战之manifest（附缓存整个文件夹的方法）](http://www.jnecw.com/p/490)

  3. [MDN 使用应用缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache) 够详尽！

##### 2016-04-18

  1. [手机百度localstorage细粒度缓存介绍](http://js8.in/2015/12/06/%E6%89%8B%E6%9C%BA%E7%99%BE%E5%BA%A6localstorage%E7%BB%86%E7%B2%92%E5%BA%A6%E7%BC%93%E5%AD%98%E4%BB%8B%E7%BB%8D/)

  2. [手机百度前端工程化之路](http://js8.in/2014/05/28/%E6%89%8B%E6%9C%BA%E7%99%BE%E5%BA%A6%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E4%B9%8B%E8%B7%AF/)

### 疑问

##### 1. application cache 数据量的大小？

不像localStorage 多数资料给出明确的大小是 5M, 查询的资料中很少提及 application cache 的大小，目前找到的文章中形成了两张说法：

  1. [应用缓存初级使用指南](http://www.html5rocks.com/zh/tutorials/appcache/beginner/)

     > 网站的缓存数据量不得超过 5 MB。不过，如果您要编写的是针对 Chrome 网上应用店的应用，可使用 unlimitedStorage 取消该限制

  2. [[HTML5]Application Cache使用中需要注意的事项](http://blog.csdn.net/spring21st/article/details/7222390)

     > Safari桌面浏览器(Mac以及 Windows)没有限制
        Mobile Safari限制为10MB
        Chrome限制为5MB
        Android浏览器对应用程序缓存大小没有限制
        Firefox桌面版有无限的应用程序缓存大小
        Opera的应用程序缓存大小可以由用户管理，但有一个默认大小50MB

    各种浏览器的的 数据量的大小是不一样的。查看 html5 [Application cache API 官方的文件](https://www.w3.org/TR/2011/WD-html5-20110405/offline.html#disk-space)，也是支持各个浏览器自己定义的 允许的disk space 大小，甚至允许用户管理。

  _
_
 最终的方案 ：通用的application cache disk space 限制在5M _
_

  _
_
 tip: _
_
 [chrome://appcache-internals/](chrome://appcache-internals/) 可以查看chorme 中 application cache 的使用大小，亲自证实不止 5M

##### 2. 想缓存的文件太多了，手写很麻烦，怎么办呢？

  1. [详解HTML5中的manifest缓存使用](http://www.jb51.net/html5/376884.html) 中使用 [grunt-manifest](https://www.npmjs.com/package/grunt-manifest)自动生成manifest文件。因为我的构建工具使用的是gulp 所以去npmjs 搜索了[gulp-manifest](https://www.npmjs.com/package/gulp-manifest)，感兴趣的看官方文档吧，很详尽！

#### 3. js控制 缓存文件的更新

  参考：[应用缓存初级使用指南](http://www.html5rocks.com/zh/tutorials/appcache/beginner/)

  ``` Javascript
    // Check if a new cache is available on page load.
    window.addEventListener('load', function(e) {

      window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
          // Browser downloaded a new app cache.
          // Swap it in and reload the page to get the new hotness.
          window.applicationCache.swapCache();
          if (confirm('A new version of this site is available. Load it?')) {
            window.location.reload();
          }
        } else {
          // Manifest didn't changed. Nothing new to server.
        }
      }, false);

    }, false);

  ```

##### 4. 注意事项

  1. [HTML5 使用application cache 接口实现离线数据缓存](http://blog.csdn.net/fdipzone/article/details/12718945)

  > 1. 站点离线存储的容量限制是5M
    2. 如果manifest文件，或者内部列举的某一个文件不能正常下载，整个更新过程将视为失败，浏览器继续全部使用老的缓存
    3. 引用manifest的html必须与manifest文件同源，在同一个域下
    4. 在manifest中使用的相对路径，相对参照物为manifest文件
    5. CACHE MANIFEST字符串应在第一行，且必不可少
    6. 系统会自动缓存引用清单文件的 HTML 文件
    7. manifest文件中CACHE则与NETWORK，FALLBACK的位置顺序没有关系，如果是隐式声明需要在最前面
    8. FALLBACK中的资源必须和manifest文件同源
    9. 当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。
    10. 站点中的其他页面即使没有设置manifest属性，请求的资源如果在缓存中也从缓存中访问
    11. 当manifest文件发生改变时，资源请求本身也会触发更新

  2. [manifest 和 application cache](http://www.cnblogs.com/_franky/archive/2012/11/23/2783947.html)

  > 1. 备用项如果发生命中,则也会被缓存.

  > 2. 明示项和备用项优先级高于白名单.

  > 3. 白名单使用通配符"_
". 则会进入白名单的open状态. 这种状态下.所有不在相关Cache区域出现的url都默认使用HTTP相关缓存头策略.

  > 4. 白名单使用具体的前缀匹配或更具体的URL,则都属于blocking状态.这种状态下,白名单所匹配的,非Cache区域出现的URL,与open的_
匹配的结果一致,但是不在白名单中,又不在整个manifest的资源,会block.也就是访问，加载不能.

## 阅读列表 [2015.02.22 - 2015.02.28]

#### 1. npm构建工具

  1. [我为何放弃Gulp与Grunt，转投npm scripts 上](http://www.infoq.com/cn/news/2016/02/gulp-grunt-npm-scripts-part1),
  2. [我为何放弃Gulp与Grunt，转投npm scripts 中](http://www.infoq.com/cn/news/2016/02/gulp-grunt-npm-scripts-part2),
  3. [我为何放弃Gulp与Grunt，转投npm scripts 下](http://www.infoq.com/cn/news/2016/02/gulp-grunt-npm-scripts-part3)

  > 使用的gulp 的项目构建工具，有时间可以试下直接npm 构建。webpack 中可以使用npm 管理js 包依赖管理

  微博上的相关讨论： [入口](http://weibo.com/1746173800/Dji2uysKB?type=comment#_rnd1456298199966)

#### 2. WebRTC

  1. [实现WebRTC的几个想法](http://www.infoq.com/cn/articles/webrtc-implementation-ideas)

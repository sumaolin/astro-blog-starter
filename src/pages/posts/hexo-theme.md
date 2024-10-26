---
layout: '../../layouts/blogPostLayout.astro'
title: After hello hexo
pusData: 2016-02-17 18:03:20
tags: [heox, blog, node]
categories: [node]

---

建好了网站下面就是优化了，主要的几个问题

1. 自动化部署 TravisCI
2. 评论
3. PWA
4. theme 主题

<!--more-->

## 自动化部署 TravisCI

### Reference

1. [持续集成在Hexo自动化部署上的实践](https://qinyuanpei.github.io/posts/3521618732/) **推荐**

   持续集成的概念讲的很通透，讲起因，讲落地的困难，到 hexo 的 TravisCI

2. [HexoClient使用帮助](https://www.mspring.org/2018/11/29/HexoClient使用帮助/)

## 评论

虽然流量很少，不过也少了互动，不知道来的用户的想法，少了反馈

适用于hexo的评论组件挺多的，如：[多说](http://duoshuo.com/) ，[畅言](https://changyan.kuaizhan.com/) 等依赖服务端的评论服务，也有无服务端依赖的如： [Valine](https://valine.js.org/) ，[Gitalk](https://github.com/gitalk/gitalk) ，[Gitment](https://github.com/imsun/gitment) ，[Vssue](https://vssue.js.org/) 。

1. 多说

   服务停掉了

2. 畅言

   > - 需要填入备案号且审核通过
   > - 用户发表评论要绑定手机号
   > - 有广告

   Reference： [为 Hexo 的 Indigo 主题添加畅言评论系统](https://ziyue.life/201812/ad52hc4b.html)

   上面列出几条，有一条都要 pass 掉了

3. [Valine](https://valine.js.org/) 一款快速、简洁且高效的无后端评论系统

   > Valine 诞生于2017年8月7日，是一款基于[LeanCloud](https://leancloud.cn/)的快速、简洁且高效的无后端评论系统

4. [Gitalk](https://github.com/gitalk/gitalk)  is a modern comment component based on Github Issue and Preact

5. [Gitment](https://github.com/imsun/gitment)

   Reference：[Gitment：使用 GitHub Issues 搭建评论系统](https://imsun.net/posts/gitment-introduction/) ，中文的使用说明

6. [Vssue](https://vssue.js.org/) Vue 驱动的、基于 Issue 的评论插件

   > - **Vssue** 支持 Github、Gitlab 和 Bitbucket，并且很容易扩展到其它平台。**Gitment** 和 **Gitalk** 仅支持 Github。
   > - **Vssue** 可以发表、编辑、删除评论。**Gitment** 和 **Gitalk** 仅能发表评论。
   > - **Vssue** 是基于 [Vue.js](https://vuejs.org/) 开发的，可以集成到 Vue 项目中，并且提供了一个 [Vuepress 插件](https://vssue.js.org/zh/guide/vuepress.html)。 **Gitment**基于原生JS，而 **Gitalk** 基于 [Preact](https://github.com/developit/preact)。

### 2019.10.30

选择了Gittalk，在 [hexo-theme-material-indigo](https://github.com/yscoder/hexo-theme-indigo) 的 [wiki](https://github.com/yscoder/hexo-theme-indigo/wiki/%E5%AE%89%E8%A3%85) 中有gittalk 的 [配置](https://github.com/yscoder/hexo-theme-indigo/wiki/%E9%85%8D%E7%BD%AE)，本来是想改主题代码呢，看代码有相关的配置，就修改了 主题下`_config.yml`  下面的评论配置就可以了，"集成了 [disqus](https://disqus.com/)、[友言](http://www.uyan.cc/)、[gitment](https://github.com/imsun/gitment) 和 [valine](https://valine.js.org/)，开启其一即可"

使用 [hexo-theme-indigo-plus](https://github.com/abelsu7/hexo-theme-indigo-plus) 主题时候，配置了`baidu_url_submitter` 但是一直报错，今天也解决掉了，是对YML 语法的不了解导致的，其中的数组是用 `-`  开头的，所以一直报错，得看下 [YAML 语言教程](http://www.ruanyifeng.com/blog/2016/07/yaml.html) 的提高下

还有个不影响运行，但是一直提示的错误：`Error: Cannot find module './build/Release/DTraceProviderBindings'`  ，重新安装了hexo `npm install hexo --no-optional`  解决了，搜索到的参考：[Hexo常见问题解决方案](https://xuanwo.io/2014/08/14/hexo-usual-problem/)

折腾了好久，感觉blog 也没啥有营养的资料，现在整体想要的功能都有了，主要是评论，后面暂时放弃 PWA 的优化，和主题定制（也没头绪想要定制成什么样子），暂时放一放 hexo 的折腾，专注下blog 内容了

## PWA

> 渐进式应用(Progressive Web Apps，PWA)是Google提出的新一代Web应用概念，其目的是提供可靠、快速、接近Native应用的服务方案。

Github page 支持 https，自己还么升级呢，同时 PWA 也算 速度上的优化！

### Reference

1. [迁移Hexo博客到Google渐进式Web应用(PWA)](https://qinyuanpei.github.io/posts/450254281/)

   使用的插件： [hexo-offline](https://github.com/JLHwung/hexo-offline)

2. [五步让 Hexo 博客支持 PWA](https://richardcao.me/2017/09/03/Hexo-PWA/)  

3. [hexo博客支持PWA了](https://github.com/funnycoderstar/funnycoderstar/issues/6)

## Theme 主题

想自己写一套呢，不过现在看中一套 Meterial 风格的theme ： [hexo-theme-material-indigo](https://github.com/yscoder/hexo-theme-indigo) 和它的进化版本： [hexo-theme-indigo-plus](https://github.com/abelsu7/hexo-theme-indigo-plus) ，试着改写下吧

### Reference

1. [Hexo 主题制作指南](https://chensd.com/2016-06/hexo-theme-guide.html) 很详细的 五星推荐

2. [如何写一个自己的hexo主题](http://mrzhang123.github.io/2017/04/01/hexo-theme/)

3. [Create an Hexo Theme - Part 1: Index](http://www.codeblocq.com/2016/03/Create-an-Hexo-Theme-Part-1-Index/)

4. [hexo-theme-indigo-plus](https://github.com/abelsu7/hexo-theme-indigo-plus) 使用文档

   不错的文档，其实是搭建hexo的整个过程，主题风格也喜欢

## Feature

1. 最近写东西都是在 Markdown 中整理，使用的编辑器是 Typora ，想着和hexo 组合起来，做到一键部署更新呢！

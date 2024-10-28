---
layout: '../../layouts/blogPostLayout.astro'
title: webuploader
pubDate: 2016-03-25 18:57:27
tags: [Webuploader, F2E, Upload]
categories: [F2E]
---
很早就听说[webuploader](http://fex.baidu.com/webuploader/)上传插件了，当时看到演示，感觉很惊艳，这次遇到的项目有上传图片的核心需求，就建议后端配合用下，比较Demo里的后端实现是通过PHP实现的，前端折腾下体验效果
<!-- more -->

# Dove Wedding 使用中遇到的问题

1. 请柬 webuploader 中多次选取图片bug，第一二次可以，第三次无法选取，同一文件不无法重复选择

  > duplicate {Boolean} [可选] [默认值：undefined] 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.

  默认情况下是选取相同文件的时候不会触发 'fileQueued' 事件 只有设置 '为非零' 时候才会触发 'fileQueued' 一直以为要设置为 'true' or 'false', 很坑的参数！翻了好久的 [issues](https://github.com/fex-team/webuploader/issues/71)

  _
_
 上面解决了无法选取同一文件的问题 _
_

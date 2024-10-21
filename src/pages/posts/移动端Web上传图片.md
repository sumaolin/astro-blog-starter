---
layout: '../../layouts/blogPostLayout.astro'
title: 移动端Web上传图片
pusData: 2016-04-06 18:04:42
tags: []
categories: [F2E]
---
最近遇到了移动端图片上传以及上传前对图片的缩放，旋转，裁剪等功能的需求，查看了图片的裁剪和旋转的插件基本上适合PC端交互，只找到了一个 [Cropper](http://fengyuanchen.github.io/cropper/) 还可以，看来有些交互要自己思考设计！
<!-- more -->
### 2016-04-14 【文件格式的转换，Base64 & Blob & File】

1. [javascript将base64编码的图片数据转换为file并提交](http://www.blogjava.net/jidebingfeng/articles/406171.html)

  > 测试chrome 浏览器，和iOS9.3 中可以（微信）【解决了canvas.toBlob()不支持问题】, 代码如下：

  ```javascript
    convertBase64UrlToBlob: function (urlData, type){
        contentType = type || '';
        var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte
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

### 2016-04-20 20:17 ###

#### 修改canvas.toDataURL() 默认的截图是96dpi 怎么调高dpi

  1. [Higher DPI graphics with HTML5 canvas](http://stackoverflow.com/questions/14488849/higher-dpi-graphics-with-html5-canvas)
  2. [HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
  3. [High DPI Canvas](http://www.html5rocks.com/en/tutorials/canvas/hidpi/)

### 2016-06-02 14:05:01

  1. [移动端图片上传的实践](http://qiutc.me/post/uploading-image-file-in-mobile-fe.html) 总结的挺详细的

## 参考链接

1. [移动端Web上传图片实践](https://github.com/xiangpaopao/blog/issues/7)
2. [Canvas实例教程：图像移动、大小调整和裁剪](http://blog.csdn.net/iefreer/article/details/40740465)

## 参考库

1. [canvasResize](https://github.com/gokercebeci/canvasResize)
2. [cropperjs](https://github.com/fengyuanchen/cropperjs)

    > without jQuery, 很强大的，API很清楚

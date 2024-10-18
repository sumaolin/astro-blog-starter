---
layout: '../../layouts/blogPostLayout.astro'
title: docker入门
pusData: 2016-04-25 21:07:46
tags: [docker]
categories: [docker]
---
docker 入门使用
<!-- more -->
# 入门资料

## 遇到问题

  1. `Error starting daemon: open /var/run/docker.pid: permission denie`

  > 运行任何docker 相关的命令都提示： `FATA[0000] Cannot connect to the Docker daemon. Is 'docker -d' running on this host?` ，按提示输入`docker -d'后不 提示`Error starting daemon: open /var/run/docker.pid: permission denie`。

  **解决办法**

  `boot2docker stop & boot2docker start` 重新进入后恢复正常，

  2. `docker pull redis:2.8.19` 是一直报错：

  > `8c37ff647cf2: Error pulling image (2.8.19) from redis, Untar re-exec error: exit status 1: output: unexpected EOF
Error pulling image (2.8.19) from redis, Untar re-exec error: exit status 1: output: unexpected EOF`

## 2016-04-27 16:58

昨天系统莫名其妙的升级到Windows10 回退到Windows 7 后又各种问题，直接重置了一天系统，今天总算能用了（白白浪费一天时间）

由于重装系统的缘故，docker也升级到了 1.9 直接使用Docker Toolbox， 使用上和boot2docker 是有差别的的，通过docker terminal快捷进入，就可以直接docker images 查看了，操作了

**疑问** `docker-machine ssh default` 是做什么的？管理主机？

1. docker 参数 -d

 > docker run指定的命令如果不是那些一直挂起的命令（比如运行top，不断echo），就是会自动退出的。-d命令是设置detach为true，根据官方的文档，意思是让这个命令在后台运行，但并不是一直运行（我们在一个正常的Linux Terminal中运行/bin/bash，运行完了也就完了，不会一直挂着等待响应的，所以确实没办法用daemon方式来跑/bin/bash）。

2. docker quick terminal 进入的是MINGW64 所以window 盘符转换 D: -> /d

3. [配置Docker加速器](https://dashboard.daocloud.io/mirror)
 配置docker toolbox 的`--registry-mirror`，速度瞬间上去了

## 2016-04-28 18:21

1. [Docker —— 从入门到实践](https://yeasy.gitbooks.io/docker_practice/content/index.html) 【电子书】
2. [Docker 中文教程](http://wiki.jikexueyuan.com/project/docker/)
3. [如何将nodeclub构建成Docker镜像](http://www.csdn.net/article/2015-07-21/2825268)

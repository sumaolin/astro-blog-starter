---
layout: '../../layouts/blogPostLayout.astro'
title: Mac系统配置前端开发环境
pubDate: 2021-08-15 23:01:00
top: 1
tags: [F2E, Mac, iTerm]
categories: [F2E, Mac]
---

二手的顶配 Mac Pro 垃圾桶到货了，新系统从零开始配置开发环境，包括终端软件改为 iTerm2，bash 改为 zsh, 并且安装 oh-my-zsh

<!-- more -->

### 必备软件

1. [uTools](https://u.tools) Alfred 替代品，跨系统，Linux Mac Windows 都可以，中国人写的，插件也很实用

   软件免费，插件免费，跨平台同步配置是首付的，很良心了

   常用的 插件

   vscode ：查找 vscode 项目历史，直接通过 vscode 打开 项目

   Tinypng: 直接压缩图片并可以替换原有的文件

2. [iTerm2 + Oh My Zsh](https://juejin.cn/post/6844904178075058189)

   开发 50%以上的时间和终端打交道的，弄个高颜值好用的终端还是第一需求的

   下载 iTerm 软件安装，配置 oh-my-zsh ，设置 iterm 软件的 sh 默认为 zsh，设置 zsh 的 theme 皮肤，和 iTerm 中 字符集

   安装 Homebrew，这样安装软件时候直接 命令行 `brew install`

3. Git 的配置

   `ssh-keygen` 生产公钥秘钥，配置公钥到 git 线上服务上（github，gitee，gitlab)

   不同 git 服务器下载自动设置不同的用户名和邮箱 : [利用 Git-hook 自动配置不同仓库的用户信息](https://segmentfault.com/a/1190000013727784)

4. [vscode](https://code.visualstudio.com/)

   直接下载安装了，安装插件 [Settings Sync](https://github.com/shanalikhan/code-settings-sync.git) 添加 Gist 同步不同电脑上的 vscode 配置

5. [nvm](https://github.com/nvm-sh/nvm) nodejs 版本管理工具，前端开发离不开的

   安装起那么开发环境 `brew install nvm`

   npm 配置下载源 registry `npm config set registry https://registry.npm.taobao.org`

6. [Spectacle](https://www.spectacleapp.com/) 的出现让调整窗口，分屏变得与 windows 一样简单

   多窗口管理工具，常用 commond + option + 左右方向键，让当前窗口占据屏幕的左右一半屏幕

7. [MAC Command 键与 Control 键调换方案](https://www.jianshu.com/p/40b71d939a05) **推荐**

   试了半天，我很特殊电脑上是 command 的 option 进行了互调，笔记本电脑上用习惯了，现在调成一样的

   以前从 windows 系统转过来的是很不习惯，外接键盘鼠标分别进行了设置，触摸板和鼠标又区别进行设置

   > window 上使用的一套罗技的鼠标和键盘，之间把 usb 发射器插入 Mac 来切换输入设备，Mac 下的默认键盘映射有点 Mac 笔记本自带的布局不一样的。通过如下设置：
   >
   > 1. _键盘_ “系统偏好设置”—“键盘”—“修饰键” 将键盘上的 Windows 映射成 option 键，alt 键映射成苹果键
   > 2. 鼠标 “系统偏好设置”—“鼠标”—“滚动方向：自然” 勾选取掉，这样就和 window 下一样自然使用鼠标了
   >
   > 鼠标设置优点烦恼：用 Mac 笔记本的时候触摸板的上下方向又反了，用外交设备的时候只能用外接设备，用笔记本的时候用要再改变回来，`2017.12.12` 更新： [SCROLL REVERSER](https://pilotmoon.com/scrollreverser/) 解决了这个问题

### 选装软件

1. [Typora](https://typora.io/) Markdown 写作工具

   > 以前用过马克飞象觉得快捷键挺好用的，不过这款 App 直接所见即所得模式，一会查询下相关的快捷键，更喜欢的还有 theme 的选择，默认竟然是 GitHub 的

2. [Vanilla](https://matthewpalmer.net/vanilla/)

   > Hide menu bar icons on your Mac

   Mac 工具栏 icons 管理工具，可以选择那些软件 icon 隐藏和展示

3. [坚果云](https://www.jianguoyun.com/) 不同机器间同步文件用的，免费用户有流量限制，平时同步文档用，已经保存软件安装包用

4. [Itsycal](https://www.mowglii.com/itsycal/) 好用的通知栏日历软件

5. [fliqlo](https://fliqlo.com/) 屏保工具

6. [RescueTime](https://www.rescuetime.com) 时间记录工具

   记录每个软件上使用时间，早在 Mac 系统的屏幕使用时间功能，并且可以 web 查看统计表格

7. [番茄土豆](https://pomotodo.com/intl/zh-CN/) 时间管理工具

8. [wakatime](https://wakatime.com/) 有 vscode 插件，可以统计每个项目上的使用时间

### 参考资料

1. [如何大幅度提高 Mac 开发效率](https://github.com/bestswifter/blog/blob/master/articles/efficient-mac.md)

2. [Mac 键盘快捷键](https://support.apple.com/zh-cn/HT201236)

3. [macbootstrap](https://github.com/bestswifter/macbootstrap) A bootstrap script for new Mac

   > 对新 mac 设置脚步，不用在搜索教程一步步的设置啦，一行命令搞定，并且详细讲解了设置的细节

4. [macOS 有哪些冷门但是一但发现就无法自拔的软件？](https://www.zhihu.com/question/35050387)

   [Itsycal](https://www.mowglii.com/itsycal/) 好用的通知栏日历软件

   [PDF Expert](https://macwk.com/soft/pdf-expert) PDF 工具

   [fliqlo](https://fliqlo.com/) 屏保工具

   [ScreenToLayers](https://neededapps.com/screentolayers/) 屏幕截图保存为 PSD

   [iPack](https://macwk.com/soft/ipack) 解压缩软件，不用压缩 mac 特有的文件

   [Hammerspoon](http://www.hammerspoon.org/) lua 脚步定制自动化工具

   可以自己看找自己需要的软件

### 顶配的 Mac Pro 配置

1. [Mac Pro（2013 年末) - 技术规格](https://support.apple.com/kb/SP697?locale=zh_CN)

   收到自己的二手顶配 Mac Pro 了 128G 内存，1T M2 硬盘，双 D7 6G 显卡

   处理器查了下 ： [英特尔 ® 至强 ® 处理器 E5-2697 v2](https://ark.intel.com/content/www/cn/zh/ark/products/75283/intel-xeon-processor-e5-2697-v2-30m-cache-2-70-ghz.html)

   疑惑的是内存明明是 1866Mhz 的 32G 内存条，系统要降到 1066Mhz 区使用，网上说是为了散热设置的，回去拆下两个内存条来看下 能不能提升 到 1866Mzh，看文章：[DDR3 内存带宽计算](http://blog.chinaunix.net/uid-14214482-id-3220464.html) 这样读写速度带宽就能提升 ，不过 CPU 中限制了 `最大内存带宽59.7 GB/s`

   > 测试了拆下 2 个 32G 内存条，标准的 1066mHz，没法升高到 1866 Hz，感觉还是 128 内存安装在上面吧

   硬盘感觉也要高了，现在监测的 写 1400M，读 1800M，当时让卖家加的：[三星（SAMSUNG）1TB SSD 固态硬盘 M.2 接口(NVMe 协议) 970 EVO Plus（MZ-V7S1T0B）](https://item.jd.com/100002183461.html) ，R 3500M，W 3300M。感觉也就一半的性能用到了，后面其他机器用到了，可以换下来！

   替换： [雷克沙（Lexar）NM610 1TB M.2 NVMe SSD 固态硬盘 PCle3.0 四通道(NM610-1TB)](https://item.jd.com/100005185781.html) 599 价格

   多花了 1 倍的价格

2. [这个 Mac Pro 垃圾桶值得入手吗](https://www.feng.com/post/12981301)

   哈哈，讨论了一周，[还是看数据性能](https://browser.geekbench.com/macs/mac-pro-late-2013-intel-xeon-e5-2697-v2-2-7-ghz-12-cores)，感觉 还是 m1 芯片的 mac mini 性能高，比较各种硬件的标准 7 年提审了很多，5 纳米的制造工艺也是很有优势的

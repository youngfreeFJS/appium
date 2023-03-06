---
title: 安装 Appium
---


你只需要简简单单地执行一行 NPM 命令，就安装好了 Appium：

```bash
npm i -g appium@next
```

!!! 请注意

    当前，你必须下载 `appium@next`，而不是下载 `appium`（这是1.x版本）。当Appium 2.0完成并正式发布后，就可以直接通过 `appium` 下载了。
这个命令在系统上全局安装 Appium，以便你可以直接通过运行 `appium` 命令来启动。现在开始运行：

```
appium
```

你将会看见一些，以如下文字开头的输出：

```
[Appium] Welcome to Appium v2.0.0
```

就是这样！如果看见了这种输出，则Appium服务器已启动并正在运行。接着，关闭 Appium 服务（CTRL-C），然后我们将继续下一步：安装一个用于自动化Android应用程序的驱动程序。

# yinyuetai-html5-play（html5 音悦台）

将 `http://v.yinyuetai.com/video/ID` 重定向到 `http://v.yinyuetai.com/video/h5/ID` ，该页面为 pad 版的页面，默认使用的是html5播放器。

## 安装

chrome 用户建议安装 chome 扩展版而不是 user.js 版，因为 chrome 版使用的是 [chrome.webRequest](https://developer.chrome.com/extensions/webRequest) API，可以在浏览器发出网页请求前就跳转，速度快、效率高、体验好，你是看不到原来的页面的。而 user.js 版需要先载入网页之后才开始跳转，在已经看到页面之后才开始跳转。


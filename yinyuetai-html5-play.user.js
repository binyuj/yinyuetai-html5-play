// ==UserScript==
// @name         yinyuetai-html5-play
// @namespace    https://github.com/binyuj
// @version      0.0.1
// @description  Redirect yinyuetai to html5 page.
// @author       binyu_J
// @match        http://v.yinyuetai.com/*
// @grant        none
// ==/UserScript==


function yinyuetai_html5(){
    if (!window.location.href.includes("video/h5")){
        window.location = window.location.href.replace(/video/, "video/h5");
        console.log("已重定向到html5页面。");
    }
    else {
        console.log("已经是html5页面了！");
    }
}

yinyuetai_html5();

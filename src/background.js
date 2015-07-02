chrome.webRequest.onBeforeRequest.addListener(
  // callack
  function(details) {
    var requestUrl = details.url;
    if (requestUrl.indexOf("video/h5") == -1){   // url中不包含h5时indexOf返回-1
      var newUrl = requestUrl.replace(/video/, "video/h5");
      return {redirectUrl: newUrl};
    }
  },
  // filters
  {
    urls: ["http://v.yinyuetai.com/*"],
  },
  // extraInfoSpec
  ["blocking"]);

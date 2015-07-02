chrome.webRequest.onBeforeRequest.addListener(
  // callack
  function (details) {
    var requestUrl = details.url;
    var newUrl;
    if (requestUrl.search(/video\/\d+/) !== -1) {
      newUrl = requestUrl.replace(/video/, "video/h5");
    } else if (requestUrl.search(/playlist\/\d+/) !== -1) {
      newUrl = requestUrl.replace(/playlist/, "playlist/h5");
    }
    return {redirectUrl: newUrl};
  },
  // filters
  {
    urls: ["http://v.yinyuetai.com/*"],
  },
  // extraInfoSpec
  ["blocking"]
);

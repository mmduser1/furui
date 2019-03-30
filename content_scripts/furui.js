"use strict";
(function() {
  console.log("GGGG");
})();
console.log("aaaa");
{
  console.log("FFF");
  let replaceColumn = video => {
    while (video.firstChild) {
      video.removeChild(video.firstChild);
    }
    let ngElm = document.createElement("img");
    ngElm.src = chrome.extension.getURL("images/ng.png");
    ngElm.style.cssText =
      "width: 150px; height: 100%; display: block; margin-left: auto; margin-right: auto; opacity: 0.5;";
    ngElm.className = "node node-video node-teaser node-teaser clearfix";
    video.appendChild(ngElm);
  };

  chrome.storage.local.get("ngusers", settings => {
    let videos = document.querySelectorAll(".views-column");

    for (let video of videos) {
      let username = video.querySelector(".username").textContent;
      if (settings.ngusers.includes(username)) {
        replaceColumn(video);
      }
    }
  });
}

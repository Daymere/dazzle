!function(){"use strict";function e(e,t){var n,r,o,a=t.onPointerMove||function(){},i=t.onPointerDown||function(){},c=t.onPointerUp||function(){},s=parseInt(t.delay),u=t.observe&&t.observe instanceof HTMLElement&&(t.observe.contains(e)?t.observe:e)||e,l=isNaN(s)?m:(n=m,r=s,o=!1,function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(o)return null;o=!0,setTimeout((function(){n.apply(void 0,t),o=!1}),r)}),d={startX:0,startY:0,currentX:null,currentY:null};function f(e){d.currentY=e.pageY,d.currentX=e.pageX,a(d)}function m(e){u.removeEventListener("pointermove",f),u.removeEventListener("pointerup",l),c(d)}Object.defineProperties(d,{startX:{writable:!1},startY:{writable:!1}}),e.addEventListener("pointerdown",(function(e){Object.defineProperties(d,{startX:{value:e.pageX},startY:{value:e.pageY}}),d.currentY=null,d.currentX=null,u.addEventListener("pointermove",f),u.addEventListener("pointerup",l),i(d)}))}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n,r,o,a,i,c,s=document.querySelector(".slider-wrapper"),u=document.querySelector(".slider-controls"),l=function(e){if(Array.isArray(e))return t(e)}(n=s.querySelectorAll(".slider-item"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=[],f=0,m=0;function v(e){m=-100*e,d.map((function(e){return e.classList.remove("active")})),d.find((function(t){return Number(t.dataset.slide)===e})).classList.add("active"),s.style.transition="",s.style.transform="translateX(".concat(m,"%)"),s.style.transition=""}function p(e,t){var n=!1;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];if(n)return null;n=!0,setTimeout((function(){e.apply(void 0,o),n=!1}),t)}}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e(s,{onPointerDown:function(e){s.style.cursor=window.innerWidth<=768?"":"grab",s.style.transition=".0s"},onPointerMove:function(e){var t=e.currentX>e.startX&&0===f,n=e.currentX<e.startX&&f===l.length-1,r=t||n?e.startX:e.currentX;e.percent=(r-e.startX)/s.offsetWidth*100,s.style.transform="translateX(".concat(m+e.percent,"%)")},onPointerUp:function(e){var t=e.percent;s.removeAttribute("style"),t>=10?f--:t<=-10&&f++,v(f)},observe:document.body}),l.map((function(e,t){var n=document.createElement("button");n.setAttribute("class","slider-btn ".concat(0===t?"active":"")),n.setAttribute("data-slide",t),n.addEventListener("click",v.bind(null,t)),d.push(n),u.append(n)})),r={elements:document.querySelectorAll("[data-animated]"),className:"animation",step:2},o=r.elements,a=r.className,i=r.step,c=r.hide,window.addEventListener("load",(function(){var e=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0;return e=Array.from(e),function(o){var a=pageYOffset,i=a+window.innerHeight;e.map((function(e){var o=e.offsetTop,c=o+e.offsetHeight,s=Math.max(1,n),u=window.innerHeight*(1/s);if(o>=a&&o+u<=i||c>=a+u&&c<=i||o<=a&&c>=i)e.classList.add(t);else{if(!r)return null;e.classList.remove(t)}}))}}(o,a,i,c);e(),document.addEventListener("scroll",p(e,100))})),window.addEventListener("load",(function(){if(window.innerWidth<768){console.log("work");var t=document.getElementById("burgermenu"),n=document.getElementById("headernav"),r=document.querySelector(".header-nav-line");function o(){n.classList.remove("opened"),t.classList.remove("opened"),document.body.style.overflow=""}t.addEventListener("click",(function(){t.classList.contains("opened")?o():(n.classList.add("opened"),t.classList.add("opened"),document.body.style.overflow="hidden")})),n.addEventListener("click",(function(e){e.target.closest(".header-nav-btn")&&o()})),e(r,{onPointerDown:function(e){n.style.transition="0s"},onPointerMove:function(e){var t=n.offsetHeight,r=(e.currentY-e.startY)/t*100;n.style.transform="translateY(".concat(Math.min(r,0),"%)"),n.style.opacity=Math.abs(1+r/100),e.percent=r},onPointerUp:function(e){var t=e.percent;n.removeAttribute("style"),t<-15&&o()},delay:100})}}));var g=function(e,t){var n,r,o,a,i,c;if(!(e instanceof HTMLElement))throw Error("createPlayer(...) must contain valid HTML element");if(r=e.dataset.srcvideo,!(o=r&&r.includes("youtube.com")&&(null===(n=r.match(/(?<=(v=)).+/))||void 0===n?void 0:n[0].toString())||r))throw Error("createPlayer(...) srcvideo have not valid video url");function s(e){if(!i)return null;i.contentWindow.postMessage(JSON.stringify({event:"command",func:e,args:""}),"*")}return e.style.backgroundImage="url(https://img.youtube.com/vi/".concat(o,"/sddefault.jpg)"),(a=document.createElement("button")).setAttribute("data-buttonvideo",""),a.style.backgroundImage="url(assets/images/ybutton.webp)",e.append(a),e.addEventListener("click",(function(t){i=document.createElement("iframe"),c="https://www.youtube.com/embed/"+o+"?autoplay=2&autohide=1&enablejsapi=1&",i.setAttribute("src",c),i.setAttribute("data-iframe",""),i.setAttribute("frameborder","0"),i.setAttribute("allowfullscreen",""),e.replaceChild(i,a)}),{once:!0}),{play:function(){return s("playVideo")},pause:function(){return s("pauseVideo")},stop:function(){return s("stopVideo")}}}(document.getElementById("video")),h=document.querySelector(".home-play"),w=document.getElementById("video");document.querySelector(".video-cross").addEventListener("click",(function(){document.body.classList.remove("cover"),w.classList.remove("watch"),g.pause()})),h.addEventListener("click",(function(){document.body.classList.add("cover"),w.classList.add("watch")}));var L=document.getElementById("scrolltop"),x=y(document.querySelectorAll("[data-jumpto]")),E=y(document.querySelectorAll("[data-target]"));function A(){var e=pageYOffset<=window.innerHeight;e||L.classList.contains("show")?e&&L.classList.remove("show"):L.classList.add("show")}function S(e){e=e||window.innerHeight/3;var t=E.reduce((function(t,n){var r=n.offsetTop,o=n.id;return pageYOffset+e>=r?x.find((function(e){return e.dataset.jumpto===o})):t}),null);x.map((function(e){e.classList.remove("active")})),t.classList.add("active")}A(),S(),document.addEventListener("scroll",p((function(){A(),S()}),100)),document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements.email;/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(t.value)||function(e,t){e.hidden=!1;var n=setTimeout((function(){return e.hidden=!0}),3e3);e.onclick=function(){e.hidden=!0,clearTimeout(n)}}(document.getElementById("formerror"))}))}();
(()=>{"use strict";var n={968:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),l=new URL(t(92),t.b),p=a()(o()),d=s()(l);p.push([n.id,`* {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n  border: none;\n}\n\n.navigation {\n  background-color: black;\n  display: flex;\n  gap: 10px;\n  justify-content: space-evenly;\n  margin: 0 auto;\n  padding: 30px 0;\n  max-width: 1440px;\n}\n\n.navigation__item {\n  color: aqua;\n  font-size: 20px;\n  text-decoration: none;\n}\n\n.main {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 10px 5px;\n  background-image: url(${d});\n  background-size: cover;\n  height: auto;\n}\n\n.main__title {\n  text-align: center;\n  margin-bottom: 10px;\n  color: #18d6a7;\n}\n\n.main__content {\n  padding: 0px 0px 5px 5px;\n  color: white;\n  font-size: 15px;\n}\n\n.feedback-footer {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 10px 5px;\n  display: grid;\n  grid-template-columns: 1fr 0.5fr 1fr;\n  gap: 5px;\n  justify-items: center;\n  background-color: orange;\n}\n`,""]);const u=p},336:(n,e,t)=>{t.d(e,{A:()=>u});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),l=new URL(t(92),t.b),p=a()(o()),d=s()(l);p.push([n.id,`* {\n  box-sizing: border-box;\n  padding: 0px;\n  margin: 0px;\n  border: none;\n}\n\n\n.slider-wrap {\n  position: relative;\n  background-color: aquamarine;\n  max-width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  padding: 50px 0;\n}\n\n.slider {\n  height: 100%;\n  display: flex;\n  list-style-type: none;\n}\n\n.slider-item {\n  display: none;\n  height: 100%;\n  width: 100%;\n}\n\n.item-img {\n  width:500px;\n  height: 100%;\n  object-fit: cover;\n  \n}\n\n.slider-arrow {\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  height: 80%;\n  width: 100%;\n  top: 50px;\n  z-index: 5;\n}\n\n.arrow {\n  background-color: rgba(233, 205, 205, 50%);\n  cursor: pointer;\n  height: 100%;\n  width: 15%;\n  font-size: 20px;\n}\n\n.arrow:hover {\n  background-color: rgba(0, 0, 0, 50%);\n}\n\n\n.navigation {\n  background-color: black;\n  display: flex;\n  gap: 10px;\n  justify-content: space-evenly;\n  margin: 0 auto;\n  padding: 30px 0;\n  max-width: 1440px;\n}\n\n.navigation__item {\n  color: aqua;\n  font-size: 20px;\n  text-decoration: none;\n}\n\n.main {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 10px 5px;\n  background-image: url(${d});\n  background-size: cover;\n  height: auto;\n}\n\n.main__title {\n  text-align: center;\n  margin-bottom: 10px;\n  color: #18d6a7;\n}\n\n.main__content {\n  padding: 0px 0px 5px 5px;\n  color: white;\n  font-size: 15px;\n}\n\n.index-footer {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 10px 5px;\n  display: grid;\n  grid-template-columns: 1fr 0.5fr 1fr;\n  gap: 5px;\n  justify-items: center;\n  background-color: pink;\n}\n`,""]);const u=p},106:(n,e,t)=>{t.d(e,{A:()=>p});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(336),s=t(968),l=a()(o());l.i(c.A),l.i(s.A),l.push([n.id,"",""]);const p=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:g,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},92:(n,e,t)=>{n.exports=t.p+"9bec26efce82214386a7.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),s=t.n(c),l=t(540),p=t.n(l),d=t(113),u=t.n(d),f=t(106),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),e()(f.A,g),f.A&&f.A.locals&&f.A.locals,function(n,e,t){document.querySelector(".slider-wrap").innerHTML=`\n  <ul class='slider'>\n        <li class='slider-item'><img class="item-img" src="${n}" alt=""></li>\n        <li class='slider-item'><img class="item-img" src="${e}" alt=""></li>\n        <li class='slider-item'><img class="item-img" src="${t}" alt=""></li>\n  </ul>\n  <div class='slider-arrow'>\n    <button id='prev' class='arrow'><</button>\n    <button id='next' class='arrow'>></button>\n  </div>\n `;const r=document.querySelector(".slider").children;let o=0;r[o].style.display="block",document.getElementById("next").addEventListener("click",(function(){o+=1,o>=r.length&&(o=0);for(let n=0;n<r.length;n++)r[n].style.display="none";r[o].style.display="block"})),document.getElementById("prev").addEventListener("click",(function(){o-=1,o<0&&(o=r.length-1);for(let n=0;n<r.length;n++)r[n].style.display="none";r[o].style.display="block"}))}(t.p+"262992b6f438fe45e3d5.jpg",t.p+"71345d0c40d7a5a2e584.jpg",t.p+"9488810e56c4a5cacc51.jpg");let m=document.querySelector(".feedback-footer");console.log(m)})()})();
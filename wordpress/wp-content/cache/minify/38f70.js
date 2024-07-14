!function(t){"use strict";const e=t.params,n=(document.querySelector.bind(document),(t,e)=>e.split(".").reduce((t,e)=>t&&t[e],t)),i=()=>null,s=t=>null===t||t===undefined?"":t,o="wc/store/checkout";function a(t){window.wp&&window.wp.data&&window.wp.data.dispatch&&window.wc&&window.wc.wcBlocksData&&window.wp.data.dispatch(window.wc.wcBlocksData.CHECKOUT_STORE_KEY).__internalSetExtensionData("woocommerce/order-attribution",t,!0)}function r(){return"undefined"!=typeof sbjs}function c(){if(window.wp&&window.wp.data&&"function"==typeof window.wp.data.subscribe){const e=window.wp.data.subscribe(function(){e(),a(t.getAttributionData())},o)}}t.getAttributionData=function(){const s=e.allowTracking&&r()?n:i,o=r()?sbjs.get:{},a=Object.entries(t.fields).map(([t,e])=>[t,s(o,e)]);return Object.fromEntries(a)},t.setOrderTracking=function(n){if(e.allowTracking=n,n){if(!r())return;sbjs.init({lifetime:Number(e.lifetime),session_length:Number(e.session),base64:Boolean(e.base64),timezone_offset:"0"})}else!function(){const t=window.location.hostname;["sbjs_current","sbjs_current_add","sbjs_first","sbjs_first_add","sbjs_session","sbjs_udata","sbjs_migrations","sbjs_promo"].forEach(e=>{document.cookie=`${e}=; path=/; max-age=-999; domain=.${t};`})}();const i=t.getAttributionData();!function(t){for(const e of document.querySelectorAll("wc-order-attribution-inputs"))e.values=t}(i),a(i)},t.setOrderTracking(e.allowTracking),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",c):c(),window.customElements.define("wc-order-attribution-inputs",class extends HTMLElement{constructor(){if(super(),this._fieldNames=Object.keys(t.fields),this.hasOwnProperty("_values")){let t=this.values;delete this.values,this.values=t||{}}}connectedCallback(){this.innerHTML="";const t=new DocumentFragment;for(const n of this._fieldNames){const i=document.createElement("input");i.type="hidden",i.name=`${e.prefix}${n}`,i.value=s(this.values&&this.values[n]||""),t.appendChild(i)}this.appendChild(t)}set values(t){if(this._values=t,this.isConnected)for(const t of this._fieldNames){const n=this.querySelector(`input[name="${e.prefix}${t}"]`);n?n.value=s(this.values[t]):console.warn(`Field "${t}" not found. `+"Most likely, the '<wc-order-attribution-inputs>' element was manipulated.")}}get values(){return this._values}})}(window.wc_order_attribution);
;!function(){var e={6879:function(e){!function(t,n){var a=function(e,t,n){"use strict";var a,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var r=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],y={},g=Array.prototype.forEach,p=function(e,t){return y[t]||(y[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),y[t].test(e[l]("class")||"")&&y[t]},z=function(e,t){p(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},h=function(e,t){var n;(n=p(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},b=function(e,t,n){var a=n?s:"removeEventListener";n&&b(e,t),v.forEach((function(n){e[a](n,t)}))},C=function(e,n,i,r,o){var s=t.createEvent("Event");return i||(i={}),i.instance=a,s.initEvent(n,!r,!o),s.detail=i,e.dispatchEvent(s),s},A=function(t,n){var a;!o&&(a=e.picturefill||i.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},w=(ze=[],he=[],be=ze,Ce=function(){var e=be;for(be=ze.length?he:ze,ge=!0,pe=!1;e.length;)e.shift()();ge=!1},Ae=function(e,n){ge&&!n?e.apply(this,arguments):(be.push(e),pe||(pe=!0,(t.hidden?d:u)(Ce)))},Ae._lsFlush=Ce,Ae),M=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w((function(){e.apply(t,n)}))}},N=function(e){var t,a=0,r=i.throttleDelay,o=i.ricTimeout,s=function(){t=!1,a=n.now(),e()},l=f&&o>49?function(){f(s,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:M((function(){d(s)}),!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=r-(n.now()-a))<0&&(i=0),e||i<9?l():d(l,i))}},x=function(e){var t,a,i=99,r=function(){t=null,e()},o=function(){var e=n.now()-a;e<i?d(o,i-e):(f||r)(r)};return function(){a=n.now(),t||(t=d(o,i))}},L=(K=/^img$/i,Q=/^iframe$/i,V="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),X=0,Y=0,Z=0,ee=-1,te=function(e){Z--,(!e||Z<0||!e.target)&&(Z=0)},ne=function(e){return null==J&&(J="hidden"==E(t.body,"visibility")),J||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},ae=function(e,n){var a,i=e,o=ne(e);for(I-=n,G+=n,j-=n,U+=n;o&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(o=(E(i,"opacity")||1)>0)&&"visible"!=E(i,"overflow")&&(a=i.getBoundingClientRect(),o=U>a.left&&j<a.right&&G>a.top-1&&I<a.bottom+1);return o},ie=function(){var e,n,o,s,c,d,u,f,m,v,y,g,p=a.elements;if((D=i.loadMode)&&Z<8&&(e=p.length)){for(n=0,ee++;n<e;n++)if(p[n]&&!p[n]._lazyRace)if(!V||a.prematureUnveil&&a.prematureUnveil(p[n]))fe(p[n]);else if((f=p[n][l]("data-expand"))&&(d=1*f)||(d=Y),v||(v=!i.expand||i.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:i.expand,a._defEx=v,y=v*i.expFactor,g=i.hFac,J=null,Y<y&&Z<1&&ee>2&&D>2&&!t.hidden?(Y=y,ee=0):Y=D>1&&ee>1&&Z<6?v:X),m!==d&&($=innerWidth+d*g,q=innerHeight+d,u=-1*d,m=d),o=p[n].getBoundingClientRect(),(G=o.bottom)>=u&&(I=o.top)<=q&&(U=o.right)>=u*g&&(j=o.left)<=$&&(G||U||j||I)&&(i.loadHidden||ne(p[n]))&&(R&&Z<3&&!f&&(D<3||ee<4)||ae(p[n],d))){if(fe(p[n]),c=!0,Z>9)break}else!c&&R&&!s&&Z<4&&ee<4&&D>2&&(P[0]||i.preloadAfterLoad)&&(P[0]||!f&&(G||U||j||I||"auto"!=p[n][l](i.sizesAttr)))&&(s=P[0]||p[n]);s&&!c&&fe(s)}},re=N(ie),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),z(t,i.loadedClass),h(t,i.loadingClass),b(t,le),C(t,"lazyloaded"))},se=M(oe),le=function(e){se({target:e.target})},ce=function(e,t){var n=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},de=function(e){var t,n=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ue=M((function(e,t,n,a,r){var o,s,c,u,f,v;(f=C(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?z(e,i.autosizesClass):e.setAttribute("sizes",a)),s=e[l](i.srcsetAttr),o=e[l](i.srcAttr),r&&(u=(c=e.parentNode)&&m.test(c.nodeName||"")),v=t.firesLoad||"src"in e&&(s||o||u),f={target:e},z(e,i.loadingClass),v&&(clearTimeout(k),k=d(te,2500),b(e,le,!0)),u&&g.call(c.getElementsByTagName("source"),de),s?e.setAttribute("srcset",s):o&&!u&&(Q.test(e.nodeName)?ce(e,o):e.src=o),r&&(s||u)&&A(e,{src:o})),e._lazyRace&&delete e._lazyRace,h(e,i.lazyClass),w((function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&z(e,i.fastLoadedClass),oe(f),e._lazyCache=!0,d((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Z--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=K.test(e.nodeName),a=n&&(e[l](i.sizesAttr)||e[l]("sizes")),r="auto"==a;(!r&&R||!n||!e[l]("src")&&!e.srcset||e.complete||p(e,i.errorClass)||!p(e,i.lazyClass))&&(t=C(e,"lazyunveilread").detail,r&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Z++,ue(e,t,r,a,n))}},me=x((function(){i.loadMode=3,re()})),ve=function(){3==i.loadMode&&(i.loadMode=2),me()},ye=function(){R||(n.now()-H<999?d(ye,999):(R=!0,i.loadMode=3,re(),c("scroll",ve,!0)))},{_:function(){H=n.now(),a.elements=t.getElementsByClassName(i.lazyClass),P=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",re,!0),c("resize",re,!0),c("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&u((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(re).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[s]("DOMNodeInserted",re,!0),r[s]("DOMAttrModified",re,!0),setInterval(re,999)),c("hashchange",re,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,re,!0)})),/d$|^c/.test(t.readyState)?ye():(c("load",ye),t[s]("DOMContentLoaded",re),d(ye,2e4)),a.elements.length?(ie(),w._lsFlush()):re()},checkElems:re,unveil:fe,_aLSL:ve}),W=(T=M((function(e,t,n,a){var i,r,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),m.test(t.nodeName||""))for(r=0,o=(i=t.getElementsByTagName("source")).length;r<o;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||A(e,n.detail)})),F=function(e,t,n){var a,i=e.parentNode;i&&(n=_(e,i,n),(a=C(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&T(e,i,a,n))},O=x((function(){var e,t=B.length;if(t)for(e=0;e<t;e++)F(B[e])})),{_:function(){B=t.getElementsByClassName(i.autosizesClass),c("resize",O)},checkElems:O,updateElem:F}),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,W._(),L._())};var B,T,F,O;var P,R,k,D,H,$,q,I,j,U,G,J,K,Q,V,X,Y,Z,ee,te,ne,ae,ie,re,oe,se,le,ce,de,ue,fe,me,ve,ye;var ge,pe,ze,he,be,Ce,Ae;return d((function(){i.init&&S()})),a={cfg:i,autoSizer:W,loader:L,init:S,uP:A,aC:z,rC:h,hC:p,fire:C,gW:_,rAF:w}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(6879),t=n.n(e);document.addEventListener("lazybeforeunveil",(function(e){!function(e){var t=e.getAttribute("data-bg-image"),n="background-image";if(t||(t=e.getAttribute("data-bg"),n="background"),t){var a=t.replace(/\s*\!\s*important/i,""),i=a!==t?"important":"";e.style.setProperty(n,a,i)}}(e.target)})),t().init()}()}();
//# sourceMappingURL=smush-lazy-load.min.js.map
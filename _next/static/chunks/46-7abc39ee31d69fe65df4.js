(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{78482:function(e,t,r){"use strict";r.d(t,{E:function(){return d}});var n=r(90063),a=r(93105),o=r(4651),i=r(73808),l=r(67294),u=r(68327);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var f=l.forwardRef(((e,t)=>{var{htmlWidth:r,htmlHeight:n,alt:a}=e,o=s(e,["htmlWidth","htmlHeight","alt"]);return l.createElement("img",c({width:r,height:n,ref:t,alt:a},o))})),d=(0,n.G)(((e,t)=>{var{fallbackSrc:r,fallback:n,src:i,align:d,fit:p,loading:b,ignoreFallback:h,crossOrigin:y}=e,m=s(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),g=null!=b||h,v=function(e){var{src:t,srcSet:r,onLoad:n,onError:a,crossOrigin:o,sizes:i,ignoreFallback:c}=e,[s,f]=(0,l.useState)("pending");(0,l.useEffect)((()=>{f(t?"loading":"pending")}),[t]);var d=(0,l.useRef)(),p=(0,l.useCallback)((()=>{if(t){b();var e=new Image;e.src=t,o&&(e.crossOrigin=o),r&&(e.srcset=r),i&&(e.sizes=i),e.onload=e=>{b(),f("loaded"),null==n||n(e)},e.onerror=e=>{b(),f("failed"),null==a||a(e)},d.current=e}}),[t,o,r,i,n,a]),b=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,u.G)((()=>{if(!c)return"loading"===s&&p(),()=>{b()}}),[s,p,c]),c?"loaded":s}(c({},e,{ignoreFallback:g})),_=c({ref:t,objectFit:p,objectPosition:d},g?m:(0,o.CE)(m,["onError","onLoad"]));return"loaded"!==v?n||l.createElement(a.m$.img,c({as:f,className:"chakra-image__placeholder",src:r},_)):l.createElement(a.m$.img,c({as:f,src:i,crossOrigin:y,loading:b,className:"chakra-image"},_))}));i.Ts&&(d.displayName="Image")},64115:function(e,t,r){"use strict";r.d(t,{x:function(){return d}});var n=r(90063),a=r(2326),o=r(55284),i=r(93105),l=r(4651),u=r(84461),c=r(73808),s=r(67294);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=(0,n.G)(((e,t)=>{var r=(0,a.m)("Text",e),n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,o.Lr)(e),["className","align","decoration","casing"]),c=(0,l.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return s.createElement(i.m$.p,f({ref:t,className:(0,u.cx)("chakra-text",e.className)},c,n,{__css:r}))}));c.Ts&&(d.displayName="Text")},57999:function(e,t,r){"use strict";var n=r(61682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));(n=o(o({},n),t)).loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};l(r(67294));var i=l(r(87653));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},50482:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var a=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},87653:function(e,t,r){"use strict";var n=r(61682),a=r(2553),o=r(62012);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var s,f=(s=r(67294))&&s.__esModule?s:{default:s},d=r(67161),p=r(50482);var b=[],h=[],y=!1;function m(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var g=function(){function e(t,r){a(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function a(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var o=r.webpack();h.push((function(e){var t,r=u(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){a();var o=f.default.useContext(p.LoadableContext),i=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return a()},i.displayName="LoadableComponent",f.default.forwardRef(i)}(m,e)}function _(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return _(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){_(b).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};_(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var O=v;t.default=O},5152:function(e,t,r){e.exports=r(57999)},61682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}}]);
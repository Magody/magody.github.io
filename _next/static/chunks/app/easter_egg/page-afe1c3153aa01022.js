(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{33481:(e,t,n)=>{Promise.resolve().then(n.bind(n,93042))},93042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var l=n(95155),r=n(12115),i=n(21956),o=n.n(i),a=n(2818);o()(()=>Promise.all([n.e(367),n.e(831),n.e(16)]).then(n.bind(n,29016)),{loadableGenerated:{webpack:()=>[29016]},ssr:!1});let s=[{text:"Can a machine do something with all its heart?",wait:4e3},{text:"No, a bunch of electric sparks in their head would be incapable of doing that.",wait:6e3},{text:"A machine just follows a purpose blindly.",wait:5e3},{text:"But... Aren't we the same?",wait:4e3},{text:"What does it mean to do something with all our heart?",wait:6e3},{text:"",wait:0}],u=e=>new Promise(t=>setTimeout(t,e)),d=a.env.NEXT_PUBLIC_BASE_PATH||"",c="".concat(d,"/audio/i_am_ia.mp3"),f=()=>{let[e,t]=(0,r.useState)({index:0,text:""}),[n,i]=(0,r.useState)(!1),[o,a]=(0,r.useState)(!1),d=(0,r.useRef)("undefined"!=typeof Audio?new Audio(c):null);return(0,r.useEffect)(()=>{let e=async()=>{for(let e=0;e<s.length;e++)t({index:e,text:s[e].text}),await u(s[e].wait);i(!0),a(!0)};return(async()=>{try{var e;null===(e=d.current)||void 0===e||e.play(),d.current&&(d.current.volume=.1)}catch(e){console.error("Audio play failed: ",e)}})(),e(),()=>{var e;null===(e=d.current)||void 0===e||e.pause(),d.current=null}},[]),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{id:"flex_vh",style:{width:"100%",height:"80vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,l.jsx)("div",{style:{display:n?"none":"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,l.jsx)("h1",{style:{textAlign:"center",fontSize:"3rem"},children:e.text})}),o&&(0,l.jsxs)("div",{style:{margin:"2rem",textAlign:"center",overflow:"auto"},children:[(0,l.jsx)("p",{style:{fontSize:"2.2rem",padding:"1rem"},children:"Since the first time I wrote hello world I have wondered, what is it that gives us consciousness. Perhaps understanding why a machine can or cannot reach that level will give us answers to understand ourselves."}),(0,l.jsx)("p",{style:{fontSize:"2.2rem",padding:"1rem"},children:"The background music in this section, if you were one of the lucky ones to hear it, was written by an AI. It is nothing more than composite mathematical functions transforming into 0s and 1s, but perhaps our thoughts and consciousness are also slightly more complex composite mathematical functions."})]})]})})}},21956:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let l=n(60306)._(n(30580));function r(e,t){var n;let r={};"function"==typeof e&&(r.loader=e);let i={...r,...t};return(0,l.default)({...i,modules:null==(n=i.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39827:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(93719);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},30580:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let l=n(95155),r=n(12115),i=n(39827),o=n(79214);function a(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},u=function(e){let t={...s,...e},n=(0,r.lazy)(()=>t.loader().then(a)),u=t.loading;function d(e){let a=u?(0,l.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,s=!t.ssr||!!t.loading,d=s?r.Suspense:r.Fragment,c=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(o.PreloadChunks,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(d,{...s?{fallback:a}:{},children:c})}return d.displayName="LoadableComponent",d}},79214:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return a}});let l=n(95155),r=n(47650),i=n(75861),o=n(18284);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=i.workAsyncStorage.getStore();if(void 0===n)return null;let a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files;a.push(...t)}}return 0===a.length?null:(0,l.jsx)(l.Fragment,{children:a.map(e=>{let t=n.assetPrefix+"/_next/"+(0,o.encodeURIPath)(e);return e.endsWith(".css")?(0,l.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,r.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,517,358],()=>t(33481)),_N_E=e.O()}]);
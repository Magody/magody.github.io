(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19],{78482:function(e,t,r){"use strict";r.d(t,{E:function(){return u}});var a=r(90063),n=r(93105),o=r(4651),s=r(73808),i=r(67294),l=r(68327);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var d=i.forwardRef(((e,t)=>{var{htmlWidth:r,htmlHeight:a,alt:n}=e,o=h(e,["htmlWidth","htmlHeight","alt"]);return i.createElement("img",c({width:r,height:a,ref:t,alt:n},o))})),u=(0,a.G)(((e,t)=>{var{fallbackSrc:r,fallback:a,src:s,align:u,fit:m,loading:f,ignoreFallback:g,crossOrigin:p}=e,y=h(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),w=null!=f||g,v=function(e){var{src:t,srcSet:r,onLoad:a,onError:n,crossOrigin:o,sizes:s,ignoreFallback:c}=e,[h,d]=(0,i.useState)("pending");(0,i.useEffect)((()=>{d(t?"loading":"pending")}),[t]);var u=(0,i.useRef)(),m=(0,i.useCallback)((()=>{if(t){f();var e=new Image;e.src=t,o&&(e.crossOrigin=o),r&&(e.srcset=r),s&&(e.sizes=s),e.onload=e=>{f(),d("loaded"),null==a||a(e)},e.onerror=e=>{f(),d("failed"),null==n||n(e)},u.current=e}}),[t,o,r,s,a,n]),f=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,l.G)((()=>{if(!c)return"loading"===h&&m(),()=>{f()}}),[h,m,c]),c?"loaded":h}(c({},e,{ignoreFallback:w})),b=c({ref:t,objectFit:m,objectPosition:u},w?y:(0,o.CE)(y,["onError","onLoad"]));return"loaded"!==v?a||i.createElement(n.m$.img,c({as:d,className:"chakra-image__placeholder",src:r},b)):i.createElement(n.m$.img,c({as:d,src:s,crossOrigin:p,loading:f,className:"chakra-image"},b))}));s.Ts&&(u.displayName="Image")},336:function(e,t,r){"use strict";r.d(t,{X:function(){return d}});var a=r(90063),n=r(2326),o=r(55284),s=r(93105),i=r(84461),l=r(73808),c=r(67294);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var d=(0,a.G)(((e,t)=>{var r=(0,n.m)("Heading",e),a=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}((0,o.Lr)(e),["className"]);return c.createElement(s.m$.h2,h({ref:t,className:(0,i.cx)("chakra-heading",e.className)},a,{__css:r}))}));l.Ts&&(d.displayName="Heading")},64115:function(e,t,r){"use strict";r.d(t,{x:function(){return u}});var a=r(90063),n=r(2326),o=r(55284),s=r(93105),i=r(4651),l=r(84461),c=r(73808),h=r(67294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var u=(0,a.G)(((e,t)=>{var r=(0,n.m)("Text",e),a=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}((0,o.Lr)(e),["className","align","decoration","casing"]),c=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return h.createElement(s.m$.p,d({ref:t,className:(0,l.cx)("chakra-text",e.className)},c,a,{__css:r}))}));c.Ts&&(u.displayName="Text")},88749:function(e,t,r){"use strict";r.d(t,{b:function(){return i}});var a=r(85893),n=r(94096),o=r(64115),s=r(78482),i=(r(67294),function(e){return(0,a.jsxs)(n.k,{direction:"column",justifyContent:"center",alignItems:"center",children:[(0,a.jsx)(o.x,{mt:"1rem",className:"responsive_text",children:e.text}),""!=e.srcImage&&(0,a.jsx)(s.E,{m:"1rem",alt:"",css:e.customCSS,backgroundColor:"transparent",boxShadow:"lg",src:e.srcImage})]})})},11810:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(94096),o=r(336),s=(r(67294),r(88749));t.default=function(){var e={maxWidth:"100%"};return(0,a.jsxs)(n.k,{direction:"column",justifyContent:"center",alignItems:"center",width:"90vw",maxWidth:"90vw",children:[(0,a.jsx)(o.X,{m:"2rem",className:"responsive_text",children:"Simple RPG game with a lot of mini mechanics"}),(0,a.jsx)(s.b,{text:"This is a simple game with a main character with this skills: reflect magic, make a barrier, fly, teleport, stop time, back in time, invoke a fire ball and transform in super sayajin",customCSS:{w:"15rem",h:"15rem"},srcImage:""}),(0,a.jsxs)(n.k,{w:"100%",h:"30rem",children:[(0,a.jsx)("iframe",{src:"https://player.vimeo.com/video/574746497?badge=0&autopause=0&player_id=0&app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,style:{width:"100%",height:"100%"},title:"Adodot"}),(0,a.jsx)("script",{src:"https://player.vimeo.com/api/player.js"})]}),(0,a.jsx)(s.b,{text:"If you want to see more technical details please consider visit: https://magody.github.io/OldPortfolio/Lenguajes/CSharp/Adodot/adodotValley.pdf.",customCSS:e,srcImage:""}),(0,a.jsx)(o.X,{m:"2rem",className:"responsive_text",children:"History"}),(0,a.jsx)(s.b,{text:'Hyul is the main character, who wakes up in the middle of a village without most of his memories of his past. He remembers many of the customs of a planet called Earth and that he comes from there. He learned to communicate with the villagers and they welcomed him as one of their own, as he conversed more fluently with the leaders he learned that the planet is going through a crisis in which many plagues of monsters fall from meteorites and torment the people, gradually they were cornered in "protected" sectors like the valley where he woke up. The richest people are able to enjoy abundant magical power that allows them to establish a barrier in their cities and protect themselves from the monsters. However, Adodot valley has only poor people who try not to get involved in the war.Hyul helped where he could in exchange for food and other necessities.The town was surrounded by huge mountains and the only exits contained hundreds of monsters.Many village heroes tried to break through but failed.The people as they moved from place to place took with them common goods, ornaments and pets but left behind books of knowledge. The passing of the decades produced that the humanity of that planet forgot their history and were governed only by what the king of the day said through well-trained magician messengers who appeared not to protect but to collect resources.currently there are only 5 old sages with the knowledge to heal, destroy and create scattered around the world.Hyul will seek in every way to help Adodot valley gathering as much knowledge to face first the monsters, then the noble classes while seeking the reason for their appearance on that planet and the origin of the meteorites of monsters.',customCSS:e,srcImage:""})]})}},25069:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/videogames/Adodot",function(){return r(11810)}])}},function(e){e.O(0,[774,888,179],(function(){return t=25069,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
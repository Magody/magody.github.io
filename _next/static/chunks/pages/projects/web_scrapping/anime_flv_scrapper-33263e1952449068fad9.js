(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{78482:function(e,t,s){"use strict";s.d(t,{E:function(){return u}});var r=s(90063),a=s(93105),n=s(4651),i=s(73808),o=s(67294),c=s(68327);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}var h=o.forwardRef(((e,t)=>{var{htmlWidth:s,htmlHeight:r,alt:a}=e,n=m(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",l({width:s,height:r,ref:t,alt:a},n))})),u=(0,r.G)(((e,t)=>{var{fallbackSrc:s,fallback:r,src:i,align:u,fit:p,loading:g,ignoreFallback:d,crossOrigin:x}=e,f=m(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),b=null!=g||d,S=function(e){var{src:t,srcSet:s,onLoad:r,onError:a,crossOrigin:n,sizes:i,ignoreFallback:l}=e,[m,h]=(0,o.useState)("pending");(0,o.useEffect)((()=>{h(t?"loading":"pending")}),[t]);var u=(0,o.useRef)(),p=(0,o.useCallback)((()=>{if(t){g();var e=new Image;e.src=t,n&&(e.crossOrigin=n),s&&(e.srcset=s),i&&(e.sizes=i),e.onload=e=>{g(),h("loaded"),null==r||r(e)},e.onerror=e=>{g(),h("failed"),null==a||a(e)},u.current=e}}),[t,n,s,i,r,a]),g=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return(0,c.G)((()=>{if(!l)return"loading"===m&&p(),()=>{g()}}),[m,p,l]),l?"loaded":m}(l({},e,{ignoreFallback:b})),j=l({ref:t,objectFit:p,objectPosition:u},b?f:(0,n.CE)(f,["onError","onLoad"]));return"loaded"!==S?r||o.createElement(a.m$.img,l({as:h,className:"chakra-image__placeholder",src:s},j)):o.createElement(a.m$.img,l({as:h,src:i,crossOrigin:x,loading:g,className:"chakra-image"},j))}));i.Ts&&(u.displayName="Image")},336:function(e,t,s){"use strict";s.d(t,{X:function(){return h}});var r=s(90063),a=s(2326),n=s(55284),i=s(93105),o=s(84461),c=s(73808),l=s(67294);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var h=(0,r.G)(((e,t)=>{var s=(0,a.m)("Heading",e),r=function(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}((0,n.Lr)(e),["className"]);return l.createElement(i.m$.h2,m({ref:t,className:(0,o.cx)("chakra-heading",e.className)},r,{__css:s}))}));c.Ts&&(h.displayName="Heading")},64115:function(e,t,s){"use strict";s.d(t,{x:function(){return u}});var r=s(90063),a=s(2326),n=s(55284),i=s(93105),o=s(4651),c=s(84461),l=s(73808),m=s(67294);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var u=(0,r.G)(((e,t)=>{var s=(0,a.m)("Text",e),r=function(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}((0,n.Lr)(e),["className","align","decoration","casing"]),l=(0,o.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return m.createElement(i.m$.p,h({ref:t,className:(0,c.cx)("chakra-text",e.className)},l,r,{__css:s}))}));l.Ts&&(u.displayName="Text")},88749:function(e,t,s){"use strict";s.d(t,{b:function(){return o}});var r=s(85893),a=s(94096),n=s(64115),i=s(78482),o=(s(67294),function(e){return(0,r.jsxs)(a.k,{direction:"column",justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(n.x,{mt:"1rem",className:"responsive_text",children:e.text}),""!=e.srcImage&&(0,r.jsx)(i.E,{m:"1rem",alt:"",css:e.customCSS,backgroundColor:"transparent",boxShadow:"lg",src:e.srcImage})]})})},93420:function(e,t,s){"use strict";s.r(t);var r=s(85893),a=s(94096),n=s(336),i=s(64115),o=s(48017),c=(s(67294),s(88749)),l=s(75010),m=(s(34155).env.NEXT_PUBLIC_BASE_PATH||"")+"/images/projects/web_scrapping/anime_flv_scrapper";t.default=function(e){(0,l.Z)("(max-width:600px)");var t={maxWidth:"100%"};return(0,r.jsxs)(a.k,{direction:"column",justifyContent:"center",alignItems:"center",width:"90vw",maxWidth:"90vw",children:[(0,r.jsx)(n.X,{m:"2rem",className:"responsive_text",children:"Web scrapping with Selenium (bot undetectable)"}),(0,r.jsxs)(i.x,{className:"responsive_text",children:[(0,r.jsxs)("p",{children:["This is a Web Scrapping with some analysis (not deep) of the animes depending on the emotions This is made over the webpage: "," "]}),(0,r.jsx)("a",{href:"https://www3.animeflv.net/",children:"https://www3.animeflv.net/"})]}),(0,r.jsx)(c.b,{text:"",customCSS:{w:"15rem",h:"15rem",backgroundColor:"white"},srcImage:m+"/0.png"}),(0,r.jsx)(c.b,{text:"I prefer scrapy to create the web scrapping pipeline. But this page doesn't want to be scrapped, look:",customCSS:t,srcImage:m+"/8.png"}),(0,r.jsx)(c.b,{text:"Furthermore, in order to get the reactions we must perform first a reaction with an account. This is, we have to be logged in: ",customCSS:t,srcImage:m+"/1.png"}),(0,r.jsx)(c.b,{text:"The login with selenium has this form. To fill fields and set the timing to avoid request problems. Before a login we make a <prewarm>, because this page popup some ADS when we click even through selenium. So we fake some clicks and close the ADS",customCSS:t,srcImage:m+"/17.png"}),(0,r.jsx)(c.b,{text:"Fortunately, we do not need to do complex crawl to get the item's urls. They have a pretty anime browser with pagination:",customCSS:t,srcImage:m+"/2.png"}),(0,r.jsx)(c.b,{text:"We want to collect some useful data like: scoring, votes...",customCSS:t,srcImage:m+"/3.png"}),(0,r.jsx)(c.b,{text:"Title, description, tags for NLP processing: ",customCSS:t,srcImage:m+"/4.png"}),(0,r.jsx)(c.b,{text:"The count of followers:",customCSS:t,srcImage:m+"/5.png"}),(0,r.jsx)(c.b,{text:"The number of episodes:",customCSS:t,srcImage:m+"/6.png"}),(0,r.jsx)(c.b,{text:"And the most important part. The reactions. This is pretty hard since is part of DisQus system as an iframe",customCSS:t,srcImage:m+"/7.png"}),(0,r.jsx)(c.b,{text:"Since there are a lot of items. I have created a JOBS Systems like the JOBS systems of scrapy. So, we can parse in separated points in time. We will collect a few items (shards folder) as CSV and in the end we will merge all of them.",customCSS:t,srcImage:m+"/9.png"}),(0,r.jsx)(c.b,{text:"The jobs folder remember the state. Every job initially has 100 URLs, and every terminal instance executes one job. If any error exists, that urls are not consumed. Execution time saves how many times we executed that job.",customCSS:t,srcImage:m+"/10.png"}),(0,r.jsx)(c.b,{text:"The collected data has this format. There are *.csv associated for every job and execution time. In case we run the program in different days, there is no problem.",customCSS:t,srcImage:m+"/11.png"}),(0,r.jsx)(c.b,{text:"For login part we need to provide an username and a password.",customCSS:t,srcImage:m+"/12.png"}),(0,r.jsx)(c.b,{text:"There are two main files: app_create_jobs.py has the responsability of browse all items, collect the URLs to items and then split into n jobs (36 jobs in this case) and app_worker has the responsability of execute a job passed as argument. We have in total 36 app_workers (one for each job):",customCSS:t,srcImage:m+"/13.png"}),(0,r.jsx)(c.b,{text:"After collecting the data we merge with this code. Following an ETL process:",customCSS:t,srcImage:m+"/14.png"}),(0,r.jsx)(c.b,{text:"For cleaning and transforms",customCSS:t,srcImage:m+"/15.png"}),(0,r.jsx)(c.b,{text:"We perform some feature engineering to get the right sentimental analysis and dont discriminate by not being popular",customCSS:t,srcImage:m+"/16.png"}),(0,r.jsx)(n.X,{fontSize:"3rem",m:"2rem",className:"responsive_text",children:"Emotions slices"}),(0,r.jsx)(n.X,{as:"h3",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"After collecting the data we can perform some analysis"}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"The most liked animes are:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"",customCSS:t,srcImage:m+"/liked(relative).png"})}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"The funniest animes are:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"",customCSS:t,srcImage:m+"/funny(relative).png"})}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"The most loved animes are:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:" ",customCSS:t,srcImage:m+"/loved(relative).png"})}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"The saddest animes are:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"The saddest animes are: ",customCSS:t,srcImage:m+"/sad(relative).png"})}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"The most surprising animes are:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"The most surprising animes are: ",customCSS:t,srcImage:m+"/surprise(relative).png"})}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"Animes that caused people be angry:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"",customCSS:t,srcImage:m+"/angry(relative).png"})}),(0,r.jsx)(n.X,{fontSize:"3rem",m:"2rem",className:"responsive_text",children:"Populars animes slicing"}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"Most popular animes, by followers:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"",customCSS:t,srcImage:m+"/df_popular_followers(relative).png"})}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"Most popular animes, by reactions count:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"",customCSS:t,srcImage:m+"/df_popular_reactions(relative).png"})}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"Most popular animes, by votes:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"",customCSS:t,srcImage:m+"/df_popular_votes(relative).png"})}),(0,r.jsx)(n.X,{as:"h4",fontSize:"2rem",m:"2rem",className:"responsive_text",children:"Best rated animes:"}),(0,r.jsx)(o.xu,{bg:"white",children:(0,r.jsx)(c.b,{text:"",customCSS:t,srcImage:m+"/df_best_rated(relative).png"})})]})}},30860:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/web_scrapping/anime_flv_scrapper",function(){return s(93420)}])}},function(e){e.O(0,[774,888,179],(function(){return t=30860,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5912],{43032:function(t,e,n){"use strict";n.d(e,{Cl:function(){return u},Nk:function(){return a},ZG:function(){return c}});var r=n(38626),i=n(23831),o=n(49125),c=1.5*o.iI,u=1*c+o.iI/2,a=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-uvd91-0"})([".row:hover{","}"],(function(t){return"\n      background-color: ".concat((t.theme.interactive||i.Z.interactive).hoverBackground,";\n    ")}))},92953:function(t,e,n){"use strict";n.d(e,{CD:function(){return u},NU:function(){return o},a_:function(){return r},hu:function(){return c}});var r,i=n(23831);!function(t){t.BLOCK_RUNS="block_runs",t.BLOCK_RUNTIME="block_runtime",t.PIPELINE_RUNS="pipeline_runs"}(r||(r={}));var o=[i.Z.accent.warning,i.Z.background.success,i.Z.accent.negative,i.Z.content.active,i.Z.interactive.linkPrimary],c=["cancelled","completed","failed","initial","running"],u=-50},87465:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});n(82684);var r=n(34376),i=n(87372),o=n(60547),c=n(86673),u=n(19711),a=n(2850),l=n(38626),s=n(23831),d=n(49125),f=l.default.div.withConfig({displayName:"indexstyle__LinkStyle",componentId:"sc-1in9sst-0"})(["padding:","px ","px;"," ",""],d.iI,d.tr,(function(t){return t.selected&&"\n    background-color: ".concat((t.theme.interactive||s.Z.interactive).checked,";\n  ")}),(function(t){return!t.selected&&"\n    cursor: pointer;\n  "})),p=n(92953),h=n(59920),m=n(28598);var v=function(t){var e=t.breadcrumbs,n=t.children,l=t.errors,s=t.monitorType,v=t.pipeline,b=t.setErrors,g=t.subheader,y=(0,r.useRouter)();return(0,m.jsx)(o.Z,{before:(0,m.jsxs)(a.M,{children:[(0,m.jsx)(c.Z,{p:d.cd,children:(0,m.jsx)(i.Z,{level:4,muted:!0,children:"Insights"})}),(0,m.jsx)(f,{onClick:function(t){t.preventDefault(),y.push("/pipelines/[pipeline]/monitors","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors"))},selected:p.a_.PIPELINE_RUNS==s,children:(0,m.jsx)(u.ZP,{children:"Pipeline runs"})}),(0,m.jsx)(f,{onClick:function(t){t.preventDefault(),y.push("/pipelines/[pipeline]/monitors/block-runs","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors/block-runs"))},selected:p.a_.BLOCK_RUNS==s,children:(0,m.jsx)(u.ZP,{children:"Block runs"})}),(0,m.jsx)(f,{onClick:function(t){t.preventDefault(),y.push("/pipelines/[pipeline]/monitors/block-runtime","/pipelines/".concat(null===v||void 0===v?void 0:v.uuid,"/monitors/block-runtime"))},selected:p.a_.BLOCK_RUNTIME==s,children:(0,m.jsx)(u.ZP,{children:"Block runtime"})})]}),breadcrumbs:e,errors:l,pageName:h.M.MONITOR,pipeline:v,setErrors:b,subheader:g,uuid:"pipeline/monitor",children:n})}},2850:function(t,e,n){"use strict";n.d(e,{M:function(){return c},W:function(){return o}});var r=n(38626),i=n(3055),o=34*n(49125).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},67591:function(t,e,n){"use strict";var r=n(26304),i=n(82394),o=n(21831),c=(n(82684),n(84969)),u=n(90948),a=n(81354),l=n(67778),s=n(29989),d=n(17066),f=n(29179),p=n(65376),h=n(48072),m=n(98677),v=n(84181),b=n(24903),g=n(67971),y=n(26226),j=n(19711),x=n(52359),O=n(23831),Z=n(73942),w=n(2005),k=n(49125),P=n(344),_=n(28598),D=["height","width","xAxisLabel","yAxisLabel"];function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function E(t){var e=t.backgroundColor,n=t.colors,r=t.data,i=t.getXValue,g=(t.getYValue,t.height),y=t.keys,x=t.margin,k=t.numYTicks,D=t.showLegend,M=t.tooltipLeftOffset,E=void 0===M?0:M,N=t.width,T=t.xLabelFormat,C=t.yLabelFormat,L=(0,f.Z)(),I=L.hideTooltip,Y=L.showTooltip,A=L.tooltipData,H=L.tooltipLeft,B=L.tooltipOpen,F=L.tooltipTop,R=N-(x.left+x.right),K=g-(x.bottom+x.top),U=r.reduce((function(t,e){var n=e,r=y.reduce((function(t,e){return Number(n[e])&&(t+=Number(n[e])),t}),0);return t.push(r),t}),[]),z=(0,m.Z)({domain:r.map(i),padding:.4,range:[0,R],round:!1}),V=(0,v.Z)({domain:[0,Math.max.apply(Math,(0,o.Z)(U))],range:[K,0],round:!0}),W=(0,b.Z)({domain:y,range:n});return(0,_.jsxs)("div",{style:{position:"relative",zIndex:2},children:[(0,_.jsxs)("svg",{height:g,width:N,children:[(0,_.jsx)("rect",{fill:e||O.Z.background.chartBlock,height:g,rx:14,width:N,x:0,y:0}),(0,_.jsx)(l.Z,{height:K,left:x.left,scale:V,stroke:"black",strokeOpacity:.2,top:x.top,width:R}),(0,_.jsx)(s.Z,{left:x.left,top:x.top,children:(0,_.jsx)(a.Z,{color:W,data:r,keys:y,value:function(t,e){return t[e]||0},x:i,xScale:z,yScale:V,children:function(t){return t.map((function(t){return t.bars.map((function(e){return(0,_.jsx)("rect",{fill:e.color,height:e.height,onMouseLeave:I,onMouseMove:function(t){var n=(0,h.Z)(t),r=e.x+e.width/2+E;Y({tooltipData:e,tooltipLeft:r,tooltipTop:(null===n||void 0===n?void 0:n.y)+10})},width:e.width,x:e.x,y:e.y},"bar-stack-".concat(t.index,"-").concat(e.index))}))}))}})}),(0,_.jsx)(c.Z,{hideTicks:!0,left:x.left,numTicks:k,scale:V,stroke:O.Z.content.muted,tickFormat:function(t){return C?C(t):(0,P.P5)(t)},tickLabelProps:function(){return{fill:O.Z.content.muted,fontFamily:w.ry,fontSize:11,textAnchor:"end",transform:"translate(0,2.5)"}},top:x.top}),(0,_.jsx)(u.Z,{hideTicks:!0,left:x.left,scale:z,stroke:O.Z.content.muted,tickFormat:T,tickLabelProps:function(){return{fill:O.Z.content.muted,fontFamily:w.ry,fontSize:11,textAnchor:"middle"}},top:K+x.top})]}),D&&(0,_.jsx)("div",{style:{display:"flex",fontSize:"14px",justifyContent:"center",position:"absolute",top:x.top/2-10,width:"100%"},children:(0,_.jsx)(d.Z,{direction:"row",labelMargin:"0 15px 0 0",scale:W})}),B&&A&&(0,_.jsxs)(p.Z,{left:H,style:S(S({},p.j),{},{backgroundColor:O.Z.background.page,borderRadius:"".concat(Z.TR,"px"),padding:".3rem .4rem"}),top:F,children:[(0,_.jsx)(j.ZP,{bold:!0,color:W(A.key),children:A.key}),(0,_.jsx)(j.ZP,{children:A.bar.data[A.key]}),(0,_.jsx)(j.ZP,{children:i(A.bar.data)})]})]})}e.Z=function(t){var e=t.height,n=t.width,i=t.xAxisLabel,o=t.yAxisLabel,c=(0,r.Z)(t,D);return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{style:{height:e,marginBottom:k.iI,width:n},children:[o&&(0,_.jsx)(g.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,_.jsx)(x.Z,{children:(0,_.jsx)(j.ZP,{center:!0,muted:!0,small:!0,children:o})})}),(0,_.jsx)("div",{style:{height:e,width:o?0===n?n:n-28:n},children:(0,_.jsx)(y.Z,{children:function(t){var e=t.height,n=t.width;return(0,_.jsx)(E,S(S({},c),{},{height:e,width:n}))}})}),i&&(0,_.jsx)("div",{style:{paddingLeft:o?36:0,paddingTop:4},children:(0,_.jsx)(j.ZP,{center:!0,muted:!0,small:!0,children:i})})]})})}},52359:function(t,e,n){"use strict";var r=n(38626).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);e.Z=r},344:function(t,e,n){"use strict";n.d(e,{P5:function(){return i},Vs:function(){return o}});n(90211);var r=Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:2});function i(t){return"number"!==typeof t?t:t>=1e4?r.format(t):t.toString()}function o(t,e,n){var r,i;if("undefined"===typeof t||"undefined"===typeof e)return 0;var o=null===t||void 0===t||null===(r=t(e,n))||void 0===r||null===(i=r.props)||void 0===i?void 0:i.children;return(Array.isArray(o)?o:[o]).join("").length}},50094:function(t,e,n){"use strict";n.r(e);var r=n(77837),i=n(75582),o=n(82394),c=n(38860),u=n.n(c),a=n(82684),l=n(92083),s=n.n(l),d=n(38626),f=n(67591),p=n(16634),h=n(67971),m=n(87372),v=n(87465),b=n(41788),g=n(55378),y=n(86673),j=n(82531),x=n(23831),O=n(92953),Z=n(43032),w=n(44162),k=n(42305),P=n(24224),_=n(28598);function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t){var e=t.pipeline,n=(0,a.useContext)(d.ThemeContext),r=(0,a.useState)(null),c=r[0],u=r[1],l=e.uuid,b=j.ZP.pipelines.detail(l,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,D=(0,a.useMemo)((function(){return M(M({},null===b||void 0===b?void 0:b.pipeline),{},{uuid:l})}),[b,l]),S=j.ZP.pipeline_schedules.pipelines.list(l).data,E=(0,a.useMemo)((function(){return null===S||void 0===S?void 0:S.pipeline_schedules}),[S]),N=(0,a.useMemo)((function(){return(0,P.HK)(null===D||void 0===D?void 0:D.blocks,(function(t){return t.uuid}))||{}}),[D]),T={pipeline_uuid:l};(c||0===c)&&(T.pipeline_schedule_id=Number(c));var C=j.ZP.monitor_stats.detail("block_run_count",T),L=C.data,I=C.mutate,Y=((null===L||void 0===L?void 0:L.monitor_stat)||{}).stats,A=(0,a.useMemo)((function(){return(0,k.Y_)()}),[]),H=(0,a.useMemo)((function(){if(Y)return Object.entries(Y).reduce((function(t,e){var n=(0,i.Z)(e,2),r=n[0],c=n[1].data,u=A.map((function(t){return M({date:t},c[t]||{})}));return M(M({},t),{},(0,o.Z)({},r,u))}),{})}),[A,Y]),B=(0,a.useMemo)((function(){var t=[];return t.push({bold:!0,label:function(){return"Monitors"}}),t}),[]);return(0,_.jsx)(v.Z,{breadcrumbs:B,monitorType:O.a_.BLOCK_RUNS,pipeline:D,subheader:(0,_.jsx)(h.ZP,{children:(0,_.jsxs)(g.Z,{backgroundColor:x.Z.interactive.defaultBackground,label:"Trigger:",onChange:function(t){var e=t.target.value;"initial"!==e?(u(e),I(e)):(I(),u(null))},value:c||"initial",children:[(0,_.jsx)("option",{value:"initial",children:"All"}),E&&E.map((function(t){return(0,_.jsx)("option",{value:t.id,children:t.name},t.id)}))]})}),children:(0,_.jsx)(y.Z,{mx:2,children:H&&Object.entries(H).map((function(t){var e,r,o=(0,i.Z)(t,2),c=o[0],u=o[1];return(0,_.jsxs)(y.Z,{mt:3,children:[(0,_.jsxs)(h.ZP,{alignItems:"center",children:[(0,_.jsx)(y.Z,{mx:1,children:(0,_.jsx)(p.Z,{color:(0,w.qn)(null===(e=N[c])||void 0===e?void 0:e.type,{blockColor:null===(r=N[c])||void 0===r?void 0:r.color,theme:n}).accent,size:Z.ZG,square:!0})}),(0,_.jsx)(m.Z,{level:4,children:c})]}),(0,_.jsx)(y.Z,{mt:1,children:(0,_.jsx)(f.Z,{colors:O.NU,data:u,getXValue:function(t){return t.date},height:200,keys:O.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:O.CD,xLabelFormat:function(t){return s()(t).format("MMM DD")}})})]},c)}))})})}S.getInitialProps=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query.pipeline,t.abrupt("return",{pipeline:{uuid:n}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.default=(0,b.Z)(S)},42305:function(t,e,n){"use strict";n.d(e,{A5:function(){return y},AY:function(){return j},BP:function(){return g},JX:function(){return b},OC:function(){return d},Pc:function(){return x},Ro:function(){return O},Tz:function(){return v},Y_:function(){return w},d$:function(){return m},jV:function(){return Z},lJ:function(){return k},n1:function(){return p},s8:function(){return l},vk:function(){return o},yD:function(){return s}});var r,i,o,c=n(82394),u=n(92083),a=n.n(u);!function(t){t.TODAY="today",t.WEEK="week",t.MONTH="month"}(o||(o={}));var l=(r={},(0,c.Z)(r,o.TODAY,"today"),(0,c.Z)(r,o.WEEK,"last 7 days"),(0,c.Z)(r,o.MONTH,"last 30 days"),r),s=(i={},(0,c.Z)(i,o.TODAY,0),(0,c.Z)(i,o.WEEK,6),(0,c.Z)(i,o.MONTH,29),i),d="YYYY-MM-DD HH:mm:ss",f="YYYY-MM-DD HH:mm",p="YYYY-MM-DD",h="MMMM D, YYYY";function m(t,e){var n=e||{},r=n.dayAgo,i=n.includeSeconds,o=n.utcFormat,c=a()(t),u=f;return o&&(c=c.utc()),r&&(c=c.subtract(1,"days")),i&&(u=d),c.format(u)}function v(t){var e=m((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==t&&void 0!==t&&t.dateObj?new Date(e):e}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a().unix(t).format(null!==e&&void 0!==e&&e.withSeconds?d:f)}function g(t,e,n){return a()(t).utc().hours(+e).minutes(+n).format()}function y(t){return a()(t).unix()}function j(t,e,n,r){var i="".concat(t.toISOString().split("T")[0]," ").concat(e,":").concat(n);return r?"".concat(i,":").concat(r):i}function x(t){var e=a().unix(+t).utc();return{date:e.toDate(),hour:String(e.hour()),minute:String(e.minute())}}function O(t,e){var n=a().utc(),r=a().utc();null!==e&&void 0!==e&&e.localTime&&(n=a()().local(),r=a()().local());var i=(n=n.subtract(t,"days")).format(h),o=r.format(h);return null!==e&&void 0!==e&&e.endDateOnly?o:"".concat(i," - ").concat(o)}function Z(t,e){var n=null!==e&&void 0!==e&&e.localTime?a()().local():a().utc();if(t===o.WEEK){var r=s[o.WEEK];n=n.subtract(r,"days")}else if(t===o.MONTH){var i=s[o.MONTH];n=n.subtract(i,"days")}return null!==e&&void 0!==e&&e.isoString?n.startOf("day").toISOString():n.startOf("day").format(d)}function w(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90,e=new Date,n=[],r=0;r<t;r++)n.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return n}function k(t){return t.padStart(2,"0")}},33766:function(t,e,n){"use strict";n.d(e,{O2:function(){return d},g_:function(){return p},u7:function(){return f}});var r=n(75582),i=n(82394),o=n(34376),c=n.n(o),u=n(59e3),a=n(24224);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d="_offset";function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.preserveParams,i=e.pushHistory,o=e.replaceParams,a=(0,u.iV)(),l={};n&&n.forEach((function(t){a[t]&&(l[t]=a[t])}));var d,f=o?l:a;d=window.location.pathname;var p=i?c().push:c().replace,h=s(s({},f),t);Object.entries(t).forEach((function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];"undefined"!==typeof i&&null!==i||delete h[n]}));var m=(0,u.uM)(h);m.length>=1&&(m="?".concat(m));var v="".concat(d.split("?")[0]).concat(m),b=c().router.basePath;return b&&v.startsWith(b)&&(v=v.replace(b,"")),p(c().router.pathname,v,{shallow:!0})}function p(t,e,n){var i=n.addingMultipleValues,o=n.isList,c=n.itemsPerPage,u=n.pushHistory,l=void 0!==u&&u,p=n.resetLimitParams,h=s({},t);i?Object.entries(e).forEach((function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];if(Array.isArray(i)){var o="".concat(n,"[]");h[o]=i.map(String)}})):o?Object.entries(e).forEach((function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1],o=String(i),c="".concat(n,"[]"),u=h[c];u&&Array.isArray(u)?(u=u.map(String)).includes(o)?h[c]=(0,a.Od)(u,(function(t){return t===o})):h[c]=u.concat(o):h[c]=[o]})):h=s(s({},h),e),p&&(h._limit=c||20,h[d]=0),f(h,{pushHistory:l})}},83542:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/monitors/block-runs",function(){return n(50094)}])}},function(t){t.O(0,[844,9902,5896,2714,9404,1424,1005,6422,547,9774,2888,179],(function(){return e=83542,t(t.s=e);var e}));var e=t.O();_N_E=e}]);
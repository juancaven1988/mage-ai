(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1709],{98677:function(n,e,t){"use strict";function r(n,e,t){n=+n,e=+e,t=(i=arguments.length)<2?(e=n,n=0,1):i<3?1:+t;for(var r=-1,i=0|Math.max(0,Math.ceil((e-n)/t)),o=new Array(i);++r<i;)o[r]=n+r*t;return o}t.d(e,{Z:function(){return a}});var i=t(8208),o=t(8162);function u(){var n,e,t=(0,o.Z)().unknown(void 0),c=t.domain,a=t.range,l=0,s=1,d=!1,f=0,p=0,h=.5;function m(){var t=c().length,i=s<l,o=i?s:l,u=i?l:s;n=(u-o)/Math.max(1,t-f+2*p),d&&(n=Math.floor(n)),o+=(u-o-n*(t-f))*h,e=n*(1-f),d&&(o=Math.round(o),e=Math.round(e));var m=r(t).map((function(e){return o+n*e}));return a(i?m.reverse():m)}return delete t.unknown,t.domain=function(n){return arguments.length?(c(n),m()):c()},t.range=function(n){return arguments.length?([l,s]=n,l=+l,s=+s,m()):[l,s]},t.rangeRound=function(n){return[l,s]=n,l=+l,s=+s,d=!0,m()},t.bandwidth=function(){return e},t.step=function(){return n},t.round=function(n){return arguments.length?(d=!!n,m()):d},t.padding=function(n){return arguments.length?(f=Math.min(1,p=+n),m()):f},t.paddingInner=function(n){return arguments.length?(f=Math.min(1,n),m()):f},t.paddingOuter=function(n){return arguments.length?(p=+n,m()):p},t.align=function(n){return arguments.length?(h=Math.max(0,Math.min(1,n)),m()):h},t.copy=function(){return u(c(),[l,s]).round(d).paddingInner(f).paddingOuter(p).align(h)},i.o.apply(m(),arguments)}var c=(0,t(93342).Z)("domain","range","reverse","align","padding","round");function a(n){return c(u(),n)}},81354:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});var r=t(82684),i=t(63588),o=t.n(i),u=t(75823),c=t(29989),a=t(62072),l=t(53989),s=t(13004),d=t(18246),f=t(59309),p=t(65743),h=["data","className","top","left","x","y0","y1","xScale","yScale","color","keys","value","order","offset","children"];function m(){return m=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},m.apply(this,arguments)}function v(n){var e=n.data,t=n.className,i=n.top,v=n.left,g=n.x,b=n.y0,x=void 0===b?a.l8:b,y=n.y1,j=void 0===y?a.xf:y,Z=n.xScale,w=n.yScale,O=n.color,k=n.keys,_=n.value,P=n.order,C=n.offset,I=n.children,M=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,h),T=(0,u.Z)();k&&T.keys(k),_&&(0,s.Z)(T.value,_),P&&T.order((0,d.ZP)(P)),C&&T.offset((0,f.ZP)(C));var N=T(e),S=(0,l.Z)(Z),E=N.map((function(n,e){var t=n.key;return{index:e,key:t,bars:n.map((function(e,r){var i=(w(x(e))||0)-(w(j(e))||0),o=w(j(e)),u="bandwidth"in Z?Z(g(e.data)):Math.max((Z(g(e.data))||0)-S/2);return{bar:e,key:t,index:r,height:i,width:S,x:u||0,y:o||0,color:O(n.key,r)}}))}}));return I?r.createElement(r.Fragment,null,I(E)):r.createElement(c.Z,{className:o()("visx-bar-stack",t),top:i,left:v},E.map((function(n){return n.bars.map((function(e){return r.createElement(p.Z,m({key:"bar-stack-"+n.index+"-"+e.index,x:e.x,y:e.y,height:e.height,width:e.width,fill:e.color},M))}))})))}},62072:function(n,e,t){"use strict";function r(n){return null==n?void 0:n[0]}function i(n){return null==n?void 0:n[1]}t.d(e,{l8:function(){return r},xf:function(){return i}})},53989:function(n,e,t){"use strict";function r(n){if("bandwidth"in n)return n.bandwidth();var e=n.range(),t=n.domain();return Math.abs(e[e.length-1]-e[0])/t.length}t.d(e,{Z:function(){return r}})},59309:function(n,e,t){"use strict";t.d(e,{ZP:function(){return l}});var r=t(12759),i=t(27500),o=t(82610),u=t(34812),c=t(77944),a={expand:r.Z,diverging:i.Z,none:o.Z,silhouette:u.Z,wiggle:c.Z};Object.keys(a);function l(n){return n&&a[n]||a.none}},18246:function(n,e,t){"use strict";t.d(e,{ZP:function(){return l}});var r=t(39586),i=t(25516),o=t(54164),u=t(8512),c=t(2010),a={ascending:r.Z,descending:i.Z,insideout:o.Z,none:u.Z,reverse:c.Z};Object.keys(a);function l(n){return n&&a[n]||a.none}},13946:function(n,e,t){"use strict";t.d(e,{t:function(){return r}});var r=Array.prototype.slice},27500:function(n,e,t){"use strict";function r(n,e){if((c=n.length)>0)for(var t,r,i,o,u,c,a=0,l=n[e[0]].length;a<l;++a)for(o=u=0,t=0;t<c;++t)(i=(r=n[e[t]][a])[1]-r[0])>0?(r[0]=o,r[1]=o+=i):i<0?(r[1]=u,r[0]=u+=i):(r[0]=0,r[1]=i)}t.d(e,{Z:function(){return r}})},12759:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(82610);function i(n,e){if((i=n.length)>0){for(var t,i,o,u=0,c=n[0].length;u<c;++u){for(o=t=0;t<i;++t)o+=n[t][u][1]||0;if(o)for(t=0;t<i;++t)n[t][u][1]/=o}(0,r.Z)(n,e)}}},82610:function(n,e,t){"use strict";function r(n,e){if((i=n.length)>1)for(var t,r,i,o=1,u=n[e[0]],c=u.length;o<i;++o)for(r=u,u=n[e[o]],t=0;t<c;++t)u[t][1]+=u[t][0]=isNaN(r[t][1])?r[t][0]:r[t][1]}t.d(e,{Z:function(){return r}})},34812:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(82610);function i(n,e){if((t=n.length)>0){for(var t,i=0,o=n[e[0]],u=o.length;i<u;++i){for(var c=0,a=0;c<t;++c)a+=n[c][i][1]||0;o[i][1]+=o[i][0]=-a/2}(0,r.Z)(n,e)}}},77944:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(82610);function i(n,e){if((o=n.length)>0&&(i=(t=n[e[0]]).length)>0){for(var t,i,o,u=0,c=1;c<i;++c){for(var a=0,l=0,s=0;a<o;++a){for(var d=n[e[a]],f=d[c][1]||0,p=(f-(d[c-1][1]||0))/2,h=0;h<a;++h){var m=n[e[h]];p+=(m[c][1]||0)-(m[c-1][1]||0)}l+=f,s+=p*f}t[c-1][1]+=t[c-1][0]=u,l&&(u-=s/l)}t[c-1][1]+=t[c-1][0]=u,(0,r.Z)(n,e)}}},34128:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(8512);function i(n){var e=n.map(o);return(0,r.Z)(n).sort((function(n,t){return e[n]-e[t]}))}function o(n){for(var e,t=-1,r=0,i=n.length,o=-1/0;++t<i;)(e=+n[t][1])>o&&(o=e,r=t);return r}},39586:function(n,e,t){"use strict";t.d(e,{S:function(){return o},Z:function(){return i}});var r=t(8512);function i(n){var e=n.map(o);return(0,r.Z)(n).sort((function(n,t){return e[n]-e[t]}))}function o(n){for(var e,t=0,r=-1,i=n.length;++r<i;)(e=+n[r][1])&&(t+=e);return t}},25516:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(39586);function i(n){return(0,r.Z)(n).reverse()}},54164:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(34128),i=t(39586);function o(n){var e,t,o=n.length,u=n.map(i.S),c=(0,r.Z)(n),a=0,l=0,s=[],d=[];for(e=0;e<o;++e)t=c[e],a<l?(a+=u[t],s.push(t)):(l+=u[t],d.push(t));return d.reverse().concat(s)}},8512:function(n,e,t){"use strict";function r(n){for(var e=n.length,t=new Array(e);--e>=0;)t[e]=e;return t}t.d(e,{Z:function(){return r}})},2010:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(8512);function i(n){return(0,r.Z)(n).reverse()}},75823:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(13946),i=t(90875),o=t(82610),u=t(8512);function c(n,e){return n[e]}function a(){var n=(0,i.Z)([]),e=u.Z,t=o.Z,a=c;function l(r){var i,o,u=n.apply(this,arguments),c=r.length,l=u.length,s=new Array(l);for(i=0;i<l;++i){for(var d,f=u[i],p=s[i]=new Array(c),h=0;h<c;++h)p[h]=d=[0,+a(r[h],f,h,r)],d.data=r[h];p.key=f}for(i=0,o=e(s);i<l;++i)s[o[i]].index=i;return t(s,o),s}return l.keys=function(e){return arguments.length?(n="function"===typeof e?e:(0,i.Z)(r.t.call(e)),l):n},l.value=function(n){return arguments.length?(a="function"===typeof n?n:(0,i.Z)(+n),l):a},l.order=function(n){return arguments.length?(e=null==n?u.Z:"function"===typeof n?n:(0,i.Z)(r.t.call(n)),l):e},l.offset=function(n){return arguments.length?(t=null==n?o.Z:n,l):t},l}},1210:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var r=t(82394),i=t(21831),o=t(82684),u=t(47999),c=t(49894),a=t(93461),l=t(57384),s=t(41424),d=t(72454),f=t(28598);function p(n,e){var t=n.children;return(0,f.jsx)(d.HS,{ref:e,children:t})}var h=o.forwardRef(p),m=t(32063),v=t(85019),g=t(82531),b=t(66166),x=t(3055),y=t(49125),j=t(91427),Z=t(24141);function w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function O(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k=function(n){var e,t=n.addProjectBreadcrumbToCustomBreadcrumbs,r=n.after,p=n.afterHidden,w=n.afterWidth,k=n.afterWidthOverride,_=n.before,P=n.beforeWidth,C=n.breadcrumbs,I=n.children,M=n.errors,T=n.headerMenuItems,N=n.headerOffset,S=n.mainContainerHeader,E=n.navigationItems,D=n.setErrors,R=n.subheaderChildren,A=n.title,B=n.uuid,H=(0,Z.i)().width,L="dashboard_after_width_".concat(B),Y="dashboard_before_width_".concat(B),F=(0,o.useRef)(null),W=(0,o.useState)(k?w:(0,j.U2)(L,w)),q=W[0],z=W[1],G=(0,o.useState)(!1),U=G[0],V=G[1],K=(0,o.useState)(_?Math.max((0,j.U2)(Y,P),13*y.iI):null),X=K[0],J=K[1],Q=(0,o.useState)(!1),$=Q[0],nn=Q[1],en=(0,o.useState)(null)[1],tn=g.ZP.projects.list({},{revalidateOnFocus:!1}).data,rn=null===tn||void 0===tn?void 0:tn.projects,on={label:function(){var n;return null===rn||void 0===rn||null===(n=rn[0])||void 0===n?void 0:n.name},linkProps:{href:"/"}},un=[];C?(t&&un.push(on),un.push.apply(un,(0,i.Z)(C))):(null===rn||void 0===rn?void 0:rn.length)>=1&&un.push.apply(un,[on,{bold:!0,label:function(){return A}}]),(0,o.useEffect)((function(){null===F||void 0===F||!F.current||U||$||null===en||void 0===en||en(F.current.getBoundingClientRect().width)}),[U,q,$,X,F,en,H]),(0,o.useEffect)((function(){U||(0,j.t8)(L,q)}),[p,U,q,L]),(0,o.useEffect)((function(){$||(0,j.t8)(Y,X)}),[$,X,Y]);var cn=(0,b.Z)(w);return(0,o.useEffect)((function(){k&&cn!==w&&z(w)}),[k,w,cn]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{title:A}),(0,f.jsx)(s.Z,{breadcrumbs:un,menuItems:T,project:null===rn||void 0===rn?void 0:rn[0],version:null===rn||void 0===rn||null===(e=rn[0])||void 0===e?void 0:e.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===E||void 0===E?void 0:E.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(v.Z,{navigationItems:E,showMore:!0})}),(0,f.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:r,afterHeightOffset:x.Mz,afterHidden:p,afterMousedownActive:U,afterWidth:q,before:_,beforeHeightOffset:x.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(_?X:0),headerOffset:N,hideAfterCompletely:!0,leftOffset:_?d.k1:null,mainContainerHeader:S,mainContainerRef:F,setAfterMousedownActive:V,setAfterWidth:z,setBeforeMousedownActive:nn,setBeforeWidth:J,children:[R&&(0,f.jsx)(h,{children:R}),I]})})]}),M&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===D||void 0===D?void 0:D(null)},children:(0,f.jsx)(c.Z,O(O({},M),{},{onClose:function(){return null===D||void 0===D?void 0:D(null)}}))})]})}},64651:function(n,e,t){"use strict";t.d(e,{d:function(){return o}});var r=t(98781),i=t(90211),o=function(n,e){var t=[{label:function(){return"Standard (batch)"},onClick:function(){return n({pipeline:{name:(0,i.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{label:function(){return"Data integration"},onClick:function(){return n({pipeline:{name:(0,i.Y6)(),type:r.qL.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{label:function(){return"Streaming"},onClick:function(){return n({pipeline:{name:(0,i.Y6)(),type:r.qL.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}];return null!==e&&void 0!==e&&e.showBrowseTemplates&&t.push({label:function(){return"From a template"},onClick:function(){var n;return null===e||void 0===e||null===(n=e.showBrowseTemplates)||void 0===n?void 0:n.call(e)},uuid:"Pipelines/NewPipelineMenu/custom_template"}),t}},50316:function(n,e,t){"use strict";t.d(e,{B:function(){return f}});var r=t(82394),i=t(30264),o=t(11135),u=t(22341),c=t(99994),a=t(49125),l=t(28598);function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var f={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};e.Z=function(n){var e=n.addButtonMenuOpen,t=n.addButtonMenuRef,r=n.isLoading,s=n.label,p=n.menuItems,h=n.onClick,m=n.onClickCallback;return(0,l.jsx)(i.Z,{disableKeyboardShortcuts:!0,items:p,onClickCallback:m,onClickOutside:m,open:e,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,l.jsx)(o.ZP,d(d({},f),{},{background:c.eW,beforeElement:(0,l.jsx)(u.mm,{size:2.5*a.iI}),loading:r,onClick:function(n){n.preventDefault(),null===h||void 0===h||h()},uuid:"shared/AddButton/index",children:s}))})}},40030:function(n,e,t){"use strict";var r=t(38626),i=t(23831),o=r.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:2;",""],(function(n){return"\n    background-color: ".concat(n.backgroundColor||(n.theme.background||i.Z.background).page,";\n    border-bottom: 1px solid ").concat((n.theme.borders||i.Z.borders).medium,";\n  ")}));e.Z=o},95820:function(n,e,t){"use strict";t.d(e,{i:function(){return s}});t(82684);var r=t(38626),i=(t(93461),t(67971),t(10919),t(86673),t(47329)),o=t.n(i);o().node,o().node,o().node.isRequired,o().bool,o().string.isRequired;t(19711);var u=t(31969),c=t(2005),a=t(49125),l=t(73942),s=(t(28598),"tab");r.default.div.withConfig({displayName:"Tabs__TabHeaderContainerStyle",componentId:"sc-rojme5-0"})(["",""],(function(n){return n.containerWidthPercentage&&"\n    width: ".concat(n.containerWidthPercentage,"%;\n  ")})),r.default.div.withConfig({displayName:"Tabs__TabHeader",componentId:"sc-rojme5-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;margin-right:","px;position:relative;z-index:2;"," "," ",""],l.BG,l.BG,6*a.iI,(function(n){return n.noBottomBorder&&"\n    border-bottom: none;\n  "}),(function(n){return n.active&&"\n    border-bottom: ".concat(a.cd,"px solid;\n    border-color: ").concat((n.theme.interactive||u.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.fullWidth&&"\n    width: 100%;\n  "})),r.default.div.withConfig({displayName:"Tabs__LinkStyle",componentId:"sc-rojme5-2"})(["align-items:center;display:flex;"," "," ",""],(function(n){return n.bold&&"\n    font-family: ".concat(c.nF,";\n  ")}),(function(n){return n.fullWidth&&"\n    justify-content: center;\n  "}),(function(n){return!n.disabled&&"\n    &:hover {\n      path {\n        fill: ".concat((n.theme.content||u.Z.interactive).linkPrimary," !important;\n      }\n    }\n  ")}))},48699:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Nn}});var r=t(77837),i=t(75582),o=t(82394),u=t(38860),c=t.n(u),a=t(83455),l=t(82684),s=t(34376),d=t(92083),f=t.n(d),p=t(50316),h=t(67591),m=t(2485),v=t(32316),g=t(1210),b=t(67971),x=t(87372),y=t(93461),j=t(86673),Z=t(19711),w=t(38626),O=t(23831),k=t(73942),_=t(49125),P=12.5*_.iI,C=8*_.iI,I=5*_.iI,M=3*_.iI,T=w.default.div.withConfig({displayName:"indexstyle__TileContainerStyle",componentId:"sc-c3nc3q-0"})(["padding:","px;border-radius:","px;height:","px;width:","px;"," ",""],2.5*_.iI,k.TR,P,P,(function(n){return"\n    background-color: ".concat((n.theme||O.Z).background.chartBlock,";\n  ")}),(function(n){return n.compact&&"\n    height: ".concat(C,"px;\n    width: ").concat(C,"px;\n  ")})),N=t(28598);var S=function(n){var e=n.Icon,t=n.compact,r=n.label;return(0,N.jsx)(T,{compact:t,children:(0,N.jsxs)(b.Z,{alignItems:"center",flexDirection:"column",justifyContent:"center",children:[(0,N.jsx)(e,{size:t?M:I}),(0,N.jsx)(j.Z,{mb:"4px"}),(0,N.jsx)(Z.ZP,{bold:!0,small:t,children:r})]})})},E=w.default.div.withConfig({displayName:"indexstyle__MetricsSummaryContainerStyle",componentId:"sc-nu65g1-0"})(["width:100%;padding:","px;border-radius:","px;",""],2*_.iI,k.n_,(function(n){return"\n    border: ".concat(k.YF,"px ").concat(k.M8," ").concat((n.theme||O.Z).interactive.defaultBorder,";\n    box-shadow: ").concat((n.theme||O.Z).shadow.frame,";\n  ")})),D=t(98781),R=t(66050),A=t(90211),B=t(84779),H=t(24224);var L=function(n){var e=n.pipelineRunCountByPipelineType,t=(0,l.useMemo)((function(){if(!e)return[];var n=JSON.parse(JSON.stringify(e)),t=n[D.qL.PYTHON]||{};return Object.entries(n[D.qL.PYSPARK]||{}).forEach((function(n){var e=(0,i.Z)(n,2),r=e[0],o=e[1];t[r]?t[r]+=o:t[r]=o})),n[D.qL.PYTHON]=t,delete n[D.qL.PYSPARK],(0,H.mr)(Object.entries(n).filter((function(n){var e=(0,i.Z)(n,2),t=(e[0],e[1]);return 0!==Object.keys(t).length})))}),[e]);return(0,N.jsxs)(E,{children:[(0,N.jsx)(Z.ZP,{bold:!0,large:!0,children:"Pipeline run metrics"}),(0,N.jsx)(j.Z,{mb:2}),(0,N.jsx)(b.Z,{alignItems:"center",justifyContent:"space-between",children:t.map((function(n,e){var r=(0,i.Z)(n,2),o=r[0],u=r[1];return(0,N.jsxs)(y.Z,{alignItems:"center",flex:"1",justifyContent:"space-between",style:0!==e?{borderLeft:"1px solid ".concat(O.Z.interactive.defaultBorder)}:null,children:[(0,N.jsx)(j.Z,{pl:0!==e?3:0,children:(0,N.jsx)(S,{Icon:D.Mj[o],label:D.G7[o]})}),(0,H.mr)(Object.entries(u)).map((function(n,e){var t=(0,i.Z)(n,2),r=t[0],o=t[1];return(0,N.jsxs)(y.Z,{flexDirection:"column",children:[(0,N.jsx)(Z.ZP,{children:(0,A.kC)(r)}),(0,N.jsx)(Z.ZP,{bold:!0,danger:r===R.V.FAILED&&o>0,xlarge:!0,children:(0,B.uf)(o)})]},"".concat(r,"_").concat(e))})),(0,N.jsx)(j.Z,{pr:e!==t.length-1?2:0})]},"".concat(o,"_metric"))}))})]})},Y=t(40030),F=t(41788),W=t(54283),q=t(12691),z=t.n(q),G=t(60328),U=t(10919),V=t(37391),K=1.5*_.iI,X=1.5*_.iI,J=w.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-13p7y8j-0"})(["border-radius:","px;overflow:hidden;width:100%;"," ",""],k.n_,(function(n){return n.width&&"\n    width: ".concat(n.width,"px;\n  ")}),(function(n){return"\n    background-color: ".concat((n.theme||O.Z).background.page,";\n    border: ").concat(k.YF,"px ").concat(k.M8," ").concat((n.theme||O.Z).interactive.defaultBorder,";\n    box-shadow: ").concat((n.theme||O.Z).shadow.frame,";\n  ")})),Q=w.default.div.withConfig({displayName:"indexstyle__RowContainerStyle",componentId:"sc-13p7y8j-1"})(["overflow:auto;border-bottom-left-radius:","px;border-bottom-right-radius:","px;"," "," "," ",""],k.n_,k.n_,V.w5,(function(n){return n.maxHeight>0&&"\n    max-height: ".concat(n.maxHeight,"px;\n  ")}),(function(n){return n.minHeight>0&&"\n    min-height: ".concat(n.minHeight,"px;\n  ")}),(function(n){return n.scrollable&&"\n    margin-bottom: ".concat(_.iI,"px;\n    overflow-y: auto;\n    padding-top: ").concat(3,"px;\n    padding-left: ").concat(3,"px;\n    padding-right: ").concat(3,"px;\n  ")})),$=w.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-13p7y8j-2"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;",""],k.n_,k.n_,K,2*_.iI,(function(n){return"\n    border-bottom: ".concat(k.YF,"px ").concat(k.M8," ").concat((n.theme.interactive||O.Z.interactive).defaultBorder,";\n  ")})),nn=w.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-13p7y8j-3"})(["padding:","px ","px;"," "," "," "," ",""],X,2*_.iI,(function(n){return"\n    border-bottom: ".concat(k.YF,"px ").concat(k.M8," ").concat((n.theme||O.Z).borders.medium2,";\n  ")}),(function(n){return n.noHorizontalPadding&&"\n    padding-left: 0;\n    padding-right: 0;\n  "}),(function(n){return n.condensed&&"\n    padding-top: ".concat(9,"px;\n    padding-bottom: ").concat(9,"px;\n  ")}),(function(n){return n.secondary&&"\n    background-color: ".concat((n.theme.background||O.Z.background).row2,";\n  ")}),(function(n){return n.last&&n.noBorder&&"\n    border-bottom-left-radius: ".concat(k.n_,"px;\n    border-bottom-right-radius: ").concat(k.n_,"px;\n    border-bottom: none;\n  ")})),en=w.default.div.withConfig({displayName:"indexstyle__FooterStyle",componentId:"sc-13p7y8j-4"})(["border-bottom-left-radius:","px;border-bottom-right-radius:","px;padding:","px ","px;",""],k.n_,k.n_,K,2*_.iI,(function(n){return"\n    border-top: ".concat(k.YF,"px ").concat(k.M8," ").concat((n.theme||O.Z).borders.medium2,";\n  ")}));var tn=function(n){var e=n.alternating,t=n.children,r=n.footer,i=n.header,o=n.maxHeight,u=n.minHeight,c=n.scrollable,a=n.width;return(0,N.jsxs)(J,{width:a,children:[(0,N.jsx)($,{children:i}),(0,N.jsx)(Q,{maxHeight:o,minHeight:u,scrollable:c,children:l.Children.map(t,(function(n,r){return n&&l.cloneElement(n,{last:r===t.length-1,secondary:e&&r%2===1})}))}),(0,N.jsx)(en,{children:r})]})},rn=t(72454),on=t(95820),un=t(42305),cn=t(59e3),an=40*_.iI,ln=40*_.iI;var sn=function(n){var e=n.pipelineType,t=n.pipelineRuns,r=void 0===t?[]:t,i=(0,s.useRouter)(),o=(0,cn.iV)(),u=(null===o||void 0===o?void 0:o[on.i])||un.vk.TODAY,c=e===D.LM,a=c?D.LM:D.G7[e],l=D.Mj[e],d=r.length,f=0===d?"":"(".concat(d,")");return(0,N.jsx)(tn,{footer:(0,N.jsx)(b.Z,{alignItems:"center",justifyContent:"center",children:(0,N.jsx)(z(),{as:"/pipeline-runs?status=failed",href:"/pipeline-runs",passHref:!0,children:(0,N.jsx)(U.Z,{sameColorAsText:!0,children:"View more"})})}),header:(0,N.jsxs)(b.Z,{alignItems:"center",children:[(0,N.jsx)(G.Z,{beforeIcon:(0,N.jsx)(l,{size:2.5*_.iI}),compact:!0,notClickable:!0,children:(0,A.kC)(a)}),(0,N.jsx)(j.Z,{ml:2}),(0,N.jsxs)(Z.ZP,{bold:!0,children:["Latest ",c?"":"".concat((0,A.wX)(a)," "),"pipeline run failures ",f]})]}),maxHeight:an,minHeight:ln,children:0===d?(0,N.jsx)(b.Z,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,N.jsx)(j.Z,{px:5,py:10,children:(0,N.jsxs)(b.Z,{alignItems:"center",flexDirection:"column",children:[(0,N.jsx)(rn.Hn,{imageUrl:"".concat(i.basePath,"/images/blocks/grey_block.webp")}),(0,N.jsx)(j.Z,{mb:3}),(0,N.jsxs)(Z.ZP,{large:!0,children:["No ",c?"":"".concat((0,A.wX)(a)," "),"pipeline run failures for ",un.s8[u]]})]})})}):r.map((function(n){var e=n.created_at,t=n.id,r=n.pipeline_uuid;return(0,N.jsx)(nn,{children:(0,N.jsxs)(b.Z,{alignItems:"center",children:[(0,N.jsx)(z(),{as:"/pipelines/".concat(r),href:"/pipelines/[pipeline]",passHref:!0,children:(0,N.jsx)(U.Z,{monospace:!0,sameColorAsText:!0,small:!0,children:r})}),(0,N.jsx)(Z.ZP,{monospace:!0,small:!0,children:"\xa0>\xa0"}),(0,N.jsx)(z(),{as:"/pipelines/".concat(r,"/runs/").concat(t),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,N.jsxs)(U.Z,{danger:!0,monospace:!0,sameColorAsText:!0,small:!0,children:["Run created on ",e]})})]})},"pipeline_run_".concat(t))}))})},dn=t(82531),fn=t(66166),pn=t(92953),hn=t(9728),mn=t(3645),vn=t(27337),gn=t(22341),bn={Icon:gn.LE,label:function(){return(0,A.kC)(un.s8[un.vk.TODAY])},uuid:un.vk.TODAY},xn={Icon:gn.ks,label:function(){return(0,A.kC)(un.s8[un.vk.WEEK])},uuid:un.vk.WEEK},yn={Icon:gn.zE,label:function(){return(0,A.kC)(un.s8[un.vk.MONTH])},uuid:un.vk.MONTH},jn=[bn,xn,yn],Zn=t(17150),wn=t(64651),On=t(33766),kn=t(96510),_n=t(99497);function Pn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function Cn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Pn(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Pn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var In={mt:2,mx:3},Mn={refreshInterval:6e4,revalidateOnFocus:!1};function Tn(){var n,e=(0,cn.iV)(),t=(0,s.useRouter)(),r=(0,l.useRef)(null),u=(0,l.useState)(bn),c=u[0],d=u[1],y=(0,l.useState)(!1),w=y[0],k=y[1],_=(0,l.useState)(null),P=_[0],C=_[1],I=null===c||void 0===c?void 0:c.uuid,M=(0,fn.Z)(c);(0,l.useEffect)((function(){var n=e[on.i];n&&d(jn.find((function(e){return e.uuid===n})))}),[e,c,M]);var T=(0,l.useMemo)((function(){return(0,un.jV)(I,{isoString:!0})}),[I]),S=(0,l.useMemo)((function(){return{group_by_pipeline_type:1,start_time:T}}),[T]),E=dn.ZP.monitor_stats.detail(mn.h.PIPELINE_RUN_COUNT,S,Cn({},Mn)),B=E.data,F=E.isValidating,q=E.mutate,z=dn.ZP.pipeline_runs.list({_limit:50,include_pipeline_type:1,"order_by[]":"created_at desc",start_timestamp:(0,un.A5)(T),status:R.V.FAILED},Cn({},Mn)).data,G=(0,l.useMemo)((function(){return((null===z||void 0===z?void 0:z.pipeline_runs)||[]).filter((function(n){return null!==n.pipeline_type}))}),[null===z||void 0===z?void 0:z.pipeline_runs]),U=(0,l.useMemo)((function(){return(0,H.vM)(G,(function(n){return n.pipeline_type}))}),[G]),V=U.integration,K=void 0===V?[]:V,X=U.python,J=void 0===X?[]:X,Q=U.streaming,$=void 0===Q?[]:Q;(0,l.useEffect)((function(){M&&(null===c||void 0===c?void 0:c.uuid)!==(null===M||void 0===M?void 0:M.uuid)&&q()}),[q,c,M]);var nn,en=(0,l.useMemo)((function(){return(0,un.Y_)(un.yD[I]+1)}),[I]),tn=(0,l.useMemo)((function(){var n,e=(null===B||void 0===B||null===(n=B.monitor_stat)||void 0===n?void 0:n.stats)||{};return(0,Zn.i)(e,en)}),[null===B||void 0===B||null===(n=B.monitor_stat)||void 0===n?void 0:n.stats,en]),rn=tn.pipelineRunCountByPipelineType,an=tn.totalPipelineRunCount,ln=tn.ungroupedPipelineRunData,gn=(0,l.useMemo)((function(){return(0,un.Ro)(un.yD[I],{endDateOnly:I===un.vk.TODAY})}),[I]),xn=(nn=function(n){return t.push("/pipelines/[pipeline]/edit","/pipelines/".concat(n,"/edit"))},(0,a.Db)(dn.ZP.pipelines.useCreate(),{onSuccess:function(n){return(0,kn.wD)(n,{callback:function(n){var e=n.pipeline.uuid;null===nn||void 0===nn||nn(e)},onErrorCallback:function(n,e){return C({errors:e,response:n})}})}})),yn=(0,i.Z)(xn,2),Pn=yn[0],Tn=yn[1].isLoading,Nn=(0,_n.dd)((function(){return(0,N.jsx)(hn.BC,{children:(0,N.jsx)(m.Z,{contained:!0,onClickCustomTemplate:function(n){Pn({pipeline:{custom_template_uuid:null===n||void 0===n?void 0:n.template_uuid,name:(0,A.Y6)()}}).then((function(){Dn()}))},showBreadcrumbs:!0,tabs:[vn.A2]})})}),{},[],{background:!0,uuid:"browse_templates"}),Sn=(0,i.Z)(Nn,2),En=Sn[0],Dn=Sn[1],Rn=(0,l.useMemo)((function(){return(0,wn.d)(Pn,{showBrowseTemplates:En})}),[Pn,En]),An=(0,l.useMemo)((function(){return(0,N.jsx)(p.Z,{addButtonMenuOpen:w,addButtonMenuRef:r,isLoading:Tn,label:"New pipeline",menuItems:Rn,onClick:function(){return k((function(n){return!n}))},onClickCallback:function(){return k(!1)}})}),[w,Tn,Rn]);return(0,N.jsxs)(g.Z,{errors:P,setErrors:C,title:"Overview",uuid:"overview/index",children:[(0,N.jsx)(Y.Z,{backgroundColor:O.Z.background.panel,children:(0,N.jsx)(j.Z,{py:2,children:(0,N.jsxs)(b.Z,{alignItems:"center",children:[(0,N.jsx)(j.Z,{ml:3,children:An}),(0,N.jsx)(v.Z,{onClickTab:function(n){var e=n.uuid;(0,On.u7)((0,o.Z)({},on.i,e),{replaceParams:!0})},regularSizeText:!0,selectedTabUUID:I,tabs:jn})]})})}),(0,N.jsxs)(j.Z,{mx:3,my:2,children:[(0,N.jsxs)(x.Z,{level:4,children:[I===un.vk.TODAY&&"".concat((0,A.kC)(un.vk.TODAY),": ").concat(gn),I!==un.vk.TODAY&&"".concat((0,A.kC)(un.s8[I]),": ").concat(gn)]}),(0,N.jsx)(j.Z,{mt:2,children:F?(0,N.jsx)(j.Z,{mx:2,my:11,children:(0,N.jsx)(W.Z,{inverted:!0})}):(0,N.jsx)(L,{pipelineRunCountByPipelineType:rn})}),(0,N.jsxs)(j.Z,{mt:2,children:[(0,N.jsx)(j.Z,{ml:2,children:(0,N.jsxs)(Z.ZP,{bold:!0,large:!0,children:[F?"--":an," total pipeline runs"]})}),(0,N.jsx)(j.Z,{mt:1,children:(0,N.jsx)(h.Z,{backgroundColor:O.Z.background.panel,colors:pn.NU,data:ln,getXValue:function(n){return n.date},height:200,keys:pn.hu,margin:{bottom:30,left:35,right:0,top:10},tooltipLeftOffset:pn.CD,xLabelFormat:function(n){return f()(n).format("MMM DD")}})})]})]}),(0,N.jsx)(j.Z,Cn(Cn({},In),{},{children:(0,N.jsxs)(b.Z,{alignItems:"center",justifyContent:"center",children:[(0,N.jsx)(sn,{pipelineRuns:G,pipelineType:D.LM}),(0,N.jsx)(j.Z,{ml:2}),(0,N.jsx)(sn,{pipelineRuns:J,pipelineType:D.qL.PYTHON})]})})),(0,N.jsx)(j.Z,Cn(Cn({},In),{},{children:(0,N.jsxs)(b.Z,{alignItems:"center",justifyContent:"center",children:[(0,N.jsx)(sn,{pipelineRuns:K,pipelineType:D.qL.INTEGRATION}),(0,N.jsx)(j.Z,{ml:2}),(0,N.jsx)(sn,{pipelineRuns:$,pipelineType:D.qL.STREAMING})]})})),(0,N.jsx)(j.Z,{mb:2})]})}Tn.getInitialProps=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)})));var Nn=(0,F.Z)(Tn)},84779:function(n,e,t){"use strict";t.d(e,{JI:function(){return o},uf:function(){return i}});var r=t(75582),i=function(n){var e=String(n).split("."),t=(0,r.Z)(e,2),i=t[0],o=t[1];return"".concat(i.replace(/\B(?=(\d{3})+(?!\d))/g,",")).concat(o?".".concat(o):"")};function o(n){var e=Math.floor(Date.now()/1e3);return n>0?e-n:e}},56655:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/overview",function(){return t(48699)}])}},function(n){n.O(0,[844,9902,426,1774,8792,8789,4259,5896,9055,2714,1424,1005,7815,3654,8952,7722,4822,1484,2485,6786,9774,2888,179],(function(){return e=56655,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
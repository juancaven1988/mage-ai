"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2570],{65597:function(e,n,t){t.d(n,{c:function(){return u},f:function(){return s}});var i=t(46313),r=t(23831),o=t(49125),c=t(73942),l=t(37391),u=i.default.div.withConfig({displayName:"Tablestyle__TableContainerStyle",componentId:"sc-8ammqd-0"})(["position:relative;overflow:auto;"," ",""],l.w5,(function(e){return e.minHeight&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")})),s=i.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-1"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,c.TR,2*o.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||r.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||r.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},97496:function(e,n,t){var i=t(82394),r=t(12757),o=t(12691),c=t.n(o),l=t(34376),u=t.n(l),s=t(82684),a=t(83455),d=t(60328),p=t(47999),f=t(93461),h=t(67971),j=t(10919),x=t(47409),b=t(86673),g=t(54283),m=t(17903),v=t(19711),Z=t(41374),O=t(73942),_=t(10503),w=t(65597),y=t(49125),C=t(19395),k=t(96510),P=t(28598);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e){var n=e.onCancel,t=e.onSuccess,i=e.pipelineRun,o=i.status,c=(0,a.Db)(Z.ZP.pipeline_runs.pipeline_schedules.useCreate(null===i||void 0===i?void 0:i.pipeline_schedule_id),{onSuccess:function(e){return(0,k.wD)(e,{callback:function(){t()},onErrorCallback:function(e){var n=e.error,t=n.errors,i=n.message;console.log(t,i)}})}}),l=(0,r.Z)(c,1)[0],u=(0,s.useState)(),f=u[0],j=u[1],m=(0,s.useCallback)((function(){j(!1),l({pipeline_run:{execution_date:null===i||void 0===i?void 0:i.execution_date,pipeline_schedule_id:null===i||void 0===i?void 0:i.pipeline_schedule_id,pipeline_uuid:null===i||void 0===i?void 0:i.pipeline_uuid,variables:null===i||void 0===i?void 0:i.variables}})}),[i]),C=(0,s.useCallback)((function(){j(!1),n(I(I({},i),{},{status:x.V.CANCELLED}))}),[i]);return(0,P.jsxs)("div",{style:{position:"relative"},children:[(0,P.jsx)(d.Z,{beforeIcon:x.V.INITIAL!==o&&(0,P.jsxs)(P.Fragment,{children:[x.V.COMPLETED===o&&(0,P.jsx)(_.Jr,{size:2*y.iI}),[x.V.FAILED,x.V.CANCELLED].includes(o)&&(0,P.jsx)(_.Py,{size:2*y.iI,inverted:x.V.CANCELLED===o}),[x.V.RUNNING].includes(o)&&(0,P.jsx)(g.Z,{color:"white",small:!0})]}),borderRadius:O.D7,danger:x.V.FAILED===o,default:x.V.INITIAL===o,notClickable:x.V.COMPLETED===o,onClick:function(){return j(x.V.COMPLETED!==o)},padding:"6px",primary:x.V.RUNNING===o,warning:x.V.CANCELLED===o,children:x.D[o]}),(0,P.jsx)(p.Z,{onClickOutside:function(){return j(!1)},open:f,children:(0,P.jsxs)(w.f,{children:[[x.V.RUNNING,x.V.INITIAL].includes(o)&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,P.jsx)(b.Z,{mb:1}),(0,P.jsxs)(v.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,P.jsx)("br",{}),"the current pipeline run."]}),(0,P.jsx)(v.ZP,{}),(0,P.jsx)(b.Z,{mt:1,children:(0,P.jsxs)(h.Z,{children:[(0,P.jsx)(d.Z,{onClick:function(){C(),m()},children:"Retry run"}),(0,P.jsx)(b.Z,{ml:1}),(0,P.jsx)(d.Z,{onClick:C,children:"Cancel run"})]})})]}),[x.V.CANCELLED,x.V.FAILED].includes(o)&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(v.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",o]}),(0,P.jsx)(b.Z,{mb:1}),(0,P.jsx)(v.ZP,{children:"Retry the run with changes you have made to the pipeline."}),(0,P.jsx)(b.Z,{mb:1}),(0,P.jsx)(d.Z,{onClick:m,children:"Retry run"})]})]})})]})}n.Z=function(e){var n=e.fetchPipelineRuns,t=e.onClickRow,i=e.pipelineRuns,o=e.selectedRun,l=(0,a.Db)((function(e){return Z.ZP.pipeline_runs.useUpdate(e.id)({pipeline_run:e})}),{onSuccess:function(e){return(0,k.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,t=n.errors,i=n.message;console.log(t,i)}})}}),s=(0,r.Z)(l,1)[0],p=[null,1,2,1,1,null],g=[{uuid:"Status"},{uuid:"Date"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];return t&&(p.push(null),g.push({label:function(){return""},uuid:"action"})),(0,P.jsx)(w.c,{minHeight:30*y.iI,children:(0,P.jsx)(m.Z,{columnFlex:p,columns:g,isSelectedRow:function(e){return i[e].id===(null===o||void 0===o?void 0:o.id)},onClickRow:t,rows:i.map((function(e,r){var o=e.block_runs_count,l=e.completed_at,a=e.execution_date,p=e.id,g=e.pipeline_schedule_id,m=e.pipeline_schedule_name,Z=e.pipeline_uuid,w=e.status,k=[];return k=r>0&&i[r-1].execution_date==e.execution_date?[(0,P.jsx)(b.Z,{ml:1,children:(0,P.jsxs)(h.Z,{alignItems:"center",children:[(0,P.jsx)(_.TT,{size:2*y.iI,useStroke:!0}),(0,P.jsx)(d.Z,{borderRadius:O.D7,notClickable:!0,padding:"6px",children:(0,P.jsx)(v.ZP,{muted:!0,children:x.D[w]})})]})},"row_item_1"),(0,P.jsx)(v.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_item_2"),(0,P.jsx)(v.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_item_3"),(0,P.jsx)(c(),{as:"/pipelines/".concat(Z,"/runs/").concat(p),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,P.jsx)(j.Z,{bold:!0,muted:!0,children:"See block runs (".concat(o,")")})},"row_item_4"),(0,P.jsx)(v.ZP,{monospace:!0,muted:!0,children:l&&(0,C.e)(l).toISOString().split(".")[0]||"-"},"row_item_5"),(0,P.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(Z,"/logs?pipeline_run_id[]=").concat(p))},children:(0,P.jsx)(_.B4,{default:!0,size:2*y.iI})},"row_item_6")]:[(0,P.jsx)(E,{onCancel:s,onSuccess:n,pipelineRun:e},"row_item_7"),(0,P.jsx)(v.ZP,{default:!0,monospace:!0,children:a},"row_item_8"),(0,P.jsx)(c(),{as:"/pipelines/".concat(Z,"/triggers/").concat(g),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,P.jsx)(j.Z,{bold:!0,sameColorAsText:!0,children:m})},"row_item_9"),(0,P.jsx)(c(),{as:"/pipelines/".concat(Z,"/runs/").concat(p),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,P.jsx)(j.Z,{bold:!0,sameColorAsText:!0,children:"See block runs (".concat(o,")")})},"row_item_10"),(0,P.jsx)(v.ZP,{default:!0,monospace:!0,children:l&&(0,C.e)(l).toISOString().split(".")[0]||"-"},"row_item_11"),(0,P.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(Z,"/logs?pipeline_run_id[]=").concat(p))},children:(0,P.jsx)(_.B4,{default:!0,size:2*y.iI})},"row_item_12")],t&&k.push((0,P.jsx)(f.Z,{flex:1,justifyContent:"flex-end",children:(0,P.jsx)(_._Q,{default:!0,size:2*y.iI})})),k})),uuid:"pipeline-runs"})})}},56681:function(e,n,t){t.d(n,{G:function(){return v},Z:function(){return Z}});var i=t(12757),r=t(82394),o=t(26304),c=t(1583),l=t(22673),u=t(86532),s=t(86673),a=t(19711),d=t(17903),p=t(49125),f=t(19395),h=t(28598),j=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g={uuid:"Run details"},m={uuid:"Dependency tree"},v=[m,g];function Z(e){var n=e.height,t=e.heightOffset,r=e.pipeline,x=e.selectedRun,Z=e.selectedTab,O=e.setSelectedTab,_=b({},(0,o.Z)(e,j));x?_.blockStatus=(0,f.I)(null===x||void 0===x?void 0:x.block_runs):_.noStatus=!0;var w=null===x||void 0===x?void 0:x.variables,y=[];w&&JSON.stringify(w,null,2).split("\n").forEach((function(e){y.push("    ".concat(e))}));var C=x&&[["Run ID",null===x||void 0===x?void 0:x.id],["Variables",(0,h.jsx)(l.Z,{language:"json",small:!0,source:y.join("\n")})]],k=x&&(0,h.jsx)(s.Z,{pb:p.cd,px:p.cd,children:(0,h.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:C.map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return[(0,h.jsx)(a.ZP,{monospace:!0,muted:!0,children:t}),(0,h.jsx)(a.ZP,{monospace:!0,textOverflow:!0,children:r})]})),uuid:"LogDetail"})}),P=Z&&O;return(0,h.jsxs)(h.Fragment,{children:[P&&(0,h.jsx)(s.Z,{py:p.cd,children:(0,h.jsx)(c.Z,{onClickTab:O,selectedTabUUID:null===Z||void 0===Z?void 0:Z.uuid,tabs:v})}),(!P||m.uuid===(null===Z||void 0===Z?void 0:Z.uuid))&&(0,h.jsx)(u.Z,b(b({},_),{},{height:n,heightOffset:(t||0)+(P?76:0),pipeline:r})),g.uuid===(null===Z||void 0===Z?void 0:Z.uuid)&&k]})}},19395:function(e,n,t){t.d(n,{I:function(){return u},e:function(){return s}});var i=t(82394),r=t(92083),o=t.n(r);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,r=n.completed_at,c=n.started_at,u=n.status,s=null;c&&r&&(s=o()(r).valueOf()-o()(c).valueOf());return l(l({},e),{},(0,i.Z)({},t,{runtime:s,status:u}))}),{})}function s(e){if(!e)return null;var n=new Date(o()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}},51099:function(e,n,t){t(82684);var i=t(60328),r=t(67971),o=t(86673),c=t(10503),l=t(73899),u=t(49125),s=t(28598);n.Z=function(e){var n=e.page,t=e.maxPages,a=e.onUpdate,d=e.totalPages,p=[],f=t;if(f>d)p=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(f/2),j=n-h;n+h>=d?(j=d-f+2,f-=2):n-h<=0?(j=0,f-=2):(f-=4,j=n-Math.floor(f/2)),p=Array.from({length:f},(function(e,n){return n+j}))}return(0,s.jsx)(s.Fragment,{children:d>0&&(0,s.jsxs)(r.Z,{alignItems:"center",children:[(0,s.jsx)(i.Z,{disabled:0===n,onClick:function(){return a(n-1)},children:(0,s.jsx)(c.Hd,{size:1.5*u.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(i.Z,{onClick:function(){return a(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(i.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(e){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(i.Z,{onClick:function(){e!==n&&a(e)},notClickable:e===n,backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!p.includes(d-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(d-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(i.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(i.Z,{onClick:function(){return a(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(i.Z,{disabled:n===d-1,onClick:function(){return a(n+1)},children:(0,s.jsx)(c.Kw,{size:1.5*u.iI,stroke:"#AEAEAE"})})]})})}},47409:function(e,n,t){t.d(n,{D:function(){return c},V:function(){return o}});var i,r=t(82394),o=t(66050).V,c=(i={},(0,r.Z)(i,o.COMPLETED,"Done"),(0,r.Z)(i,o.CANCELLED,"Cancelled"),(0,r.Z)(i,o.FAILED,"Failed"),(0,r.Z)(i,o.RUNNING,"Running"),(0,r.Z)(i,o.INITIAL,"Ready"),i)},22673:function(e,n,t){var i=t(82684),r=t(73199),o=t.n(r),c=t(71735),l=t(46313),u=t(65292),s=t(23831),a=t(2005),d=t(49125),p=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,r=e.showLineNumbers,f=e.small,h=e.source,j=e.wrapLines,x=(0,i.useContext)(l.ThemeContext);return(0,p.jsx)(o(),{source:h,renderers:{code:function(e){var i=e.value;return(0,p.jsx)(c.Z,{customStyle:{backgroundColor:(x.background||s.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,paddingBottom:2*d.iI,paddingTop:2*d.iI,maxWidth:t},lineNumberStyle:{color:(x.content||s.Z.content).muted},language:n,showLineNumbers:r,style:u._4,useInlineStyles:!0,wrapLines:j,children:i})}}})}}}]);
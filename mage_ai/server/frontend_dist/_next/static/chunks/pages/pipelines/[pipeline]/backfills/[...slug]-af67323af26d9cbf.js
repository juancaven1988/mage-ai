(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6780],{2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c},W:function(){return l}});var r=t(38626),i=t(3055),l=34*t(49125).iI,c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);"],i.Mz)},56681:function(e,n,t){"use strict";t.d(n,{G7:function(){return P},ZP:function(){return y},u$:function(){return x}});var r=t(75582),i=t(82394),l=t(26304),c=t(32316),a=t(22673),s=t(48952),o=t(86673),u=t(19711),d=t(87815),p=t(49125),f=t(19395),h=t(7715),b=t(28598),v=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=76,g={uuid:"Run details"},Z={uuid:"Dependency tree"},P=[Z,g];function y(e){var n=e.height,t=e.heightOffset,i=e.pipeline,m=e.selectedRun,y=e.selectedTab,k=e.setSelectedTab,O=j({},(0,l.Z)(e,v));m?O.blockStatus=(0,f.IJ)(null===m||void 0===m?void 0:m.block_runs):O.noStatus=!0;var _=(0,h.Kn)(null===m||void 0===m?void 0:m.variables)?j({},null===m||void 0===m?void 0:m.variables):(null===m||void 0===m?void 0:m.variables)||{},I=null===m||void 0===m?void 0:m.event_variables;if(I&&(0,h.Kn)(I)&&!(0,h.Qr)(I))if((0,h.Kn)(_)&&_.hasOwnProperty("event")){var w=(0,h.Kn)(_.event)?_.event:{};_.event=j(j({},w),I)}else _.event=j({},I);var S=[];_&&JSON.stringify(_,null,2).split("\n").forEach((function(e){S.push("    ".concat(e))}));var C=m&&[["Run ID",null===m||void 0===m?void 0:m.id],["Variables",(0,b.jsx)(a.Z,{language:"json",small:!0,source:S.join("\n")},"variable_value")]],D=m&&(0,b.jsx)(o.Z,{pb:p.cd,px:p.cd,children:(0,b.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:C.map((function(e,n){var t=(0,r.Z)(e,2),i=t[0],l=t[1];return[(0,b.jsx)(u.ZP,{monospace:!0,muted:!0,children:i},"key_".concat(n)),(0,b.jsx)(u.ZP,{monospace:!0,textOverflow:!0,children:l},"val_".concat(n))]})),uuid:"LogDetail"})}),E=y&&k;return(0,b.jsxs)(b.Fragment,{children:[E&&(0,b.jsx)(o.Z,{py:p.cd,children:(0,b.jsx)(c.Z,{onClickTab:k,selectedTabUUID:null===y||void 0===y?void 0:y.uuid,tabs:P})}),(!E||Z.uuid===(null===y||void 0===y?void 0:y.uuid))&&(0,b.jsx)(s.Z,j(j({},O),{},{height:n,heightOffset:(t||0)+(E?x:0),pipeline:i})),g.uuid===(null===y||void 0===y?void 0:y.uuid)&&D]})}},58122:function(e,n,t){"use strict";t.d(n,{FS:function(){return s},JZ:function(){return u},e7:function(){return d},wx:function(){return o}});var r=t(75582),i=t(82394),l=t(93348);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e){return"string"===typeof e?e:JSON.stringify(e)}function o(e,n){var t,r;return null===e||void 0===e||null===(t=e.find((function(e){var t=e.block;return n(t)})))||void 0===t||null===(r=t.variables)||void 0===r?void 0:r.map((function(e){var n=e.value;return a(a({},e),{},{value:s(n)})}))}function u(e,n){return n===l.Xm.TIME?e.push({uuid:"execution_date",value:"<run datetime>"}):n===l.Xm.EVENT&&e.push({uuid:"event",value:"<trigger event>"}),e}function d(e){return e?Object.entries(e).reduce((function(e,n){var t=(0,r.Z)(n,2),l=t[0],c=t[1],s=c;try{s=JSON.parse(c)}catch(o){}return a(a({},e),{},(0,i.Z)({},l,s))}),{}):e}},18025:function(e,n,t){"use strict";t.d(n,{J:function(){return s},U:function(){return a}});var r=t(38626),i=t(23831),l=t(73942),c=t(49125),a=r.default.div.withConfig({displayName:"indexstyle__CardStyle",componentId:"sc-m7tlau-0"})(["border-radius:","px;border-style:solid;border-width:2px;height:","px;margin-right:","px;padding:","px;width:","px;"," ",""],l.TR,14*c.iI,c.cd*c.iI,c.cd*c.iI,40*c.iI,(function(e){return!e.selected&&"\n    border-color: ".concat((e.theme.borders||i.Z.borders).light,";\n  ")}),(function(e){return e.selected&&"\n    border-color: ".concat((e.theme.interactive||i.Z.interactive).linkPrimary,";\n  ")})),s=r.default.div.withConfig({displayName:"indexstyle__DateSelectionContainer",componentId:"sc-m7tlau-1"})(["border-radius:","px;padding:","px;"," "," ",""],l.n_,c.tr,(function(e){return"\n    background-color: ".concat((e.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.absolute&&"\n    position: absolute;\n    z-index: 2;\n    right: 0;\n    top: ".concat(2.5*c.iI,"px;\n  ")}),(function(e){return e.topPosition&&"\n    top: -".concat(42*c.iI,"px;\n  ")}))},51099:function(e,n,t){"use strict";t.d(n,{Et:function(){return p},Q:function(){return d}});t(82684);var r=t(60328),i=t(67971),l=t(86673),c=t(19963),a=t(22341),s=t(73899),o=t(49125),u=t(28598),d=30,p=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,p=e.totalPages,f=[],h=t;if(h>p)f=Array.from({length:p},(function(e,n){return n}));else{var b=Math.floor(h/2),v=n-b;n+b>=p?(v=p-h+2,h-=2):n-b<=0?(v=0,h-=2):(h-=4,v=n-Math.floor(h/2)),f=Array.from({length:h},(function(e,n){return n+v}))}return(0,u.jsx)(u.Fragment,{children:p>0&&(0,u.jsxs)(i.ZP,{alignItems:"center",children:[(0,u.jsx)(r.Z,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,u.jsx)(a.Hd,{size:1.5*o.iI,stroke:c.Av})}),!f.includes(0)&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.Z,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!f.includes(1)&&(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.Z,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),f.map((function(e){return(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.Z,{backgroundColor:e===n&&s.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!f.includes(p-1)&&(0,u.jsxs)(u.Fragment,{children:[!f.includes(p-2)&&(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.Z,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,u.jsx)(l.Z,{ml:1,children:(0,u.jsx)(r.Z,{borderLess:!0,noBackground:!0,onClick:function(){return d(p-1)},children:p})},p-1)]}),(0,u.jsx)(l.Z,{ml:1}),(0,u.jsx)(r.Z,{disabled:n===p-1,onClick:function(){return d(n+1)},children:(0,u.jsx)(a.Kw,{size:1.5*o.iI,stroke:c.Av})})]})})}},43526:function(e,n,t){"use strict";t.d(n,{I7:function(){return r},IB:function(){return s},VV:function(){return l},_7:function(){return c},rn:function(){return a}});var r,i=t(66050),l="datetime",c="code",a=i.V;!function(e){e.SECOND="second",e.MINUTE="minute",e.HOUR="hour",e.DAY="day",e.WEEK="week",e.MONTH="month",e.YEAR="year",e.CUSTOM="custom"}(r||(r={}));var s=[r.MINUTE,r.HOUR,r.DAY,r.WEEK,r.MONTH,r.YEAR,r.CUSTOM]},52769:function(e,n,t){"use strict";t.d(n,{C:function(){return r}});var r="global"},2713:function(e,n,t){"use strict";var r=t(82394),i=t(44495),l=t(67971),c=t(55378),a=t(86673),s=t(19711),o=t(18025),u=t(49125),d=t(24224),p=t(28598);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.selectedDate,t=e.selectedTime,r=e.setSelectedDate,f=e.setSelectedTime,b=e.topPosition;return(0,p.jsxs)(o.J,{absolute:!0,topPosition:b,children:[(0,p.jsx)(i.ZP,{onChange:r,value:n}),(0,p.jsx)(a.Z,{mb:2}),(0,p.jsxs)(l.ZP,{alignItems:"center",children:[(0,p.jsx)(s.ZP,{default:!0,large:!0,children:"Time (UTC):"}),(0,p.jsx)(a.Z,{pr:2}),(0,p.jsx)(c.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),f((function(n){return h(h({},n),{},{hour:e.target.value})}))},paddingRight:5*u.iI,placeholder:"HH",value:null===t||void 0===t?void 0:t.hour,children:(0,d.m5)(24,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,p.jsx)("option",{value:e,children:e},"hour_".concat(e))}))}),(0,p.jsx)(a.Z,{px:1,children:(0,p.jsx)(s.ZP,{bold:!0,large:!0,children:":"})}),(0,p.jsx)(c.Z,{compact:!0,monospace:!0,onChange:function(e){e.preventDefault(),f((function(n){return h(h({},n),{},{minute:e.target.value})}))},paddingRight:5*u.iI,placeholder:"MM",value:null===t||void 0===t?void 0:t.minute,children:(0,d.m5)(60,0).map((function(e){return String(e).padStart(2,"0")})).map((function(e){return(0,p.jsx)("option",{value:e,children:e},"minute_".concat(e))}))})]})]})}},22673:function(e,n,t){"use strict";var r=t(82684),i=t(68792),l=t(31811),c=t(38626),a=t(65292),s=t(23831),o=t(2005),u=t(49125),d=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,p=e.showLineNumbers,f=e.small,h=e.source,b=e.wrapLines,v=(0,r.useContext)(c.ThemeContext);function m(e){var r=e.value;return(0,d.jsx)(l.Z,{customStyle:{backgroundColor:(v.background||s.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:o.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,maxWidth:t,paddingBottom:2*u.iI,paddingTop:2*u.iI},language:n,lineNumberStyle:{color:(v.content||s.Z.content).muted},showLineNumbers:p,style:a._4,useInlineStyles:!0,wrapLines:b,children:r})}return(0,d.jsx)(i.D,{components:{code:function(e){var n=e.children;return(0,d.jsx)(m,{value:n})}},children:h})}},32316:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(82684),i=t(60328),l=t(67971),c=t(882),a=t(86673),s=t(19711),o=t(99994),u=t(38626),d=t(49125),p=t(37391),f=u.default.div.withConfig({displayName:"indexstyle__TabsContainerStyle",componentId:"sc-segf7l-0"})(["padding-left:","px;padding-right:","px;"," "," ",""],d.cd*d.iI,d.cd*d.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.allowScroll&&"\n    overflow: auto;\n  "}),p.w5),h=t(66653),b=t(28598);var v=function(e){var n=e.allowScroll,t=e.compact,u=e.contained,p=e.noPadding,v=e.onClickTab,m=e.regularSizeText,j=e.selectedTabUUID,x=e.small,g=e.tabs,Z=(0,r.useMemo)((function(){var e=g.length,n=[];return g.forEach((function(r,u){var p=r.Icon,f=r.IconSelected,g=r.label,Z=r.uuid,P=Z===j,y=P&&f||p,k=g?g():Z,O=(0,b.jsxs)(l.ZP,{alignItems:"center",children:[y&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y,{default:!P,size:2*d.iI}),(0,b.jsx)(a.Z,{mr:1})]}),(0,b.jsx)(s.ZP,{bold:!0,default:!P,noWrapping:!0,small:!m,children:k})]});u>=1&&e>=2&&n.push((0,b.jsx)("div",{style:{marginLeft:1.5*d.iI}},"spacing-".concat(Z))),P?n.push((0,b.jsx)(c.Z,{backgroundGradient:o.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,compact:t||x,onClick:function(e){(0,h.j)(e),v(r)},paddingUnitsHorizontal:1.75,paddingUnitsVertical:1.25,small:x,children:O},Z)):n.push((0,b.jsx)("div",{style:{padding:2},children:(0,b.jsx)(i.Z,{borderLess:!0,compact:t||x,default:!0,onClick:function(e){(0,h.j)(e),v(r)},outline:!0,small:x,children:O})},"button-tab-".concat(Z)))})),n}),[t,v,j,x,g]),P=(0,b.jsx)(l.ZP,{alignItems:"center",children:Z});return u?P:(0,b.jsx)(f,{allowScroll:n,noPadding:p,children:P})}},12625:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ie}});var r=t(75582),i=t(77837),l=t(82394),c=t(38860),a=t.n(c),s=t(82684),o=t(83455),u=t(34376),d=t(43526),p=t(60328),f=t(34744),h=t(67971),b=t(87372),v=t(51099),m=t(60547),j=t(97496),x=t(47409),g=t(52769),Z=t(55378),P=t(86673),y=t(54283),k=t(87815),O=t(19711),_=t(82531),I=t(56681),w=t(22341),S=t(2850),C=t(49125),D=t(59920),E=t(90211),T=t(58122),N=t(19395),M=t(33766),L=t(7715),A=t(9736),F=t(96510),U=t(66653),R=t(59e3),B=t(28598);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=function(e){var n=e.backfill,t=e.errors,i=e.fetchBackfill,l=e.pipeline,c=e.setErrors,a=e.variables,H=(0,A.Ct)(),z=(0,u.useRouter)(),Y=n||{},K=Y.block_uuid,W=Y.end_datetime,J=Y.id,G=Y.interval_type,X=Y.interval_units,q=Y.name,Q=Y.pipeline_run_dates,$=Y.start_datetime,ee=Y.status,ne=Y.total_run_count,te=Y.variables,re=void 0===te?{}:te,ie=l.uuid,le=(0,R.iV)(),ce={_limit:40,_offset:40*(null!==le&&void 0!==le&&le.page?le.page:0)};null!==le&&void 0!==le&&le.status&&(ce.status=le.status);var ae=_.ZP.pipeline_runs.list(V(V({},ce),{},{backfill_id:J}),{refreshInterval:3e3,revalidateOnFocus:!0},{pauseFetch:!J}),se=ae.data,oe=ae.mutate,ue=!($&&W&&G&&X),de=!ee,pe=(0,s.useMemo)((function(){return(de?Q:null===se||void 0===se?void 0:se.pipeline_runs)||[]}),[se,Q,de]),fe=(0,s.useMemo)((function(){var e;return(null===se||void 0===se||null===(e=se.metadata)||void 0===e?void 0:e.count)||[]}),[se]),he=(0,s.useState)(null),be=he[0],ve=he[1],me=(0,s.useMemo)((function(){var e=null!==le&&void 0!==le&&le.page?le.page:0;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(j.Z,{disableRowSelect:de,emptyMessage:null!==le&&void 0!==le&&le.status?"No runs available":'No runs available. Please complete backfill configuration by clicking "Edit backfill" above.',fetchPipelineRuns:oe,onClickRow:function(e){return ve((function(n){var t=pe[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:pe,selectedRun:be,setErrors:c}),(0,B.jsx)(P.Z,{p:2,children:(0,B.jsx)(v.ZP,{maxPages:9,onUpdate:function(e){var n=Number(e),t=V(V({},le),{},{page:n>=0?n:0});z.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(ie,"/backfills/").concat(J,"?").concat((0,R.uM)(t)))},page:Number(e),totalPages:Math.ceil(fe/40)})})]})}),[oe,J,pe,ie,le,z,be,de,fe]),je=(0,s.useState)(I.G7[0]),xe=je[0],ge=je[1],Ze=(0,o.Db)(_.ZP.backfills.useUpdate(J),{onSuccess:function(e){return(0,F.wD)(e,{callback:function(){i(),oe()},onErrorCallback:function(e,n){return c({errors:n,response:e})}})}}),Pe=(0,r.Z)(Ze,2),ye=Pe[0],ke=Pe[1].isLoading,Oe=(0,s.useMemo)((function(){return!!ee&&(d.rn.CANCELLED!==ee&&d.rn.FAILED!==ee)}),[ee]),_e=(0,s.useMemo)((function(){return ee&&d.rn.CANCELLED!==ee&&d.rn.FAILED!==ee&&d.rn.INITIAL!==ee&&d.rn.RUNNING!==ee}),[ee]),Ie=(0,s.useMemo)((function(){var e={default:!0,size:1.5*C.iI},n=[[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.VW,V({},e)),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Backfill type"})]},"backfill_type_label"),(0,B.jsx)(O.ZP,{monospace:!0,children:K?d._7:d.VV},"backfill_type")],[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.rs,V({},e)),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Status"})]},"backfill_status_label"),(0,B.jsx)(O.ZP,{danger:d.rn.CANCELLED===ee||d.rn.FAILED==ee,default:d.rn.INITIAL===ee,monospace:!0,muted:!ee,success:d.rn.RUNNING===ee||d.rn.COMPLETED===ee,children:ee||"inactive"},"backfill_status")]];return K||n.push.apply(n,[[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.aw,V({},e)),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Start date and time"})]},"backfill_start_date_label"),(0,B.jsx)(O.ZP,{monospace:!0,children:(0,N.Vx)($)},"backfill_start_date")],[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.aw,V({},e)),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"End date and time"})]},"backfill_end_date_label"),(0,B.jsx)(O.ZP,{monospace:!0,children:(0,N.Vx)(W)},"backfill_end_date")],[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.Pf,V({},e)),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Interval type"})]},"interval_type_label"),(0,B.jsx)(O.ZP,{monospace:!0,children:G&&(0,E.kC)(G)},"interval_type")],[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.Pf,V({},e)),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Interval units"})]},"interval_units_label"),(0,B.jsx)(O.ZP,{monospace:!0,children:X},"interval_units")],[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.qZ,V({},e)),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Total runs"})]},"total_runs_label"),(0,B.jsx)(O.ZP,{monospace:!0,children:ne},"total_runs")]]),(0,B.jsx)(k.Z,{columnFlex:[null,1],rows:n})}),[K,W,G,X,$,ee,ne]),we=(0,s.useMemo)((function(){return re||{}}),[re]),Se=(0,s.useMemo)((function(){var e,n=[];return(0,L.Qr)(we)?n=(0,T.wx)(a,(function(e){return e.uuid===g.C})):Object.entries(we).forEach((function(e){var t=(0,r.Z)(e,2),i=t[0],l=t[1];n.push({uuid:i,value:(0,T.FS)(l)})})),"undefined"!==typeof n&&null!==(e=n)&&void 0!==e&&e.length?(0,B.jsx)(k.Z,{columnFlex:[null,1],rows:n.map((function(e){var n=e.uuid,t=e.value;return[(0,B.jsx)(O.ZP,{default:!0,monospace:!0,small:!0,children:n},"settings_variable_label_".concat(n)),(0,B.jsx)(O.ZP,{monospace:!0,small:!0,children:t},"settings_variable_".concat(n))]}))}):null}),[we,a]);return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(m.Z,{afterHidden:!be,before:(0,B.jsxs)(S.M,{children:[(0,B.jsxs)(P.Z,{mb:C.HN,pt:C.cd,px:C.cd,children:[(0,B.jsx)(P.Z,{mb:C.cd,children:(0,B.jsx)(w.yg,{size:5*C.iI})}),(0,B.jsx)(b.Z,{children:q})]}),(0,B.jsx)(P.Z,{px:C.cd,children:(0,B.jsx)(b.Z,{level:5,children:"Settings"})}),(0,B.jsx)(f.Z,{light:!0,mt:1,short:!0}),Ie,Se&&(0,B.jsxs)(P.Z,{my:C.HN,children:[(0,B.jsx)(P.Z,{px:C.cd,children:(0,B.jsx)(b.Z,{level:5,children:"Runtime variables"})}),(0,B.jsx)(f.Z,{light:!0,mt:1,short:!0}),Se]})]}),beforeWidth:34*C.iI,breadcrumbs:[{label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(ie,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{label:function(){return q},linkProps:{as:"/pipelines/".concat(ie,"/backfills/").concat(J),href:"/pipelines/[pipeline]/backfills/[...slug]"}}],buildSidekick:function(e){return(0,I.ZP)(V(V({},e),{},{selectedRun:be,selectedTab:xe,setSelectedTab:ge}))},errors:t,pageName:D.M.BACKFILLS,pipeline:l,setErrors:c,subheader:(0,B.jsxs)(h.ZP,{alignItems:"center",children:[!_e&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p.Z,{beforeIcon:Oe?(0,B.jsx)(w.dz,{size:2*C.iI}):(0,B.jsx)(w.Py,{inverted:!(d.rn.CANCELLED===ee||d.rn.FAILED===ee),size:2*C.iI}),danger:Oe,disabled:ue,loading:ke,onClick:function(e){(0,U.j)(e),ye({backfill:{status:Oe?d.rn.CANCELLED:d.rn.INITIAL}})},outline:!0,success:!Oe&&!(d.rn.CANCELLED===ee||d.rn.FAILED===ee)&&!ue,children:Oe?"Cancel backfill":d.rn.CANCELLED===ee||d.rn.FAILED===ee?"Retry backfill":"Start backfill"}),(0,B.jsx)(P.Z,{mr:C.cd})]}),!H&&(0,B.jsxs)(B.Fragment,{children:[ee===x.VO.COMPLETED?(0,B.jsx)(O.ZP,{bold:!0,default:!0,large:!0,children:"Filter runs by status:"}):(0,B.jsx)(p.Z,{linkProps:{as:"/pipelines/".concat(ie,"/backfills/").concat(J,"/edit"),href:"/pipelines/[pipeline]/backfills/[...slug]"},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Edit backfill"}),(0,B.jsx)(P.Z,{mr:C.cd})]}),!de&&(0,B.jsxs)(Z.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?z.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(ie,"/backfills/").concat(J)):(0,M.u7)({page:0,status:e.target.value})},paddingRight:4*C.iI,placeholder:"Select run status",value:(null===le||void 0===le?void 0:le.status)||"all",children:[(0,B.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),x.IK.map((function(e){return(0,B.jsx)("option",{value:e,children:x.Do[e]},e)}))]})]}),title:function(){return q},uuid:"backfill/detail",children:[(0,B.jsx)(P.Z,{mt:C.cd,px:C.cd,children:(0,B.jsx)(b.Z,{level:5,children:"Runs for this backfill"})}),(0,B.jsx)(f.Z,{light:!0,mt:C.cd,short:!0}),se?me:(0,B.jsx)(P.Z,{m:2,children:(0,B.jsx)(y.Z,{inverted:!0})})]})})},Y=t(2713),K=t(47999),W=t(93461),J=t(82944),G=[{label:function(){return"Date and time window"},description:function(){return"Backfill between a date and time range."},uuid:d.VV}],X=t(18025);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var $=function(e){var n=e.backfill,t=e.errors,i=e.fetchBackfill,l=e.pipeline,c=e.setErrors,a=(e.variables,(0,u.useRouter)()),v=(0,s.useState)(),j=v[0],x=v[1],g=j||{},y=g.block_uuid,I=g.id,S=g.interval_type,M=g.interval_units,A=(g.end_datetime,g.start_datetime,g.name),U=l.uuid,R=(0,s.useState)({}),H=R[0],V=(R[1],(0,s.useState)(y?d._7:d.VV)),z=V[0],q=V[1],$=(0,s.useState)(!1),ee=$[0],ne=$[1],te=(0,s.useState)(!1),re=te[0],ie=te[1],le=(0,s.useState)(null),ce=le[0],ae=le[1],se=(0,s.useState)(null),oe=se[0],ue=se[1],de=(0,s.useState)({hour:"00",minute:"00"}),pe=de[0],fe=de[1],he=(0,s.useState)({hour:"00",minute:"00"}),be=he[0],ve=he[1];(0,s.useEffect)((function(){if(n){x(n);var e=n.start_datetime;if(e){var t=e.split(" ")[1];ue((0,N.eI)(e)),ve({hour:t.substring(0,2),minute:t.substring(3,5)})}var r=n.end_datetime;if(r){var i=r.split(" ")[1];ae((0,N.eI)(r)),fe({hour:i.substring(0,2),minute:i.substring(3,5)})}}}),[n]);var me=(0,s.useMemo)((function(){var e=[[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.KJ,{default:!0,size:1.5*C.iI}),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Backfill name"})]},"model_name_detail"),(0,B.jsx)(J.Z,{monospace:!0,onChange:function(e){e.preventDefault(),x((function(n){return Q(Q({},n),{},{name:e.target.value})}))},placeholder:"Name this backfill",value:A},"model_name_input_detail")]];return d.VV===z&&e.push.apply(e,[[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.aw,{default:!0,size:1.5*C.iI}),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Start date and time"})]},"start_time"),(0,B.jsxs)("div",{style:{minHeight:"".concat(5.75*C.iI,"px")},children:[!ee&&(0,B.jsx)(J.Z,{monospace:!0,onClick:function(){return ne((function(e){return!e}))},onFocus:function(){return ne(!0)},placeholder:"YYYY-MM-DD HH:MM",value:oe?"".concat(oe.toISOString().split("T")[0]," ").concat(null===be||void 0===be?void 0:be.hour,":").concat(null===be||void 0===be?void 0:be.minute):""}),(0,B.jsx)("div",{style:{width:"400px"},children:(0,B.jsx)(K.Z,{disableEscape:!0,onClickOutside:function(){return ne(!1)},open:ee,style:{position:"relative"},children:(0,B.jsx)(Y.Z,{selectedDate:oe,selectedTime:be,setSelectedDate:ue,setSelectedTime:ve,topPosition:!0})})})]},"start_time_input")],[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.aw,{default:!0,size:1.5*C.iI}),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"End date and time"})]},"end_time"),(0,B.jsxs)("div",{style:{minHeight:"".concat(5.75*C.iI,"px")},children:[!re&&(0,B.jsx)(J.Z,{monospace:!0,onClick:function(){return ie((function(e){return!e}))},onFocus:function(){return ie(!0)},placeholder:"YYYY-MM-DD HH:MM",value:ce?"".concat(ce.toISOString().split("T")[0]," ").concat(null===pe||void 0===pe?void 0:pe.hour,":").concat(null===pe||void 0===pe?void 0:pe.minute):""}),(0,B.jsx)("div",{style:{width:"400px"},children:(0,B.jsx)(K.Z,{disableEscape:!0,onClickOutside:function(){return ie(!1)},open:re,style:{position:"relative"},children:(0,B.jsx)(Y.Z,{selectedDate:ce,selectedTime:pe,setSelectedDate:ae,setSelectedTime:fe,topPosition:!0})})})]},"end_time_input")],[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.Pf,{default:!0,size:1.5*C.iI}),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Interval type"})]},"interval_type"),(0,B.jsx)(Z.Z,{monospace:!0,onChange:function(e){e.preventDefault(),x((function(n){return Q(Q({},n),{},{interval_type:e.target.value})}))},placeholder:"Time spacing between each backfill",value:S,children:d.IB.map((function(e){return(0,B.jsx)("option",{value:e,children:(0,E.kC)(e)},e)}))},"interval_type_input")],[(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(w.Pf,{default:!0,size:1.5*C.iI}),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{default:!0,children:"Interval units"})]},"interval_units"),(0,B.jsx)(J.Z,{disabled:!S,monospace:!0,onChange:function(e){e.preventDefault(),x((function(n){return Q(Q({},n),{},{interval_units:e.target.value})}))},placeholder:S?"Number of ".concat(S).concat(S!==d.I7.CUSTOM?"s":""," between each backfill"):"Interval type is required",type:"number",value:M},"interval_unit_input")]]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(P.Z,{mb:2,px:C.cd,children:(0,B.jsx)(b.Z,{children:"Settings"})}),(0,B.jsx)(f.Z,{light:!0,short:!0}),(0,B.jsx)(k.Z,{columnFlex:[null,1],rows:e})]})}),[ce,oe,S,M,A,z,ee,re,pe,be]),je=(0,o.Db)(_.ZP.backfills.useUpdate(I),{onSuccess:function(e){return(0,F.wD)(e,{callback:function(){i(),a.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(U,"/backfills/").concat(I))},onErrorCallback:function(e,n){return c({errors:n,response:e})}})}}),xe=(0,r.Z)(je,2),ge=xe[0],Ze=xe[1].isLoading,Pe=(0,s.useCallback)((function(){var e=Q(Q({},(0,L.GL)(j,["name"])),{},{end_datetime:null,interval_type:null,interval_units:null,start_datetime:null,variables:(0,T.e7)(H)});return d._7===z||(e.interval_type=S,e.interval_units=M,e.end_datetime=ce&&null!==pe&&void 0!==pe&&pe.hour&&null!==pe&&void 0!==pe&&pe.minute?"".concat(ce.toISOString().split("T")[0]," ").concat(null===pe||void 0===pe?void 0:pe.hour,":").concat(null===pe||void 0===pe?void 0:pe.minute,":00"):null,e.start_datetime=oe&&null!==be&&void 0!==be&&be.hour&&null!==be&&void 0!==be&&be.minute?"".concat(oe.toISOString().split("T")[0]," ").concat(null===be||void 0===be?void 0:be.hour,":").concat(null===be||void 0===be?void 0:be.minute,":00"):null),ge({backfill:e})}),[ce,oe,S,M,j,H,z,pe,be]),ye=(0,s.useMemo)((function(){return d._7===z?!y:!(ce&&oe&&S&&M)}),[y,ce,oe,S,M,z,pe,be]);return(0,B.jsxs)(m.Z,{breadcrumbs:[{label:function(){return"Backfills"},linkProps:{as:"/pipelines/".concat(U,"/backfills"),href:"/pipelines/[pipeline]/backfills"}},{label:function(){return null===j||void 0===j?void 0:j.name},linkProps:{as:"/pipelines/".concat(U,"/backfills/").concat(I),href:"/pipelines/[pipeline]/backfills/[...slug]"}}],errors:t,pageName:D.M.BACKFILLS,pipeline:l,setErrors:c,subheader:(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(p.Z,{disabled:ye,loading:Ze,onClick:Pe,outline:!0,primary:!0,children:"Save changes"}),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(p.Z,{linkProps:{href:"/pipelines/[pipeline]/backfills/[...slug]",as:"/pipelines/".concat(U,"/backfills/").concat(I)},noHoverUnderline:!0,outline:!0,sameColorAsText:!0,children:"Cancel"})]}),title:function(){return"Edit ".concat(null===j||void 0===j?void 0:j.name)},uuid:"backfill/edit",children:[(0,B.jsxs)(P.Z,{p:C.cd,children:[(0,B.jsxs)(P.Z,{mb:2,children:[(0,B.jsx)(b.Z,{children:"Backfill type"}),(0,B.jsx)(O.ZP,{muted:!0,children:"How would you like this pipeline to be backfilled?"})]}),(0,B.jsx)(h.ZP,{children:G.map((function(e){var n=e.label,t=e.description,r=e.uuid,i=z===r,l=z&&!i;return(0,B.jsx)(p.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){q(r)},children:(0,B.jsx)(X.U,{selected:i,children:(0,B.jsxs)(h.ZP,{alignItems:"center",children:[(0,B.jsx)(W.Z,{children:(0,B.jsx)("input",{checked:i,type:"radio"})}),(0,B.jsx)(P.Z,{mr:C.cd}),(0,B.jsxs)(W.Z,{alignItems:"flex-start",flexDirection:"column",children:[(0,B.jsx)(b.Z,{bold:!0,default:!i&&!l,level:5,muted:!i&&l,children:n()}),(0,B.jsx)(O.ZP,{default:!i&&!l,leftAligned:!0,muted:l,children:t()})]})]})})},r)}))})]}),(0,B.jsx)(P.Z,{mt:5,children:me})]})},ee=t(41788);function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function re(e){var n=e.backfillId,t=e.pipelineUUID,r=e.subpath,i=(0,s.useState)(null),l=i[0],c=i[1],a=_.ZP.variables.pipelines.list(t,{},{revalidateOnFocus:!1}).data,o=(0,s.useMemo)((function(){return null===a||void 0===a?void 0:a.variables}),[a]),u=_.ZP.pipelines.detail(t,{includes_content:!1,includes_outputs:!1},{revalidateOnFocus:!1}).data,d=(0,s.useMemo)((function(){return te(te({},null===u||void 0===u?void 0:u.pipeline),{},{uuid:t})}),[u,t]),p=_.ZP.backfills.detail(n,{include_preview_runs:!0}),f=p.data,h=p.mutate,b=(0,s.useMemo)((function(){return null===f||void 0===f?void 0:f.backfill}),[f]);return"edit"===r?(0,B.jsx)($,{backfill:b,errors:l,fetchBackfill:h,pipeline:d,setErrors:c,variables:o}):(0,B.jsx)(z,{backfill:b,errors:l,fetchBackfill:h,pipeline:d,setErrors:c,variables:o})}re.getInitialProps=function(){var e=(0,i.Z)(a().mark((function e(n){var t,i,l,c,s,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.query,i=t.pipeline,l=t.slug,!Array.isArray(l)){e.next=4;break}return c=(0,r.Z)(l,2),s=c[0],o=c[1],e.abrupt("return",{backfillId:s,pipelineUUID:i,subpath:o});case 4:return e.abrupt("return",{pipelineUUID:i});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var ie=(0,ee.Z)(re)},53664:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/backfills/[...slug]",function(){return t(12625)}])}},function(e){e.O(0,[844,9902,426,1774,8792,7849,4495,1424,1005,7815,6422,547,8952,7496,9774,2888,179],(function(){return n=53664,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7496],{65597:function(e,n,t){t.d(n,{f:function(){return l}});var i=t(38626),r=t(23831),u=t(49125),o=t(73942),l=i.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-0"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*u.iI,o.TR,2*u.iI,(function(e){return"\n    box-shadow: ".concat((e.theme.shadow||r.Z.shadow).popup,";\n    background-color: ").concat((e.theme.interactive||r.Z.interactive).defaultBackground,";\n  ")}),(function(e){return e.leftOffset&&"\n    left: ".concat(e.leftOffset,"px;\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")}))},97496:function(e,n,t){var i=t(82394),r=t(75582),u=t(12691),o=t.n(u),l=t(34376),c=t.n(l),s=t(82684),a=t(83455),d=t(60328),p=t(38341),f=t(47999),h=t(93461),v=t(67971),_=t(10919),b=t(47409),g=t(86673),x=t(54283),j=t(87815),E=t(19711),m=t(82531),O=t(23831),C=t(73942),Z=t(22341),I=t(65597),y=t(93348),w=t(45838),P=t(49125),N=t(19395),k=t(24224),D=t(9736),L=t(96510),T=t(59e3),R=t(28598);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var V={monospace:!0,small:!0};function U(e){var n=e.cancelingRunId,t=e.disabled,i=e.isLoadingCancelPipeline,u=e.onCancel,o=e.onSuccess,l=e.pipelineRun,c=e.setCancelingRunId,p=e.setErrors,h=e.setShowConfirmationId,_=e.showConfirmationId,j=(0,D.Ct)(),w=l||{},N=w.id,k=w.pipeline_schedule_id,A=w.pipeline_schedule_token,S=w.pipeline_schedule_type,V=w.status,U=i&&N===n&&b.VO.RUNNING===V,M=(0,T.iV)(),F=(0,s.useMemo)((function(){return(null!==M&&void 0!==M&&M.page?+M.page:0)>0}),[null===M||void 0===M?void 0:M.page]),H=(0,a.Db)(y.Xm.API===S&&A?m.ZP.pipeline_runs.pipeline_schedules.useCreateWithParent(k,A):m.ZP.pipeline_runs.pipeline_schedules.useCreate(k),{onSuccess:function(e){return(0,L.wD)(e,{callback:function(){o()},onErrorCallback:function(e,n){return null===p||void 0===p?void 0:p({errors:n,response:e})}})}}),Y=(0,r.Z)(H,1)[0],z=(0,s.useCallback)((function(){h(null),Y({pipeline_run:{backfill_id:null===l||void 0===l?void 0:l.backfill_id,event_variables:(null===l||void 0===l?void 0:l.event_variables)||{},execution_date:null===l||void 0===l?void 0:l.execution_date,pipeline_schedule_id:null===l||void 0===l?void 0:l.pipeline_schedule_id,pipeline_uuid:null===l||void 0===l?void 0:l.pipeline_uuid,variables:(null===l||void 0===l?void 0:l.variables)||{}}})}),[Y,l,h]),B=(0,s.useCallback)((function(){h(null),c(N),u({id:N,status:b.VO.CANCELLED})}),[u,N,c,h]);return(0,R.jsxs)("div",{style:{position:"relative"},children:[(0,R.jsx)(d.Z,{backgroundColor:U&&O.Z.accent.yellow,beforeIcon:b.VO.INITIAL!==V&&!t&&(0,R.jsxs)(R.Fragment,{children:[b.VO.COMPLETED===V&&(0,R.jsx)(Z.Jr,{size:2*P.iI}),[b.VO.FAILED,b.VO.CANCELLED].includes(V)&&(0,R.jsx)(Z.Py,{inverted:b.VO.CANCELLED===V&&!j,size:2*P.iI}),[b.VO.RUNNING].includes(V)&&(0,R.jsx)(x.Z,{color:U?O.Z.status.negative:O.Z.monotone.white,small:!0})]}),borderRadius:C.D7,danger:b.VO.FAILED===V&&!j,default:b.VO.INITIAL===V,disabled:t||j,loading:!l,onClick:function(){return h(N)},padding:"6px",primary:b.VO.RUNNING===V&&!U&&!j,warning:b.VO.CANCELLED===V&&!j,children:t?"Ready":U?"Canceling":b.Do[V]}),(0,R.jsx)(f.Z,{onClickOutside:function(){return h(null)},open:_===N,children:(0,R.jsxs)(I.f,{children:[[b.VO.RUNNING,b.VO.INITIAL].includes(V)&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(E.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,R.jsx)(g.Z,{mb:1}),(0,R.jsxs)(E.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,R.jsx)("br",{}),"the current pipeline run."]}),(0,R.jsx)(E.ZP,{}),(0,R.jsx)(g.Z,{mt:1,children:(0,R.jsxs)(v.ZP,{children:[(0,R.jsx)(d.Z,{onClick:function(){B(),z()},children:"Retry run"}),(0,R.jsx)(g.Z,{ml:1}),(0,R.jsx)(d.Z,{onClick:B,children:"Cancel run"})]})})]}),[b.VO.CANCELLED,b.VO.FAILED,b.VO.COMPLETED].includes(V)&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(E.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",V]}),(0,R.jsx)(g.Z,{mb:1}),(0,R.jsxs)(E.ZP,{children:["Retry the run with changes you have made to the pipeline.",F?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("br",{}),"Note that the retried run may appear on a previous page."]}):null]}),(0,R.jsx)(g.Z,{mb:1}),(0,R.jsx)(d.Z,{onClick:z,children:"Retry run"})]})]})})]})}n.Z=function(e){var n=e.allowBulkSelect,t=e.disableRowSelect,u=e.emptyMessage,l=void 0===u?"No runs available":u,f=e.fetchPipelineRuns,x=e.hideTriggerColumn,O=e.onClickRow,I=e.pipelineRuns,y=e.selectedRun,D=e.selectedRuns,T=e.setSelectedRuns,A=e.setErrors,M=(0,s.useState)(null),F=M[0],H=M[1],Y=(0,s.useState)(null),z=Y[0],B=Y[1],G=(0,a.Db)((function(e){var n=e.id,t=e.status;return m.ZP.pipeline_runs.useUpdate(n)({pipeline_run:{status:t}})}),{onSuccess:function(e){return(0,L.wD)(e,{callback:function(){H(null),null===f||void 0===f||f()},onErrorCallback:function(e,n){H(null),null===A||void 0===A||A({errors:n,response:e})}})}}),J=(0,r.Z)(G,2),K=J[0],q=J[1].isLoading,Q=[null,1],W=[{uuid:"Status"},{uuid:"Pipeline"}];x||(Q.push(1),W.push({uuid:"Trigger"})),Q.push.apply(Q,[1,1,null,null]),W.push.apply(W,[{uuid:"Execution date"},{uuid:"Completed at"},{uuid:"Block runs"},{uuid:"Logs"}]);var X=(0,s.useMemo)((function(){return I.every((function(e){var n=e.id;return!(null===D||void 0===D||!D[n])}))}),[I,D]);return n&&(Q.unshift(null),W.unshift({label:function(){return(0,R.jsx)(p.Z,{checked:X,onClick:function(){var e=(0,k.HK)(I||[],(function(e){return e.id}));T(X?{}:e)}})},uuid:"Selected"})),!t&&O&&(Q.push(null),W.push({label:function(){return""},uuid:"action"})),(0,R.jsx)(w.cl,{minHeight:30*P.iI,overflowVisible:!!z,children:0===(null===I||void 0===I?void 0:I.length)?(0,R.jsx)(g.Z,{px:3,py:1,children:(0,R.jsx)(E.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:l})}):(0,R.jsx)(j.Z,{columnFlex:Q,columns:W,isSelectedRow:function(e){return!t&&I[e].id===(null===y||void 0===y?void 0:y.id)},onClickRow:t?null:O,rowVerticalPadding:6,rows:null===I||void 0===I?void 0:I.map((function(e,r){var u,l,a=e.block_runs_count,j=e.completed_block_runs_count,m=e.completed_at,y=e.execution_date,w=e.id,k=e.pipeline_schedule_id,L=e.pipeline_schedule_name,M=e.pipeline_uuid,Y=e.status,G=!w&&!Y,J="".concat(j," out of ").concat(a," block runs completed"),Q=[];r>0&&I[r-1].execution_date===e.execution_date&&I[r-1].pipeline_schedule_id===e.pipeline_schedule_id?(Q=[(0,R.jsx)(g.Z,{ml:1,children:(0,R.jsxs)(v.ZP,{alignItems:"center",children:[(0,R.jsx)(Z.TT,{size:2*P.iI,useStroke:!0}),(0,R.jsx)(d.Z,{borderRadius:C.D7,notClickable:!0,padding:"6px",children:(0,R.jsx)(E.ZP,{muted:!0,children:b.Do[Y]})})]})},"row_status"),(0,R.jsx)(E.ZP,{default:!0,monospace:!0,muted:!0,children:M},"row_pipeline_uuid")],x||Q.push((0,R.jsx)(E.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_trigger_retry")),(u=Q).push.apply(u,[(0,R.jsx)(E.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_date_retry"),(0,s.createElement)(E.ZP,S(S({},V),{},{key:"row_completed",muted:!0}),m&&(0,N.Vx)(m)||"-"),(0,R.jsx)(o(),{as:"/pipelines/".concat(M,"/runs/").concat(w),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,R.jsx)(_.Z,{bold:!0,muted:!0,title:J,children:"".concat(j," / ").concat(a)})},"row_block_runs"),(0,R.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return c().push("/pipelines/".concat(M,"/logs?pipeline_run_id[]=").concat(w))},children:(0,R.jsx)(Z.UL,{default:!0,size:2*P.iI})},"row_logs")])):(Q=[(0,R.jsx)(U,{cancelingRunId:F,disabled:G,isLoadingCancelPipeline:q,onCancel:K,onSuccess:f,pipelineRun:e,setCancelingRunId:H,setErrors:A,setShowConfirmationId:B,showConfirmationId:z},"row_retry_button"),(0,R.jsx)(E.ZP,{default:!0,monospace:!0,children:M},"row_pipeline_uuid")],x||Q.push((0,R.jsx)(o(),{as:"/pipelines/".concat(M,"/triggers/").concat(k),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,R.jsx)(_.Z,{bold:!0,sky:!0,children:L})},"row_trigger")),(l=Q).push.apply(l,[(0,s.createElement)(E.ZP,S(S({},V),{},{default:!0,key:"row_date"}),y&&(0,N.Vx)(y)||"-"),(0,s.createElement)(E.ZP,S(S({},V),{},{default:!0,key:"row_completed"}),m&&(0,N.Vx)(m)||"-"),(0,R.jsx)(o(),{as:"/pipelines/".concat(M,"/runs/").concat(w),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,R.jsx)(_.Z,{bold:!0,disabled:G,sky:!0,title:J,children:G?"":"".concat(j," / ").concat(a)})},"row_block_runs"),(0,R.jsx)(d.Z,{default:!0,disabled:G,iconOnly:!0,noBackground:!0,onClick:function(){return c().push("/pipelines/".concat(M,"/logs?pipeline_run_id[]=").concat(w))},children:(0,R.jsx)(Z.UL,{default:!0,size:2*P.iI})},"row_item_13")]));if(n){var W=!(null===D||void 0===D||!D[w]);Q.unshift((0,R.jsx)(p.Z,{checked:W,onClick:function(){T((function(n){return S(S({},n),{},(0,i.Z)({},w,W?null:e))}))}},"selected-pipeline-run-".concat(w)))}return!t&&O&&Q.push((0,R.jsx)(h.Z,{flex:1,justifyContent:"flex-end",children:(0,R.jsx)(Z._Q,{default:!0,size:2*P.iI})})),Q})),uuid:"pipeline-runs"})})}},19395:function(e,n,t){t.d(n,{IJ:function(){return d},M8:function(){return b},Vx:function(){return f},eI:function(){return p},gU:function(){return v},tL:function(){return h},vJ:function(){return _}});var i,r,u=t(82394),o=t(92083),l=t.n(o),c=t(28799);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,i=n.completed_at,r=n.started_at,o=n.status,c=null;r&&i&&(c=l()(i).valueOf()-l()(r).valueOf());return a(a({},e),{},(0,u.Z)({},t,{runtime:c,status:o}))}),{})}function p(e){if(!e)return null;var n=new Date(l()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}function f(e){return"string"!==typeof e?e:p(e.split("+")[0]).toISOString().split(".")[0]}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(r||(r={}));var h=(i={},(0,u.Z)(i,r.DAY,86400),(0,u.Z)(i,r.HOUR,3600),(0,u.Z)(i,r.MINUTE,60),(0,u.Z)(i,r.SECOND,1),i);function v(e){var n=r.SECOND,t=e;return e%86400===0?(t/=86400,n=r.DAY):e%3600===0?(t/=3600,n=r.HOUR):e%60===0&&(t/=60,n=r.MINUTE),{time:t,unit:n}}function _(e,n){return e*h[n]}function b(e){var n,t="";return t="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(t="".concat(t,"/").concat(e.token)),(n=window.location.port)&&(t=t.replace(n,c.QT)),t}},47409:function(e,n,t){t.d(n,{Az:function(){return c},BF:function(){return l},Do:function(){return a},IK:function(){return o},VO:function(){return u},sZ:function(){return s}});var i,r=t(82394),u=t(66050).V,o=[u.FAILED,u.COMPLETED,u.RUNNING,u.CANCELLED,u.INITIAL],l=[u.INITIAL,u.RUNNING],c=[u.CANCELLED,u.COMPLETED,u.FAILED],s="__mage_variables",a=(i={},(0,r.Z)(i,u.CANCELLED,"Cancelled"),(0,r.Z)(i,u.COMPLETED,"Done"),(0,r.Z)(i,u.FAILED,"Failed"),(0,r.Z)(i,u.INITIAL,"Ready"),(0,r.Z)(i,u.RUNNING,"Running"),i)},93348:function(e,n,t){t.d(n,{TR:function(){return d},U5:function(){return c},Xm:function(){return u},Z4:function(){return a},fq:function(){return l},kJ:function(){return s}});var i,r,u,o=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(u||(u={}));var l,c,s,a=(i={},(0,o.Z)(i,u.API,(function(){return"API"})),(0,o.Z)(i,u.EVENT,(function(){return"event"})),(0,o.Z)(i,u.TIME,(function(){return"schedule"})),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(l||(l={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(c||(c={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(s||(s={}));var d=(r={},(0,o.Z)(r,s.CREATED_AT,"Created at"),(0,o.Z)(r,s.NAME,"Name"),(0,o.Z)(r,s.PIPELINE,"Pipeline"),(0,o.Z)(r,s.STATUS,"Status"),(0,o.Z)(r,s.TYPE,"Type"),r)}}]);
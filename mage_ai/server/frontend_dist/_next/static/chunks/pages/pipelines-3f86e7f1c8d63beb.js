(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1221],{1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return O}});var i=t(82394),o=t(21831),r=t(82684),u=t(47999),l=t(49894),c=t(93461),s=t(57384),a=t(41424),d=t(72454),p=t(28598);function f(e,n){var t=e.children;return(0,p.jsx)(d.HS,{ref:n,children:t})}var h=r.forwardRef(f),v=t(32063),m=t(85019),b=t(82531),j=t(66166),g=t(3055),x=t(49125),y=t(91427),Z=t(24141);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,i=e.after,f=e.afterHidden,w=e.afterWidth,O=e.afterWidthOverride,k=e.before,P=e.beforeWidth,E=e.breadcrumbs,I=e.children,T=e.errors,_=e.headerMenuItems,S=e.headerOffset,A=e.mainContainerHeader,M=e.navigationItems,D=e.setErrors,R=e.subheaderChildren,B=e.title,N=e.uuid,L=(0,Z.i)().width,G="dashboard_after_width_".concat(N),Y="dashboard_before_width_".concat(N),H=(0,r.useRef)(null),U=(0,r.useState)(O?w:(0,y.U2)(G,w)),V=U[0],z=U[1],W=(0,r.useState)(!1),F=W[0],q=W[1],Q=(0,r.useState)(k?Math.max((0,y.U2)(Y,P),13*x.iI):null),K=Q[0],$=Q[1],J=(0,r.useState)(!1),X=J[0],ee=J[1],ne=(0,r.useState)(null)[1],te=b.ZP.projects.list({},{revalidateOnFocus:!1}).data,ie=null===te||void 0===te?void 0:te.projects,oe={label:function(){var e;return null===ie||void 0===ie||null===(e=ie[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},re=[];E?(t&&re.push(oe),re.push.apply(re,(0,o.Z)(E))):(null===ie||void 0===ie?void 0:ie.length)>=1&&re.push.apply(re,[oe,{bold:!0,label:function(){return B}}]),(0,r.useEffect)((function(){null===H||void 0===H||!H.current||F||X||null===ne||void 0===ne||ne(H.current.getBoundingClientRect().width)}),[F,V,X,K,H,ne,L]),(0,r.useEffect)((function(){F||(0,y.t8)(G,V)}),[f,F,V,G]),(0,r.useEffect)((function(){X||(0,y.t8)(Y,K)}),[X,K,Y]);var ue=(0,j.Z)(w);return(0,r.useEffect)((function(){O&&ue!==w&&z(w)}),[O,w,ue]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.Z,{title:B}),(0,p.jsx)(a.Z,{breadcrumbs:re,menuItems:_,project:null===ie||void 0===ie?void 0:ie[0],version:null===ie||void 0===ie||null===(n=ie[0])||void 0===n?void 0:n.version}),(0,p.jsxs)(d.Nk,{children:[0!==(null===M||void 0===M?void 0:M.length)&&(0,p.jsx)(d.lm,{showMore:!0,children:(0,p.jsx)(m.Z,{navigationItems:M,showMore:!0})}),(0,p.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,p.jsxs)(v.Z,{after:i,afterHeightOffset:g.Mz,afterHidden:f,afterMousedownActive:F,afterWidth:V,before:k,beforeHeightOffset:g.Mz,beforeMousedownActive:X,beforeWidth:d.k1+(k?K:0),headerOffset:S,hideAfterCompletely:!0,leftOffset:k?d.k1:null,mainContainerHeader:A,mainContainerRef:H,setAfterMousedownActive:q,setAfterWidth:z,setBeforeMousedownActive:ee,setBeforeWidth:$,children:[R&&(0,p.jsx)(h,{children:R}),I]})})]}),T&&(0,p.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===D||void 0===D?void 0:D(null)},children:(0,p.jsx)(l.Z,C(C({},T),{},{onClose:function(){return null===D||void 0===D?void 0:D(null)}}))})]})}},64651:function(e,n,t){"use strict";t.d(n,{d:function(){return r}});var i=t(98781),o=t(90211),r=function(e,n){var t=[{label:function(){return"Standard (batch)"},onClick:function(){return e({pipeline:{name:(0,o.Y6)()}})},uuid:"Pipelines/NewPipelineMenu/standard"},{label:function(){return"Data integration"},onClick:function(){return e({pipeline:{name:(0,o.Y6)(),type:i.qL.INTEGRATION}})},uuid:"Pipelines/NewPipelineMenu/integration"},{label:function(){return"Streaming"},onClick:function(){return e({pipeline:{name:(0,o.Y6)(),type:i.qL.STREAMING}})},uuid:"Pipelines/NewPipelineMenu/streaming"}];return null!==n&&void 0!==n&&n.showBrowseTemplates&&t.push({label:function(){return"From a template"},onClick:function(){var e;return null===n||void 0===n||null===(e=n.showBrowseTemplates)||void 0===e?void 0:e.call(n)},uuid:"Pipelines/NewPipelineMenu/custom_template"}),t}},50316:function(e,n,t){"use strict";t.d(n,{B:function(){return p}});var i=t(82394),o=t(30264),r=t(11135),u=t(22341),l=t(99994),c=t(49125),s=t(28598);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};n.Z=function(e){var n=e.addButtonMenuOpen,t=e.addButtonMenuRef,i=e.isLoading,a=e.label,f=e.menuItems,h=e.onClick,v=e.onClickCallback;return(0,s.jsx)(o.Z,{disableKeyboardShortcuts:!0,items:f,onClickCallback:v,onClickOutside:v,open:n,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,s.jsx)(r.ZP,d(d({},p),{},{background:l.eW,beforeElement:(0,s.jsx)(u.mm,{size:2.5*c.iI}),loading:i,onClick:function(e){e.preventDefault(),null===h||void 0===h||h()},uuid:"shared/AddButton/index",children:a}))})}},93348:function(e,n,t){"use strict";t.d(n,{TR:function(){return d},U5:function(){return c},Xm:function(){return r},Z4:function(){return a},fq:function(){return l},kJ:function(){return s}});var i,o,r,u=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(r||(r={}));var l,c,s,a=(i={},(0,u.Z)(i,r.API,(function(){return"API"})),(0,u.Z)(i,r.EVENT,(function(){return"event"})),(0,u.Z)(i,r.TIME,(function(){return"schedule"})),i);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(l||(l={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(c||(c={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(s||(s={}));var d=(o={},(0,u.Z)(o,s.CREATED_AT,"Created at"),(0,u.Z)(o,s.NAME,"Name"),(0,u.Z)(o,s.PIPELINE,"Pipeline"),(0,u.Z)(o,s.STATUS,"Status"),(0,u.Z)(o,s.TYPE,"Type"),o)},12257:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Le}});var i=t(77837),o=t(75582),r=t(82394),u=t(38860),l=t.n(u),c=t(12691),s=t.n(c),a=t(83455),d=t(82684),p=t(34376),f=t(2485),h=t(60328),v=t(79891),m=t(1210),b=t(93461),j=t(67971),g=t(87372),x=t(11135),y=t(29237),Z=t(86673),w=t(19711),C=t(38435),O=t(82944),k=t(28598);var P=function(e){var n=e.description,t=e.isLoading,i=e.maxWidth,o=e.minWidth,r=e.noEmptyValue,u=e.onClose,l=e.onSave,c=e.textArea,s=e.title,a=e.value,p=(0,d.useRef)(null),f=(0,d.useState)(a),v=f[0],m=f[1],b=c?C.Z:O.Z;return(0,d.useEffect)((function(){var e;null===p||void 0===p||null===(e=p.current)||void 0===e||e.focus()}),[]),(0,k.jsxs)(y.Z,{maxWidth:i,minWidth:o,children:[(0,k.jsx)(w.ZP,{bold:!0,children:s}),(0,k.jsx)(Z.Z,{mt:1,children:(0,k.jsx)(b,{monospace:!0,onChange:function(e){return m(e.target.value)},ref:p,rows:c?7:null,value:v})}),n&&(0,k.jsx)(Z.Z,{mt:2,children:(0,k.jsx)(w.ZP,{muted:!0,small:!0,children:n})}),(0,k.jsx)(Z.Z,{mt:3,children:(0,k.jsxs)(j.Z,{children:[(0,k.jsx)(x.ZP,{bold:!0,inline:!0,loading:t,onClick:function(){v===a||r&&!v?u():l(v)},outline:!0,primary:!0,uuid:"Inputs/InputModal/SaveInput",children:"Save"}),(0,k.jsx)(Z.Z,{ml:1}),(0,k.jsx)(h.Z,{onClick:u,children:"Cancel"})]})})]})},E=t(10919),I=t(98781),T=t(41788),_=t(54283),S=t(87815),A=t(55264),M=t(70902),D=t(50316),R=t(18283),B=t(47999),N=t(30264),L=t(62609),G=t(38626),Y=t(23831),H=t(73942),U=t(37391),V=t(49125),z=74*V.iI,W=48*V.iI,F=G.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-18n432u-0"})(["position:absolute;border-radius:","px;overflow:hidden;width:","px;display:none;"," "," "," "," ",""],H.n_,z,(function(e){return"\n    background-color: ".concat((e.theme||Y.Z).background.panel,";\n    border: ").concat(H.mP,"px ").concat(H.M8," ").concat((e.theme||Y.Z).interactive.defaultBackground,";\n    box-shadow: ").concat((e.theme.shadow||Y.Z.shadow).window,";\n  ")}),(function(e){return e.display&&"\n    display: block;\n  "}),(function(e){return e.compact&&"\n    width: ".concat(.75*z,"px;\n  ")}),(function(e){return"undefined"!==typeof e.left&&"\n    left: ".concat(e.left,"px;\n  ")}),(function(e){return"undefined"!==typeof e.top&&"\n    top: ".concat(e.top,"px;\n  ")})),q=G.default.div.withConfig({displayName:"indexstyle__MainStyle",componentId:"sc-18n432u-1"})(["display:flex;border-radius:","px;overflow:hidden;height:","px;"," ",""],H.n_,W,(function(e){return"\n    background-color: ".concat((e.theme||Y.Z).background.content,";\n    border: ").concat(H.YF,"px ").concat(H.M8," ").concat((e.theme||Y.Z).interactive.defaultBackground,";\n  ")}),(function(e){return e.compact&&"\n    height: ".concat(W/2,"px;\n  ")})),Q=G.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-18n432u-2"})(["width:100%;overflow:auto;"," ",""],U.w5,(function(e){return"\n    border-right: ".concat(H.YF,"px ").concat(H.M8," ").concat((e.theme||Y.Z).background.panel,";\n  ")})),K=G.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-18n432u-3"})(["width:100%;overflow:auto;",""],U.w5),$=(0,G.css)(["display:flex;align-items:center;justify-content:space-between;padding:","px ","px;"],V.iI,2*V.iI),J=G.default.div.withConfig({displayName:"indexstyle__OptionStyle",componentId:"sc-18n432u-4"})([""," padding-top:","px;padding-bottom:","px;&:hover{cursor:pointer;","}",""],$,1.5*V.iI,1.5*V.iI,(function(e){return"\n      background-color: ".concat((e.theme||Y.Z).monotone.black,";\n    ")}),(function(e){return e.highlighted&&"\n    background-color: ".concat((e.theme||Y.Z).monotone.black,";\n  ")})),X=G.default.div.withConfig({displayName:"indexstyle__ToggleValueStyle",componentId:"sc-18n432u-5"})([""," ",""],$,(function(e){return"\n    border-bottom: ".concat(H.YF,"px ").concat(H.M8," ").concat((e.theme||Y.Z).borders.medium2,";\n  ")})),ee=t(22341),ne=t(33766),te=t(90211);function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function oe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var re,ue=function(e){var n,t,i,u=e.children,l=e.compact,c=e.onClickCallback,s=e.onClickOutside,a=e.onSecondaryClick,p=e.open,f=e.options,v=void 0===f?{}:f,m=e.parentRef,g=e.query,x=e.setOpen,y=e.toggleValueMapping,C=(0,d.useState)(null),O=C[0],P=C[1],E=(0,d.useState)(v),I=E[0],T=E[1];(0,d.useEffect)((function(){T(v)}),[v]);var _=((null===m||void 0===m||null===(n=m.current)||void 0===n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n))||{}).top,S=void 0===_?0:_,A=Object.keys(v);return(0,k.jsxs)(B.Z,{onClickOutside:s,open:!0,children:[(0,k.jsx)("div",{ref:m,children:u}),(0,k.jsxs)(F,{compact:l,display:p,top:S-5,children:[(0,k.jsxs)(q,{compact:l,children:[(0,k.jsx)(b.Z,{flex:"1",children:(0,k.jsx)(Q,{children:A.map((function(e){return(0,k.jsxs)(J,{highlighted:O===e,onMouseEnter:function(){return P(e)},children:[(0,k.jsx)(w.ZP,{children:(0,te.kC)(e)}),(0,k.jsx)(ee._Q,{})]},e)}))})}),(0,k.jsx)(b.Z,{flex:"2",children:(0,k.jsx)(K,{children:O&&Object.entries((null===(i=I||v)||void 0===i?void 0:i[O])||{}).map((function(e){var n,t=(0,o.Z)(e,2),i=t[0],u=t[1];return(0,k.jsxs)(X,{children:[(0,k.jsx)(w.ZP,{children:(null===y||void 0===y||null===(n=y[O])||void 0===n?void 0:n[i])||(0,te.J3)((0,te.kC)(i))}),(0,k.jsx)(M.Z,{checked:u,onCheck:function(){return T((function(e){return oe(oe({},e),{},(0,r.Z)({},O,oe(oe({},null===e||void 0===e?void 0:e[O]),{},(0,r.Z)({},i,!u))))}))}})]},i)}))})})]}),(0,k.jsx)(Z.Z,{m:1,children:(0,k.jsxs)(j.Z,{children:[(0,k.jsx)(h.Z,{onClick:function(){var e=Object.entries(I).reduce((function(e,n){var t=(0,o.Z)(n,2),i=t[0],r=t[1],u=[];return Object.entries(r).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0];return n[1]&&u.push(t)})),e[i]=u,e}),{});null===c||void 0===c||c(g,e),(0,ne.g_)(g,e,{addingMultipleValues:!0,pushHistory:!0})},secondary:!0,children:"Apply"}),(0,k.jsx)(Z.Z,{mr:1}),(0,k.jsx)(h.Z,{noBackground:!0,onClick:function(){x(!1),null===a||void 0===a||a()},children:"Defaults"})]})})]})]})},le=t(46261),ce="".concat(1.5*V.iI,"px"),se=40*V.iI;!function(e){e[e.SECONDARY=1]="SECONDARY",e[e.DELETE=2]="DELETE"}(re||(re={}));var ae={autoHide:!0,size:null,widthFitContent:!0},de=t(7715),pe=t(9736),fe=t(91427),he="pipeline_list_filters",ve="pipeline_list_group_bys";function me(e){return(0,fe.t8)(he,e),e}function be(e){return(0,fe.t8)(ve,e),e}function je(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function ge(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?je(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):je(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var xe=function(e){var n=e.addButtonProps,t=e.deleteRowProps,i=e.filterOptions,r=void 0===i?{}:i,u=e.filterValueLabelMapping,l=e.groupButtonProps,c=e.moreActionsMenuItems,s=e.onFilterApply,a=e.query,f=void 0===a?{}:a,h=e.searchProps,v=e.secondaryActionButtonProps,m=e.selectedRowId,g=e.setSelectedRow,y=(0,pe.Ct)(),C=(0,p.useRouter)(),P=(0,d.useRef)(null),E=(0,d.useRef)(null),I=(0,d.useRef)(null),T=(0,d.useRef)(null),_=(0,d.useRef)(null),S=(0,d.useState)(!1),A=S[0],M=S[1],G=(0,d.useState)(!1),Y=G[0],U=G[1],z=(0,d.useState)(!1),W=z[0],F=z[1],q=(0,d.useState)(!1),Q=q[0],K=q[1],$=(0,d.useState)(null),J=$[0],X=$[1],ne=!m,te=(0,d.useCallback)((function(){return M(!1)}),[]),ie=(0,d.useCallback)((function(){return U(!1)}),[]),oe=(0,d.useCallback)((function(){return F(!1)}),[]),fe=(0,d.useCallback)((function(){return K(null)}),[]),he=(0,d.useCallback)((function(){return X(null)}),[]),ve=v||{},be=ve.Icon,je=ve.confirmationDescription,xe=ve.confirmationMessage,ye=ve.isLoading,Ze=ve.label,we=ve.onClick,Ce=ve.openConfirmationDialogue,Oe=ve.tooltip,ke=t||{},Pe=ke.confirmationMessage,Ee=ke.isLoading,Ie=ke.item,Te=ke.onDelete,_e=h||{},Se=_e.placeholder,Ae=_e.onChange,Me=_e.value,De=(0,d.useMemo)((function(){return Object.entries(r).reduce((function(e,n){var t=(0,o.Z)(n,2),i=t[0],r=t[1];return e[i]={},r.forEach((function(n){var t,o=(null===(t=f["".concat(i,"[]")])||void 0===t?void 0:t.includes(n))||!1;e[i][n]=o})),e}),{})}),[r,f]),Re=n||{},Be=Re.label,Ne=Re.menuItems,Le=Re.isLoading,Ge=(0,d.useMemo)((function(){return(0,k.jsx)(D.Z,{addButtonMenuOpen:A,addButtonMenuRef:P,isLoading:Le,label:Be,menuItems:Ne,onClick:function(){return M((function(e){return!e}))},onClickCallback:te})}),[Be,Ne,A,te,Le]),Ye=(0,d.useMemo)((function(){return(0,de.dw)(De)}),[De]),He=(0,d.useMemo)((function(){return(0,k.jsx)(ue,{compact:!0,onClickCallback:function(e,n){s&&(null===s||void 0===s||s(e,n)),ie&&(null===ie||void 0===ie||ie())},onClickOutside:ie,onSecondaryClick:function(){me({}),C.push("/pipelines")},open:Y,options:De,parentRef:E,query:f,setOpen:U,toggleValueMapping:u,children:(0,k.jsx)(x.ZP,ge(ge({},D.B),{},{afterElement:Ye>0?(0,k.jsx)(R.Z,{cyan:!0,noVerticalPadding:!0,children:(0,k.jsx)(w.ZP,{bold:!0,inverted:!0,children:Ye})}):null,beforeElement:(0,k.jsx)(ee.wn,{size:2*V.iI}),onClick:function(){return U((function(e){return!e}))},uuid:"Table/Toolbar/FilterButton",children:"Filter"}))})}),[ie,Y,De,u,Ye,s,f,C]),Ue=l||{},Ve=Ue.groupByLabel,ze=Ue.menuItems,We=(0,d.useMemo)((function(){return(0,k.jsx)(N.Z,{disableKeyboardShortcuts:!0,items:ze,onClickCallback:oe,onClickOutside:oe,open:W,parentRef:I,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/GroupMenu",children:(0,k.jsx)(x.ZP,ge(ge({},D.B),{},{beforeElement:(0,k.jsx)(ee.ZA,{size:2.5*V.iI}),onClick:function(){F((function(e){return!e}))},uuid:"Table/Toolbar/GroupButton",children:Ve?"Grouped by ".concat(Ve):"Group"}))})}),[oe,W,Ve,ze]),Fe=(0,d.useMemo)((function(){return(0,k.jsx)(N.Z,{disableKeyboardShortcuts:!0,items:c,onClickCallback:fe,onClickOutside:fe,open:Q,parentRef:T,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/MoreActionsMenu",children:(0,k.jsx)(le.Z,ge(ge({},ae),{},{label:"More actions",children:(0,k.jsx)(x.ZP,{Icon:ee.mH,bold:!0,disabled:ne,greyBorder:!0,onClick:function(){return K((function(e){return!e}))},smallIcon:!0,uuid:"Table/Toolbar/MoreActionsButton"})}))})}),[fe,ne,Q,c]);return(0,k.jsxs)(j.Z,{alignItems:"center",children:[Ge,(0,k.jsx)(Z.Z,{mr:ce}),He,(null===ze||void 0===ze?void 0:ze.length)>0&&(0,k.jsx)(Z.Z,{ml:ce,children:We}),!y&&we&&(0,k.jsxs)(Z.Z,{ml:ce,children:[(0,k.jsx)(le.Z,ge(ge({},ae),{},{label:Oe,children:(0,k.jsx)(x.ZP,{Icon:!ye&&be,bold:!0,disabled:ne,greyBorder:!0,loading:ye,onClick:Ce?function(){return X(re.SECONDARY)}:we,smallIcon:!0,uuid:"Table/Toolbar/SecondaryActionButton",children:Ze})})),(0,k.jsx)(B.Z,{onClickOutside:he,open:J===re.SECONDARY,children:(0,k.jsx)(L.Z,{onCancel:he,onClick:function(){we(),he(),g(null)},subtitle:je,title:xe,top:58,width:se})})]}),!y&&Te&&(0,k.jsxs)(Z.Z,{ml:ce,children:[(0,k.jsx)(le.Z,ge(ge({},ae),{},{label:"Delete ".concat(Ie),children:(0,k.jsx)(x.ZP,{Icon:!Ee&&ee.rF,bold:!0,disabled:ne,greyBorder:!0,loading:Ee,onClick:function(){return X(re.DELETE)},smallIcon:!0,uuid:"Table/Toolbar/DeleteButton"})})),(0,k.jsx)(B.Z,{onClickOutside:he,open:J===re.DELETE,children:(0,k.jsx)(L.Z,{danger:!0,onCancel:he,onClick:function(){Te(m),he(),g(null)},subtitle:Pe,title:"Are you sure you want to delete the ".concat(Ie," ").concat(m,"?"),top:58,width:se})})]}),!y&&(null===c||void 0===c?void 0:c.length)>0&&(0,k.jsx)(Z.Z,{ml:ce,children:Fe}),Ae&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Z.Z,{ml:ce}),(0,k.jsx)(b.Z,{flex:1,children:(0,k.jsx)(O.Z,{afterIcon:Me?(0,k.jsx)(ee.x8,{}):null,afterIconClick:function(){var e;Ae(""),null===_||void 0===_||null===(e=_.current)||void 0===e||e.focus()},afterIconSize:1.5*V.iI,beforeIcon:(0,k.jsx)(ee.HN,{}),borderRadius:H.n_,defaultColor:!0,fullWidth:!0,greyBorder:!0,maxWidth:60*V.iI,onChange:function(e){return Ae(e.target.value)},paddingVertical:9,placeholder:Se||null,ref:_,value:Me})})]})]})},ye=t(82531),Ze=t(86422),we=t(9728),Ce=t(3055),Oe=t(27337),ke=t(18908),Pe=t(93348),Ee=t(45838),Ie=t(96510),Te=t(59e3),_e=t(64651),Se=t(66653),Ae=t(24224),Me=t(99497);function De(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function Re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?De(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Be={borderRadius:H.BG,iconOnly:!0,noBackground:!0,noBorder:!0,outline:!0,padding:"4px"};function Ne(){var e=(0,p.useRouter)(),n=(0,d.useRef)(null),t=(0,d.useState)(null),i=t[0],u=t[1],l=(0,d.useState)(null),c=l[0],x=l[1],C=(0,d.useState)({}),O=C[0],T=C[1],D=(0,d.useState)(null),R=D[0],B=D[1],N=(0,Te.iV)(),L=(0,Te.DQ)(N,[I.$1.STATUS,I.$1.TAG,I.$1.TYPE]),G=ye.ZP.pipelines.list(Re(Re({},L),{},{include_schedules:1})),H=G.data,U=G.mutate,z=(0,d.useMemo)((function(){var e=(null===H||void 0===H?void 0:H.pipelines)||[];if(c){var n=c.toLowerCase();e=e.filter((function(e){var t=e.name,i=e.description,o=e.uuid;return(null===t||void 0===t?void 0:t.toLowerCase().includes(n))||(null===o||void 0===o?void 0:o.toLowerCase().includes(n))||(null===i||void 0===i?void 0:i.toLowerCase().includes(n))}))}return e}),[null===H||void 0===H?void 0:H.pipelines,c]),W=ye.ZP.projects.list(),F=W.data,q=W.mutate,Q=(0,d.useMemo)((function(){var e;return null===F||void 0===F||null===(e=F.projects)||void 0===e?void 0:e[0]}),[F]),K=null===N||void 0===N?void 0:N[I.$1.GROUP];(0,d.useEffect)((function(){var e={};if(K)be((0,r.Z)({},K,!0));else{var n,t=(0,fe.U2)(ve,{});t&&Object.entries(t).forEach((function(e){var t=(0,o.Z)(e,2),i=t[0],r=t[1];!n&&r&&(n=i)})),n&&(e[I.$1.GROUP]=n)}if((0,de.Qr)(L)){var i={},u=(0,fe.U2)(he,{});u&&Object.entries(u).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],r=n[1];i[t]=[],Object.entries(r).forEach((function(e){var n=(0,o.Z)(e,2),r=n[0];n[1]&&i[t].push(r)}))})),(0,de.Qr)(i)||(e=Re(Re({},e),i))}else{var l={};Object.entries(L).forEach((function(e){var n=(0,o.Z)(e,2),t=n[0],i=n[1];l[t]={};var r,u=i;(Array.isArray(u)||(u=[u]),u&&Array.isArray(u))&&(null===(r=u)||void 0===r||r.forEach((function(e){l[t][e]=!0})))})),me(l)}(0,de.Qr)(e)||(0,ne.u7)(e,{pushHistory:!1})}),[K,L]),(0,d.useEffect)((function(){(0,Ie.bB)(H,B)}),[H]);var $=function(e){return(0,a.Db)(ye.ZP.pipelines.useCreate(),{onSuccess:function(n){return(0,Ie.wD)(n,{callback:function(n){var t=n.pipeline.uuid;null===e||void 0===e||e(t)},onErrorCallback:function(e,n){return B({errors:n,response:e})}})}})},J=$((function(n){return e.push("/pipelines/[pipeline]/edit","/pipelines/".concat(n,"/edit"))})),X=(0,o.Z)(J,2),ie=X[0],oe=X[1].isLoading,re=$((function(){return null===U||void 0===U?void 0:U()})),ue=(0,o.Z)(re,2),le=ue[0],ce=ue[1].isLoading,se=(0,a.Db)((function(e){return ye.ZP.pipelines.useUpdate(e.uuid)({pipeline:e})}),{onSuccess:function(e){return(0,Ie.wD)(e,{callback:function(e){var n=e.pipeline.uuid;T((function(e){return Re(Re({},e),{},(0,r.Z)({},n,!1))})),U(),null===Ue||void 0===Ue||Ue(),u(null)},onErrorCallback:function(e,n){var t,i=null===e||void 0===e||null===(t=e.url_parameters)||void 0===t?void 0:t.pk;T((function(e){return Re(Re({},e),{},(0,r.Z)({},i,!1))})),B({errors:n,response:e})}})}}),ae=(0,o.Z)(se,2),pe=ae[0],je=ae[1].isLoading,ge=(0,a.Db)((function(e){return ye.ZP.pipelines.useDelete(e)()}),{onSuccess:function(e){return(0,Ie.wD)(e,{callback:function(){null===U||void 0===U||U()},onErrorCallback:function(e,n){return B({errors:n,response:e})}})}}),De=(0,o.Z)(ge,2),Ne=De[0],Le=De[1].isLoading,Ge=(0,Me.dd)((function(e){var n=e.pipeline,t=e.pipelineDescription,o=e.pipelineName;return(0,k.jsx)(P,{isLoading:je,minWidth:55*V.iI,noEmptyValue:!!o,onClose:Ue,onSave:function(e){var t=n||i;if(t){var u=t.uuid,l={uuid:u};o?l.name=e:l.description=e,T((function(e){return Re(Re({},e),{},(0,r.Z)({},u,!0))})),pe(l)}},textArea:!o,title:o?"Rename pipeline":"Edit description",value:o||t})}),{},[je,i],{background:!0,uuid:"rename_pipeline_and_save"}),Ye=(0,o.Z)(Ge,2),He=Ye[0],Ue=Ye[1],Ve=(0,Me.dd)((function(){return(0,k.jsx)(we.BC,{children:(0,k.jsx)(f.Z,{contained:!0,onClickCustomTemplate:function(e){ie({pipeline:{custom_template_uuid:null===e||void 0===e?void 0:e.template_uuid,name:(0,te.Y6)()}}).then((function(){Fe()}))},showBreadcrumbs:!0,tabs:[Oe.A2]})})}),{},[],{background:!0,uuid:"browse_templates"}),ze=(0,o.Z)(Ve,2),We=ze[0],Fe=ze[1],qe=(0,d.useMemo)((function(){return(0,_e.d)(ie,{showBrowseTemplates:We})}),[ie,We]),Qe=ye.ZP.tags.list().data,Ke=(0,d.useMemo)((function(){return(0,Ae.YC)((null===Qe||void 0===Qe?void 0:Qe.tags)||[],(function(e){return e.uuid}))}),[Qe]),$e=(0,d.useMemo)((function(){return(0,k.jsx)(xe,{addButtonProps:{isLoading:oe,label:"New",menuItems:qe},deleteRowProps:{confirmationMessage:"This is irreversible and will immediately delete everything associated           with the pipeline, including its blocks, triggers, runs, logs, and history.",isLoading:Le,item:"pipeline",onDelete:function(){window.confirm("Are you sure you want to delete pipeline ".concat(null===i||void 0===i?void 0:i.uuid,"?"))&&Ne(null===i||void 0===i?void 0:i.uuid)}},filterOptions:{status:Object.values(I.QK),tag:Ke.map((function(e){return e.uuid})),type:Object.values(I.qL)},filterValueLabelMapping:{tag:Ke.reduce((function(e,n){var t=n.uuid;return Re(Re({},e),{},(0,r.Z)({},t,t))}),{}),type:I.G7},groupButtonProps:{groupByLabel:K,menuItems:[{beforeIcon:K===I.r0.STATUS?(0,k.jsx)(ee.Jr,{fill:Y.Z.content.default,size:1.5*V.iI}):(0,k.jsx)(ee.Cd,{muted:!0,size:1.5*V.iI}),label:function(){return(0,te.kC)(I.r0.STATUS)},onClick:function(){var e=K===I.r0.STATUS?null:I.r0.STATUS;e||be({}),(0,ne.u7)((0,r.Z)({},I.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Status"},{beforeIcon:K===I.r0.TAG?(0,k.jsx)(ee.Jr,{fill:Y.Z.content.default,size:1.5*V.iI}):(0,k.jsx)(ee.Cd,{muted:!0,size:1.5*V.iI}),label:function(){return(0,te.kC)(I.r0.TAG)},onClick:function(){var e=K===I.r0.TAG?null:I.r0.TAG;e||be({}),(0,ne.u7)((0,r.Z)({},I.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Tag"},{beforeIcon:K===I.r0.TYPE?(0,k.jsx)(ee.Jr,{fill:Y.Z.content.default,size:1.5*V.iI}):(0,k.jsx)(ee.Cd,{muted:!0,size:1.5*V.iI}),label:function(){return(0,te.kC)(I.r0.TYPE)},onClick:function(){var e=K===I.r0.TYPE?null:I.r0.TYPE;e||be({}),(0,ne.u7)((0,r.Z)({},I.$1.GROUP,e),{pushHistory:!0})},uuid:"Pipelines/GroupMenu/Type"}]},moreActionsMenuItems:[{label:function(){return"Rename pipeline"},onClick:function(){return He({pipelineName:null===i||void 0===i?void 0:i.name})},uuid:"Pipelines/MoreActionsMenu/Rename"},{label:function(){return"Edit description"},onClick:function(){return He({pipelineDescription:null===i||void 0===i?void 0:i.description})},uuid:"Pipelines/MoreActionsMenu/EditDescription"}],onFilterApply:function(e,n){Object.values(n).every((function(e){return!(null!==e&&void 0!==e&&e.length)}))&&me({})},query:L,searchProps:{onChange:x,value:c},secondaryActionButtonProps:{Icon:ee.oX,confirmationDescription:"Cloning the selected pipeline will create a new pipeline with the same           configuration and code blocks. The blocks use the same block files as the original pipeline.           Pipeline triggers, runs, backfills, and logs are not copied over to the new pipeline.",confirmationMessage:"Do you want to clone the pipeline ".concat(null===i||void 0===i?void 0:i.uuid,"?"),isLoading:ce,onClick:function(){return le({pipeline:{clone_pipeline_uuid:null===i||void 0===i?void 0:i.uuid}})},openConfirmationDialogue:!0,tooltip:"Clone pipeline"},selectedRowId:null===i||void 0===i?void 0:i.uuid,setSelectedRow:u})}),[le,Ne,K,ce,oe,Le,qe,L,c,null===i||void 0===i?void 0:i.description,null===i||void 0===i?void 0:i.name,null===i||void 0===i?void 0:i.uuid,He,Ke]),Je=(0,we.VI)(null,{},[],{uuid:"pipelines/list"}),Xe=(0,o.Z)(Je,1)[0],en=(0,a.Db)(ye.ZP.projects.useUpdate(null===Q||void 0===Q?void 0:Q.name),{onSuccess:function(e){return(0,Ie.wD)(e,{callback:function(){q()},onErrorCallback:function(e,n){return Xe({errors:n,response:e})}})}}),nn=(0,o.Z)(en,2),tn=nn[0],on=nn[1].isLoading,rn=(0,d.useCallback)((function(e){return tn({project:e})}),[tn]),un=(0,Me.dd)((function(){return(0,k.jsxs)(y.Z,{maxWidth:60*V.iI,children:[(0,k.jsx)(Z.Z,{mb:1,children:(0,k.jsx)(g.Z,{children:"Help improve Mage"})}),(0,k.jsx)(Z.Z,{mb:V.cd,children:(0,k.jsx)(w.ZP,{default:!0,children:"Please contribute usage statistics to help improve the developer experience for you and everyone in the community \ud83e\udd1d."})}),(0,k.jsx)(Z.Z,{mb:V.cd,children:(0,k.jsx)(y.Z,{success:!0,children:(0,k.jsxs)(j.Z,{alignItems:"center",children:[(0,k.jsx)(ee.Yo,{size:5*V.iI,success:!0}),(0,k.jsx)(Z.Z,{mr:1}),(0,k.jsx)(b.Z,{children:(0,k.jsx)(w.ZP,{children:"All usage statistics are completely anonymous. It\u2019s impossible for Mage to know which statistics belongs to whom."})})]})})}),(0,k.jsx)(Z.Z,{mb:V.cd,children:(0,k.jsxs)(w.ZP,{default:!0,children:["By opting into sending usage statistics to ",(0,k.jsx)(E.Z,{href:"https://www.mage.ai",openNewWindow:!0,children:"Mage"}),", it\u2019ll help the team and community of contributors (",(0,k.jsx)(E.Z,{href:"https://www.mage.ai/chat",openNewWindow:!0,children:"Magers"}),") learn what\u2019s going wrong with the tool and what improvements can be made."]})}),(0,k.jsx)(Z.Z,{mb:V.cd,children:(0,k.jsx)(w.ZP,{default:!0,children:"In addition to helping reduce potential errors, you\u2019ll help inform which features are useful and which need work."})}),(0,k.jsx)(Z.Z,{mb:V.cd,children:(0,k.jsxs)(j.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,k.jsx)(w.ZP,{bold:!0,children:"I want to help make Mage more powerful for everyone"}),(0,k.jsx)(Z.Z,{mr:V.cd}),(0,k.jsx)(M.Z,{checked:!0,onCheck:function(){window.confirm("Are you sure you don\u2019t want to help everyone in the community?")&&rn({help_improve_mage:!1}).then((function(){return sn()}))}})]})}),on&&(0,k.jsx)(Z.Z,{mb:V.cd,children:(0,k.jsx)(_.Z,{inverted:!0})}),(0,k.jsx)(Z.Z,{mb:V.cd,children:(0,k.jsxs)(w.ZP,{muted:!0,small:!0,children:["To learn more about how this works, please check out the ",(0,k.jsx)(E.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,small:!0,children:"documentation"}),"."]})}),(0,k.jsx)(h.Z,{onClick:function(){return rn({help_improve_mage:!0}).then((function(){return sn()}))},secondary:!0,children:"Close"})]})}),{},[Q],{background:!0,hideCallback:function(){rn({help_improve_mage:!0})},uuid:"help_mage"}),ln=(0,o.Z)(un,2),cn=ln[0],sn=ln[1];(0,d.useEffect)((function(){Q&&null===(null===Q||void 0===Q?void 0:Q.help_improve_mage)&&cn()}),[Q,cn]);var an=(0,d.useMemo)((function(){var e={};null===z||void 0===z||z.forEach((function(n,t){var i=n[K];if(I.r0.STATUS===K){var o=n.schedules,r=void 0===o?[]:o,u=r.length;i=r.find((function(e){var n=e.status;return Pe.fq.ACTIVE===n}))?I.QK.ACTIVE:u>=1?I.QK.INACTIVE:I.QK.NO_SCHEDULES}else if(I.r0.TAG===K){i=(null===n||void 0===n?void 0:n.tags)?(0,Ae.YC)(n.tags,(function(e){return e})).join(", "):""}e[i]||(e[i]=[]),e[i].push(t)}));var n=[],t=[];return I.r0.STATUS===K?Object.values(I.QK).forEach((function(i){n.push(e[i]),t.push((0,te.vg)(i))})):I.r0.TAG===K?(0,Ae.YC)(Object.keys(e),(function(e){return e})).forEach((function(i){n.push(e[i]),i?t.push(i.split(", ").map((function(e,n){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{style:{marginLeft:n>=1?4:0}},"".concat(e,"-").concat(n,"-spacing")),(0,k.jsx)(v.Z,{small:!0,children:(0,k.jsx)(w.ZP,{children:e})},"".concat(e,"-").concat(n))]})}))):t.push("No tags")})):I.r0.TYPE===K&&Object.values(I.qL).forEach((function(i){n.push(e[i]),t.push(I.G7[i])})),{rowGroupHeaders:t,rowsGroupedByIndex:n}}),[K,z]),dn=an.rowGroupHeaders,pn=an.rowsGroupedByIndex;return(0,k.jsx)(m.Z,{errors:R,setErrors:B,subheaderChildren:$e,title:"Pipelines",uuid:"pipelines/index",children:0===(null===z||void 0===z?void 0:z.length)?(0,k.jsx)(Z.Z,{px:3,py:1,children:H?(0,k.jsx)(w.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No pipelines available"}):(0,k.jsx)(_.Z,{inverted:!0,large:!0})}):(0,k.jsx)(Ee.cl,{includePadding:!!K,maxHeight:"calc(100vh - ".concat(Ce.Mz+74,"px)"),children:(0,k.jsx)(S.Z,{columnFlex:[null,null,null,2,null,null,1,null,null,null],columns:[{label:function(){return""},uuid:"action"},{uuid:(0,te.kC)(I.r0.STATUS)},{uuid:"Name"},{uuid:"Description"},{uuid:(0,te.kC)(I.r0.TYPE)},{uuid:"Updated at"},{uuid:"Tags"},{uuid:"Blocks"},{uuid:"Triggers"},{center:!0,label:function(){return""},uuid:"Actions"}],isSelectedRow:function(e){var n;return(null===(n=z[e])||void 0===n?void 0:n.uuid)===(null===i||void 0===i?void 0:i.uuid)},onClickRow:function(e){return u((function(n){var t=z[e];return(null===n||void 0===n?void 0:n.uuid)!==(null===t||void 0===t?void 0:t.uuid)?t:null}))},onDoubleClickRow:function(n){e.push("/pipelines/[pipeline]/edit","/pipelines/".concat(z[n].uuid,"/edit"))},ref:n,renderRightClickMenuItems:function(n){var t=z[n];return[{label:function(){return"Edit description"},onClick:function(){return He({pipeline:t,pipelineDescription:null===t||void 0===t?void 0:t.description})},uuid:"edit_description"},{label:function(){return"Rename"},onClick:function(){return He({pipeline:t,pipelineName:null===t||void 0===t?void 0:t.name})},uuid:"rename"},{label:function(){return"Clone"},onClick:function(){return le({pipeline:{clone_pipeline_uuid:null===t||void 0===t?void 0:t.uuid}})},uuid:"clone"},{label:function(){return"Add/Remove tags"},onClick:function(){e.push("/pipelines/[pipeline]/settings","/pipelines/".concat(null===t||void 0===t?void 0:t.uuid,"/settings"))},uuid:"add_tags"},{label:function(){return"Create template"},onClick:function(){e.push("/templates?object_type=".concat(ke.R,"&new=1&pipeline_uuid=").concat(null===t||void 0===t?void 0:t.uuid))},uuid:"create_custom_template"},{label:function(){return"Delete"},onClick:function(){window.confirm("Are you sure you want to delete pipeline ".concat(null===t||void 0===t?void 0:t.uuid,"?"))&&Ne(null===t||void 0===t?void 0:t.uuid)},uuid:"delete"}]},rowGroupHeaders:dn,rows:z.map((function(n,t){var i=n.blocks,o=n.description,u=n.schedules,l=n.tags,c=n.type,a=n.updated_at,d=n.uuid,p=i.filter((function(e){var n=e.type;return Ze.tf.SCRATCHPAD!==n})).length,f=u.length,v=u.find((function(e){var n=e.status;return Pe.fq.ACTIVE===n})),m=(0,k.jsx)("div",{children:(0,k.jsx)(A.Z,{tags:null===l||void 0===l?void 0:l.map((function(e){return{uuid:e}}))})},"pipeline_tags_".concat(t));return[f>=1||O[d]?(0,k.jsx)(h.Z,{iconOnly:!0,loading:!!O[d],noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(e){(0,Se.j)(e),T((function(e){return Re(Re({},e),{},(0,r.Z)({},d,!0))})),pe(Re(Re({},n),{},{status:v?Pe.fq.INACTIVE:Pe.fq.ACTIVE}))},children:v?(0,k.jsx)(ee.dz,{muted:!0,size:2*V.iI}):(0,k.jsx)(ee.Py,{default:!0,size:2*V.iI})}):null,(0,k.jsx)(w.ZP,{default:!v,monospace:!0,success:!!v,children:v?Pe.fq.ACTIVE:f>=1?Pe.fq.INACTIVE:"no schedules"},"pipeline_status_".concat(t)),(0,k.jsx)(s(),{as:"/pipelines/".concat(d),href:"/pipelines/[pipeline]",passHref:!0,children:(0,k.jsx)(E.Z,{sameColorAsText:!0,children:d})},"pipeline_name_".concat(t)),(0,k.jsx)(w.ZP,{default:!0,title:o,width:90*V.iI,children:o},"pipeline_description_".concat(t)),(0,k.jsx)(w.ZP,{children:I.G7[c]},"pipeline_type_".concat(t)),(0,k.jsx)(w.ZP,{monospace:!0,small:!0,title:a,children:a?a.slice(0,-3):(0,k.jsx)(k.Fragment,{children:"\u2014"})},"pipeline_updated_at_".concat(t)),m,(0,k.jsx)(w.ZP,{default:0===p,monospace:!0,children:p},"pipeline_block_count_".concat(t)),(0,k.jsx)(w.ZP,{default:0===f,monospace:!0,children:f},"pipeline_trigger_count_".concat(t)),(0,k.jsxs)(b.Z,{flex:1,justifyContent:"flex-end",children:[(0,k.jsx)(h.Z,Re(Re({},Be),{},{onClick:function(){e.push("/pipelines/[pipeline]","/pipelines/".concat(d))},title:"Detail",children:(0,k.jsx)(ee.UY,{default:!0,size:2*V.iI})})),(0,k.jsx)(Z.Z,{mr:1}),(0,k.jsx)(h.Z,Re(Re({},Be),{},{onClick:function(){e.push("/pipelines/[pipeline]/logs","/pipelines/".concat(d,"/logs"))},title:"Logs",children:(0,k.jsx)(ee.$B,{default:!0,size:2*V.iI})}))]},"chevron_icon_".concat(t))]})),rowsGroupedByIndex:pn,stickyHeader:!0})})})}Ne.getInitialProps=(0,i.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var Le=(0,T.Z)(Ne)},79274:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines",function(){return t(12257)}])}},function(e){e.O(0,[844,9902,426,1774,8792,8789,4259,9055,1424,1005,7815,3654,8952,7722,4822,1484,2485,9774,2888,179],(function(){return n=79274,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
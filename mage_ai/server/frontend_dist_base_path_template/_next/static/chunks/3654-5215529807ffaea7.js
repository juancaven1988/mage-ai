"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3654],{44162:function(n,e,t){t.d(e,{HC:function(){return T},Kf:function(){return f},Nk:function(){return s},PY:function(){return p},gE:function(){return g},jv:function(){return h},nz:function(){return m},oh:function(){return l},qn:function(){return d},t1:function(){return A},y9:function(){return y}});var r=t(38626),o=t(23831),i=t(86422),c=t(73942),a=t(49125),u=t(90880),l=68;function d(n,e){var t,r,c=((null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.borders)||o.Z.borders).light,a=((null===e||void 0===e||null===(r=e.theme)||void 0===r?void 0:r.monotone)||o.Z.monotone).grey500,u=e||{},l=u.blockColor,d=u.isSelected,f=u.theme;return d?c=(f||o.Z).content.active:i.tf.TRANSFORMER===n||l===i.Lq.PURPLE?(c=(f||o.Z).accent.purple,a=(f||o.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||l===i.Lq.YELLOW?(c=(f||o.Z).accent.yellow,a=(f||o.Z).accent.yellowLight):i.tf.DATA_LOADER===n||l===i.Lq.BLUE?(c=(f||o.Z).accent.blue,a=(f||o.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(f||o.Z).accent.sky,a=(f||o.Z).accent.skyLight):i.tf.SENSOR===n||l===i.Lq.PINK?(c=(f||o.Z).accent.pink,a=(f||o.Z).accent.pinkLight):i.tf.DBT===n?(c=(f||o.Z).accent.dbt,a=(f||o.Z).accent.dbtLight):i.tf.EXTENSION===n||l===i.Lq.TEAL?(c=((null===f||void 0===f?void 0:f.accent)||o.Z.accent).teal,a=((null===f||void 0===f?void 0:f.accent)||o.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===f||void 0===f?void 0:f.accent)||o.Z.accent).rose,a=((null===f||void 0===f?void 0:f.accent)||o.Z.accent).roseLight):(i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||l===i.Lq.GREY||i.tf.CUSTOM===n&&!l)&&(c=(f||o.Z).content.default,a=(f||o.Z).accent.contentDefaultTransparent),{accent:c,accentLight:a}}var f=(0,r.css)([""," "," "," "," "," "," ",""],(0,u.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(d(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(d(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),s=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),p=r.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],f,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(d(n.blockType,n).accent,";\n    }\n  ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],f,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,a.iI,(function(n){return"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return n.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((n.theme||o.Z).borders.medium2,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],f,c.M8,c.mP,c.M8,c.mP,a.iI,a.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||o.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),g=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*a.iI,.5*a.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||o.Z.text).fileBrowser,";\n      ")})),A=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*a.iI),y=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],1*a.iI,1*a.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?a.iI:l,"px;\n  ")})),T=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*a.iI,l)},86422:function(n,e,t){t.d(e,{$W:function(){return A},DA:function(){return h},HX:function(){return b},J8:function(){return T},L8:function(){return a},LE:function(){return s},Lq:function(){return p},M5:function(){return m},Qj:function(){return E},Ut:function(){return S},V4:function(){return O},VZ:function(){return y},dO:function(){return f},f2:function(){return R},iZ:function(){return N},t6:function(){return u},tf:function(){return d}});var r,o,i,c,a,u,l=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(a||(a={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var d,f=(r={},(0,l.Z)(r,u.MARKDOWN,"MD"),(0,l.Z)(r,u.PYTHON,"PY"),(0,l.Z)(r,u.R,"R"),(0,l.Z)(r,u.SQL,"SQL"),(0,l.Z)(r,u.YAML,"YAML"),r),s=(o={},(0,l.Z)(o,u.MARKDOWN,"Markdown"),(0,l.Z)(o,u.PYTHON,"Python"),(0,l.Z)(o,u.R,"R"),(0,l.Z)(o,u.SQL,"SQL"),(0,l.Z)(o,u.YAML,"YAML"),o);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(d||(d={}));var p,m=[d.CALLBACK,d.CONDITIONAL,d.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(p||(p={}));var h,g,A=[d.CHART,d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],y=[d.DATA_EXPORTER,d.DATA_LOADER],T=[d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],b=[d.DATA_EXPORTER,d.DATA_LOADER,d.DBT,d.TRANSFORMER],E=[d.CHART,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN],N=[d.CALLBACK,d.CHART,d.EXTENSION,d.SCRATCHPAD,d.MARKDOWN];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(h||(h={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(g||(g={}));var R=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],O=(i={},(0,l.Z)(i,d.CALLBACK,"Callback"),(0,l.Z)(i,d.CHART,"Chart"),(0,l.Z)(i,d.CONDITIONAL,"Conditional"),(0,l.Z)(i,d.CUSTOM,"Custom"),(0,l.Z)(i,d.DATA_EXPORTER,"Data exporter"),(0,l.Z)(i,d.DATA_LOADER,"Data loader"),(0,l.Z)(i,d.DBT,"DBT"),(0,l.Z)(i,d.EXTENSION,"Extension"),(0,l.Z)(i,d.MARKDOWN,"Markdown"),(0,l.Z)(i,d.SCRATCHPAD,"Scratchpad"),(0,l.Z)(i,d.SENSOR,"Sensor"),(0,l.Z)(i,d.TRANSFORMER,"Transformer"),i),S=[d.DATA_LOADER,d.TRANSFORMER,d.DATA_EXPORTER,d.SENSOR];c={},(0,l.Z)(c,d.DATA_EXPORTER,"DE"),(0,l.Z)(c,d.DATA_LOADER,"DL"),(0,l.Z)(c,d.SCRATCHPAD,"SP"),(0,l.Z)(c,d.SENSOR,"SR"),(0,l.Z)(c,d.MARKDOWN,"MD"),(0,l.Z)(c,d.TRANSFORMER,"TF")},98781:function(n,e,t){t.d(e,{$1:function(){return d},G7:function(){return s},LM:function(){return p},Mj:function(){return m},QK:function(){return l},a_:function(){return h},qL:function(){return c},r0:function(){return f}});var r,o,i,c,a=t(82394),u=t(22341);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(c||(c={}));var l,d,f,s=(r={},(0,a.Z)(r,c.INTEGRATION,"Integration"),(0,a.Z)(r,c.PYTHON,"Standard"),(0,a.Z)(r,c.PYSPARK,"PySpark"),(0,a.Z)(r,c.STREAMING,"Streaming"),r),p="all",m=(c.PYTHON,c.INTEGRATION,c.STREAMING,o={},(0,a.Z)(o,p,u.ie),(0,a.Z)(o,c.INTEGRATION,u.YC),(0,a.Z)(o,c.PYTHON,u.El),(0,a.Z)(o,c.STREAMING,u.dB),o);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry"}(l||(l={})),function(n){n.GROUP="group_by",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(d||(d={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(f||(f={}));var h=(i={},(0,a.Z)(i,c.PYTHON,"python3"),(0,a.Z)(i,c.PYSPARK,"pysparkkernel"),i)},87372:function(n,e,t){var r,o,i,c,a,u,l,d,f=t(82394),s=t(26304),p=t(26653),m=t(38626),h=t(33591),g=t(23831),A=t(2005),y=t(31012),T=t(19711),b=t(49125),E=t(86673),N=t(28598),R=["children","condensed","inline","level","marketing","spacingBelow"];function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function S(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){(0,f.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var v=(0,m.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],T.IH,(function(n){return n.color&&"\n    color: ".concat(n.color,"\n  ")}),(function(n){return n.yellow&&"\n    color: ".concat((n.theme.accent||g.Z.accent).yellow,";\n  ")}),(function(n){return n.center&&"\n    text-align: center;\n  "}),(function(n){return!n.monospace&&0===Number(n.weightStyle)&&"\n    font-family: ".concat(A.iI,";\n  ")}),(function(n){return!n.monospace&&1===Number(n.weightStyle)&&"\n    font-family: ".concat(A.LX,";\n  ")}),(function(n){return!n.monospace&&2===Number(n.weightStyle)&&"\n    font-family: ".concat(A.LX,";\n  ")}),(function(n){return!n.monospace&&3===Number(n.weightStyle)&&"\n    font-family: ".concat(A.ry,";\n  ")}),(function(n){return!n.monospace&&4===Number(n.weightStyle)&&"\n    font-family: ".concat(A.YC,";\n  ")}),(function(n){return!n.monospace&&5===Number(n.weightStyle)&&"\n    font-family: ".concat(A.nF,";\n  ")}),(function(n){return!n.monospace&&(6===Number(n.weightStyle)||n.bold)&&"\n    font-family: ".concat(A.nF,";\n  ")}),(function(n){return!n.monospace&&7===Number(n.weightStyle)&&"\n    font-family: ".concat(A.nF,";\n  ")}),(function(n){return!n.monospace&&8===Number(n.weightStyle)&&"\n    font-family: ".concat(A.nF,";\n  ")}),(function(n){return n.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),C=m.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(n){return"\n    color: ".concat((n.theme.content||g.Z.content).active,";\n  ")})),_=m.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],v,h.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),y.aQ),h.media.lg(o||(o=(0,p.Z)(["\n    ","\n  "])),y.aQ),h.media.xl(i||(i=(0,p.Z)(["\n    ","\n  "])),y.aQ)),w=m.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],v,y.MJ),Z=m.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],v,h.media.xs(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),h.media.sm(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),h.media.md(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),h.media.lg(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI),h.media.xl(d||(d=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*b.iI,7*b.iI)),x=m.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],v,y.BL),D=m.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],v),I=m.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],v),L=m.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],v),P=m.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],v,(function(n){return 1===n.level&&"\n    ".concat(y.MJ,"\n  ")}),(function(n){return 2===n.level&&"\n    ".concat(y.BL,"\n  ")}),(function(n){return 3===n.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(n){return 4===n.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),k=function(n){var e,t=n.children,r=n.condensed,o=n.inline,i=n.level,c=n.marketing,a=n.spacingBelow,u=(0,s.Z)(n,R);o?e=P:0===Number(i)?e=_:1===Number(i)?e=c?Z:w:2===Number(i)?e=x:3===Number(i)?e=D:4===Number(i)?e=I:5===Number(i)&&(e=L);var l=(0,N.jsxs)(e,S(S({},u),{},{level:i,children:[a&&(0,N.jsx)(E.Z,{mb:r?2:3,children:t}),!a&&t]}));return o?l:(0,N.jsx)(C,{children:l})};k.defaultProps={level:3,weightStyle:6},e.Z=k},90211:function(n,e,t){t.d(e,{RA:function(){return d},kC:function(){return f},vg:function(){return y},kE:function(){return R},Mp:function(){return s},Pb:function(){return u},HW:function(){return b},wX:function(){return p},x6:function(){return m},_6:function(){return h},zf:function(){return T},Y6:function(){return N},wE:function(){return O},J3:function(){return g},We:function(){return l},QV:function(){return E},C5:function(){return A}});var r=t(75582),o=t(17717),i=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],c=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),a=t(24224);function u(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function d(n){return n.split(" ").join("_")}function f(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function p(n){return n.charAt(0).toLowerCase()+n.slice(1)}function m(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),o=t[0],i=t[1],c=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return i?"".concat(c,".").concat(i):c}function h(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e,i=void 0!==o&&null!==o;if(i||(o=2),1===o)t=n;else{var c=n.length,a=n[c-1];t="y"===a&&"day"!==n?"".concat(n.slice(0,c-1),"ies"):"".concat(n,"s"===a?"es":"s")}if(i){var u=r?m(o):o;return"".concat(u," ").concat(t)}return t}function g(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function A(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return f(g(n.toLowerCase()))}function T(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(o,i){if(!e){var c=(0,r.Z)(o,2),a=c[0],u=c[1],l=t.slice(0,i).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(u)*l&&(e=h(a,Math.round(n/l)))}})),e}function b(n){return"undefined"!==typeof n&&null!==n&&!isNaN(n)}function E(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function N(){return"".concat((0,a.mp)(i)," ").concat((0,a.mp)(c))}function R(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function O(n){var e,t=n.split(o.sep),r=t[t.length-1].split(".");return e=1===r.length?r[0]:r.slice(0,-1).join("."),t.slice(0,t.length-1).concat(e).join(o.sep)}}}]);
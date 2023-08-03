"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8789],{38789:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}}function d(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}}function g(e){return{}.toString.call(e).includes("Object")}function p(e){return"function"===typeof e}t.d(n,{ZP:function(){return de},_m:function(){return Y}});var h=d((function(e,n){throw new Error(e[n]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),v={changes:function(e,n){return g(n)||h("changeType"),Object.keys(n).some((function(n){return t=e,r=n,!Object.prototype.hasOwnProperty.call(t,r);var t,r}))&&h("changeField"),n},selector:function(e){p(e)||h("selectorType")},handler:function(e){p(e)||g(e)||h("handlerType"),g(e)&&Object.values(e).some((function(e){return!p(e)}))&&h("handlersType")},initial:function(e){var n;e||h("initialIsRequired"),g(e)||h("initialType"),n=e,Object.keys(n).length||h("initialContent")}};function y(e,n){return p(n)?n(e.current):n}function m(e,n){return e.current=s(s({},e.current),n),n}function b(e,n,t){return p(n)?n(e.current):Object.keys(t).forEach((function(t){var r;return null===(r=n[t])||void 0===r?void 0:r.call(n,e.current[t])})),t}var w={create:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v.initial(e),v.handler(n);var t={current:e},r=d(b)(t,n),o=d(m)(t),i=d(v.changes)(e),u=d(y)(t);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return v.selector(e),e(t.current)}function a(e){f(r,o,i,u)(e)}return[c,a]}},O=w,j={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};var M=function(e){return function n(){for(var t=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return n.apply(t,[].concat(o,r))}}};var P=function(e){return{}.toString.call(e).includes("Object")};var E={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},k=M((function(e,n){throw new Error(e[n]||e.default)}))(E),R={config:function(e){return e||k("configIsRequired"),P(e)||k("configType"),e.urls?(console.warn(E.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},S=R,T=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.reduceRight((function(e,n){return n(e)}),e)}};var C=function e(n,t){return Object.keys(t).forEach((function(r){t[r]instanceof Object&&n[r]&&Object.assign(t[r],e(n[r],t[r]))})),i(i({},n),t)},V={type:"cancelation",msg:"operation is manually canceled"};var I,L,A=function(e){var n=!1,t=new Promise((function(t,r){e.then((function(e){return n?r(V):t(e)})),e.catch(r)}));return t.cancel=function(){return n=!0},t},D=O.create({config:j,isInitialized:!1,resolve:null,reject:null,monaco:null}),q=(L=2,function(e){if(Array.isArray(e))return e}(I=D)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}(I,L)||function(e,n){if(e){if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}(I,L)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),N=q[0],x=q[1];function _(e){return document.body.appendChild(e)}function z(e){var n=N((function(e){return{config:e.config,reject:e.reject}})),t=function(e){var n=document.createElement("script");return e&&(n.src=e),n}("".concat(n.config.paths.vs,"/loader.js"));return t.onload=function(){return e()},t.onerror=n.reject,t}function F(){var e=N((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),n=window.require;n.config(e.config),n(["vs/editor/editor.main"],(function(n){U(n),e.resolve(n)}),(function(n){e.reject(n)}))}function U(e){N().monaco||x({monaco:e})}var B=new Promise((function(e,n){return x({resolve:e,reject:n})})),W={config:function(e){var n=S.config(e),t=n.monaco,r=u(n,["monaco"]);x((function(e){return{config:C(e.config,r),monaco:t}}))},init:function(){var e=N((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(x({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),A(B);if(window.monaco&&window.monaco.editor)return U(window.monaco),e.resolve(window.monaco),A(B);T(_,z)(F)}return A(B)},__getMonacoInstance:function(){return N((function(e){return e.monaco}))}},Y=W,Z=t(82684),$=t(47329),G=t.n($);function H(){return H=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H.apply(this,arguments)}const J={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var K=function({content:e}){return Z.createElement("div",{style:J},e)};var Q={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function X({width:e,height:n,isEditorReady:t,loading:r,_ref:o,className:i,wrapperProps:u}){return Z.createElement("section",H({style:{...Q.wrapper,width:e,height:n}},u),!t&&Z.createElement(K,{content:r}),Z.createElement("div",{ref:o,style:{...Q.fullWidth,...!t&&Q.hide},className:i}))}X.propTypes={width:G().oneOfType([G().number,G().string]).isRequired,height:G().oneOfType([G().number,G().string]).isRequired,loading:G().oneOfType([G().element,G().string]).isRequired,isEditorReady:G().bool.isRequired,className:G().string,wrapperProps:G().object};var ee=X,ne=(0,Z.memo)(ee);var te=function(e){(0,Z.useEffect)(e,[])};var re=function(e,n,t=!0){const r=(0,Z.useRef)(!0);(0,Z.useEffect)(r.current||!t?()=>{r.current=!1}:e,n)};function oe(){}function ie(e,n,t,r){return function(e,n){return e.editor.getModel(ue(e,n))}(e,r)||function(e,n,t,r){return e.editor.createModel(n,t,r&&ue(e,r))}(e,n,t,r)}function ue(e,n){return e.Uri.parse(n)}function ce({original:e,modified:n,language:t,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:u,keepCurrentOriginalModel:c,keepCurrentModifiedModel:a,theme:l,loading:s,options:f,height:d,width:g,className:p,wrapperProps:h,beforeMount:v,onMount:y}){const[m,b]=(0,Z.useState)(!1),[w,O]=(0,Z.useState)(!0),j=(0,Z.useRef)(null),M=(0,Z.useRef)(null),P=(0,Z.useRef)(null),E=(0,Z.useRef)(y),k=(0,Z.useRef)(v);te((()=>{const e=Y.init();return e.then((e=>(M.current=e)&&O(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>j.current?function(){const e=j.current.getModel();var n,t;c||null===(n=e.original)||void 0===n||n.dispose();a||null===(t=e.modified)||void 0===t||t.dispose();j.current.dispose()}():e.cancel()})),re((()=>{const e=j.current.getModifiedEditor();e.getOption(M.current.editor.EditorOption.readOnly)?e.setValue(n):n!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),e.pushUndoStop())}),[n],m),re((()=>{j.current.getModel().original.setValue(e)}),[e],m),re((()=>{const{original:e,modified:n}=j.current.getModel();M.current.editor.setModelLanguage(e,r||t),M.current.editor.setModelLanguage(n,o||t)}),[t,r,o],m),re((()=>{M.current.editor.setTheme(l)}),[l],m),re((()=>{j.current.updateOptions(f)}),[f],m);const R=(0,Z.useCallback)((()=>{k.current(M.current);const c=ie(M.current,e,r||t,i),a=ie(M.current,n,o||t,u);j.current.setModel({original:c,modified:a})}),[t,n,o,e,r,i,u]),S=(0,Z.useCallback)((()=>{j.current=M.current.editor.createDiffEditor(P.current,{automaticLayout:!0,...f}),R(),M.current.editor.setTheme(l),b(!0)}),[f,l,R]);return(0,Z.useEffect)((()=>{m&&E.current(j.current,M.current)}),[m]),(0,Z.useEffect)((()=>{!w&&!m&&S()}),[w,m,S]),Z.createElement(ne,{width:g,height:d,isEditorReady:m,loading:s,_ref:P,className:p,wrapperProps:h})}ce.propTypes={original:G().string,modified:G().string,language:G().string,originalLanguage:G().string,modifiedLanguage:G().string,originalModelPath:G().string,modifiedModelPath:G().string,keepCurrentOriginalModel:G().bool,keepCurrentModifiedModel:G().bool,theme:G().string,loading:G().oneOfType([G().element,G().string]),options:G().object,width:G().oneOfType([G().number,G().string]),height:G().oneOfType([G().number,G().string]),className:G().string,wrapperProps:G().object,beforeMount:G().func,onMount:G().func},ce.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe};var ae=function(e){const n=(0,Z.useRef)();return(0,Z.useEffect)((()=>{n.current=e}),[e]),n.current};const le=new Map;function se({defaultValue:e,defaultLanguage:n,defaultPath:t,value:r,language:o,path:i,theme:u,line:c,loading:a,options:l,overrideServices:s,saveViewState:f,keepCurrentModel:d,width:g,height:p,className:h,wrapperProps:v,beforeMount:y,onMount:m,onChange:b,onValidate:w}){const[O,j]=(0,Z.useState)(!1),[M,P]=(0,Z.useState)(!0),E=(0,Z.useRef)(null),k=(0,Z.useRef)(null),R=(0,Z.useRef)(null),S=(0,Z.useRef)(m),T=(0,Z.useRef)(y),C=(0,Z.useRef)(null),V=(0,Z.useRef)(r),I=ae(i),L=(0,Z.useRef)(!1);te((()=>{const e=Y.init();return e.then((e=>(E.current=e)&&P(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>k.current?function(){var e,n;null===(e=C.current)||void 0===e||e.dispose(),d?f&&le.set(i,k.current.saveViewState()):null===(n=k.current.getModel())||void 0===n||n.dispose();k.current.dispose()}():e.cancel()})),re((()=>{const t=ie(E.current,e||r,n||o,i);t!==k.current.getModel()&&(f&&le.set(I,k.current.saveViewState()),k.current.setModel(t),f&&k.current.restoreViewState(le.get(i)))}),[i],O),re((()=>{k.current.updateOptions(l)}),[l],O),re((()=>{k.current.getOption(E.current.editor.EditorOption.readOnly)?k.current.setValue(r):r!==k.current.getValue()&&(k.current.executeEdits("",[{range:k.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),k.current.pushUndoStop())}),[r],O),re((()=>{E.current.editor.setModelLanguage(k.current.getModel(),o)}),[o],O),re((()=>{void 0!==c&&k.current.revealLine(c)}),[c],O),re((()=>{E.current.editor.setTheme(u)}),[u],O);const A=(0,Z.useCallback)((()=>{if(!L.current){T.current(E.current);const c=i||t,a=ie(E.current,r||e,n||o,c);k.current=E.current.editor.create(R.current,{model:a,automaticLayout:!0,...l},s),f&&k.current.restoreViewState(le.get(c)),E.current.editor.setTheme(u),j(!0),L.current=!0}}),[e,n,t,r,o,i,l,s,f,u]);return(0,Z.useEffect)((()=>{O&&S.current(k.current,E.current)}),[O]),(0,Z.useEffect)((()=>{!M&&!O&&A()}),[M,O,A]),V.current=r,(0,Z.useEffect)((()=>{var e,n;O&&b&&(null===(e=C.current)||void 0===e||e.dispose(),C.current=null===(n=k.current)||void 0===n?void 0:n.onDidChangeModelContent((e=>{b(k.current.getValue(),e)})))}),[O,b]),(0,Z.useEffect)((()=>{if(O){const e=E.current.editor.onDidChangeMarkers((e=>{var n;const t=null===(n=k.current.getModel())||void 0===n?void 0:n.uri;if(t){if(e.find((e=>e.path===t.path))){const e=E.current.editor.getModelMarkers({resource:t});null===w||void 0===w||w(e)}}}));return()=>{null===e||void 0===e||e.dispose()}}}),[O,w]),Z.createElement(ne,{width:g,height:p,isEditorReady:O,loading:a,_ref:R,className:h,wrapperProps:v})}se.propTypes={defaultValue:G().string,defaultPath:G().string,defaultLanguage:G().string,value:G().string,language:G().string,path:G().string,theme:G().string,line:G().number,loading:G().oneOfType([G().element,G().string]),options:G().object,overrideServices:G().object,saveViewState:G().bool,keepCurrentModel:G().bool,width:G().oneOfType([G().number,G().string]),height:G().oneOfType([G().number,G().string]),className:G().string,wrapperProps:G().object,beforeMount:G().func,onMount:G().func,onChange:G().func,onValidate:G().func},se.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe,onValidate:oe};var fe=se,de=(0,Z.memo)(fe)}}]);
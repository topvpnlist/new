(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[109],{"P/4M":function(e,t,n){"use strict";n.r(t),n.d(t,"CONSTANTS",(function(){return _e}));var r=n("q1tI"),a=n.n(r),i=n("i8i4"),o=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){return e(t={exports:{}},t.exports),t.exports}var h=f((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(n.apply(this,a));else if("object"===i)for(var o in a)t.call(a,o)&&a[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),p={"rw-disclaimer":"RwDisclaimer_rwDisclaimer__da192a37","full-width":"RwDisclaimer_fullWidth__da192a37","rw-disclaimer__container":"RwDisclaimer_rwDisclaimer__container__da192a37","rw-disclaimer__link-container":"RwDisclaimer_rwDisclaimer__linkContainer__da192a37","rw-disclaimer__link":"RwDisclaimer_rwDisclaimer__link__da192a37","modal-link":"RwDisclaimer_modalLink__da192a37","rw-disclaimer__icon":"RwDisclaimer_rwDisclaimer__icon__da192a37",reversed:"RwDisclaimer_reversed__da192a37","rw-disclaimer__content":"RwDisclaimer_rwDisclaimer__content__da192a37",expanded:"RwDisclaimer_expanded__da192a37","rw-disclaimer__divider":"RwDisclaimer_rwDisclaimer__divider__da192a37","light-theme":"RwDisclaimer_lightTheme__da192a37","dark-theme":"RwDisclaimer_darkTheme__da192a37","rw-disclaimer__accordion-wrapper":"RwDisclaimer_rwDisclaimer__accordionWrapper__da192a37","content-background-white":"RwDisclaimer_contentBackgroundWhite__da192a37","modal-content":"RwDisclaimer_modalContent__da192a37"},y="function"==typeof Symbol&&Symbol.for,v=y?Symbol.for("react.element"):60103,_=y?Symbol.for("react.portal"):60106,b=y?Symbol.for("react.fragment"):60107,g=y?Symbol.for("react.strict_mode"):60108,w=y?Symbol.for("react.profiler"):60114,O=y?Symbol.for("react.provider"):60109,E=y?Symbol.for("react.context"):60110,S=y?Symbol.for("react.async_mode"):60111,k=y?Symbol.for("react.concurrent_mode"):60111,j=y?Symbol.for("react.forward_ref"):60112,C=y?Symbol.for("react.suspense"):60113,L=y?Symbol.for("react.suspense_list"):60120,M=y?Symbol.for("react.memo"):60115,P=y?Symbol.for("react.lazy"):60116,D=y?Symbol.for("react.block"):60121,x=y?Symbol.for("react.fundamental"):60117,T=y?Symbol.for("react.responder"):60118,I=y?Symbol.for("react.scope"):60119;function N(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case v:switch(e=e.type){case S:case k:case b:case w:case g:case C:return e;default:switch(e=e&&e.$$typeof){case E:case j:case P:case M:case O:return e;default:return t}}case _:return t}}}function A(e){return N(e)===k}var R={AsyncMode:S,ConcurrentMode:k,ContextConsumer:E,ContextProvider:O,Element:v,ForwardRef:j,Fragment:b,Lazy:P,Memo:M,Portal:_,Profiler:w,StrictMode:g,Suspense:C,isAsyncMode:function(e){return A(e)||N(e)===S},isConcurrentMode:A,isContextConsumer:function(e){return N(e)===E},isContextProvider:function(e){return N(e)===O},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===v},isForwardRef:function(e){return N(e)===j},isFragment:function(e){return N(e)===b},isLazy:function(e){return N(e)===P},isMemo:function(e){return N(e)===M},isPortal:function(e){return N(e)===_},isProfiler:function(e){return N(e)===w},isStrictMode:function(e){return N(e)===g},isSuspense:function(e){return N(e)===C},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===b||e===k||e===w||e===g||e===C||e===L||"object"==typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===M||e.$$typeof===O||e.$$typeof===E||e.$$typeof===j||e.$$typeof===x||e.$$typeof===T||e.$$typeof===I||e.$$typeof===D)},typeOf:N},F=f((function(e,t){}));F.AsyncMode,F.ConcurrentMode,F.ContextConsumer,F.ContextProvider,F.Element,F.ForwardRef,F.Fragment,F.Lazy,F.Memo,F.Portal,F.Profiler,F.StrictMode,F.Suspense,F.isAsyncMode,F.isConcurrentMode,F.isContextConsumer,F.isContextProvider,F.isElement,F.isForwardRef,F.isFragment,F.isLazy,F.isMemo,F.isPortal,F.isProfiler,F.isStrictMode,F.isSuspense,F.isValidElementType,F.typeOf,f((function(e){e.exports=R})),Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;function $(){}function B(){}Function.call.bind(Object.prototype.hasOwnProperty),B.resetWarningCache=$;var H,z=f((function(e){e.exports=function(){function e(e,t,n,r,a,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:B,resetWarningCache:$};return n.PropTypes=n,n}()})),W=f((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=n.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),q=(H=f((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(a.a),l=c(z),s=c(W);function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},m=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function f(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!n.length)return e;for(var a={},i=Object.keys(e),o=0;o<i.length;o++){var l=i[o];-1===n.indexOf(l)&&(a[l]=e[l])}return a}function h(e){e.forEach((function(e){return cancelAnimationFrame(e)}))}function p(e){return!isNaN(parseFloat(e))&&isFinite(e)}function y(e){return"string"==typeof e&&e.search("%")===e.length-1&&p(e.substr(0,e.length-1))}function v(e,t){e&&"function"==typeof e&&e(t)}var _=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.animationFrameIDs=[];var a="auto",i="visible";p(e.height)?(a=e.height<0||"0"===e.height?0:e.height,i="hidden"):y(e.height)&&(a="0%"===e.height?0:e.height,i="hidden"),n.animationStateClasses=r({},u,e.animationStateClasses);var o=n.getStaticStateClasses(a);return n.state={animationStateClasses:o,height:a,overflow:i,shouldUseTransitions:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(e)}},{key:"componentDidUpdate",value:function(e,t){var n,r,a=this,i=this.props,o=i.delay,l=i.duration,c=i.height,u=i.onAnimationEnd,m=i.onAnimationStart;if(this.contentElement&&c!==e.height){var f;this.showContent(t.height),this.contentElement.style.overflow="hidden";var _=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var b=l+o,g=null,w={height:null,overflow:"hidden"},O="auto"===t.height;p(c)?(g=c<0||"0"===c?0:c,w.height=g):y(c)?(g="0%"===c?0:c,w.height=g):(g=_,w.height="auto",w.overflow=null),O&&(w.height=g,g=_);var E=(0,s.default)((d(f={},this.animationStateClasses.animating,!0),d(f,this.animationStateClasses.animatingUp,"auto"===e.height||c<e.height),d(f,this.animationStateClasses.animatingDown,"auto"===c||c>e.height),d(f,this.animationStateClasses.animatingToHeightZero,0===w.height),d(f,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),d(f,this.animationStateClasses.animatingToHeightSpecific,w.height>0),f)),S=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:E,height:g,overflow:"hidden",shouldUseTransitions:!O}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),O?(w.shouldUseTransitions=!0,h(this.animationFrameIDs),this.animationFrameIDs=(n=function(){a.setState(w),v(m,{newHeight:w.height})},(r=[])[0]=requestAnimationFrame((function(){r[1]=requestAnimationFrame((function(){n()}))})),r),this.animationClassesTimeoutID=setTimeout((function(){a.setState({animationStateClasses:S,shouldUseTransitions:!1}),a.hideContent(w.height),v(u,{newHeight:w.height})}),b)):(v(m,{newHeight:g}),this.timeoutID=setTimeout((function(){w.animationStateClasses=S,w.shouldUseTransitions=!1,a.setState(w),"auto"!==c&&a.hideContent(g),v(u,{newHeight:g})}),b))}}},{key:"componentWillUnmount",value:function(){h(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(e){0===e&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(e){0===e&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(e){var t;return(0,s.default)((d(t={},this.animationStateClasses.static,!0),d(t,this.animationStateClasses.staticHeightZero,0===e),d(t,this.animationStateClasses.staticHeightSpecific,e>0),d(t,this.animationStateClasses.staticHeightAuto,"auto"===e),t))}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.animateOpacity,i=n.applyInlineTransitions,l=n.children,c=n.className,u=n.contentClassName,h=n.delay,p=n.duration,y=n.easing,v=n.id,_=n.style,b=this.state,g=b.height,w=b.overflow,O=b.animationStateClasses,E=b.shouldUseTransitions,S=r({},_,{height:g,overflow:w||_.overflow});E&&i&&(S.transition="height "+p+"ms "+y+" "+h+"ms",_.transition&&(S.transition=_.transition+", "+S.transition),S.WebkitTransition=S.transition);var k={};a&&(k.transition="opacity "+p+"ms "+y+" "+h+"ms",k.WebkitTransition=k.transition,0===g&&(k.opacity=0));var j=(0,s.default)((d(e={},O,!0),d(e,c,c),e)),C=void 0!==this.props["aria-hidden"]?this.props["aria-hidden"]:0===g;return o.default.createElement("div",r({},f.apply(void 0,[this.props].concat(m)),{"aria-hidden":C,className:j,id:v,style:S}),o.default.createElement("div",{className:u,style:k,ref:function(e){return t.contentElement=e}},l))}}]),t}(o.default.Component);_.propTypes={"aria-hidden":l.default.bool,animateOpacity:l.default.bool,animationStateClasses:l.default.object,applyInlineTransitions:l.default.bool,children:l.default.any.isRequired,className:l.default.string,contentClassName:l.default.string,delay:l.default.number,duration:l.default.number,easing:l.default.string,height:function(e,t,r){var a=e[t];return"number"==typeof a&&a>=0||y(a)||"auto"===a?null:new TypeError('value "'+a+'" of type "'+(void 0===a?"undefined":n(a))+'" is invalid type for '+t+" in "+r+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:l.default.string,onAnimationEnd:l.default.func,onAnimationStart:l.default.func,style:l.default.object},_.defaultProps={animateOpacity:!1,animationStateClasses:u,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},t.default=_})))&&H.__esModule&&Object.prototype.hasOwnProperty.call(H,"default")?H.default:H;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V,G=(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(n.apply(this,a));else if("object"===i)for(var o in a)t.call(a,o)&&a[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}(V={exports:{}}),V.exports),Z={link:"Link_link__829fb056",visited:"Link_visited__829fb056",hover:"Link_hover__829fb056",focus:"Link_focus__829fb056",blue:"Link_blue__829fb056",grey:"Link_grey__829fb056","rw-primary":"Link_rwPrimary__829fb056",white:"Link_white__829fb056","rw-black-green":"Link_rwBlackGreen__829fb056","rw-blue-green":"Link_rwBlueGreen__829fb056","rw-dark-green":"Link_rwDarkGreen__829fb056","rw-dark-blue":"Link_rwDarkBlue__829fb056",body01:"Link_body01__829fb056",body02:"Link_body02__829fb056",body03:"Link_body03__829fb056",body04:"Link_body04__829fb056",icon:"Link_icon__829fb056",normal:"Link_normal__829fb056",medium:"Link_medium__829fb056",demi:"Link_demi__829fb056",bold:"Link_bold__829fb056"},J=a.a.createContext({hadKeyboardEvent:!0,isInitialized:!1});function X(e){var t=Object(r.useState)(!0),n=t[0],i=t[1];return Object(r.useEffect)((function(){function e(){i(!1)}function t(e){var t,n=null==e?void 0:e.target;"html"!==(null==n||null===(t=n.nodeName)||void 0===t?void 0:t.toLowerCase())&&(i(!1),r())}function n(){document.addEventListener("mousemove",t),document.addEventListener("mousedown",t),document.addEventListener("mouseup",t),document.addEventListener("pointermove",t),document.addEventListener("pointerdown",t),document.addEventListener("pointerup",t),document.addEventListener("touchmove",t),document.addEventListener("touchstart",t),document.addEventListener("touchend",t)}function r(){document.removeEventListener("mousemove",t),document.removeEventListener("mousedown",t),document.removeEventListener("mouseup",t),document.removeEventListener("pointermove",t),document.removeEventListener("pointerdown",t),document.removeEventListener("pointerup",t),document.removeEventListener("touchmove",t),document.removeEventListener("touchstart",t),document.removeEventListener("touchend",t)}function a(e){e.metaKey||e.altKey||e.ctrlKey||i(!0)}function o(e){"hidden"===document.visibilityState&&(i(!0),n())}return document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",e,!0),document.addEventListener("pointerdown",e,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("visibilitychange",o,!0),n(),function(){document.removeEventListener("keydown",a,!0),document.removeEventListener("mousedown",e,!0),document.removeEventListener("pointerdown",e,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("visibilitychange",o,!0),r()}}),[i]),a.a.createElement(J.Provider,{value:{hadKeyboardEvent:n,isInitialized:!0}},e.children)}const Y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.hasOwnProperty("data-wa-link")&&"string"==typeof e["data-wa-link"]&&0===e["data-wa-link"].length&&delete e["data-wa-link"],e},Q=e=>{let t=e.children,n=e.variant,i=e.className,o=e.href,l=e.title,s=e.onClick,c=e.onKeyPress,d=e.target,u=e.rel,m=e.size,f=e.icon,h=e.role,p=e.ariaHaspopup,y=e.ariaExpanded,v=e.isButton,_=e.modalId,b=e.axId,g=e.tracking,w=(e.isActive,e.fontWeight),O=e.iconClassName,E=K(e,["children","variant","className","href","title","onClick","onKeyPress","target","rel","size","icon","role","ariaHaspopup","ariaExpanded","isButton","modalId","axId","tracking","isActive","fontWeight","iconClassName"]);const S=G.bind(Z);g=Y(g),E=Y(E);const k=v?"button":"a";return a.a.createElement(X,null,a.a.createElement((()=>{const e=(L=(C=Object(r.useState)(!1))[0],M=C[1],D=(P=Object(r.useContext)(J)).hadKeyboardEvent,{focusVisible:P.isInitialized?D&&L:L,onFocus:function(){M(!0)},onBlur:function(){M(!1)}}),v=e.focusVisible,j=K(e,["focusVisible"]);var C,L,M,P,D;return a.a.createElement(k,U({className:S("link",i,n,m,v&&"focus",w),"data-testid":"link","data-tracking":"link","data-targetmodalid":_,href:o,title:l,onClick:s,onKeyPress:c,target:d,rel:u,"data-ax-id":b,role:h,"aria-haspopup":p,"aria-expanded":y},j,g,E),f?a.a.createElement("span",{className:S("icon",O),dangerouslySetInnerHTML:{__html:f}}):null,a.a.createElement("span",null,t))}),null))};function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){ee(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Q.defaultProps={variant:"blue",size:"body02",fontWeight:"medium",className:"",iconClassName:"",isButton:!1};var ie=function(e,t){return function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(n.apply(this,a));else if("object"===i)for(var o in a)t.call(a,o)&&a[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}(t={exports:{}}),t.exports}(),oe={container:"Modal_module_container__e58d454e",overlay:"Modal_module_overlay__e58d454e","qbal-FadeEnter":"Modal_module_qbalFadeEnter__e58d454e",modal:"Modal_module_modal__e58d454e","qbal-GrowEnter":"Modal_module_qbalGrowEnter__e58d454e",overflow:"Modal_module_overflow__e58d454e",close:"Modal_module_close__e58d454e",videomodal:"Modal_module_videomodal__e58d454e",small:"Modal_module_small__e58d454e",medium:"Modal_module_medium__e58d454e",large:"Modal_module_large__e58d454e",showmodal:"Modal_module_showmodal__e58d454e",trialModal:"Modal_module_trialModal__e58d454e",trialModalLeft:"Modal_module_trialModalLeft__e58d454e",trialModalTitle:"Modal_module_trialModalTitle__e58d454e",trialModalSubtitle:"Modal_module_trialModalSubtitle__e58d454e",trialModalText:"Modal_module_trialModalText__e58d454e",trialModalRight:"Modal_module_trialModalRight__e58d454e",trialModalButtonContainer:"Modal_module_trialModalButtonContainer__e58d454e",trialButton:"Modal_module_trialButton__e58d454e",buyButton:"Modal_module_buyButton__e58d454e",hideModalImageOnMobile:"Modal_module_hideModalImageOnMobile__e58d454e"},le=e=>{let t=e.children,n=e.title,i=void 0===n?"":n,l=e.open,s=void 0!==l&&l,c=e.modalId,d=e.onClose,u=void 0===d?()=>{}:d,m=e.size,f=e.video,h=e.axId,p=e.id,y=void 0===p?(()=>{for(var e=[],t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);var n=4294967295*Math.random()|0,r=4294967295*Math.random()|0,a=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return e[255&n]+e[n>>8&255]+e[n>>16&255]+e[n>>24&255]+"-"+e[255&r]+e[r>>8&255]+"-"+e[r>>16&15|64]+e[r>>24&255]+"-"+e[63&a|128]+e[a>>8&255]+"-"+e[a>>16&255]+e[a>>24&255]+e[255&i]+e[i>>8&255]+e[i>>16&255]+e[i>>24&255]})():p,v=e.noClose,_=void 0!==v&&v;const b=ie.bind(oe),g=y,w=re(Object(r.useState)(!1),2),O=w[0],E=w[1],S=re(Object(r.useState)(!1),2),k=S[0],j=S[1],C=Object(r.useRef)();Object(r.useEffect)((()=>{C.current=document.body,j(!0)}),[k]);const L=Object(r.useRef)(),M=()=>{s?u():E(!O)},P=e=>{var t,n,r,a,i,o,l,s;c&&((null===(t=e.target)||void 0===t||null===(n=t.dataset)||void 0===n?void 0:n.targetmodalid)!==c&&(null===(r=e.target)||void 0===r||null===(a=r.closest("a"))||void 0===a||null===(i=a.dataset)||void 0===i?void 0:i.targetmodalid)!==c&&(null===(o=e.target)||void 0===o||null===(l=o.closest("button"))||void 0===l||null===(s=l.dataset)||void 0===s?void 0:s.targetmodalid)!==c||(e.preventDefault(),E(!0)))};return Object(r.useEffect)((()=>{if(s)return;const e=e=>{var t;null===(t=document.querySelector("#main"))||void 0===t||t.addEventListener("click",P)};return e(),window.addEventListener("load",e),()=>{var t;window.removeEventListener("load",e),null===(t=document.querySelector("#main"))||void 0===t||t.removeEventListener("click",P)}}),[]),Object(r.useEffect)((()=>{E(s)}),[s]),Object(r.useEffect)((()=>{const e=e=>{"Escape"===e.key&&E(!1),"Tab"===e.key&&(e=>{let t=L.current.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, iframe');const n=t[0],r=t[t.length-1];if(!e.shiftKey&&document.activeElement!==n)return n.focus(),e.preventDefault();e.shiftKey&&document.activeElement!==r&&(r.focus(),e.preventDefault())})(e)};return O&&!_&&document.addEventListener("keyup",e),()=>document.removeEventListener("keyup",e)}),[O]),O||s?k&&o.a.createPortal(a.a.createElement("div",{id:g,"data-testid":"modal","data-ax-id":h,className:b("container",O&&"showmodal"),"data-modalid":c},a.a.createElement("div",{className:b("overlay"),onClick:M}),a.a.createElement("div",{role:"dialog","aria-modal":"true","aria-labelledby":g,ref:L,className:b("modal",m,f&&"videomodal")},!_&&a.a.createElement("button",{className:b("close"),onClick:M,"aria-label":"Close",tabIndex:"0"},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 21.9 21.9",fill:"currentColor"},a.a.createElement("path",{d:"M14.1 11.3a.5.5 0 0 1 0-.7l7.5-7.5c.2-.2.3-.5.3-.7s-.1-.5-.3-.7L20.2.3a1 1 0 0 0-.7-.3 1 1 0 0 0-.7.3l-7.5 7.5c-.2.2-.5.2-.7 0L3.1.3C2.9.1 2.6 0 2.4 0s-.5.1-.7.3L.3 1.7c-.2.2-.3.5-.3.7s.1.5.3.7l7.5 7.5c.2.2.2.5 0 .7L.3 18.8c-.2.2-.3.5-.3.7s.1.5.3.7l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3l7.5-7.5c.2-.2.5-.2.7 0l7.5 7.5c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.2-.2.3-.5.3-.7s-.1-.5-.3-.7l-7.5-7.5z"}))),a.a.createElement("div",{className:b("overflow")},a.a.createElement("h2",{id:g,style:{margin:"0"}},i),t?r.Children.map(t,((e,t)=>Object(r.cloneElement)(e,ne(ne({},e.props),{},{index:t})))):null))),C.current):a.a.createElement(a.a.Fragment,null)};const se=n("VXOo"),ce=["accordion","modal"],de=se.color.white,ue=se.color.blueRwSky,me=se.color.sand02,fe=se.color.blueRwDark,he=se.color.grey01,pe=se.color.greenRwGreen,ye=se.color.rwTofu,ve=e=>{let t=e.variant,n=e.palette,i=e.link,o=e.isDivider,l=e.isFullWidth,c=e.tracking,m=e.children,f=e.isContentWhiteBg,y=e.isVideo;const v=u(Object(r.useState)(0),2),_=v[0],b=v[1],g=u(Object(r.useState)(!1),2),w=g[0],O=g[1],E=u((()=>{const e=re(Object(r.useState)(!1),2),t=e[0],n=e[1];return[t,()=>{n(!t)}]})(),2),S=E[0],k=E[1],j=t===ce[0],C=u(Object(r.useState)(c&&c["data-ui-action"]?c["data-ui-action"]:""),2),L=C[0],M=C[1],P=h.bind(p),D=n.backgroundColor,x=[de,ue,me].indexOf(D)>-1,T=()=>r.Children.map(m,(e=>{let t=x?"light":"dark";return t=y||j?t:"light",Object(r.cloneElement)(e,d(d({},e.props),{},{colorTheme:t}))}));return a.a.createElement("div",{"data-testid":"RwDisclaimer","data-tracking":"disclaimer",className:P("rw-disclaimer",{"full-width":l})},a.a.createElement("div",{className:P("rw-disclaimer__container"),style:{backgroundColor:D}},a.a.createElement("div",{className:P("rw-disclaimer__link-container")},a.a.createElement(Q,s({isButton:!0,className:P("rw-disclaimer__link",{"modal-link":!j}),onClick:j?()=>{O(!w),b(0===_?"auto":0),M("dismissed"===L?"displayed":"dismissed")}:k,"aria-expanded":w,size:"body02",icon:"",variant:x?"rw-dark-blue":"white"},i,c,{children:a.a.createElement((e=>{let t=e.children;return a.a.createElement(a.a.Fragment,null,t,j&&a.a.createElement("span",{className:P("rw-disclaimer__icon",{reversed:w})},a.a.createElement("svg",{width:"17",height:"8",viewBox:"0 0 17 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M1 0.875L6.45305 5.96451C7.60567 7.04029 9.39433 7.04029 10.547 5.96451L16 0.875",stroke:"#0D333F",strokeWidth:"2"}))))}),{children:i.children}),"data-ui-action":L}))),j&&a.a.createElement(q,{"data-expanded":!!w||null,className:P("rw-disclaimer__accordion-wrapper",f&&"content-background-white"),duration:400,height:_,animateOpacity:!0,delay:250},a.a.createElement("div",{className:P("rw-disclaimer__content",{expanded:w&&o})},T())),o&&a.a.createElement("div",{className:P("rw-disclaimer__divider",{"light-theme":x})})),!j&&a.a.createElement(le,{id:"disclaimer",video:y,size:"large",open:S,onClose:k},a.a.createElement("div",{className:P("modal-content")},T())))},_e={defaults:{variant:"accordion",isDivider:!1,isFullWidth:!1,isVideo:!1,isContentWhiteBg:!1,palette:{backgroundColor:fe},link:{size:"body02",children:"Important offers, pricing details and disclaimers"},tracking:{"data-wa-link":"","data-action":"interacted","data-object":"content","data-ui-action":"dismissed","data-ui-object":"accordion","data-ui-object-detail":"","data-ui-access-point":"accordion","data-sku":""}},enums:{variants:ce,colors:[{name:"White",color:de},{name:"RwSky",color:ue},{name:"Sandy",color:me},{name:"RwBlue05",color:fe},{name:"Grey01",color:he},{name:"RwGreen04",color:pe},{name:"Tofu",color:ye}]}};ve.defaultProps=_e.defaults,ve.displayName="RwDisclaimer",t.default=ve}}]);
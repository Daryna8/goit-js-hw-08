!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,b=Math.min,m=function(){return s.Date.now()};function p(e,t,n){var r,i,a,f,u,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,u=setTimeout(O,t),d?p(e):f}function w(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function O(){var e=m();if(w(e))return S(e);u=setTimeout(O,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function S(e){return u=void 0,v&&r?p(e):(r=i=void 0,f)}function T(){var e=m(),n=w(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return j(c);if(s)return u=setTimeout(O,t),p(c)}return void 0===u&&(u=setTimeout(O,t)),f}return t=h(t)||0,g(n)&&(d=!!n.leading,a=(s="maxWait"in n)?y(h(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},T.flush=function(){return void 0===u?f:S(m())},T}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form");function w(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return console.log(e),t}}j.addEventListener("input",e(t)((function(e){var t={};new FormData(j).forEach((function(e,n){t[n]=e})),n="feedback-form-state",r=t,localStorage.setItem(n,JSON.stringify(r));var n,r}),5e3)),j.addEventListener("submit",(function(e){e.preventDefault();var t=w("feedback-form-state");localStorage.removeItem("feedback-form-state"),e.target.reset(),console.log(t)})),function(){var e=w("feedback-form-state")||{},t=!0,n=!1,r=void 0;try{for(var o,i=Object.keys(e)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var a=o.value;j.elements[a].value=e[a]}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}}()}();
//# sourceMappingURL=03-feedback.7a22ba74.js.map

import{r as a,R as s}from"./react-vendor-BVyaKP1K.js";var F=["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","className","spin"];function w(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,t)}return o}function W(e){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?w(Object(o),!0).forEach(function(t){E(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function E(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e,r){if(e==null)return{};var o=P(e,r),t,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function P(e,r){if(e==null)return{};var o={},t=Object.keys(e),n,i;for(i=0;i<t.length;i++)n=t[i],!(r.indexOf(n)>=0)&&(o[n]=e[n]);return o}var z={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function M(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function S(e,r,o){var t=typeof r.fill=="string"?[r.fill]:r.fill||[],n=[],i=r.theme||o.theme;switch(i){case"outline":n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push("none"),n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push("none");break;case"filled":n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push("#FFF"),n.push("#FFF");break;case"two-tone":n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push(typeof t[1]=="string"?t[1]:o.colors.twoTone.twoTone),n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push(typeof t[1]=="string"?t[1]:o.colors.twoTone.twoTone);break;case"multi-color":n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push(typeof t[1]=="string"?t[1]:o.colors.multiColor.outFillColor),n.push(typeof t[2]=="string"?t[2]:o.colors.multiColor.innerStrokeColor),n.push(typeof t[3]=="string"?t[3]:o.colors.multiColor.innerFillColor);break}return{size:r.size||o.size,strokeWidth:r.strokeWidth||o.strokeWidth,strokeLinecap:r.strokeLinecap||o.strokeLinecap,strokeLinejoin:r.strokeLinejoin||o.strokeLinejoin,colors:n,id:e}}var b=a.createContext(z);b.Provider;function d(e,r,o){return function(t){var n=t.size,i=t.strokeWidth,L=t.strokeLinecap,u=t.strokeLinejoin,f=t.theme,k=t.fill,h=t.className,m=t.spin,C=p(t,F),c=a.useContext(b),g=a.useMemo(M,[]),j=S(g,{size:n,strokeWidth:i,strokeLinecap:L,strokeLinejoin:u,theme:f,fill:k},c),l=[c.prefix+"-icon"];return l.push(c.prefix+"-icon-"+e),r&&c.rtl&&l.push(c.prefix+"-icon-rtl"),m&&l.push(c.prefix+"-icon-spin"),h&&l.push(h),s.createElement("span",W(W({},C),{},{className:l.join(" ")}),o(j))}}const R=d("cooperative-handshake",!0,function(e){return s.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},s.createElement("path",{d:"M24 40L36 28L32 32L28 36L24 40ZM24 40L4 20L16 8L24 16",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M17 23L32 8L44 20L36 28L28 20L22 26L17 23ZM17 23L24 16",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M28 36L25 33",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M32 32L29 29",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),Z=d("grid-four",!1,function(e){return s.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},s.createElement("rect",{x:"5",y:"5",width:"38",height:"38",rx:"2",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M24 5V43",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M5 24H43",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),H=d("trending-up",!0,function(e){return s.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},s.createElement("path",{d:"M40.9999 27.0005V15.0005H29",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M6 37L16.3385 24.5L26.1846 30.5L41 15",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),q=d("user",!1,function(e){return s.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},s.createElement("circle",{cx:"24",cy:"12",r:"8",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))});/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=(...e)=>e.filter((r,o,t)=>!!r&&r.trim()!==""&&t.indexOf(r)===o).join(" ").trim();/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,t)=>t?t.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>{const r=N(e);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1},I=a.createContext({}),T=()=>a.useContext(I),B=a.forwardRef(({color:e,size:r,strokeWidth:o,absoluteStrokeWidth:t,className:n="",children:i,iconNode:L,...u},f)=>{const{size:k=24,strokeWidth:h=2,absoluteStrokeWidth:m=!1,color:C="currentColor",className:c=""}=T()??{},g=t??m?Number(o??h)*24/Number(r??k):o??h;return a.createElement("svg",{ref:f,...y,width:r??k??y.width,height:r??k??y.height,stroke:e??C,strokeWidth:g,className:O("lucide",c,n),...!i&&!A(u)&&{"aria-hidden":"true"},...u},[...L.map(([j,l])=>a.createElement(j,l)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,r)=>{const o=a.forwardRef(({className:t,...n},i)=>a.createElement(B,{ref:i,iconNode:r,className:O(`lucide-${_(x(e))}`,`lucide-${e}`,t),...n}));return o.displayName=x(e),o};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],K=v("clock",U);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],V=v("mail",$);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],J=v("phone",D);export{R as C,Z as G,V as M,J as P,H as T,q as U,K as a};

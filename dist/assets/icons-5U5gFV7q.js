import{r as c,R as s}from"./react-vendor-BVyaKP1K.js";/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(...e)=>e.filter((o,r,t)=>!!o&&o.trim()!==""&&t.indexOf(o)===r).join(" ").trim();/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,r,t)=>t?t.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>{const o=W(e);return o.charAt(0).toUpperCase()+o.slice(1)};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=e=>{for(const o in e)if(o.startsWith("aria-")||o==="role"||o==="title")return!0;return!1},z=c.createContext({}),F=()=>c.useContext(z),N=c.forwardRef(({color:e,size:o,strokeWidth:r,absoluteStrokeWidth:t,className:n="",children:i,iconNode:f,...u},L)=>{const{size:k=24,strokeWidth:d=2,absoluteStrokeWidth:m=!1,color:p="currentColor",className:l=""}=F()??{},g=t??m?Number(r??d)*24/Number(o??k):r??d;return c.createElement("svg",{ref:L,...x,width:o??k??x.width,height:o??k??x.height,stroke:e??p,strokeWidth:g,className:M("lucide",l,n),...!i&&!O(u)&&{"aria-hidden":"true"},...u},[...f.map(([v,h])=>c.createElement(v,h)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=(e,o)=>{const r=c.forwardRef(({className:t,...n},i)=>c.createElement(N,{ref:i,iconNode:o,className:M(`lucide-${_(w(e))}`,`lucide-${e}`,t),...n}));return r.displayName=w(e),r};/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],ie=a("book-open",E);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],ae=a("brain",P);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],se=a("chevron-right",$);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],ce=a("clock",S);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],le=a("download",A);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],he=a("file-text",T);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],ke=a("mail",q);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],de=a("message-square",V);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],ue=a("panels-top-left",I);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ye=a("phone",B);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],fe=a("rocket",H);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]],Le=a("scale",D);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],me=a("shield",R);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],pe=a("sparkles",U);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ge=a("target",Z);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],ve=a("workflow",G);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xe=a("x",K);/**
 * @license lucide-react v1.22.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],we=a("zap",X);var J=["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","className","spin"];function C(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,t)}return r}function j(e){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?C(Object(r),!0).forEach(function(t){Q(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Q(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function Y(e,o){if(e==null)return{};var r=ee(e,o),t,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function ee(e,o){if(e==null)return{};var r={},t=Object.keys(e),n,i;for(i=0;i<t.length;i++)n=t[i],!(o.indexOf(n)>=0)&&(r[n]=e[n]);return r}var te={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function oe(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function re(e,o,r){var t=typeof o.fill=="string"?[o.fill]:o.fill||[],n=[],i=o.theme||r.theme;switch(i){case"outline":n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push("none"),n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push("none");break;case"filled":n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push("#FFF"),n.push("#FFF");break;case"two-tone":n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push(typeof t[1]=="string"?t[1]:r.colors.twoTone.twoTone),n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push(typeof t[1]=="string"?t[1]:r.colors.twoTone.twoTone);break;case"multi-color":n.push(typeof t[0]=="string"?t[0]:"currentColor"),n.push(typeof t[1]=="string"?t[1]:r.colors.multiColor.outFillColor),n.push(typeof t[2]=="string"?t[2]:r.colors.multiColor.innerStrokeColor),n.push(typeof t[3]=="string"?t[3]:r.colors.multiColor.innerFillColor);break}return{size:o.size||r.size,strokeWidth:o.strokeWidth||r.strokeWidth,strokeLinecap:o.strokeLinecap||r.strokeLinecap,strokeLinejoin:o.strokeLinejoin||r.strokeLinejoin,colors:n,id:e}}var b=c.createContext(te);b.Provider;function y(e,o,r){return function(t){var n=t.size,i=t.strokeWidth,f=t.strokeLinecap,u=t.strokeLinejoin,L=t.theme,k=t.fill,d=t.className,m=t.spin,p=Y(t,J),l=c.useContext(b),g=c.useMemo(oe,[]),v=re(g,{size:n,strokeWidth:i,strokeLinecap:f,strokeLinejoin:u,theme:L,fill:k},l),h=[l.prefix+"-icon"];return h.push(l.prefix+"-icon-"+e),o&&l.rtl&&h.push(l.prefix+"-icon-rtl"),m&&h.push(l.prefix+"-icon-spin"),d&&h.push(d),s.createElement("span",j(j({},p),{},{className:h.join(" ")}),r(v))}}const Ce=y("cooperative-handshake",!0,function(e){return s.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},s.createElement("path",{d:"M24 40L36 28L32 32L28 36L24 40ZM24 40L4 20L16 8L24 16",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M17 23L32 8L44 20L36 28L28 20L22 26L17 23ZM17 23L24 16",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M28 36L25 33",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M32 32L29 29",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),je=y("grid-four",!1,function(e){return s.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},s.createElement("rect",{x:"5",y:"5",width:"38",height:"38",rx:"2",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M24 5V43",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M5 24H43",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),Me=y("trending-up",!0,function(e){return s.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},s.createElement("path",{d:"M40.9999 27.0005V15.0005H29",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M6 37L16.3385 24.5L26.1846 30.5L41 15",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))}),be=y("user",!1,function(e){return s.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},s.createElement("circle",{cx:"24",cy:"12",r:"8",fill:e.colors[1],stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}),s.createElement("path",{d:"M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44",stroke:e.colors[0],strokeWidth:e.strokeWidth,strokeLinecap:e.strokeLinecap,strokeLinejoin:e.strokeLinejoin}))});export{ie as B,Ce as C,le as D,he as F,je as G,ke as M,ye as P,fe as R,pe as S,Me as T,be as U,ve as W,xe as X,we as Z,ce as a,se as b,de as c,ue as d,ae as e,ge as f,me as g,Le as h};

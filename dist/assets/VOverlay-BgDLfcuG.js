import{bv as Le,bw as Be,aa as Fe,b as R,p as W,T as le,a4 as z,r as D,ah as q,bx as ve,w as L,bi as I,by as je,bz as he,bA as oe,bB as ae,bC as be,af as k,b0 as ee,bD as we,bp as N,ak as Ee,bE as de,bF as Me,bG as Ye,b5 as me,Q as Re,bH as xe,bl as Xe,ae as j,ac as Ge,D as Je,bI as Ne,M as Ke,b3 as Ue,b6 as Ze,a6 as Qe,b8 as et,am as tt,aG as nt,ao as ot,ab as at,aX as rt,Z as it,b9 as st,b4 as lt,bJ as ct,bK as ut,ai as ft,bL as vt,H as dt,I as mt,aJ as yt,F as gt}from"./index-BL9bc9ks.js";import{a as J,d as ht,s as ce,b as bt,g as He,n as _e,B as re,c as Se}from"./forwardRefs-DWGaNmQL.js";import{m as wt,M as Et}from"./VImg-CUh1yFwO.js";const K=new WeakMap;function xt(e,n){Object.keys(n).forEach(t=>{if(Le(t)){const o=Be(t),a=K.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),K.has(e)||K.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function St(e,n){Object.keys(n).forEach(t=>{if(Le(t)){const o=Be(t),a=K.get(e);a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function De(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Ot(e):ye(e))return e;e=e.parentElement}return document.scrollingElement}function Z(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ye(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ye(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Ot(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function kt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Pt=z({target:[Object,Array]},"v-dialog-transition"),rn=Fe()({name:"VDialogTransition",props:Pt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var h;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),a.style.visibility="";const{x:s,y:r,sx:u,sy:c,speed:f}=Oe(e.target,a),y=J(a,[{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:ht});(h=pe(a))==null||h.forEach(g=>{J(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ce})}),y.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var h;await new Promise(g=>requestAnimationFrame(g));const{x:s,y:r,sx:u,sy:c,speed:f}=Oe(e.target,a);J(a,[{},{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:bt}).finished.then(()=>i()),(h=pe(a))==null||h.forEach(g=>{J(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?R(le,W({name:"dialog-transition"},o,{css:!1}),t):R(le,{name:"dialog-transition"},t)}});function pe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Oe(e,n){const t=He(e),o=_e(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(C=>parseFloat(C)),[s,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;s==="left"||r==="left"?u-=t.width/2:(s==="right"||r==="right")&&(u+=t.width/2);let c=t.top+t.height/2;s==="top"||r==="top"?c-=t.height/2:(s==="bottom"||r==="bottom")&&(c+=t.height/2);const f=t.width/o.width,y=t.height/o.height,h=Math.max(1,f,y),g=f/h||0,d=y/h||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),P=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(a+o.left),y:c-(i+o.top),sx:g,sy:d,speed:P}}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Ct(e,n){return{x:e.x-n.x,y:e.y-n.y}}function ke(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:i},n)}return ie({x:n.width/2,y:n.height/2},n)}const Ie={static:Lt,connected:Ft},At=z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ie},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Tt(e,n){const t=D({}),o=D();q&&ve(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,r;L(()=>e.locationStrategy,i),I(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(r=Ie[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:t,updateLocation:o}}function Lt(){}function Bt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=_e(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ft(e,n,t){(Array.isArray(e.target.value)||kt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=je(()=>{const d=he(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?oe(d):he(n.origin,e.isRtl.value);return d.side===v.side&&d.align===ae(v).align?{preferredAnchor:be(d),preferredOrigin:be(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,r,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>k(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let y=!1;const h=new ResizeObserver(()=>{y&&g()});L([e.target,e.contentEl],(d,v)=>{let[P,C]=d,[x,w]=v;x&&!Array.isArray(x)&&h.unobserve(x),P&&!Array.isArray(P)&&h.observe(P),w&&h.unobserve(w),C&&h.observe(C)},{immediate:!0}),I(()=>{h.disconnect()});function g(){if(y=!1,requestAnimationFrame(()=>y=!0),!e.target.value||!e.contentEl.value)return;const d=He(e.target.value),v=Bt(e.contentEl.value,e.isRtl.value),P=Z(e.contentEl.value),C=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=P.reduce((p,E)=>{const m=E.getBoundingClientRect(),b=new re({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return p?new re({x:Math.max(p.left,b.left),y:Math.max(p.top,b.top),width:Math.min(p.right,b.right)-Math.max(p.left,b.left),height:Math.min(p.bottom,b.bottom)-Math.max(p.top,b.top)}):b},void 0);x.x+=C,x.y+=C,x.width-=C*2,x.height-=C*2;let w={anchor:a.value,origin:i.value};function V(p){const E=new re(v),m=ke(p.anchor,d),b=ke(p.origin,E);let{x:B,y:M}=Ct(m,b);switch(p.anchor.side){case"top":M-=f.value[0];break;case"bottom":M+=f.value[0];break;case"left":B-=f.value[0];break;case"right":B+=f.value[0];break}switch(p.anchor.align){case"top":M-=f.value[1];break;case"bottom":M+=f.value[1];break;case"left":B-=f.value[1];break;case"right":B+=f.value[1];break}return E.x+=B,E.y+=M,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,c.value),{overflows:Se(E,x),x:B,y:M}}let F=0,A=0;const l={x:0,y:0},T={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:p,y:E,overflows:m}=V(w);F+=p,A+=E,v.x+=p,v.y+=E;{const b=we(w.anchor),B=m.x.before||m.x.after,M=m.y.before||m.y.after;let Y=!1;if(["x","y"].forEach(O=>{if(O==="x"&&B&&!T.x||O==="y"&&M&&!T.y){const $={anchor:{...w.anchor},origin:{...w.origin}},X=O==="x"?b==="y"?ae:oe:b==="y"?oe:ae;$.anchor=X($.anchor),$.origin=X($.origin);const{overflows:H}=V($);(H[O].before<=m[O].before&&H[O].after<=m[O].after||H[O].before+H[O].after<(m[O].before+m[O].after)/2)&&(w=$,Y=T[O]=!0)}}),Y)continue}m.x.before&&(F+=m.x.before,v.x+=m.x.before),m.x.after&&(F-=m.x.after,v.x-=m.x.after),m.y.before&&(A+=m.y.before,v.y+=m.y.before),m.y.after&&(A-=m.y.after,v.y-=m.y.after);{const b=Se(v,x);l.x=x.width-b.x.before-b.x.after,l.y=x.height-b.y.before-b.y.after,F+=b.x.before,v.x+=b.x.before,A+=b.y.before,v.y+=b.y.before}break}const ne=we(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:N(se(A)),left:e.isRtl.value?void 0:N(se(F)),right:e.isRtl.value?N(se(-F)):void 0,minWidth:N(ne==="y"?Math.min(s.value,d.width):s.value),maxWidth:N(Pe(Ee(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:N(Pe(Ee(l.y,r.value===1/0?0:r.value,c.value)))}),{available:l,contentBox:v}}return L(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>g()),ee(()=>{const d=g();if(!d)return;const{available:v,contentBox:P}=d;P.height>v.y&&requestAnimationFrame(()=>{g(),requestAnimationFrame(()=>{g()})})}),{updateLocation:g}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Pe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const Q=[];function Mt(e){!ue||Q.length?(Q.push(e),fe()):(ue=!1,e(),fe())}let Ce=-1;function fe(){cancelAnimationFrame(Ce),Ce=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?fe():ue=!0})}const U={none:null,close:Ht,block:_t,reposition:Dt},Rt=z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in U}},"VOverlay-scroll-strategies");function Nt(e,n){if(!q)return;let t;de(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Me(),await ee(),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=U[e.scrollStrategy])==null||o.call(U,n,e,t)}))}),I(()=>{t==null||t.stop()})}function Ht(e){function n(t){e.isActive.value=!1}Ve(e.targetEl.value??e.contentEl.value,n)}function _t(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Z(e.targetEl.value,n.contained?t:void 0),...Z(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>ye(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",N(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",N(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",N(a)),r.classList.add("v-overlay-scroll-blocked")}),I(()=>{o.forEach((r,u)=>{const c=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),y=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-c,r.scrollTop=-f,r.style.scrollBehavior=y}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Dt(e,n,t){let o=!1,a=-1,i=-1;function s(r){Mt(()=>{var f,y;const u=performance.now();(y=(f=e.updateLocation).value)==null||y.call(f,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{Ve(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(r)})})):s(r)})})}),I(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function Ve(e,n){const t=[document,...Z(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),I(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const It=Symbol.for("vuetify:v-menu"),Vt=z({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function $t(e,n){let t=()=>{};function o(s){t==null||t();const r=Number(s?e.openDelay:e.closeDelay);return new Promise(u=>{t=Ye(r,()=>{n==null||n(s),u(s)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const Wt=z({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Vt()},"VOverlay-activator");function qt(e,n){let{isActive:t,isTop:o}=n;const a=me("useActivator"),i=D();let s=!1,r=!1,u=!0;const c=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:y,runCloseDelay:h}=$t(e,l=>{l===(e.openOnHover&&s||c.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),g=D(),d={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(g.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var T;(T=l.sourceCapabilities)!=null&&T.firesTouchEvents||(s=!0,i.value=l.currentTarget||l.target,y())},onMouseleave:l=>{s=!1,h()},onFocus:l=>{Xe(l.target,":focus-visible")!==!1&&(r=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,y())},onBlur:l=>{r=!1,l.stopPropagation(),h()}},v=k(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),c.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),P=k(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,y()},l.onMouseleave=()=>{s=!1,h()}),c.value&&(l.onFocusin=()=>{r=!0,y()},l.onFocusout=()=>{r=!1,h()}),e.closeOnContentClick){const T=Re(It,null);l.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return l}),C=k(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,y())},l.onMouseleave=()=>{s=!1,h()}),l});L(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)}),L(t,l=>{l||setTimeout(()=>{g.value=void 0})},{flush:"post"});const x=D();de(()=>{x.value&&ee(()=>{i.value=xe(x.value)})});const w=D(),V=k(()=>e.target==="cursor"&&g.value?g.value:w.value?xe(w.value):$e(e.target,a)||i.value),F=k(()=>Array.isArray(V.value)?void 0:V.value);let A;return L(()=>!!e.activator,l=>{l&&q?(A=Me(),A.run(()=>{zt(e,a,{activatorEl:i,activatorEvents:v})})):A&&A.stop()},{flush:"post",immediate:!0}),I(()=>{A==null||A.stop()}),{activatorEl:i,activatorRef:x,target:V,targetEl:F,targetRef:w,activatorEvents:v,contentEvents:P,scrimEvents:C}}function zt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;L(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=r(c);f&&s(f)}u&&ee(()=>i())},{immediate:!0}),L(()=>e.activatorProps,()=>{i()}),I(()=>{s()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&xt(u,W(a.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&St(u,W(a.value,c))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=$e(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function $e(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function jt(){if(!q)return j(!1);const{ssr:e}=Ge();if(e){const n=j(!1);return Je(()=>{n.value=!0}),n}else return j(!0)}const Yt=z({eager:Boolean},"lazy");function Xt(e,n){const t=j(!1),o=k(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function Gt(){const n=me("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ae=Symbol.for("vuetify:stack"),G=Ne([]);function Jt(e,n,t){const o=me("useStack"),a=!t,i=Re(Ae,void 0),s=Ne({activeChildren:new Set});Ke(Ae,s);const r=j(+n.value);ve(e,()=>{var y;const f=(y=G.at(-1))==null?void 0:y[1];r.value=f?f+10:+n.value,a&&G.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),I(()=>{if(a){const h=Ue(G).findIndex(g=>g[0]===o.uid);G.splice(h,1)}i==null||i.activeChildren.delete(o.uid)})});const u=j(!0);a&&de(()=>{var y;const f=((y=G.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=f)});const c=k(()=>!s.activeChildren.size);return{globalTop:Ze(u),localTop:c,stackStyles:k(()=>({zIndex:r.value}))}}function Kt(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Ut(){return!0}function We(e,n,t){if(!e||qe(e,t)===!1)return!1;const o=De(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function qe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Ut)(e)}function Zt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&We(e,n,t)&&setTimeout(()=>{qe(e,t)&&o&&o(e)},0)}function Te(e,n){const t=De(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Qt={mounted(e,n){const t=a=>Zt(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=We(a,e,n)};Te(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Te(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function en(e){const{modelValue:n,color:t,...o}=e;return R(le,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&R("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const tn=z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Wt(),...Qe(),...et(),...Yt(),...At(),...Rt(),...tt(),...wt()},"VOverlay"),sn=Fe()({name:"VOverlay",directives:{ClickOutside:Qt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...tn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=nt(e,"modelValue"),s=k({get:()=>i.value,set:S=>{S&&e.disabled||(i.value=S)}}),{teleportTarget:r}=Kt(k(()=>e.attach||e.contained)),{themeClasses:u}=ot(e),{rtlClasses:c,isRtl:f}=at(),{hasContent:y,onAfterLeave:h}=Xt(e,s),g=rt(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:P}=Jt(s,it(e,"zIndex"),e._disableGlobalStack),{activatorEl:C,activatorRef:x,target:w,targetEl:V,targetRef:F,activatorEvents:A,contentEvents:l,scrimEvents:T}=qt(e,{isActive:s,isTop:v}),{dimensionStyles:te}=st(e),ne=jt(),{scopeId:p}=Gt();L(()=>e.disabled,S=>{S&&(s.value=!1)});const E=D(),m=D(),{contentStyles:b,updateLocation:B}=Tt(e,{isRtl:f,contentEl:m,target:w,isActive:s});Nt(e,{root:E,contentEl:m,targetEl:V,isActive:s,updateLocation:B});function M(S){a("click:outside",S),e.persistent?H():s.value=!1}function Y(){return s.value&&d.value}q&&L(s,S=>{S?window.addEventListener("keydown",O):window.removeEventListener("keydown",O)},{immediate:!0}),lt(()=>{q&&window.removeEventListener("keydown",O)});function O(S){var _,ge;S.key==="Escape"&&d.value&&(e.persistent?H():(s.value=!1,(_=m.value)!=null&&_.contains(document.activeElement)&&((ge=C.value)==null||ge.focus())))}const $=ct();ve(()=>e.closeOnBack,()=>{ut($,S=>{d.value&&s.value?(S(!1),e.persistent?H():s.value=!1):S()})});const X=D();L(()=>s.value&&(e.absolute||e.contained)&&r.value==null,S=>{if(S){const _=pt(E.value);_&&_!==document.scrollingElement&&(X.value=_.scrollTop)}});function H(){e.noClickAnimation||m.value&&J(m.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}function ze(){h(),a("afterLeave")}return ft(()=>{var S;return R(gt,null,[(S=t.activator)==null?void 0:S.call(t,{isActive:s.value,props:W({ref:x,targetRef:F},A.value,e.activatorProps)}),!e.disabled&&ne.value&&y.value&&R(vt,{disabled:!r.value,to:r.value},{default:()=>[R("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[P.value,{top:N(X.value)},e.style],ref:E},p,o),[R(en,W({color:g,modelValue:!!e.scrim&&s.value},T.value),null),R(Et,{appear:!0,persisted:!0,transition:e.transition,target:w.value,onAfterLeave:ze},{default:()=>{var _;return[dt(R("div",W({ref:m,class:["v-overlay__content",e.contentClass],style:[te.value,b.value]},l.value,e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:s})]),[[mt,s.value],[yt("click-outside"),{handler:M,closeConditional:Y,include:()=>[C.value]}]])]}})])]})])}),{activatorEl:C,target:w,animateClick:H,contentEl:m,globalTop:d,localTop:v,updateLocation:B}}});export{sn as V,rn as a,It as b,tn as m,Gt as u};

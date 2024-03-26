import{a4 as w,a6 as W,b8 as X,aa as $,b9 as Z,ai as E,b as r,af as R,K as G,p as q,T as Q,bq as D,av as Y,aX as p,Z as ee,aE as te,b5 as ne,ae as y,r as re,w as T,br as ae,b0 as se,b4 as ie,H as U,aJ as le,F as oe,bp as ue,I as ce}from"./index-BL9bc9ks.js";function de(e){return{aspectStyles:R(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const H=w({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...W(),...X()},"VResponsive"),F=$()({name:"VResponsive",props:H(),setup(e,l){let{slots:a}=l;const{aspectStyles:n}=de(e),{dimensionStyles:c}=Z(e);return E(()=>{var v;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[r("div",{class:"v-responsive__sizer",style:n.value},null),(v=a.additional)==null?void 0:v.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),ve=w({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),I=(e,l)=>{let{slots:a}=l;const{transition:n,disabled:c,...v}=e,{component:f=Q,...d}=typeof n=="object"?n:{};return G(f,q(typeof n=="string"?{name:c?"":n}:d,v,{disabled:c}),a)};function ge(e,l){if(!D)return;const a=l.modifiers||{},n=l.value,{handler:c,options:v}=typeof n=="object"?n:{handler:n,options:{}},f=new IntersectionObserver(function(){var g;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const s=(g=e._observe)==null?void 0:g[l.instance.$.uid];if(!s)return;const i=d.some(S=>S.isIntersecting);c&&(!a.quiet||s.init)&&(!a.once||i||s.init)&&c(i,d,h),i&&a.once?M(e,l):s.init=!0},v);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:f},f.observe(e)}function M(e,l){var n;const a=(n=e._observe)==null?void 0:n[l.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const me={mounted:ge,unmounted:M},fe=me,Se=w({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...H(),...W(),...Y(),...ve()},"VImg"),_e=$()({name:"VImg",directives:{intersect:fe},props:Se(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:a,slots:n}=l;const{backgroundColorClasses:c,backgroundColorStyles:v}=p(ee(e,"color")),{roundedClasses:f}=te(e),d=ne("VImg"),h=y(""),s=re(),i=y(e.eager?"loading":"idle"),g=y(),S=y(),u=R(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=R(()=>u.value.aspect||g.value/S.value||0);T(()=>e.src,()=>{z(i.value!=="idle")}),T(b,(t,o)=>{!t&&o&&s.value&&_(s.value)}),ae(()=>z());function z(t){if(!(e.eager&&t)&&!(D&&!t&&!e.eager)){if(i.value="loading",u.value.lazySrc){const o=new Image;o.src=u.value.lazySrc,_(o,null)}u.value.src&&se(()=>{var o;a("loadstart",((o=s.value)==null?void 0:o.currentSrc)||u.value.src),setTimeout(()=>{var m;if(!d.isUnmounted)if((m=s.value)!=null&&m.complete){if(s.value.naturalWidth||k(),i.value==="error")return;b.value||_(s.value,null),i.value==="loading"&&C()}else b.value||_(s.value),V()})})}}function C(){var t;d.isUnmounted||(V(),_(s.value),i.value="loaded",a("load",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function k(){var t;d.isUnmounted||(i.value="error",a("error",((t=s.value)==null?void 0:t.currentSrc)||u.value.src))}function V(){const t=s.value;t&&(h.value=t.currentSrc||t.src)}let P=-1;ie(()=>{clearTimeout(P)});function _(t){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{if(clearTimeout(P),d.isUnmounted)return;const{naturalHeight:N,naturalWidth:O}=t;N||O?(g.value=O,S.value=N):!t.complete&&i.value==="loading"&&o!=null?P=window.setTimeout(m,o):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,S.value=1)};m()}const B=R(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),x=()=>{var m;if(!u.value.src||i.value==="idle")return null;const t=r("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:C,onError:k},null),o=(m=n.sources)==null?void 0:m.call(n);return r(I,{transition:e.transition,appear:!0},{default:()=>[U(o?r("picture",{class:"v-img__picture"},[o,t]):t,[[ce,i.value==="loaded"]])]})},A=()=>r(I,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),L=()=>n.placeholder?r(I,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!n.error)&&r("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,J=()=>n.error?r(I,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[n.error()])]}):null,K=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=y(!1);{const t=T(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),t())})}return E(()=>{const t=F.filterProps(e);return U(r(F,q({class:["v-img",{"v-img--booting":!j.value},c.value,f.value,e.class],style:[{width:ue(e.width==="auto"?g.value:e.width)},v.value,e.style]},t,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(oe,null,[r(x,null,null),r(A,null,null),r(K,null,null),r(L,null,null),r(J,null,null)]),default:n.default}),[[le("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:s,state:i,naturalWidth:g,naturalHeight:S}}});export{fe as I,I as M,_e as V,ve as m};

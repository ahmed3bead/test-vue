import{a4 as c,a6 as v,am as d,aa as m,ao as h,aY as u,Z as g,af as C,bp as i,ai as b,b as f}from"./index-BL9bc9ks.js";const k=c({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...d()},"VDivider"),y=m()({name:"VDivider",props:k(),setup(e,r){let{attrs:t}=r;const{themeClasses:s}=h(e),{textColorClasses:o,textColorStyles:l}=u(g(e,"color")),n=C(()=>{const a={};return e.length&&(a[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(a[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),a});return b(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,o.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{y as V};

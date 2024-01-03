import{y as F,r as E,z as V,R as u,$ as f,ah as je,N as v,aj as $e,U as K,aJ as le,B as y,c as Se,aK as W,j as o,P as L,i as S,aL as ke,aC as ie}from"./index-25fc8057.js";import{F as Ce,D as Re}from"./DataTable-c63220a7.js";import"./Card-b53f8c6e.js";var Ne=Object.defineProperty,Y=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,q=(r,e,a)=>e in r?Ne(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,ze=(r,e)=>{for(var a in e||(e={}))Ee.call(e,a)&&q(r,a,e[a]);if(Y)for(var a of Y(e))Ie.call(e,a)&&q(r,a,e[a]);return r};function De({theme:r,color:e}){return e==="dimmed"?r.fn.dimmed():r.fn.themeColor(e||r.primaryColor,r.colorScheme==="dark"?4:7,!1,!0)}var Ae=F((r,{color:e,underline:a})=>({root:ze({backgroundColor:"transparent",cursor:"pointer",padding:0,border:0,color:De({theme:r,color:e})},r.fn.hover({textDecoration:a?"underline":"none"}))}));const Me=Ae;var Be=Object.defineProperty,k=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,H=(r,e,a)=>e in r?Be(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,Q=(r,e)=>{for(var a in e||(e={}))ce.call(e,a)&&H(r,a,e[a]);if(k)for(var a of k(e))de.call(e,a)&&H(r,a,e[a]);return r},Te=(r,e)=>{var a={};for(var t in r)ce.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&k)for(var t of k(r))e.indexOf(t)<0&&de.call(r,t)&&(a[t]=r[t]);return a};const Fe={underline:!0},pe=E.forwardRef((r,e)=>{const a=V("Anchor",Fe,r),{component:t,className:c,unstyled:d,variant:p,size:n,color:s,underline:i}=a,l=Te(a,["component","className","unstyled","variant","size","color","underline"]),{classes:h,cx:m}=Me({color:s,underline:i},{name:"Anchor",unstyled:d,variant:p,size:n}),g=t==="button"?{type:"button"}:null;return u.createElement(f,Q(Q({component:t||"a",ref:e,className:m(h.root,c),size:n},g),l))});pe.displayName="@mantine/core/Anchor";const Ve=je(pe),X={xs:v(3),sm:v(5),md:v(8),lg:v(12),xl:v(16)},We=$e({from:{backgroundPosition:"0 0"},to:{backgroundPosition:`${v(40)} 0`}});var Le=F((r,{color:e,radius:a},{size:t})=>({root:{position:"relative",height:K({size:t,sizes:X}),backgroundColor:r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[2],borderRadius:r.fn.radius(a),overflow:"hidden"},bar:{position:"absolute",top:0,bottom:0,left:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:r.fn.variant({variant:"filled",primaryFallback:!1,color:e||r.primaryColor}).background,transition:"width 100ms linear","&[data-animate]":{animation:`${We} 1000ms linear infinite`},"&[data-striped]":{backgroundSize:`${v(20)} ${v(20)}`,backgroundImage:"linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"},"&:last-of-type":{borderTopRightRadius:r.fn.radius(a),borderBottomRightRadius:r.fn.radius(a)},"&:first-of-type":{borderTopLeftRadius:r.fn.radius(a),borderBottomLeftRadius:r.fn.radius(a)},"@media (prefers-reduced-motion)":{transitionDuration:r.respectReducedMotion?"0ms":void 0}},label:{color:r.white,fontSize:`calc(${K({size:t,sizes:X})} * 0.65)`,fontWeight:700,userSelect:"none",overflow:"hidden",whiteSpace:"nowrap"}}));const Je=Le;var Ue=Object.defineProperty,Ge=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,Z=(r,e,a)=>e in r?Ue(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,T=(r,e)=>{for(var a in e||(e={}))ue.call(e,a)&&Z(r,a,e[a]);if(C)for(var a of C(e))fe.call(e,a)&&Z(r,a,e[a]);return r},me=(r,e)=>Ge(r,Ke(e)),ee=(r,e)=>{var a={};for(var t in r)ue.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&C)for(var t of C(r))e.indexOf(t)<0&&fe.call(r,t)&&(a[t]=r[t]);return a};function Ye(r){return r.reduce((e,a)=>(e.sections.push(me(T({},a),{accumulated:e.accumulated})),e.accumulated+=a.value,e),{accumulated:0,sections:[]}).sections}const qe={size:"md",radius:"sm",striped:!1,animate:!1,label:""},ve=E.forwardRef((r,e)=>{const a=V("Progress",qe,r),{className:t,value:c,color:d,size:p,radius:n,striped:s,animate:i,label:l,"aria-label":h,classNames:m,styles:g,sections:O,unstyled:I,variant:x}=a,z=ee(a,["className","value","color","size","radius","striped","animate","label","aria-label","classNames","styles","sections","unstyled","variant"]),{classes:_,cx:b,theme:j}=Je({color:d,radius:n},{name:"Progress",classNames:m,styles:g,unstyled:I,variant:x,size:p}),D=Array.isArray(O)?Ye(O).map((A,M)=>{var $=A,{tooltip:J,accumulated:we,value:Oe,label:U,color:xe}=$,G=ee($,["tooltip","accumulated","value","label","color"]);return u.createElement(le.Floating,{label:J,disabled:!J,key:M},u.createElement(y,me(T({},G),{className:b(_.bar,G.className),"data-striped":s||i||void 0,"data-animate":i||void 0,sx:{width:`${Oe}%`,left:`${we}%`,backgroundColor:j.fn.variant({variant:"filled",primaryFallback:!1,color:xe||j.primaryColor}).background}}),U&&u.createElement(f,{className:_.label},U)))}):null;return u.createElement(y,T({className:b(_.root,t),ref:e},z),D||u.createElement("div",{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,"aria-label":h,className:_.bar,style:{width:`${c}%`},"data-striped":s||i||void 0,"data-animate":i||void 0},l?u.createElement(f,{className:_.label},l):""))});ve.displayName="@mantine/core/Progress";function He({size:r,thickness:e,sum:a,value:t,root:c,offset:d}){const p=(r*.9-e*2)/2,n=Math.PI*p*2/100,s=c?`${(100-a)*n}, ${a*n}`:`${t*n}, ${(100-t)*n}`;return{strokeWidth:e,cx:r/2,cy:r/2,r:p,transform:c?`scale(1, -1) translate(0, -${r})`:null,strokeDasharray:s,strokeDashoffset:c?0:d}}var Qe=Object.defineProperty,Xe=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,re=(r,e,a)=>e in r?Qe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,ae=(r,e)=>{for(var a in e||(e={}))he.call(e,a)&&re(r,a,e[a]);if(R)for(var a of R(e))ge.call(e,a)&&re(r,a,e[a]);return r},er=(r,e)=>Xe(r,Ze(e)),rr=(r,e)=>{var a={};for(var t in r)he.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&R)for(var t of R(r))e.indexOf(t)<0&&ge.call(r,t)&&(a[t]=r[t]);return a};function _e(r){var e=r,{size:a,value:t,offset:c,sum:d,thickness:p,root:n,color:s,lineRoundCaps:i,tooltip:l}=e,h=rr(e,["size","value","offset","sum","thickness","root","color","lineRoundCaps","tooltip"]);const m=Se(),g=m.fn.themeColor(s||(m.colorScheme==="dark"?"dark":"gray"),s?m.fn.primaryShade():m.colorScheme==="dark"?4:1,!1);return u.createElement(le.Floating,{disabled:!l,label:l},u.createElement("circle",ae(er(ae({},h),{fill:"none",strokeLinecap:i?"round":"butt",stroke:g}),He({sum:d,size:a,thickness:p,value:t,offset:c,root:n}))))}_e.displayName="@mantine/core/Curve";var ar=Object.defineProperty,tr=Object.defineProperties,or=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,sr=Object.prototype.hasOwnProperty,nr=Object.prototype.propertyIsEnumerable,oe=(r,e,a)=>e in r?ar(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,P=(r,e)=>{for(var a in e||(e={}))sr.call(e,a)&&oe(r,a,e[a]);if(te)for(var a of te(e))nr.call(e,a)&&oe(r,a,e[a]);return r},w=(r,e)=>tr(r,or(e));function lr({size:r,thickness:e,sections:a,renderRoundedLineCaps:t,rootColor:c}){const d=a.reduce((l,h)=>l+h.value,0),p=Math.PI*((r*.9-e*2)/2)*2;let n=p;const s=[],i=[];for(let l=0;l<a.length;l+=1)s.push({sum:d,offset:n,data:a[l],root:!1}),n-=a[l].value/100*p;if(s.push({sum:d,offset:n,data:{color:c},root:!0}),i.push(w(P({},s[s.length-1]),{lineRoundCaps:!1})),s.length>2){i.push(w(P({},s[0]),{lineRoundCaps:t})),i.push(w(P({},s[s.length-2]),{lineRoundCaps:t}));for(let l=1;l<=s.length-3;l+=1)i.push(w(P({},s[l]),{lineRoundCaps:!1}))}else i.push(w(P({},s[0]),{lineRoundCaps:t}));return i}var ir=F({root:{position:"relative"},label:{position:"absolute",top:"50%",transform:"translateY(-50%)"}});const cr=ir;var dr=Object.defineProperty,pr=Object.defineProperties,ur=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,se=(r,e,a)=>e in r?dr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,B=(r,e)=>{for(var a in e||(e={}))ye.call(e,a)&&se(r,a,e[a]);if(N)for(var a of N(e))be.call(e,a)&&se(r,a,e[a]);return r},fr=(r,e)=>pr(r,ur(e)),mr=(r,e)=>{var a={};for(var t in r)ye.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&N)for(var t of N(r))e.indexOf(t)<0&&be.call(r,t)&&(a[t]=r[t]);return a};const vr={size:120,thickness:12},Pe=E.forwardRef((r,e)=>{const a=V("RingProgress",vr,r),{className:t,style:c,label:d,sections:p,size:n,thickness:s,classNames:i,styles:l,roundCaps:h,rootColor:m,unstyled:g,variant:O}=a,I=mr(a,["className","style","label","sections","size","thickness","classNames","styles","roundCaps","rootColor","unstyled","variant"]),{classes:x,cx:z}=cr(null,{name:"RingProgress",classNames:i,styles:l,unstyled:g,variant:O}),_=lr({size:n,thickness:s,sections:p,renderRoundedLineCaps:h,rootColor:m}).map(({data:b,sum:j,root:D,lineRoundCaps:A,offset:M},$)=>u.createElement(_e,fr(B({},b),{key:$,size:n,thickness:s,sum:j,offset:M,color:b==null?void 0:b.color,root:D,lineRoundCaps:A})));return u.createElement(y,B({style:B({width:n,height:n},c),className:z(x.root,t),ref:e},I),u.createElement("svg",{style:{width:n,height:n,transform:"rotate(-90deg)"}},_),d&&u.createElement("div",{className:x.label,style:{right:s*2,left:s*2}},d))});Pe.displayName="@mantine/core/RingProgress";var hr=W("arrow-down-right","IconArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]]),gr=W("arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]]),_r=W("device-analytics","IconDeviceAnalytics",[["path",{d:"M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z",key:"svg-0"}],["path",{d:"M7 20l10 0",key:"svg-1"}],["path",{d:"M9 16l0 4",key:"svg-2"}],["path",{d:"M15 16l0 4",key:"svg-3"}],["path",{d:"M8 12l3 -3l2 2l3 -3",key:"svg-4"}]]);const ne=[{label:"Jalur Reguler",count:"204,001",part:59,color:"#47d6ab"},{label:"Jalur Prestasi",count:"121,017",part:35,color:"#03141a"},{label:"Jalur Diskon",count:"31,118",part:6,color:"#4fcdf7"}],yr={up:gr,down:hr},br=[{label:"Siswa Terdaftar",stats:"490.203",progress:90,color:"red",icon:"down"},{label:"Menunggu Pembayaran",stats:"456,578",progress:65,color:"teal",icon:"up"},{label:"Pembayaran Terkonfirmasi",stats:"2,550",progress:40,color:"blue",icon:"up"}],Pr=()=>{const r=br.map(e=>{const a=yr[e.icon];return o.jsx(L,{withBorder:!0,radius:"md",p:"xs",children:o.jsxs(S,{children:[o.jsx(Pe,{size:80,roundCaps:!0,thickness:8,sections:[{value:e.progress,color:e.color}],label:o.jsx(ke,{children:o.jsx(a,{style:{width:v(20),height:v(20)},stroke:1.5})})}),o.jsxs("div",{children:[o.jsx(f,{c:"dimmed",size:"xs",tt:"uppercase",fw:700,children:e.label}),o.jsx(f,{fw:700,size:"xl",children:e.stats})]})]})},e.label)});return o.jsx(ie,{breakpoints:[{maxWidth:"xs",cols:1},{minWidth:"md",cols:3}],children:r})},wr=()=>{const r=ne.map(e=>o.jsxs(y,{style:{borderColor:e.color,borderBottomWidth:.5,borderBottomStyle:"solid",paddingBottom:5},children:[o.jsx(f,{tt:"uppercase",fz:"xs",c:"dimmed",fw:700,children:e.label}),o.jsxs(S,{justify:"space-between",align:"flex-end",gap:0,children:[o.jsx(f,{fw:700,children:e.count}),o.jsxs(f,{c:e.color,fw:700,size:"sm",children:[e.part,"%"]})]})]},e.label));return o.jsxs(L,{withBorder:!0,p:"md",radius:"md",children:[o.jsx(f,{size:"lg",weight:500,mb:10,children:"Statistik Berdasarkan Jalur Pendaftaran"}),o.jsxs(S,{justify:"space-between",children:[o.jsx(S,{align:"flex-end",gap:"xs",children:o.jsx(f,{fz:"xl",fw:700,children:"345,765"})}),o.jsx(_r,{size:"1.4rem",stroke:1.5})]}),o.jsx(ve,{size:"xl",sections:ne.map(e=>({value:e.part,color:e.color}))}),o.jsx(ie,{breakpoints:[{maxWidth:"xs",cols:1},{minWidth:"md",cols:3}],mt:"xl",children:r})]})},$r=()=>{const r=E.useMemo(()=>[{id:"Nama",header:"Nama",accessorFn:(e,a)=>a+1}],[]);return o.jsxs(o.Fragment,{children:[o.jsx(y,{mb:"lg",children:o.jsx(Pr,{})}),o.jsx(y,{mb:"lg",children:o.jsx(wr,{})}),o.jsx(y,{children:o.jsxs(L,{withBorder:!0,p:"md",radius:"md",children:[o.jsxs(Ce,{justify:"space-between",align:"center",children:[o.jsx(f,{size:"lg",weight:500,mb:10,children:"Pendaftar 5 Terawal"}),o.jsx(Ve,{href:"https://mantine.dev/",target:"_blank",size:"sm",children:"Lihat Semua"})]}),o.jsx(Re,{data:[],columns:r,useSearchInput:!0,noCard:!0})]})})]})};export{$r as default};
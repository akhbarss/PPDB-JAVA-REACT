import{r as l,x as ae,y as re,z as ne,J as se,K as ie,R as E,M as A,j as n,S as N,w as C,i as K,h as V,g as oe,q as le,b as ue,t as de,P as ce,B as pe,v as he,N as me,O as B,Q as fe}from"./index-ad304ebb.js";import{S as ge}from"./SideAuthLayout-76eb151b.js";import{r as ve}from"./registration-b19fc6af.js";import{R as xe}from"./ResponseError-0a0ec564.js";import{S as P}from"./Stepper-9822f89b.js";function Se(r,t){if(r==null)return{};var e={},a=Object.keys(r),s,i;for(i=0;i<a.length;i++)s=a[i],!(t.indexOf(s)>=0)&&(e[s]=r[s]);return e}var be=l.useLayoutEffect,ye=function(t){var e=l.useRef(t);return be(function(){e.current=t}),e},F=function(t,e){if(typeof t=="function"){t(e);return}t.current=e},we=function(t,e){var a=l.useRef();return l.useCallback(function(s){t.current=s,a.current&&F(a.current,null),a.current=e,e&&F(e,s)},[e])},D={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},M=function(t){Object.keys(D).forEach(function(e){t.style.setProperty(e,D[e],"important")})},h=null,ke=function(t,e){var a=t.scrollHeight;return e.sizingStyle.boxSizing==="border-box"?a+e.borderSize:a-e.paddingSize};function je(r,t,e,a){e===void 0&&(e=1),a===void 0&&(a=1/0),h||(h=document.createElement("textarea"),h.setAttribute("tabindex","-1"),h.setAttribute("aria-hidden","true"),M(h)),h.parentNode===null&&document.body.appendChild(h);var s=r.paddingSize,i=r.borderSize,o=r.sizingStyle,g=o.boxSizing;Object.keys(o).forEach(function(x){var w=x;h.style[w]=o[w]}),M(h),h.value=t;var d=ke(h,r);h.value="x";var f=h.scrollHeight-s,u=f*e;g==="border-box"&&(u=u+s+i),d=Math.max(u,d);var p=f*a;return g==="border-box"&&(p=p+s+i),d=Math.min(p,d),[d,f]}var q=function(){},ze=function(t,e){return t.reduce(function(a,s){return a[s]=e[s],a},{})},Re=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],_e=!!document.documentElement.currentStyle,Pe=function(t){var e=window.getComputedStyle(t);if(e===null)return null;var a=ze(Re,e),s=a.boxSizing;if(s==="")return null;_e&&s==="border-box"&&(a.width=parseFloat(a.width)+parseFloat(a.borderRightWidth)+parseFloat(a.borderLeftWidth)+parseFloat(a.paddingRight)+parseFloat(a.paddingLeft)+"px");var i=parseFloat(a.paddingBottom)+parseFloat(a.paddingTop),o=parseFloat(a.borderBottomWidth)+parseFloat(a.borderTopWidth);return{sizingStyle:a,paddingSize:i,borderSize:o}},Ce=function(t){var e=ye(t);l.useLayoutEffect(function(){var a=function(i){e.current(i)};return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}},[])},Oe=function(t,e){var a=t.cacheMeasurements,s=t.maxRows,i=t.minRows,o=t.onChange,g=o===void 0?q:o,d=t.onHeightChange,f=d===void 0?q:d,u=Se(t,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),p=u.value!==void 0,x=l.useRef(null),w=we(x,e),S=l.useRef(0),b=l.useRef(),y=function(){var v=x.current,k=a&&b.current?b.current:Pe(v);if(k){b.current=k;var c=je(k,v.value||v.placeholder||"x",i,s),m=c[0],_=c[1];S.current!==m&&(S.current=m,v.style.setProperty("height",m+"px","important"),f(m,{rowHeight:_}))}},j=function(v){p||y(),g(v)};return l.useLayoutEffect(y),Ce(y),l.createElement("textarea",ae({},u,{onChange:j,ref:w}))},Ee=l.forwardRef(Oe);const Ae=Ee;var He=re(r=>({input:{paddingTop:r.spacing.xs,paddingBottom:r.spacing.xs}}));const Ne=He;var Te=Object.defineProperty,We=Object.defineProperties,Le=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,$=(r,t,e)=>t in r?Te(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,z=(r,t)=>{for(var e in t||(t={}))G.call(t,e)&&$(r,e,t[e]);if(O)for(var e of O(t))Q.call(t,e)&&$(r,e,t[e]);return r},H=(r,t)=>We(r,Le(t)),Ie=(r,t)=>{var e={};for(var a in r)G.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&O)for(var a of O(r))t.indexOf(a)<0&&Q.call(r,a)&&(e[a]=r[a]);return e};const Be={autosize:!1,size:"sm",__staticSelector:"Textarea"},U=l.forwardRef((r,t)=>{const e=ne("Textarea",Be,r),{autosize:a,maxRows:s,minRows:i,label:o,error:g,description:d,id:f,className:u,required:p,style:x,wrapperProps:w,classNames:S,styles:b,size:y,__staticSelector:j,sx:R,errorProps:v,descriptionProps:k,labelProps:c,inputWrapperOrder:m,inputContainer:_,unstyled:T,withAsterisk:Y,variant:W}=e,J=Ie(e,["autosize","maxRows","minRows","label","error","description","id","className","required","style","wrapperProps","classNames","styles","size","__staticSelector","sx","errorProps","descriptionProps","labelProps","inputWrapperOrder","inputContainer","unstyled","withAsterisk","variant"]),L=se(f),{classes:X,cx:Z}=Ne(),{systemStyles:ee,rest:te}=ie(J),I=z({required:p,ref:t,error:g,id:L,classNames:H(z({},S),{input:Z(X.input,S==null?void 0:S.input)}),styles:b,__staticSelector:j,size:y,multiline:!0,unstyled:T,variant:W},te);return E.createElement(A.Wrapper,z(z({label:o,error:g,id:L,description:d,required:p,style:x,className:u,classNames:S,styles:b,size:y,__staticSelector:j,sx:R,errorProps:v,labelProps:c,descriptionProps:k,inputContainer:_,inputWrapperOrder:m,unstyled:T,withAsterisk:Y,variant:W},ee),w),a?E.createElement(A,H(z({},I),{component:Ae,maxRows:s,minRows:i})):E.createElement(A,H(z({},I),{component:"textarea",rows:i})))});U.displayName="@mantine/core/Textarea";const Fe=({handleStepChange:r,active:t,noWhatsapp:e,setNoWhatsapp:a,alamat:s,asalSekolah:i,namaLengkap:o,setAlamat:g,setAsalSekolah:d,setNamaLengkap:f})=>n.jsx("form",{onSubmit:()=>r(t+1),children:n.jsxs(N,{mt:20,children:[n.jsx(C,{label:"Nomor Whatsapp",description:"Harap masukan Nomor Aktif WhatsApp anda",withAsterisk:!0,type:"number",required:!0,autoFocus:!0,value:e,onChange:u=>a(u.target.value)}),n.jsx(C,{label:"Nama Lengkap",description:"Harap masukan Nama Lengkap sesuai dengan akta kelahiran",withAsterisk:!0,required:!0,value:o,onChange:u=>f(u.target.value)}),n.jsx(U,{label:"Alamat",description:"Harap masukan alamat rumah anda",withAsterisk:!0,required:!0}),n.jsx(C,{label:"Asal Sekolah",description:"Masukan asal sekolah",withAsterisk:!0,required:!0,value:i,onChange:u=>d(u.target.value)}),n.jsx(K,{position:"center",mt:"xl",children:n.jsx(V,{type:"submit",children:"Simpan dan lanjutkan"})})]})}),De=({noWhatsapp:r,password:t,setPassword:e,onSubmit:a,registrationMutation:s})=>{const i=o=>{o.preventDefault(),a()};return n.jsx("form",{onSubmit:i,children:n.jsxs(N,{mt:20,children:[n.jsx(C,{label:"Password",withAsterisk:!0,required:!0,type:"password",autoFocus:!0,value:t,onChange:o=>e(o.target.value)}),n.jsx(K,{position:"center",mt:"xl",children:n.jsx(V,{loading:s.status==="pending",type:"submit",children:"Simpan dan lanjutkan"})})]})})},Ge=()=>{const[r,t]=l.useState(""),[e,a]=l.useState(""),[s,i]=l.useState(""),[o,g]=l.useState(""),[d,f]=l.useState(""),u=oe(),[p,x]=l.useState(0),[w,S]=l.useState(p),b=le({mutationFn:ve}),{md:y}=ue(),j=c=>{c>3||c<0||(x(c),S(_=>Math.max(_,c)))},R=c=>{b.mutate(c,{onSuccess:m=>{localStorage.setItem("_TuVbwpW",m.data.access_token),localStorage.setItem("_RuvTpQv",m.data.refresh_token),fe.openContextModal({modal:"modalSuccess",innerProps:{onAccept:()=>{u("/ppdb/main/home")},modalBody:"Selamat, anda telah berhasil memulai awal PPDB. silahkan klik lanjutkan"},closeOnClickOutside:!1,closeOnEscape:!1,withCloseButton:!1})},onError:m=>xe(m)})},v=()=>{R({username:r,password:o,role:"USER",studentData:{address:s,name:e,school_origin:d}})},k=c=>w>=c&&p!==c;return n.jsx(de,{title:"Daftar",children:n.jsxs(ce,{pt:`${y?0:"70px"}`,className:"flex  min-h-[100vh]",children:[n.jsx(pe,{className:"flex-[2] p-[0_1rem_] flex flex-col overflow-y-auto min-h-[100vh]",children:n.jsxs(N,{w:`${y?"30rem":"20rem"}`,className:"py-[2rem] mx-auto ",children:[n.jsx(he,{align:"center",children:"Daftar"}),n.jsxs(P,{active:p,onStepClick:x,radius:"xs",mt:20,className:" ",styles:{stepIcon:{borderWidth:me(4)}},breakpoint:"sm",children:[n.jsx(P.Step,{label:"Identitas Diri",allowStepSelect:k(0),icon:n.jsx(B,{size:30}),children:n.jsx(Fe,{noWhatsapp:r,setNoWhatsapp:t,active:p,handleStepChange:j,alamat:s,asalSekolah:d,namaLengkap:e,setAlamat:i,setAsalSekolah:f,setNamaLengkap:a})}),n.jsx(P.Step,{label:"Informasi Kredensial",allowStepSelect:k(1),icon:n.jsx(B,{size:30}),children:n.jsx(De,{registrationMutation:b,noWhatsapp:r,password:o,setPassword:g,onSubmit:v})}),n.jsx(P.Completed,{children:n.jsx(n.Fragment,{children:"Completed, click back button to get to previous step"})})]})]})}),n.jsx(ge,{})]})})};export{Ge as default};
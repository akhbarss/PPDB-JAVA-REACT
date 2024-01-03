import{j as e,S as b,p as f,G as B,f as N,r as s,n as K,l as L,u as O,q as _,o as q,P as $,B as F,T as V,c as C,t as z,v as M,w as G}from"./index-288d8993.js";import{r as J}from"./registration-b3c07ff0.js";import{T as U}from"./Textarea-32f5d24a.js";import{S as Q}from"./Select-4a026c2d.js";import{P as X}from"./PasswordInput-7182091a.js";import{S as Y}from"./SideAuthLayout-d74c37ba.js";import{R as Z}from"./ResponseError-59980697.js";import{S as h}from"./Stepper-5b3c016a.js";const ee=({handleStepChange:n,active:u,noWhatsapp:o,setNoWhatsapp:c,alamat:l,asalSekolah:p,namaLengkap:r,setAlamat:g,jenkel:S,setJenkel:x,setAsalSekolah:m,setNamaLengkap:k})=>e.jsx("form",{onSubmit:()=>n(u+1),children:e.jsxs(b,{mt:20,children:[e.jsx(f,{label:"Nomor Whatsapp",description:"Harap masukan Nomor Aktif WhatsApp anda",withAsterisk:!0,type:"number",required:!0,autoFocus:!0,value:o,onChange:t=>c(t.target.value)}),e.jsx(f,{label:"Nama Lengkap",description:"Harap masukan Nama Lengkap sesuai dengan akta kelahiran",withAsterisk:!0,required:!0,value:r,onChange:t=>k(t.target.value)}),e.jsx(U,{label:"Alamat",description:"Harap masukan alamat rumah anda",withAsterisk:!0,required:!0,value:l,onChange:t=>g(t.target.value)}),e.jsx(Q,{data:["Laki-laki","Perempuan"],label:"Jenis Kelamin",description:"Harap masukan jenis kelamin anda",value:S,onChange:x}),e.jsx(f,{label:"Asal Sekolah",description:"Masukan asal sekolah",withAsterisk:!0,required:!0,value:p,onChange:t=>m(t.target.value)}),e.jsx(B,{position:"center",mt:"xl",children:e.jsx(N,{type:"submit",children:"Simpan dan lanjutkan"})})]})}),ae=({noWhatsapp:n,password:u,setPassword:o,onSubmit:c,registrationMutation:l})=>{const p=r=>{r.preventDefault(),c()};return e.jsx("form",{onSubmit:p,children:e.jsxs(b,{mt:20,children:[e.jsx(X,{label:"Password",withAsterisk:!0,required:!0,autoFocus:!0,value:u,onChange:r=>o(r.target.value)}),e.jsx(B,{position:"center",mt:"xl",children:e.jsx(N,{loading:l.status==="pending",type:"submit",children:"Simpan dan lanjutkan"})})]})})},ce=()=>{const[n,u]=s.useState(null),[o,c]=s.useState(""),[l,p]=s.useState(""),[r,g]=s.useState(""),[S,x]=s.useState(""),[m,k]=s.useState(""),[t,y]=s.useState(""),I=K(),[d,v]=s.useState(0),[R,W]=s.useState(d),w=L({mutationFn:J}),{md:j}=O(),{pathname:P}=_();s.useEffect(()=>{const i=P.substring(1).split("/")[3].toUpperCase()||"SMP";u(i)},[P]);const D=a=>{a>3||a<0||(v(a),W(H=>Math.max(H,a)))},T=a=>{w.mutate(a,{onSuccess:i=>{localStorage.setItem("_TuVbwpW",i.data.access_token),localStorage.setItem("_RuvTpQv",i.data.refresh_token),G.openContextModal({modal:"modalSuccess",innerProps:{onAccept:()=>{I("/ppdb/main/home")},modalBody:"Selamat, anda telah berhasil memulai awal PPDB. silahkan klik lanjutkan"},closeOnClickOutside:!1,closeOnEscape:!1,withCloseButton:!1})},onError:i=>Z(i)})},E=()=>{T({username:o,password:m,role:"USER",studentData:{address:r,name:l,school_origin:t,grade:n}})},A=a=>R>=a&&d!==a;return e.jsx(q,{title:`
        Daftar
        ${n==="SMK"?"SMK":""}
        ${n==="SMP"?"SMP":""}`,children:e.jsxs($,{pt:`${j?0:"70px"}`,className:"flex  min-h-[100vh]",children:[e.jsx(F,{className:`flex-[2] p-[0_1rem_] flex flex-col justify-center items-center overflow-y-auto min-h-[100vh] 
          ${!j&&"bg-[url(/big-bg-auth.png)]"} bg-cover bg-no-repeat bg-right`,children:e.jsxs(b,{w:`${j?"30rem":"20rem"}`,py:100,children:[e.jsxs(V,{align:"center",children:[e.jsx(C,{component:"span",children:"Daftar"}),e.jsxs(C,{component:"span",children:[n==="SMK"&&" SMK",n==="SMP"&&" SMP"]})]}),e.jsxs(h,{active:d,onStepClick:v,radius:"xs",mt:20,className:" ",styles:{stepIcon:{borderWidth:z(4)}},breakpoint:"sm",children:[e.jsx(h.Step,{label:"Identitas Diri",allowStepSelect:A(0),icon:e.jsx(M,{size:30}),children:e.jsx(ee,{noWhatsapp:o,setNoWhatsapp:c,active:d,handleStepChange:D,alamat:r,asalSekolah:t,namaLengkap:l,setAlamat:g,jenkel:S,setJenkel:x,setAsalSekolah:y,setNamaLengkap:p})}),e.jsx(h.Step,{label:"Informasi Kredensial",allowStepSelect:A(1),icon:e.jsx(M,{size:30}),children:e.jsx(ae,{registrationMutation:w,noWhatsapp:o,password:m,setPassword:k,onSubmit:E})}),e.jsx(h.Completed,{children:e.jsx(e.Fragment,{children:"Completed, click back button to get to previous step"})})]})]})}),e.jsx(Y,{page:n})]})})};export{ce as default};
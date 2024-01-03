import{R as c,Q as p,j as e,S as d,n as u,u as x,k as h,l as f,m as g,P as j,B as m,T as b,G as k,L as l,f as w,_ as v}from"./index-21f1c136.js";import{S as N}from"./SideAuthLayout-980e57b7.js";import{R as S}from"./ResponseError-040dbf2a.js";import{P as A}from"./PasswordInput-ff2fb593.js";import{F as R}from"./FormWrapper-e88946a9.js";import{a as y}from"./registration-05385953.js";const F=c.forwardRef((t,i)=>{var n,a,o;const{register:r,formState:{errors:s}}=p();return e.jsxs(d,{children:[e.jsx(u,{withAsterisk:!0,label:"Nomor Whatsapp/Username",required:!0,error:s.username&&e.jsx("div",{children:(n=s.username)==null?void 0:n.message}),...r("username",{required:{value:!0,message:"dibutuhkan"}})}),e.jsx(u,{error:s.fullname&&e.jsx("div",{children:(a=s.fullname)==null?void 0:a.message}),...r("fullname",{required:{value:!0,message:"dibutuhkan"}}),label:"Nama Lengkap"}),e.jsx(A,{withAsterisk:!0,label:"Password",required:!0,error:s.password&&e.jsx("div",{children:(o=s.password)==null?void 0:o.message}),...r("password",{required:{value:!0,message:"dibutuhkan"}})})]})}),_=()=>{const{md:t}=x(),i=h({mutationFn:y}),r=f(),s=n=>{i.mutate(n,{onSuccess:a=>{v.success("Sukses mendaftarkan, sekarang anda bisa login! "),r("/ppdb/auth/login")},onError:a=>S(a)})};return e.jsx(g,{title:"Daftar User Admin",children:e.jsxs(j,{pt:`${t?0:"70px"}`,className:"flex  min-h-[100vh]",children:[e.jsx(m,{className:"flex-[2] p-[0_1rem_] flex flex-col overflow-y-auto min-h-[87vh]  items-center",children:e.jsxs(m,{w:`${t?"30rem":"20rem"}`,className:"py-[2rem] mx-auto mt-20 ",children:[e.jsx(b,{align:"center",children:"Daftar User Admin"}),e.jsx(R,{id:"form-registeradmin",onSubmit:s,children:e.jsxs(d,{className:"mt-10",children:[e.jsx(F,{}),e.jsxs(k,{sx:{display:"flex",justifyContent:"space-between",flexDirection:`${t?"row":"column"}`},children:[e.jsx(l,{to:"/ppdb/auth/login",className:"text-[#103C6F] text-center",children:"Sudah punya akun ?"}),e.jsx(l,{to:"https://wa.me/6281380908008",className:"text-[#103C6F] text-center",children:"Butuh bantuan ?"})]}),e.jsx(w,{type:"submit",loading:i.status==="pending",children:"Daftar"})]})})]})}),e.jsx(N,{page:null})]})})};export{_ as default};

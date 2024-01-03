import{k as A,u as B,l as C,N as O,b as _,r as E,j as s,c as m,o as M,O as T,S as y,B as U,Q as z,p as d,G as I,f as q,V as G,_ as N}from"./index-b070c93a.js";import{C as u}from"./Card-33bd5c15.js";import{P as v}from"./PasswordInput-2c7e638f.js";import{i as K,m as H}from"./matches-field-78072a21.js";const Q=async e=>{const{id:i,password:l}=e;return(await A.put("/v1/admin/update-password/admin?id="+i,{password:l})).data};function S(e){return e?e==null?void 0:e.split(" ").map(i=>i.charAt(0).toUpperCase()).slice(0,2).join(""):null}const R=["teal","violet","blue","pink","green","yellow","red","orange","indigo","cyan","grape","#a436b5","#36b59e","#b56536"],J=()=>{var g;const{md:e}=B(),i=C({mutationFn:Q}),l=O({initialValues:{password:"",confirmPassword:""},validate:{password:K("Harap isi password password baru anda"),confirmPassword:H("password","Password tidak sama")}}),{isError:p,isSuccess:t,data:a}=_({queryFn:G,queryKey:["session-profile"]}),k=n=>{i.mutate(n,{onSuccess:()=>{N.success("Ubah password berhasil!"),l.reset()},onError:()=>{N.error("Gagal mengubah password")}})},F=n=>{var P;k({password:n.password,id:(P=a==null?void 0:a.data)==null?void 0:P.id})},r=t&&((g=a==null?void 0:a.data)==null?void 0:g.student),o=t&&(a==null?void 0:a.data),x=t&&(a==null?void 0:a.data.role_id.role_name)==="User",c=t&&(a==null?void 0:a.data.role_id.role_name)==="Admin",f=o==null?void 0:o.fullname,b=r==null?void 0:r.name,h=S(b),w=S(f),j=E.useMemo(()=>Math.floor(Math.random()*14)+1,[]);return p?s.jsx(m,{size:40,children:"Oops, Terjadi Kesalahan"}):s.jsx(s.Fragment,{children:s.jsxs(M,{title:"Profile",children:[s.jsx(T,{label:"Profile"}),s.jsxs(y,{mt:40,spacing:"2rem",className:"style-box max-w-[70rem] mx-auto",children:[s.jsxs(u,{withBorder:!0,children:[s.jsx(u.Section,{className:"bg-cover bg-no-repeat bg-center",h:150,sx:{background:`url(/profile/${j}.avif)`}}),s.jsxs(u.Section,{py:"1rem",pl:e?"12rem":"0",sx:{display:"flex",position:"relative",justifyContent:e?null:"center"},children:[s.jsx(U,{sx:n=>({position:"absolute",top:-65,left:e?40:null,backgroundColor:n.colorScheme==="dark"?n.colors.dark[6]:n.white,borderRadius:"50%"}),children:s.jsxs(z,{color:R[j-1],variant:"filled",radius:"50%",size:120,sx:{border:"4px solid transparent"},children:[h||"",w||""]})}),s.jsxs(m,{size:30,fw:700,mt:e?0:40,children:[t&&c?f:"",t&&x?b:""]})]})]}),t&&c?s.jsxs(s.Fragment,{children:[s.jsx(d,{label:"Nama",readOnly:!0,value:o==null?void 0:o.fullname}),s.jsx(d,{label:"No Telepon",readOnly:!0,value:o==null?void 0:o.username})]}):"",t&&x?s.jsxs(s.Fragment,{children:[s.jsx(d,{label:"Nama",readOnly:!0,value:r==null?void 0:r.name}),s.jsx(d,{label:"No Telepon",readOnly:!0,value:r==null?void 0:r.phone})]}):"",c&&s.jsx("form",{onSubmit:l.onSubmit(F),children:s.jsxs(y,{mt:30,children:[s.jsx(m,{mt:20,fz:30,fw:600,children:"Ubah Password"}),s.jsx(v,{label:"Password Baru",...l.getInputProps("password")}),s.jsx(v,{label:"Konfirmasi Password",...l.getInputProps("confirmPassword")}),s.jsx(I,{position:"right",mt:20,children:s.jsx(q,{type:"submit",loading:i.status==="pending",children:"Ubah Password"})})]})})]})]})})};export{J as default};
import{m as w,b as D,j as s,a1 as z,$ as N,B as j,c as l,D as m,aG as g,ah as o,L as u,P as p,G as k}from"./index-7cb0f30c.js";import{a as b,g as C}from"./index.esm-fbceaefa.js";const _=()=>{var i,x,c,h;const t=w(),{data:a,isLoading:f}=D({queryKey:["get_all_gelombang_by_type_pengembalian"],queryFn:()=>C("PENGEMBALIAN")}),r=(x=(i=a==null?void 0:a.data)==null?void 0:i.filter(e=>e.grade==="SMP"))==null?void 0:x.sort((e,d)=>e.id-d.id),n=(h=(c=a==null?void 0:a.data)==null?void 0:c.filter(e=>e.grade==="SMK"))==null?void 0:h.sort((e,d)=>e.id-d.id);return s.jsx(z.Panel,{value:"pengembalian",mt:40,children:f?s.jsx(N,{height:80}):s.jsx(s.Fragment,{children:s.jsxs(s.Fragment,{children:[s.jsxs(j,{children:[s.jsx(l,{weight:"bolder",fz:18,children:"SMP"}),s.jsx(m,{mb:20,size:"xs"}),(r==null?void 0:r.length)<1?s.jsx(g,{message:"Data kosong"}):r==null?void 0:r.map(e=>s.jsx(o,{mt:20,children:s.jsx(o.Col,{md:6,children:s.jsx(u,{to:`${e.id}`,className:"drop-shadow-lg rounded-md no-underline text-black ",children:s.jsxs(p,{shadow:"lg",sx:d=>({backgroundColor:t?d.colors.dark[8]:d.white,padding:"1rem 1.5rem",display:"flex",flexDirection:"column",alignItems:"start",border:"0.0625rem solid #dee2e6"}),children:[s.jsx("h1",{className:"text-xl  font-bold",children:e.name}),s.jsxs(k,{mt:10,children:[s.jsx(b,{size:30}),s.jsxs(l,{children:[e.countStudent," Pendaftar"]})]})]})})})},e.id))]}),s.jsxs(j,{mt:40,children:[s.jsx(l,{weight:"bolder",fz:18,children:"SMK"}),s.jsx(m,{mb:20,size:"xs"}),(n==null?void 0:n.length)<1?s.jsx(g,{message:"Data kosong"}):n==null?void 0:n.map(e=>s.jsx(o,{mt:20,children:s.jsx(o.Col,{md:6,children:s.jsx(u,{to:`${e.id}`,className:"drop-shadow-lg rounded-md no-underline text-black ",children:s.jsxs(p,{shadow:"lg",sx:d=>({backgroundColor:t?d.colors.dark[8]:d.white,padding:"1rem 1.5rem",display:"flex",flexDirection:"column",alignItems:"start",border:"0.0625rem solid #dee2e6"}),children:[s.jsx("h1",{className:"text-xl  font-bold",children:e.name}),s.jsxs(k,{mt:10,children:[s.jsx(b,{size:30}),s.jsxs(l,{children:[e.countStudent," Pendaftar"]})]})]})})})},e.id))]})]})})})};export{_ as default};

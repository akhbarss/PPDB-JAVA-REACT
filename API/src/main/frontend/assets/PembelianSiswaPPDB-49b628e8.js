import{r as p,b as y,q as I,n as L,j as a,o as A,O as $,S as B,$ as k,a0 as N,D as q,a1 as R,V as z,a2 as F,a3 as J,a4 as M}from"./index-e253d264.js";import{F as w}from"./index.esm-df819014.js";import{u as O,g as Q,T as E,a as V,S as K,b as T,c as G,d as v}from"./generateQueryParam-d23312ed.js";import"./ResponseError-9ce66710.js";import"./imageUtils-040c21d1.js";import"./index.esm-b8b34bcc.js";import"./DataTable-7a7ddedc.js";import"./Flex-4914fec0.js";import"./Select-d0d7a6fd.js";import"./Card-e842cb8c.js";import"./Badge-379626d7.js";import"./LoadingOverlay-6549b605.js";import"./FormWrapper-63ce38bf.js";import"./SimpleGrid-2109c522.js";import"./Image-905c7942.js";const H=s=>{const{grade:r}=s;return a.jsx(R,{unstyled:!0,styles:t=>({tab:{...t.fn.focusStyles(),backgroundColor:t.colorScheme==="dark"?t.colors.dark[6]:t.white,color:t.colorScheme==="dark"?"white":t.colors.gray[9],border:"0.1625rem solid #dee2e6",boxShadow:"0 10px 20px -10px rgba(0,0,0,0.2)",cursor:"pointer",fontSize:t.fontSizes.sm,borderRadius:"5px","&:disabled":{cursor:"not-allowed",color:t.colorScheme==="dark"?t.colors.gray[4]:t.colors.gray[8],backgroundColor:t.colorScheme==="dark"?t.colors.dark[6]:t.colors.gray[4]},"&[data-active]":{background:`linear-gradient(45deg, ${r=="SMP"&&"#2A166F"||r=="SMK"&&"#FF6C22"}, ${r=="SMP"&&"#6548DB"||r=="SMK"&&"#ff9f22"})`,borderColor:"green",color:t.white,boxShadow:"0 10px 20px -10px rgba(0,0,0,0.5)"}}}),...s})},de=()=>{var f,P,g,h,j;const[s,r]=p.useState({step:1,stagingId:null}),{data:t,isSuccess:c,isFetching:u}=y({queryKey:["get_last_offset_batch"],queryFn:()=>V("PEMBELIAN"),staleTime:0,notifyOnChangeProps:"all"}),{data:b}=y({queryFn:z,queryKey:["session"]}),m=[{index:1,label:"Pilih Gelombang PPDB",icon:F,content:a.jsx(K,{type:"PEMBELIAN"})},{index:2,label:"Transaksi Pembelian",icon:w,content:a.jsx(T,{})},{index:3,label:"Pilih Jurusan",icon:J,content:a.jsx(G,{})},{index:4,label:"Cetak Kartu Peserta",icon:M,content:a.jsx(v,{})}],S=[{index:1,label:"Pilih Gelombang PPDB",icon:F,content:a.jsx(K,{type:"PEMBELIAN"})},{index:2,label:"Transaksi Pembelian",icon:w,content:a.jsx(T,{})},{index:3,label:"Cetak Kartu Peserta",icon:M,content:a.jsx(v,{})}],d=O(s),C=I(),D=L(),i=(P=(f=b==null?void 0:b.data)==null?void 0:f.student)==null?void 0:P.grade;p.useEffect(()=>{r(d==null?void 0:d.initialValues)},[d]),p.useEffect(()=>{if(c){const e=t.data.filter(o=>o.is_done===1);if(e.length>0)if(t.data[t.data.length-1].index!==e[e.length-1].index){const o=e[e.length-1].index+1;x(o.toString())}else x(e[e.length-1].index.toString());else x("1")}},[t,c]);const x=e=>{var n;const o={step:+e,stagingId:(n=t.data.find(_=>_.index===+e))==null?void 0:n.id};r(o),D(`${C.pathname}?${Q(o)}`)},l=c&&((g=t==null?void 0:t.data)==null?void 0:g.filter(e=>(e==null?void 0:e.grade)===i));return a.jsxs(A,{title:"Pembelian",children:[a.jsx($,{label:"Pembelian"}),a.jsx(B,{className:"style-box max-w-[100rem] mx-auto",children:a.jsx(H,{grade:i,value:`${s.step}`,onTabChange:x,children:a.jsxs(a.Fragment,{children:[a.jsx(a.Fragment,{children:u?a.jsx(k,{mt:40,width:"100%",height:200,visible:!0}):a.jsx(a.Fragment,{children:c&&a.jsxs(N,{w:"100%",display:"flex",type:"always",sx:{display:"block"},offsetScrollbars:!0,children:[i==="SMK"&&a.jsx(E,{activeTabIndex:+s.step,card:l==null?void 0:l.map((e,o)=>{var n;return{label:e.name,index:e.index,icon:(n=m[o])==null?void 0:n.icon,is_done:e.is_done===1}})}),i==="SMP"&&a.jsx(E,{activeTabIndex:+s.step,card:l==null?void 0:l.map((e,o)=>{var n;return{label:e.name,index:e.index,icon:(n=S[o])==null?void 0:n.icon,is_done:e.is_done===1}})})]})})}),a.jsx(q,{my:20}),u?a.jsx(k,{mt:40,width:"100%",height:200,visible:!0}):a.jsxs(a.Fragment,{children:[i=="SMK"&&((h=m.find(e=>e.index===s.step))==null?void 0:h.content),i=="SMP"&&((j=S.find(e=>e.index===s.step))==null?void 0:j.content)]})]})})})]})};export{de as default};

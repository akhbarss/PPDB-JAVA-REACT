import{r as k,j as e,b0 as K,S as y,d as D,n as I,b1 as M,aD as R,aP as B,ar as U,e as v,b as J,k as C,m as V,a5 as W,B as X,b2 as f,a6 as Y,c as Z,b3 as ee,f as te,a2 as se,a$ as ae,A as w,b4 as ne,b5 as oe,_ as m}from"./index-21f1c136.js";import{G as le}from"./getAlur-e680e8fe.js";const re=async a=>(await k.post("/v1/admin/alur-ppdb/post",a)).data,ie=async a=>(console.log(a),(await k.delete("/v1/admin/alur-ppdb/delete?id="+a.id)).data),ce=async a=>{const n={title:a.title,content:a.content};return(await k.put("/v1/admin/alur-ppdb/update?dataId="+a.id,n)).data},de=({opened:a,close:n,title:l,setTitle:o,descAlurPPDB:c,setDescAlurPPDB:r,tambahALurHandler:i,createAlurMutation:d})=>e.jsx(K,{size:"70rem",onClose:n,opened:a,title:"Tambah Alur Pendaftaran PPDB",withFooter:!0,onAccept:{acceptFn:i,titleAccept:"Tambah"},loading:d.status==="pending",children:e.jsxs(y,{p:20,pb:"6rem",children:[e.jsx(D,{align:"left",weight:"bold",children:"Nama"}),e.jsx(I,{value:l,onChange:u=>o(u.target.value)}),e.jsx(D,{align:"left",mt:30,weight:"bold",children:"Deskripsi Keterangan"}),e.jsx(M,{desc:c,setDesc:r})]})}),ue=({opened:a,close:n,title:l,setTitle:o,descAlurPPDB:c,setDescAlurPPDB:r,editAlurHandler:i,editAlurMutation:d,setIdAlur:u})=>e.jsx(K,{size:"70rem",onClose:()=>{n(),r(""),o(""),u("")},opened:a,title:"Edit Alur Pendaftaran PPDB",withFooter:!0,onAccept:{acceptFn:i,titleAccept:"Ubah"},children:e.jsxs(y,{p:20,pb:"6rem",children:[e.jsx(D,{align:"left",weight:"bold",children:"Nama"}),e.jsx(I,{value:l,onChange:p=>o(p.target.value)}),e.jsx(D,{align:"left",mt:30,weight:"bold",children:"Deskripsi Keterangan"}),e.jsx(M,{desc:c,setDesc:r})]})}),he=()=>{var T;const a=R(),[n,{open:l,close:o}]=B(!1),[c,{open:r,close:i}]=B(!1),d=U(),[u,p]=v.useState(null),[A,x]=v.useState(""),[j,h]=v.useState(""),{data:g,isError:N,isLoading:O,refetch:P}=J({queryKey:["get_all_alur"],queryFn:le}),E=C({mutationFn:re}),F=C({mutationFn:ie}),S=C({mutationFn:ce}),_=s=>{E.mutate(s,{onSuccess:t=>{console.log("Success"),console.log(t),m.success("Data berhasil ditambahkan"),x(""),h(""),o(),d.invalidateQueries({queryKey:["get_all_alur"]})},onError:t=>{var b;((b=t==null?void 0:t.response)==null?void 0:b.status)===400&&(console.log("DATA TIDAK BOLEH KOSONG"),m.error("Data tidak boleh kosong"))}})},L=s=>{S.mutate(s,{onSuccess:t=>{console.log(t),console.log("Success"),m.success("Data berhasil diubah"),p(""),x(""),h(""),i(),P(),d.invalidateQueries({queryKey:["get_all_alur"]})},onError:t=>{var b;((b=t==null?void 0:t.response)==null?void 0:b.status)===400&&(console.log("DATA TIDAK BOLEH KOSONG"),m.error("Data tidak boleh kosong"))}})},q=s=>{F.mutate(s,{onSuccess:t=>{console.log(t),console.log("Success"),m.success("Data berhasil dihapus"),close(),P()},onError:t=>{console.log("FAILED"),console.log(t)}})};if(N)return e.jsx("h1",{children:"Terjadi Kesalahan"});const z=()=>{_({content:j,title:A})};function H(s){q({id:s})}function G(){L({content:j,id:u,title:A})}function Q({propss:s,data:t}){return e.jsxs(ae,{children:[e.jsx(f.Control,{...s,className:"font-bold"}),e.jsxs("div",{style:{paddingInline:"16px",display:"flex",gap:"8px"},children:[e.jsx(w,{className:"bg-[#2A166F] hover:bg-[#2A166F]",variant:"filled",size:40,radius:100,onClick:()=>{p(t.id),x(t.title),h(t.content),r()},children:e.jsx(ne,{size:20})}),e.jsx(w,{className:"bg-[#2A166F] hover:bg-[#2A166F]",variant:"filled",color:"blue",size:40,radius:100,onClick:()=>H(t.id),children:e.jsx(oe,{size:20})})]})]})}return e.jsxs(V,{title:"Alur Pendaftaran",children:[e.jsx(W,{label:"Alur Pendaftaran"}),e.jsxs(y,{className:"style-box max-w-[70rem] mx-auto",children:[e.jsxs(X,{mt:50,sx:{display:"flex",flexDirection:"column",gap:"16px",paddingBottom:"40px"},children:[e.jsx(f,{multiple:!0,variant:"separated",chevronPosition:"left",children:O?e.jsx(e.Fragment,{children:e.jsx(Y,{height:80})}):g&&((T=g==null?void 0:g.data)==null?void 0:T.length)>0?g.data.map(s=>e.jsxs(f.Item,{value:s.id.toString(),sx:{boxShadow:"0 4px 10px -6px black",backgroundColor:`${a?"#25262B":"white"}`,padding:"0.5rem 0.5rem",border:"0.0625rem solid #dee2e6"},styles:{item:{backgroundColor:"blue"}},children:[e.jsx(Q,{propss:{id:s.id.toString(),children:e.jsx("h2",{children:s.title})},data:s}),e.jsx(f.Panel,{sx:{borderTop:`1px solid ${a?"gray":"#d9d9d9"}`},children:e.jsx(Z,{desc:s.content})})]},s.id)):e.jsx(ee,{})}),e.jsx(te,{mt:40,onClick:l,children:"Tambah"})]}),e.jsx(de,{close:o,createAlurMutation:E,descAlurPPDB:j,opened:n,setDescAlurPPDB:h,setTitle:x,tambahALurHandler:z,title:A}),e.jsx(ue,{opened:c,close:i,title:A,setTitle:x,descAlurPPDB:j,setDescAlurPPDB:h,setIdAlur:p,editAlurHandler:G,editAlurMutation:S}),e.jsx(se,{visible:F.status==="pending",overlayBlur:1})]})]})};export{he as default};

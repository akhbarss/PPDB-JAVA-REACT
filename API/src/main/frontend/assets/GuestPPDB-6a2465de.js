import{u as h,a as g,b as P,j as a,B as r,T as y,D as N,c as S,d as c,L as o,G as v,e as E,R as B,f as G,g as I,C as L,P as R,s as F,h as b,r as _,i as m,I as w,k as M,H as C,l as k,m as D,S as $,A as j,F as z,n as U,o as J,p as O}from"./index-0e888dc4.js";import{S as A}from"./Stepper-2429015b.js";const W=()=>{var t;const{xs:e}=h(),l=g(),s=l.colorScheme==="dark",{data:n}=P({queryKey:["get_all_alur_pendaftaran"],queryFn:v});return a.jsx(a.Fragment,{children:a.jsxs(r,{id:"alur-pendaftaran",mt:100,className:"flex flex-col",children:[a.jsx(r,{className:"bg-white shadow-md max rounded-full px-[4rem] flex justify-center mx-auto py-2",children:a.jsx(y,{size:e?"2.5vw":"5vw",color:"dark",weight:"bold",children:"Alur Pendaftaran"})}),n&&n.data.length>0?a.jsx(r,{className:"mt-10 flex",children:a.jsx(A,{active:0,orientation:"vertical",sx:{display:"flex",width:"100%",justifyContent:"space-between",flex:"1"},styles:{stepWrapper:{width:"3.5rem",height:"3.5rem"},stepIcon:{border:"none",backgroundColor:`${s?"#291872":"#020731"}`,color:"white",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",boxShadow:`5px 5px 10px -5px ${s?"#291872":"black"}`},verticalSeparator:{borderLeft:`2px solid ${s?"#291872":"#020731"}`,position:"absolute",top:"calc(3.5rem + calc(2rem / 2))",left:"calc(3.5rem / 2)"},steps:{flex:1},step:{display:"flex",width:"100%",gap:e?"2rem":""},stepBody:{flex:1},stepDescription:{margin:0}},children:n&&((t=n==null?void 0:n.data)==null?void 0:t.map(i=>a.jsx(A.Step,{mb:10,description:a.jsxs(r,{style:{backgroundColor:`${s?l.colors.dark[9]:"#dbe1fe"}`,color:`${s?"white":"black"}`,borderRadius:"12px",padding:`${e?"1rem":"0.5rem"}`},children:[a.jsxs("div",{style:{width:"fit-content",fontWeight:"bold",color:`${s?"#6449da":"#020731"}`},children:[a.jsx("h1",{style:{fontSize:"22px"},children:i.title}),a.jsx(N,{size:4,color:s?"#6449da":"#020731",w:"60%"})]}),a.jsx("div",{style:{marginTop:"24px",display:"flex",flexDirection:"column",gap:"25px",lineHeight:"20px"},children:a.jsx(S,{desc:i.content})})]})})))})}):a.jsxs(r,{className:"mt-5 bg-white rounded-xl p-10 max-w-[25rem] mx-auto",children:[a.jsx(c,{align:"center",color:"dark",weight:"bold",children:"Alur Pendaftaran Kosong"}),a.jsxs(c,{align:"center",size:"sm",color:"dark",children:["Silakan hubungi ",a.jsx(c,{component:o,underline:!0,color:"blue",to:"https://wa.me/6281380908008",target:"_blank",children:"Admin"})," untuk info alur pendaftaran"]})]})]})})},K=({opened:e,dark:l,theme:s,routeGuest:n,menus:t,toggle:i,routeAdmin:d,routeSiswa:p})=>{const x=I();return console.log(t),a.jsx(L,{in:e,transitionDuration:200,transitionTimingFunction:"ease",className:"menu-bar-collapse h-[100%] w-full  fixed top-[70px] z-[10000] text-white ",children:a.jsxs(R,{className:"flex flex-col min-h-[100vh] py-6 gap-4 text-xl px-8 bg-[#2A166F] text-white",sx:{},children:[t.map((u,f)=>a.jsx("div",{className:"cursor-pointer ",onClick:()=>{i(),setTimeout(()=>{F.scrollTo(u.path,{duration:500,delay:100,smooth:!0,offset:-100})},300)},children:u.label},f)),a.jsx(N,{color:"white"}),a.jsxs(a.Fragment,{children:[a.jsx(o,{to:"/ppdb/auth/login",className:"text-white no-underline",children:"Masuk"}),a.jsx(o,{to:"/ppdb/auth/register",className:"text-white no-underline",children:"Daftar SMK"}),a.jsx(o,{to:"/ppdb/auth/register",className:"text-white no-underline",children:"Daftar SMP"})]}),d&&a.jsxs(a.Fragment,{children:[a.jsx(o,{to:"#",children:"Profile"}),a.jsx(o,{to:"#",children:"Pengaturan"}),a.jsx(b,{onClick:()=>{localStorage.removeItem("accessToken"),x("/ppdb/login")},children:"Logout"})]}),p&&a.jsxs(a.Fragment,{children:[a.jsx(o,{to:"#",children:"Profile"}),a.jsx(o,{to:"/ppdb/login",children:"Logout"})]})]})})},Y=({opened:e,toggle:l,menus:s})=>{const{pathname:n}=E(),t=n==="/ppdb",i=n.split("/").includes("admin"),d=n.split("/").includes("siswa"),p=g(),x=p.colorScheme==="dark";return a.jsx(B.Fragment,{children:G.createPortal(a.jsx(K,{dark:x,menus:s,opened:e,routeAdmin:i,routeGuest:t,routeSiswa:d,theme:p,toggle:l}),document.getElementById("navbar-collapse"))})},T=[{id:1,tipe:"pembelian",nama_jalur_pendaftaran:"PEMBELIAN FORMULIR",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-10-28T10:00:00",biaya_pendaftaran:1,informasi_umum:{keterangan:[{id:1,nama_keterangan:"Test",deskripsi_keterangan:"Test"},{id:2,nama_keterangan:"Test",deskripsi_keterangan:"Test"}],biaya_tambahan:[]},gelombang:[{id:1,nama_gelombang:"PEMBELIAN FORMULIR",jumlah_penerimaan:200,waktu_oendaftaran_dibuka:"1 November 2023",waktu_oendaftaran_ditutup:"30 November 2023",nama_bank:"BCA",nomor_rekening:123456789,nama_pemilik_rekening:"",biaya_pendaftaran:1,ujian_penerimaan:[],pengumuman:[{nama_pengumuman:"",tanggal_pengumuman:""}],kegiatan:[{nama_kegiatan:"",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00"}]}]},{id:2,tipe:"pengembalian",nama_jalur_pendaftaran:"PENGEMBALIAN FORMULIR REGULER",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2024-01-01T10:00:00",biaya_pendaftaran:1,informasi_umum:{keterangan:[{id:1,nama_keterangan:"pengembalian",deskripsi_keterangan:"pengembalian"}],biaya_tambahan:[{id:1,judul_biaya:"Biaya Uang Gedung",biaya:[{id:1,nama_biaya_tambahan:"Gelombang 1",jumlah_biaya_tambahan:295e4},{id:2,nama_biaya_tambahan:"Gelombang 2",jumlah_biaya_tambahan:325e4}]}]},gelombang:[{id:1,nama_gelombang:"PENGEMBALIAN FORMULIR REGULER GEL.1",jumlah_penerimaan:100,waktu_oendaftaran_dibuka:"1 November 2023",waktu_oendaftaran_ditutup:"31 Mei 2024",nama_bank:"BCA",nomor_rekening:123456789,nama_pemilik_rekening:"",biaya_pendaftaran:1,ujian_penerimaan:[{id:1,nama_ujian_penerimaan:"Test Akademik Gel.1",media_test:"test-online",keterangan:"tes online",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",lokasi_test:"",kkm:70},{id:2,nama_ujian_penerimaan:"Test Ujian Akademik Gel.1",media_test:"test-online",keterangan:"tes online",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",lokasi_test:"",kkm:70}],pengumuman:[{nama_pengumuman:"",tanggal_pengumuman:""}],kegiatan:[{nama_kegiatan:"",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00"}]},{id:2,nama_gelombang:"PENGEMBALIAN FORMULIR REGULER GEL.2",jumlah_penerimaan:240,waktu_oendaftaran_dibuka:"1 Juni 2024",waktu_oendaftaran_ditutup:"15 Juli 2024",nama_bank:"BCA",nomor_rekening:123456789,nama_pemilik_rekening:"",biaya_pendaftaran:1,ujian_penerimaan:[{id:1,nama_ujian_penerimaan:"Test Akademik Gel.2",media_test:"test-online",keterangan:"tes online",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",lokasi_test:"",kkm:70},{id:2,nama_ujian_penerimaan:"Test Ujian Akademik Gel.2",media_test:"test-online",keterangan:"tes online",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",lokasi_test:"",kkm:70}],pengumuman:[{nama_pengumuman:"",tanggal_pengumuman:""}],kegiatan:[{nama_kegiatan:"",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00"}]}]},{id:3,tipe:"pengembalian",nama_jalur_pendaftaran:"PENGEMBALIAN FORMULIR PRESTASI",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",biaya_pendaftaran:1,informasi_umum:{keterangan:[],biaya_tambahan:[]},gelombang:[{id:1,nama_gelombang:"PENGEMBALIAN FORMULIR REGULER GEL.1",jumlah_penerimaan:200,waktu_oendaftaran_dibuka:"1 November 2023",waktu_oendaftaran_ditutup:"30 November 2023",nama_bank:"BCA",nomor_rekening:123456789,nama_pemilik_rekening:"",biaya_pendaftaran:1,ujian_penerimaan:[{id:1,nama_ujian_penerimaan:"Test Akademik Gel.1",media_test:"test-online",keterangan:"tes online",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",lokasi_test:"",kkm:70},{id:2,nama_ujian_penerimaan:"Test Akademik Gel.2",media_test:"test-online",keterangan:"tes online",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",lokasi_test:"",kkm:70}],pengumuman:[{nama_pengumuman:"",tanggal_pengumuman:""}],kegiatan:[{nama_kegiatan:"",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00"}]}]},{id:4,tipe:"pengembalian",nama_jalur_pendaftaran:"PENGEMBALIAN FORMULIR DISKON",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-10-19T10:00:00",biaya_pendaftaran:1,informasi_umum:{keterangan:[],biaya_tambahan:[]},gelombang:[{id:1,nama_gelombang:"PENGEMBALIAN FORMULIR REGULER GEL.1",jumlah_penerimaan:200,waktu_oendaftaran_dibuka:"1 November 2023",waktu_oendaftaran_ditutup:"30 November 2023",nama_bank:"BCA",nomor_rekening:123456789,nama_pemilik_rekening:"",biaya_pendaftaran:1,ujian_penerimaan:[{id:1,nama_ujian_penerimaan:"Test Akademik Gel.1",media_test:"test-online",keterangan:"tes online",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",lokasi_test:"",kkm:70},{id:2,nama_ujian_penerimaan:"Test Akademik Gel.2",media_test:"test-online",keterangan:"tes online",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00",lokasi_test:"",kkm:70}],pengumuman:[{nama_pengumuman:"",tanggal_pengumuman:""}],kegiatan:[{nama_kegiatan:"",waktu_dibuka:"2023-10-11T10:00:00",waktu_ditutup:"2023-11-11T10:00:00"}]}]}],q=({jalur:e})=>{const{xs:l}=h(),s=g(),n=s.colorScheme==="dark";return a.jsxs(r,{id:"biaya",style:{backgroundColor:`${n?s.colors.dark[9]:"#dbe1fe"}`,color:`${n?"white":"#0F172A"}`,display:"flex",flexDirection:"column",marginTop:"20px",padding:`${l?"32px":"32px 8px"}`,borderRadius:"7px"},children:[a.jsxs("h1",{style:{fontSize:"22px"},children:["Biaya ",e==null?void 0:e.nama_jalur_pendaftaran,":"]}),e&&(e==null?void 0:e.informasi_umum.biaya_tambahan.length)>0?e==null?void 0:e.informasi_umum.biaya_tambahan.map(t=>a.jsxs(r,{style:{backgroundColor:`${n?"black":"white"}`,color:`${n?"white":"#0F172A"}`,display:"flex",flexDirection:"column",marginTop:"20px"},children:[a.jsx("div",{id:"judul-biaya",style:{borderBottom:"1px solid",padding:"8px 24px",textAlign:"center"},children:a.jsx("p",{children:t.judul_biaya})}),a.jsx("div",{children:t.biaya.map(i=>{const d=i.jumlah_biaya_tambahan.toLocaleString("id-ID",{style:"currency",currency:"IDR"});return a.jsxs("div",{style:{display:"flex",fontSize:"16px",padding:"8px 32px"},children:[a.jsx("span",{style:{flex:2},children:i.nama_biaya_tambahan}),a.jsx("span",{style:{flex:1},children:d.endsWith(",00")?d.slice(0,-3):d})]},i.id)})})]},t.id)):"-"]})},H=({activeCard:e,setJalur:l,setActiveCard:s})=>{const n="bg-[#F36B1D] text-white border border border-black shadow",i=g().colorScheme==="dark";return a.jsx(r,{id:"card-jalur-pendaftaran",className:"  text-gray-800 font-bold  overflow-x-hidden  flex",children:a.jsx(r,{className:"p-4 flex overflow-auto   flex-[1] gap-4",children:T.map(d=>a.jsx("button",{onClick:()=>{l(d),s(d.id)},className:`w-[200px] min-w-[200px] flex-grow min-h-[125px] p-[22px] font-black  transition-all ease-out rounded-lg  border
                             ${e===d.id?n:`${i?"bg-[#291872]":"bg-white"} text-black`}`,children:d.nama_jalur_pendaftaran},d.id))})})},Q=({jalur:e})=>{const{xs:l}=h(),s=g(),n=s.colorScheme==="dark";return a.jsxs(r,{id:"jadwal",className:`flex flex-col mt-5   rounded-md  ${l?"p-8 mt-10":"py-8 px-2"}`,style:{backgroundColor:`${n?s.colors.dark[9]:"#dbe1fe"}`,color:`${n?"white":"#0F172A"}`},children:[a.jsxs("h1",{className:"text-[22px] ",children:["Jadwal ",e==null?void 0:e.nama_jalur_pendaftaran,":"]}),e&&e.gelombang.length>0?e==null?void 0:e.gelombang.map(t=>a.jsxs(r,{className:" text-[16px] mt-5",style:{backgroundColor:`${n?"black":"white"}`,color:`${n?"white":"#0F172A"}`},children:[a.jsx("div",{id:"judul-biaya",className:" border-b   py-2 text-[20px] text-center",children:a.jsx("span",{children:t.nama_gelombang})}),a.jsxs("div",{className:"font-semibold px-2",children:[a.jsxs("div",{className:"py-2 flex gap-4",children:[a.jsx("span",{className:"flex-1",children:"Pendaftaran Gelombang"}),a.jsxs("span",{className:"flex-1",children:[t.waktu_oendaftaran_dibuka," - ",t.waktu_oendaftaran_ditutup]})]}),t.ujian_penerimaan.map(i=>a.jsxs("div",{className:"py-2 flex gap-4",children:[a.jsx("span",{className:"flex-1",children:i.nama_ujian_penerimaan}),a.jsxs("span",{className:"flex-1",children:[i.waktu_dibuka," - ",i.waktu_ditutup]})]},i.id))]})]},t.id)):"-"]})},X=()=>{const{xs:e}=h(),[l,s]=_.useState(()=>T.find(i=>i.id===1)),[n,t]=_.useState(1);return a.jsx(a.Fragment,{children:a.jsxs(r,{id:"jalur-pendaftaran",mt:100,sx:{display:"flex",gap:"20px",flexDirection:"column"},children:[a.jsx(r,{className:"bg-white shadow-md max rounded-full px-[4rem] flex justify-center mx-auto py-2",children:a.jsx(y,{size:e?"2.5vw":"5vw",color:"dark",weight:"bold",children:"Jalur Pendaftaran"})}),a.jsx(H,{activeCard:n,setActiveCard:t,setJalur:s}),a.jsxs(r,{sx:{display:"flex",flexDirection:"column",width:"100%",fontSize:"22px",fontWeight:"bold",maxWidth:"50rem",marginInline:"auto"},children:[a.jsx(q,{jalur:l}),a.jsx(Q,{jalur:l})]})]})})},Z=()=>{const{xs:e}=h();return a.jsx(a.Fragment,{children:a.jsxs(r,{id:"ppdb",pt:60,className:"flex gap-10 lg:flex-row flex-col mx-auto",children:[a.jsxs(m,{shadow:"sm",padding:"xl",className:"group/card ",children:[a.jsx(m.Section,{inheritPadding:!0,withBorder:!0,py:"xs",children:a.jsx(c,{size:20,align:"center",weight:"bold",children:"Daftar PPDB SMK"})}),a.jsx(m.Section,{sx:{overflow:"hidden"},children:a.jsx(w,{className:" transition  duration-300 ease-in-out group-hover/card:scale-105 ",src:"/smk.jpg",height:e?260:200,width:e?500:300,alt:"smp"})}),a.jsx(m.Section,{p:20,children:a.jsx(b,{fullWidth:!0,color:"orange",component:o,to:"/ppdb/auth/register/smk",children:"Daftar"})})]}),a.jsxs(m,{shadow:"sm",padding:"xl",className:"group/card ",children:[a.jsx(m.Section,{inheritPadding:!0,withBorder:!0,py:"xs",children:a.jsx(c,{size:20,align:"center",weight:"bold",children:"Daftar PPDB SMP"})}),a.jsx(m.Section,{sx:{overflow:"hidden"},children:a.jsx(w,{className:" transition  duration-300 ease-in-out group-hover/card:scale-105 ",src:"/smp.jpg",height:e?260:200,width:e?500:300,alt:"smp"})}),a.jsx(m.Section,{p:20,children:a.jsx(b,{fullWidth:!0,className:"bg-[#2A166F]",component:o,to:"/ppdb/auth/register/smp",children:"Daftar"})})]})]})})},ea=()=>{const{md:e,xs:l,xl:s,lg:n}=h(),t=g(),i=t.colorScheme==="dark",[d,{toggle:p}]=M(!1);_.useState(()=>T.find(u=>u.id===1)),_.useState(1);const x=_.useMemo(()=>[{label:"Beranda",path:"beranda"},{label:"PPDB",path:"ppdb"},{label:"Alur Pendaftaran",path:"alur-pendaftaran"},{label:"Jalur Pendaftaran",path:"jalur-pendaftaran"}],[]);return P({queryKey:["get_all_alur_pendaftaran"],queryFn:v}),a.jsxs("main",{id:"dashboard-ppdb",children:[a.jsxs(C,{height:"70px",sx:{boxShadow:`${i?"":"0px -40px 50px 10px black"}`,display:"flex",justifyContent:"space-between",alignItems:"center",paddingInline:`${e?"1.5rem":"1rem"}`,position:"fixed",backgroundColor:`${i?t.colors.dark[9]:"#2A166F"}`,border:"none"},children:[a.jsxs(k,{spacing:`${e?"md":"xs"}`,className:"max-lg:mx-auto",children:[a.jsx("img",{src:"/logo-yatindo-hd.png",alt:"Yatindo",className:"w-[47px]"}),a.jsx(r,{children:a.jsx(c,{weight:"bold",lineClamp:1,color:"white",children:"PPDB Yatindo"})})]}),a.jsx(a.Fragment,{children:e?a.jsx(a.Fragment,{children:a.jsx(k,{mr:20,children:x.map((u,f)=>a.jsx(D,{to:u.path,smooth:!0,duration:500,offset:-90,style:{cursor:"pointer",fontWeight:"bold",color:"white"},className:"hover:underline underline-offset-2",children:u.label},f))})}):""})]}),a.jsxs(R,{className:"style-box bg-gray-100 parralax ",children:[a.jsx(Y,{menus:x,opened:d,toggle:p}),a.jsxs($,{pt:"70px",px:l?40:20,py:90,className:" min-h-[80vh] backdrop-brightness-[0.3] backdrop-blur-sm   text-white ",children:[a.jsx(r,{className:"text-center mx-auto",py:140,id:"beranda",children:a.jsxs(k,{spacing:`${e?"40px":"xs"}`,children:[a.jsxs(r,{className:"text-left",children:[a.jsxs(k,{className:"flex",children:[a.jsx("img",{src:"/logo-yatindo-hd.png",alt:"Yatindo",className:"w-[57px]"}),a.jsx(N,{orientation:"vertical",size:"xs",color:"white"}),a.jsx(c,{weight:"bold",lineClamp:1,color:"white",size:20,children:"PPDB Yatindo"})]}),a.jsx(y,{mt:10,size:40,children:"Yayasan Tinta Emas Indonesia"}),a.jsx(c,{className:"max-w-xl",mt:10,size:16,children:"Yayasan Tinta Emas Indonesia, Jl. Asem Jaya No.1, RT.004/RW.005, Mustika Jaya, Kec. Mustika Jaya, Kota Bks, Jawa Barat 17158"}),a.jsxs(k,{mt:20,children:[a.jsx(j,{variant:"filled",color:"indigo",size:"lg",component:o,to:"https://wa.me/6281380908008",target:"_blank",children:a.jsx(z,{size:20})}),a.jsx(j,{variant:"filled",color:"indigo",size:"lg",component:o,to:"https://www.instagram.com/smk_yatindo/",target:"_blank",children:a.jsx(U,{size:20})}),a.jsx(j,{variant:"filled",color:"indigo",size:"lg",component:o,to:"https://youtube.com/@smp-smktintaemasyatindo9557?si=ZPPqAkG4TXplUr0g",target:"_blank",children:a.jsx(J,{size:20})}),a.jsx(b,{w:100,ml:20,variant:"gradient",gradient:{from:"cyan",to:"indigo"},color:"grape",component:o,to:"/ppdb/auth/login",children:"Masuk"})]})]}),a.jsx(r,{sx:{display:`${!n&&"none"}`},children:a.jsx(m,{p:0,radius:"25px",children:a.jsx(w,{src:"/smk-1.jpg",width:450,className:"hover:brightness-75 transition  duration-300 ease-in-out"})})})]})}),a.jsx(Z,{}),a.jsx(W,{}),a.jsx(X,{})]})]}),a.jsx(O,{})]})};export{ea as default};

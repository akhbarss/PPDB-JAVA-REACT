import{a5 as I,r as y,a6 as He,a7 as Je,a8 as Qe,a9 as se,R as D,X as Xe,aa as Ze,ab as te,ac as J,ad as ea,ae as aa,af as ra,a as pe,m as sa,j as e,G as me,t as ta,ag as la,c as R,S as L,_ as M,ah as c,p as v,ai as le,k as oa,aj as ia,l as na,b as W,V as he,B as G,T as Q,f as da,q as ca,n as ua,o as pa,O as ma,$ as oe,a0 as ha,D as xa,a1 as ga,a2 as xe,ak as ge,a3 as fa,a4 as fe}from"./index-c1683f52.js";import{F as be}from"./index.esm-fb938338.js";import{D as U,I as ba,e as ja,R as _a,f as Pa,h as va,i as ka,u as ya,g as Sa,T as ie,S as je,b as _e,c as Da,d as Pe,a as Ia}from"./generateQueryParam-443174b3.js";import{u as ve,C as O,F as Na}from"./FormWrapper-0021e390.js";import{H as wa}from"./index.esm-981828e4.js";import{I as ne}from"./Image-8a2939c8.js";import{S as Ca}from"./SimpleGrid-248c688e.js";import{T as X}from"./Textarea-141a74e1.js";import{R as Aa}from"./ResponseError-661a494f.js";import{c as E}from"./imageUtils-040c21d1.js";import{L as qa}from"./LoadingOverlay-f55ff73a.js";import"./DataTable-8d86c960.js";import"./Flex-5072689f.js";import"./Select-596909b4.js";import"./Card-2740124a.js";import"./Badge-e28c5e5c.js";function Ta({date:r,maxDate:t,minDate:a}){return!(r==null||Number.isNaN(r.getTime())||t&&I(r).isAfter(t,"date")||a&&I(r).isBefore(a,"date"))}function Ea(r){const t=new Date(r);return Number.isNaN(t.getTime())||!r?null:t}var La=Object.defineProperty,Ma=Object.defineProperties,Ba=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,de=(r,t,a)=>t in r?La(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,C=(r,t)=>{for(var a in t||(t={}))ke.call(t,a)&&de(r,a,t[a]);if(Y)for(var a of Y(t))ye.call(t,a)&&de(r,a,t[a]);return r},V=(r,t)=>Ma(r,Ba(t)),Fa=(r,t)=>{var a={};for(var i in r)ke.call(r,i)&&t.indexOf(i)<0&&(a[i]=r[i]);if(r!=null&&Y)for(var i of Y(r))t.indexOf(i)<0&&ye.call(r,i)&&(a[i]=r[i]);return a};const Oa={valueFormat:"MMMM D, YYYY",fixOnBlur:!0,preserveTime:!0,size:"sm"},Se=y.forwardRef((r,t)=>{const a=He("DateInput",Oa,r),{inputProps:i,wrapperProps:b,value:o,defaultValue:j,onChange:g,clearable:_,clearButtonProps:m,popoverProps:x,getDayProps:u,locale:k,valueFormat:P,dateParser:s,minDate:n,maxDate:d,fixOnBlur:l,onFocus:f,onBlur:h,onClick:S,readOnly:A,name:Ie,form:Ne,rightSection:we,unstyled:ee,classNames:Ce,styles:Ae,allowDeselect:ae,preserveTime:qe,date:Te,defaultDate:Ee,onDateChange:Le}=a,Me=Fa(a,["inputProps","wrapperProps","value","defaultValue","onChange","clearable","clearButtonProps","popoverProps","getDayProps","locale","valueFormat","dateParser","minDate","maxDate","fixOnBlur","onFocus","onBlur","onClick","readOnly","name","form","rightSection","unstyled","classNames","styles","allowDeselect","preserveTime","date","defaultDate","onDateChange"]),{calendarProps:Be,others:Fe}=Je(Me),$=Qe(),Oe=s||(p=>{const N=I(p,P,$.getLocale(k)).toDate();return Number.isNaN(N.getTime())?Ea(p):N}),Re=ae!==void 0?ae:_,B=p=>p?I(p).locale($.getLocale(k)).format(P):"",[w,K,z]=se({value:o,defaultValue:j,finalValue:null,onChange:g}),[Ke,H]=se({value:Te,defaultValue:j||Ee,finalValue:null,onChange:Le});y.useEffect(()=>{z&&H(o)},[z,o]);const[ze,q]=y.useState(B(w));y.useEffect(()=>{q(B(w))},[$.getLocale(k)]);const[re,F]=y.useState(!1),Ge=p=>{const N=p.currentTarget.value;if(q(N),N.trim()===""&&_)K(null);else{const T=Oe(N);Ta({date:T,minDate:n,maxDate:d})&&(K(T),H(T))}},Ue=p=>{h==null||h(p),F(!1),l&&q(B(w))},Ve=p=>{f==null||f(p),F(!0)},We=p=>{S==null||S(p),F(!0)},Ye=p=>V(C({},u==null?void 0:u(p)),{selected:I(w).isSame(p,"day"),onClick:()=>{const N=qe?ra(w,p):p,T=_&&Re&&I(w).isSame(p,"day")?null:N;K(T),!z&&q(B(T)),F(!1)}}),$e=we||(_&&w&&!A?D.createElement(Xe,C({variant:"transparent",onMouseDown:p=>p.preventDefault(),tabIndex:-1,onClick:()=>{K(null),!z&&q(""),F(!1)},unstyled:ee},m)):null);return Ze(()=>{o!==void 0&&!re&&q(B(o))},[o]),D.createElement(D.Fragment,null,D.createElement(te.Wrapper,V(C({},b),{__staticSelector:"DateInput"}),D.createElement(J,C({opened:re,trapFocus:!1,position:"bottom-start",disabled:A,withRoles:!1},x),D.createElement(J.Target,null,D.createElement(te,V(C(C({"data-dates-input":!0,"data-read-only":A||void 0,autoComplete:"off",ref:t,value:ze,onChange:Ge,onBlur:Ue,onFocus:Ve,onClick:We,readOnly:A,rightSection:$e},i),Fe),{__staticSelector:"DateInput"}))),D.createElement(J.Dropdown,{onMouseDown:p=>p.preventDefault(),"data-dates-dropdown":!0},D.createElement(ea,V(C({__staticSelector:"DateInput"},Be),{classNames:Ce,styles:Ae,unstyled:ee,__preventFocus:!0,minDate:n,maxDate:d,locale:k,getDayProps:Ye,size:i.size,date:Ke,onDateChange:H}))))),D.createElement(aa,{name:Ie,form:Ne,value:w,type:"default"}))});Se.displayName="@mantine/dates/DateInput";const Z=({onChange:r,onReject:t,onDrop:a,accept:i,multiple:b,value:o,label:j})=>{const g=pe(),_=sa();return e.jsxs(U,{multiple:b,onChange:r,onReject:t,maxSize:3*1024**2,accept:i,onDrop:a,children:[e.jsxs(me,{position:"center",spacing:"xl",style:{minHeight:ta(220),pointerEvents:"none",position:"relative",overflow:"hidden"},children:[e.jsx(U.Accept,{children:e.jsx(la,{size:"3.2rem",color:g.colors[g.primaryColor][g.colorScheme==="dark"?4:6]})}),e.jsx(U.Reject,{children:e.jsx(ba,{size:"3.2rem",color:g.colors.red[g.colorScheme==="dark"?4:6]})}),e.jsx(U.Idle,{children:e.jsx(wa,{size:"3.2rem"})}),e.jsx(R,{sx:{zIndex:9,color:o&&!b?"transparent":_?"white":"black"},children:j}),!b&&o&&(o==null?void 0:o.length)>0&&(o==null?void 0:o.map((m,x)=>{const u=URL.createObjectURL(m);return e.jsx(ne,{src:u,width:"80%",sx:{position:"absolute",filter:"brightness(50%)",top:0},imageProps:{onLoad:()=>URL.revokeObjectURL(u)}},x)}))]}),e.jsx(Ca,{cols:4,mt:5,breakpoints:[{maxWidth:"sm",cols:1}],children:b&&o&&i===ja&&(o==null?void 0:o.map((m,x)=>{const u=URL.createObjectURL(m);return e.jsx(ne,{src:u,w:20,imageProps:{onLoad:()=>URL.revokeObjectURL(u)}},x)}))})]})},Ra=()=>{var i,b,o,j,g,_,m,x,u,k,P,s,n,d;const{register:r,control:t,formState:{errors:a}}=ve();return e.jsxs(L,{spacing:10,children:[e.jsx(O,{render:({field:{onChange:l,value:f}})=>e.jsx(Z,{children:e.jsx("div",{}),label:"Upload pas Photo 3x4, Max : 5MB (DIBUTUHKAN)",onDrop:h=>{l(h)},accept:{"image/*":[]},value:f,multiple:!1,onChange:h=>{var S;return l(((S=h.target.files)==null?void 0:S[0])??null)},onReject:h=>{h[0].errors[0].code=="file-too-large"&&M.error("Size gambar terlalu besar dari 5MB")}}),name:"profile_picture",control:t,rules:{required:{value:!0,message:"Dibutuhkan"}}}),e.jsx(R,{size:"xs",c:"red",children:(i=a==null?void 0:a.profile_picture)==null?void 0:i.message}),e.jsxs(c,{children:[e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Masukkan NISN",label:"NISN",withAsterisk:!1,placeholder:"Nomor NISN",error:a.nisn&&e.jsx("div",{children:(b=a.nisn)==null?void 0:b.message}),required:!0,...r("nisn",{required:!1})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{disabled:!0,description:"Nomor Whatsapp",label:"Nomor WhatsApp",placeholder:"Nomor Whatsapp",error:a.phone&&e.jsx("div",{children:(o=a.phone)==null?void 0:o.message}),required:!0,...r("phone",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Nama Lengkap",label:"Nama Lengkap",placeholder:"Nama Lengkap",error:a.name&&e.jsx("div",{children:(j=a.name)==null?void 0:j.message}),required:!0,...r("name",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Nama Panggilan",label:"Nama Panggilan",withAsterisk:!1,placeholder:"Nama Panggilan",error:a.surname&&e.jsx("div",{children:(g=a.surname)==null?void 0:g.message}),required:!0,...r("surname",{required:!1})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(_a,{name:"gender",control:t,label:"Gender",rules:{required:{value:!0,message:"Dibutuhkan"}},description:"Pilih salah satu",children:e.jsxs(me,{mt:"xs",children:[e.jsx(le,{value:"L",label:"Laki laki"}),e.jsx(le,{value:"P",label:"Perempuan"})]})})}),e.jsxs(c.Col,{lg:6,sm:12,children:[e.jsx(O,{render:({field:{onChange:l,value:f}})=>e.jsx(Pa,{type:"RELIGION",readOnly:!1,label:"Agama",onChange:l,value:f,searchable:!1}),name:"religion",control:t,rules:{required:{value:!0,message:"Dibutuhkan"}}}),e.jsx(R,{c:"red",size:"xs",children:(_=a==null?void 0:a.religion)==null?void 0:_.message})]}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{label:"Tempat Lahir",placeholder:"Tempat Lahir",error:a.birth_place&&e.jsx("div",{children:(m=a.birth_place)==null?void 0:m.message}),required:!0,...r("birth_place",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(O,{render:({field:{onChange:l,value:f},fieldState:{error:h}})=>e.jsx(Se,{error:h==null?void 0:h.message,value:f,onChange:S=>{const A=new Date(S);l(A)},label:"Tanggal Lahir",placeholder:"Tanggal Lahir",styles:{calendar:{maxWidth:"500px"},calendarHeader:{marginInline:"auto"}}}),name:"birth_date",control:t,rules:{required:{value:!0,message:"Dibutuhkan"}}})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(X,{label:"Alamat",autosize:!0,minRows:3,placeholder:"Alamat",error:a.address&&e.jsx("div",{children:(x=a.address)==null?void 0:x.message}),required:!0,...r("address",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{label:"Provinsi",placeholder:"Provinsi",error:a.province&&e.jsx("div",{children:(u=a.province)==null?void 0:u.message}),required:!0,...r("province",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{label:"Kota/Kabupaten",placeholder:"Kota/Kabupaten",error:a.city&&e.jsx("div",{children:(k=a.city)==null?void 0:k.message}),required:!0,...r("city",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{label:"Kecamatan",placeholder:"Kecamatan",error:a.district&&e.jsx("div",{children:(P=a.district)==null?void 0:P.message}),required:!0,...r("district",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{label:"Kelurahan",placeholder:"Kelurahan",error:a.sub_district&&e.jsx("div",{children:(s=a.sub_district)==null?void 0:s.message}),required:!0,...r("sub_district",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{label:"Kode Pos",placeholder:"Kode Pos",withAsterisk:!1,error:a.postal_code&&e.jsx("div",{children:(n=a.postal_code)==null?void 0:n.message}),required:!0,...r("postal_code",{required:!1})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{label:"Asal Sekolah",placeholder:"Asal Sekolah",error:a.school_origin&&e.jsx("div",{children:(d=a.school_origin)==null?void 0:d.message}),required:!0,...r("school_origin",{required:{value:!0,message:"Dibutuhkan"}})})})]})]})},Ka=()=>{var i,b,o,j,g,_,m,x,u,k;pe();const{register:r,control:t,formState:{errors:a}}=ve();return e.jsxs(L,{spacing:10,children:[e.jsxs(c,{children:[e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Nama Ayah",label:"Nama Ayah",placeholder:"Nama Ayah",error:a.dad_name&&e.jsx("div",{children:(i=a.dad_name)==null?void 0:i.message}),required:!0,...r("dad_name",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Nama Ibu",label:"Nama Ibu",placeholder:"Nama Ibu",error:a.mother_name&&e.jsx("div",{children:(b=a.mother_name)==null?void 0:b.message}),required:!0,...r("mother_name",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Pekerjaan Ayah",label:"Pekerjaan Ayah",withAsterisk:!1,placeholder:"Pekerjaan Ayah",error:a.dad_job&&e.jsx("div",{children:(o=a.dad_job)==null?void 0:o.message}),required:!0,...r("dad_job",{required:!1})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Pekerjaan Ibu",label:"Pekerjaan Ibu",placeholder:"Pekerjaan Ibu",withAsterisk:!1,error:a.mother_job&&e.jsx("div",{children:(j=a.mother_job)==null?void 0:j.message}),required:!0,...r("mother_job",{required:!1})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Nomor Telepon Ayah",label:"Nomor Telepon Ayah",placeholder:"Nomor Telepon Ayah",error:a.dad_phone&&e.jsx("div",{children:(g=a.dad_phone)==null?void 0:g.message}),required:!0,...r("dad_phone",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(v,{description:"Nomor Telepon Ibu",label:"Nomor Telepon Ibu",placeholder:"Nomor Telepon Ibu",error:a.mother_phone&&e.jsx("div",{children:(_=a.mother_phone)==null?void 0:_.message}),required:!0,...r("mother_phone",{required:{value:!0,message:"Dibutuhkan"}})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(X,{label:"Alamat Ayah",autosize:!0,minRows:3,placeholder:"Alamat Ayah",error:a.dad_address&&e.jsx("div",{children:(m=a.dad_address)==null?void 0:m.message}),withAsterisk:!1,required:!0,...r("dad_address",{required:!1})})}),e.jsx(c.Col,{lg:6,sm:12,children:e.jsx(X,{label:"Alamat Ibu",autosize:!0,minRows:3,placeholder:"Alamat Ibu",error:a.mother_address&&e.jsx("div",{children:(x=a.mother_address)==null?void 0:x.message}),withAsterisk:!1,required:!0,...r("mother_address",{required:!1})})})]}),e.jsx(O,{render:({field:{onChange:P,value:s}})=>e.jsx(Z,{children:e.jsx("div",{}),label:"Upload kartu Keluarga 3x4, Max : 5MB ( WAJIB )",onDrop:n=>{P(n)},value:s,multiple:!1,onChange:n=>{var d;return P(((d=n.target.files)==null?void 0:d[0])??null)},onReject:n=>{n[0].errors[0].code=="file-too-large"&&M.error("Size gambar terlalu besar dari 5MB")}}),name:"family_card",control:t,rules:{required:{value:!0,message:"Dibutuhkan"}}}),e.jsx(R,{size:"xs",c:"red",children:(u=a==null?void 0:a.family_card)==null?void 0:u.message}),e.jsx(O,{render:({field:{onChange:P,value:s}})=>e.jsx(Z,{children:e.jsx("div",{}),label:" Upload akta kelahiran 3x4, Max : 5MB ( WAJIB )",onDrop:n=>{P(n)},value:s,multiple:!1,onChange:n=>{var d;return P(((d=n.target.files)==null?void 0:d[0])??null)},onReject:n=>{n[0].errors[0].code=="file-too-large"&&M.error("Size gambar terlalu besar dari 5MB")}}),rules:{required:{value:!0,message:"Dibutuhkan"}},name:"birth_card",control:t}),e.jsx(R,{size:"xs",c:"red",children:(k=a==null?void 0:a.birth_card)==null?void 0:k.message})]})},za=async r=>(await oa.put("/v1/student/update-bio",r)).data,De=({type:r="PENGEMBALIAN"})=>{var k,P;const[t,a]=y.useState(!1),i=va({step:3,stagingId:null}),[b,o]=y.useState(null),j=ia(),g=na({mutationFn:za});W({queryKey:["get-session-from-bio"],queryFn:he});const _=s=>{const n=new FormData;for(const[d,l]of Object.entries(s))l!==null&&(d==="profile_picture"||d==="family_card"||d==="birth_card"?n.append(d,l==null?void 0:l[0]):d==="birth_date"?n.append(d,I(l).format("YYYY-MM-DD")):n.append(d,l));g.mutate(n,{onSuccess:()=>{M.success("Sukses update informasi biodata"),j.invalidateQueries({queryKey:["get_last_offset_batch"]})},onError:d=>Aa(d)})},{data:m,isSuccess:x}=W({queryKey:["student_staging_offset",i.stagingId,r],queryFn:()=>ka(i.stagingId,r),enabled:!!i.stagingId}),u=async()=>{var n;const s=(n=m.data)==null?void 0:n.student;if(a(!0),typeof(s==null?void 0:s.profile_picture)=="string")try{s.profile_picture=await E(s.profile_picture),s.birth_card=await E(s.birth_card),s.family_card=await E(s.family_card),o({...s,birth_date:s.birth_date?I(s.birth_date).toDate():null}),a(!1)}catch{a(!1),M.error("Gagal mengambil data biodata, silakan coba lagi")}else if((s==null?void 0:s.profile_picture)===null)o({...s,birth_date:s.birth_date?I(s.birth_date).toDate():null}),a(!1);else try{s.profile_picture=await E(s.profile_picture[0].name),s.birth_card=await E(s.birth_card[0].name),s.family_card=await E(s.family_card[0].name),o({...s,birth_date:s.birth_date?I(s.birth_date).toDate():null}),a(!1)}catch{a(!1),M.error("Gagal mengambil data biodata, silakan coba lagi")}};return y.useEffect(()=>{x&&u()},[x]),e.jsx(Na,{id:"form-biodata",initialValues:b,onSubmit:_,children:x&&((k=m.data.current_state)==null?void 0:k.status)==="WAITING_PAYMENT"&&((P=m.data.current_state)==null?void 0:P.type)===r?e.jsx(G,{sx:s=>({backgroundColor:`${s.colorScheme==="dark"?s.colors.dark[7]:s.white}`,padding:"2rem",boxShadow:"0 5px 10px -8px black",borderRadius:"7px"}),children:e.jsxs(L,{children:[e.jsx(Q,{children:"Isi Biodata"}),e.jsx("p",{children:"Harap menunggu konfirmasi pembayaran terlebih dahulu sebelum isi biodata"})]})}):e.jsx(e.Fragment,{children:e.jsxs(G,{pos:"relative",children:[e.jsx(G,{sx:s=>({backgroundColor:`${s.colorScheme==="dark"?s.colors.dark[7]:s.white}`,padding:"2rem",boxShadow:"0 5px 10px -8px black",borderRadius:"7px"}),children:e.jsxs(L,{children:[e.jsx(Q,{children:"Isi Biodata"}),e.jsx(Ra,{})]})}),e.jsx(G,{sx:s=>({backgroundColor:`${s.colorScheme==="dark"?s.colors.dark[7]:s.white}`,marginTop:10,padding:"2rem",boxShadow:"0 5px 10px -8px black",borderRadius:"7px"}),children:e.jsxs(L,{children:[e.jsx(Q,{children:"Informasi Orang Tua"}),e.jsx(Ka,{}),e.jsx(da,{type:"submit",variant:"filled",loading:g.isPending,children:"Submit"})]})}),e.jsx(qa,{visible:t,zIndex:10})]})})})};function Ga(r){const{grade:t}=r;return e.jsx(ga,{unstyled:!0,styles:a=>({tab:{...a.fn.focusStyles(),backgroundColor:a.colorScheme==="dark"?a.colors.dark[6]:a.white,color:a.colorScheme==="dark"?"white":a.colors.gray[9],border:"0.1625rem solid #dee2e6",boxShadow:"0 10px 20px -10px rgba(0,0,0,0.2)",cursor:"pointer",fontSize:a.fontSizes.sm,borderRadius:"5px","&:disabled":{cursor:"not-allowed",color:a.colorScheme==="dark"?a.colors.gray[4]:a.colors.gray[8],backgroundColor:a.colorScheme==="dark"?a.colors.dark[6]:a.colors.gray[4]},"&[data-active]":{background:`linear-gradient(45deg, ${t=="SMP"&&"#2A166F"||t=="SMK"&&"#FF6C22"}, ${t=="SMP"&&"#6548DB"||t=="SMK"&&"#ff9f22"})`,borderColor:"green",color:a.white,boxShadow:"0 10px 20px -10px rgba(0,0,0,0.5)"}},tabsList:{overflowX:"auto"}}),...r})}const ce=[{index:1,label:"Pilih Jalur PPDB",icon:xe,content:e.jsx(je,{type:"PENGEMBALIAN"})},{index:2,label:"Transaksi Pengembalian",icon:be,content:e.jsx(_e,{type:"PENGEMBALIAN"})},{index:3,label:"Isi Biodata",icon:ge,content:e.jsx(De,{type:"PENGEMBALIAN"})},{index:4,label:"Pilih Jurusan",icon:fa,content:e.jsx(Da,{type:"PENGEMBALIAN"})},{index:5,label:"Cetak Kartu Peserta",icon:fe,content:e.jsx(Pe,{type:"PENGEMBALIAN"})}],ue=[{index:1,label:"Pilih Jalur PPDB",icon:xe,content:e.jsx(je,{type:"PENGEMBALIAN"})},{index:2,label:"Transaksi Pengembalian",icon:be,content:e.jsx(_e,{type:"PENGEMBALIAN"})},{index:3,label:"Isi Biodata",icon:ge,content:e.jsx(De,{type:"PENGEMBALIAN"})},{index:4,label:"Cetak Kartu Peserta",icon:fe,content:e.jsx(Pe,{type:"PENGEMBALIAN"})}],ir=()=>{var k,P,s,n,d;const[r,t]=y.useState({step:1,stagingId:null}),{data:a,isSuccess:i,isFetching:b}=W({queryKey:["get_last_offset_batch"],queryFn:()=>Ia("PENGEMBALIAN"),staleTime:0,notifyOnChangeProps:"all"}),{data:o}=W({queryFn:he,queryKey:["session"]}),j=ya(r),g=ca(),_=ua(),m=(P=(k=o==null?void 0:o.data)==null?void 0:k.student)==null?void 0:P.grade;y.useEffect(()=>{t(j==null?void 0:j.initialValues)},[j]),y.useEffect(()=>{if(i){const l=a.data.filter(f=>f.is_done===1);if(l.length>0)if(a.data[a.data.length-1].index!==l[l.length-1].index){const f=l[l.length-1].index+1;x(f.toString())}else x(l[l.length-1].index.toString());else x("1")}},[a,i]);const x=l=>{var h;const f={step:+l,stagingId:(h=a.data.find(S=>S.index===+l))==null?void 0:h.id};_(`${g.pathname}?${Sa(f)}`)},u=i&&((s=a==null?void 0:a.data)==null?void 0:s.filter(l=>(l==null?void 0:l.grade)===m));return e.jsxs(pa,{title:"Pengembalian",children:[e.jsx(ma,{label:"Pengembalian"}),e.jsx(L,{className:"style-box max-w-[100rem] mx-auto",children:e.jsxs(Ga,{value:`${r.step}`,onTabChange:x,grade:m,children:[b?e.jsx(oe,{mt:40,width:"100%",height:200,visible:!0}):e.jsx(e.Fragment,{children:i&&e.jsxs(ha,{w:"100%",display:"flex",type:"always",sx:{display:"block"},offsetScrollbars:!0,children:[m=="SMP"&&e.jsx(ie,{activeTabIndex:+r.step,card:u==null?void 0:u.map((l,f)=>{var h;return{label:l.name,index:l.index,icon:(h=ue[f])==null?void 0:h.icon,is_done:l.is_done===1}})}),m=="SMK"&&e.jsx(ie,{activeTabIndex:+r.step,card:u==null?void 0:u.map((l,f)=>{var h;return{label:l.name,index:l.index,icon:(h=ce[f])==null?void 0:h.icon,is_done:l.is_done===1}})})]})}),e.jsx(xa,{my:20}),b?e.jsx(oe,{mt:40,width:"100%",height:200,visible:!0}):e.jsxs(e.Fragment,{children:[m=="SMP"&&((n=ue.find(l=>l.index===r.step))==null?void 0:n.content),m=="SMK"&&((d=ce.find(l=>l.index===r.step))==null?void 0:d.content)]})]})})]})};export{ir as default};

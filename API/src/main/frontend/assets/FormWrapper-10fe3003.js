import{R as S,r as Ft,j as $e}from"./index-288d8993.js";var ae=e=>e.type==="checkbox",re=e=>e instanceof Date,T=e=>e==null;const et=e=>typeof e=="object";var C=e=>!T(e)&&!Array.isArray(e)&&et(e)&&!re(e),tt=e=>C(e)&&e.target?ae(e.target)?e.target.checked:e.target.value:e,xt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,rt=(e,i)=>e.has(xt(i)),mt=e=>{const i=e.constructor&&e.constructor.prototype;return C(i)&&i.hasOwnProperty("isPrototypeOf")},pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(pe&&(e instanceof Blob||e instanceof FileList))&&(r||C(e)))if(i=r?[]:{},!r&&!mt(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=N(e[s]));else return e;return i}var le=e=>Array.isArray(e)?e.filter(Boolean):[],p=e=>e===void 0,f=(e,i,r)=>{if(!i||!C(e))return r;const s=le(i.split(/[,[\].]+?/)).reduce((u,l)=>T(u)?u:u[l],e);return p(s)||s===e?p(e[i])?r:e[i]:s},z=e=>typeof e=="boolean";const de={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},st=S.createContext(null),Ce=()=>S.useContext(st),wt=e=>{const{children:i,...r}=e;return S.createElement(st.Provider,{value:r},i)};var it=(e,i,r,s=!0)=>{const u={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const d=l;return i._proxyFormState[d]!==I.all&&(i._proxyFormState[d]=!s||I.all),r&&(r[d]=!0),e[d]}});return u},B=e=>C(e)&&!Object.keys(e).length,ut=(e,i,r,s)=>{r(e);const{name:u,...l}=e;return B(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(d=>i[d]===(!s||I.all))},ce=e=>Array.isArray(e)?e:[e],nt=(e,i,r)=>!e||!i||e===i||ce(e).some(s=>s&&(r?s===i:s.startsWith(i)||i.startsWith(s)));function Oe(e){const i=S.useRef(e);i.current=e,S.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function St(e){const i=Ce(),{control:r=i.control,disabled:s,name:u,exact:l}=e||{},[d,v]=S.useState(r._formState),g=S.useRef(!0),m=S.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),w=S.useRef(u);return w.current=u,Oe({disabled:s,next:F=>g.current&&nt(w.current,F.name,l)&&ut(F,m.current,r._updateFormState)&&v({...r._formState,...F}),subject:r._subjects.state}),S.useEffect(()=>(g.current=!0,m.current.isValid&&r._updateValid(!0),()=>{g.current=!1}),[r]),it(d,r,m.current,!1)}var H=e=>typeof e=="string",at=(e,i,r,s,u)=>H(e)?(s&&i.watch.add(e),f(r,e,u)):Array.isArray(e)?e.map(l=>(s&&i.watch.add(l),f(r,l))):(s&&(i.watchAll=!0),r);function Dt(e){const i=Ce(),{control:r=i.control,name:s,defaultValue:u,disabled:l,exact:d}=e||{},v=S.useRef(s);v.current=s,Oe({disabled:l,subject:r._subjects.values,next:w=>{nt(v.current,w.name,d)&&m(N(at(v.current,r._names,w.values||r._formValues,!1,u)))}});const[g,m]=S.useState(r._getWatch(s,u));return S.useEffect(()=>r._removeUnmounted()),g}var Le=e=>/^\w*$/.test(e),lt=e=>le(e.replace(/["|']|\]/g,"").split(/\.|\[/));function x(e,i,r){let s=-1;const u=Le(i)?[i]:lt(i),l=u.length,d=l-1;for(;++s<l;){const v=u[s];let g=r;if(s!==d){const m=e[v];g=C(m)||Array.isArray(m)?m:isNaN(+u[s+1])?{}:[]}e[v]=g,e=e[v]}return e}function kt(e){const i=Ce(),{name:r,disabled:s,control:u=i.control,shouldUnregister:l}=e,d=rt(u._names.array,r),v=Dt({control:u,name:r,defaultValue:f(u._formValues,r,f(u._defaultValues,r,e.defaultValue)),exact:!0}),g=St({control:u,name:r}),m=S.useRef(u.register(r,{...e.rules,value:v}));return m.current=u.register(r,e.rules),S.useEffect(()=>{const w=u._options.shouldUnregister||l,F=(_,q)=>{const R=f(u._fields,_);R&&(R._f.mount=q)};if(F(r,!0),w){const _=N(f(u._options.defaultValues,r));x(u._defaultValues,r,_),p(f(u._formValues,r))&&x(u._formValues,r,_)}return()=>{(d?w&&!u._state.action:w)?u.unregister(r):F(r,!1)}},[r,u,d,l]),S.useEffect(()=>{f(u._fields,r)&&u._updateDisabledField({disabled:s,fields:u._fields,name:r})},[s,r,u]),{field:{name:r,value:v,...z(s)?{disabled:s}:{},onChange:S.useCallback(w=>m.current.onChange({target:{value:tt(w),name:r},type:de.CHANGE}),[r]),onBlur:S.useCallback(()=>m.current.onBlur({target:{value:f(u._formValues,r),name:r},type:de.BLUR}),[r,u]),ref:w=>{const F=f(u._fields,r);F&&w&&(F._f.ref={focus:()=>w.focus(),select:()=>w.select(),setCustomValidity:_=>w.setCustomValidity(_),reportValidity:()=>w.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!f(g.errors,r)},isDirty:{enumerable:!0,get:()=>!!f(g.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!f(g.touchedFields,r)},error:{enumerable:!0,get:()=>f(g.errors,r)}})}}const Ht=e=>e.render(kt(e));var Et=(e,i,r,s,u)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:u||!0}}:{};const Ee=(e,i,r)=>{for(const s of r||Object.keys(e)){const u=f(e,s);if(u){const{_f:l,...d}=u;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else C(d)&&Ee(d,i)}}};var Ke=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),Ge=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length)))),pt=(e,i,r)=>{const s=le(f(e,r));return x(s,"root",i[r]),x(e,r,s),e},Re=e=>e.type==="file",J=e=>typeof e=="function",ye=e=>{if(!pe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},fe=e=>H(e),Te=e=>e.type==="radio",he=e=>e instanceof RegExp;const ze={value:!1,isValid:!1},Je={value:!0,isValid:!0};var ot=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!p(e[0].attributes.value)?p(e[0].value)||e[0].value===""?Je:{value:e[0].value,isValid:!0}:Je:ze}return ze};const Qe={isValid:!1,value:null};var ct=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,Qe):Qe;function Xe(e,i,r="validate"){if(fe(e)||Array.isArray(e)&&e.every(fe)||z(e)&&!e)return{type:r,message:fe(e)?e:"",ref:i}}var te=e=>C(e)&&!he(e)?e:{value:e,message:""},Ye=async(e,i,r,s,u)=>{const{ref:l,refs:d,required:v,maxLength:g,minLength:m,min:w,max:F,pattern:_,validate:q,name:R,valueAsNumber:_e,mount:oe,disabled:be}=e._f,b=f(i,R);if(!oe||be)return{};const P=d?d[0]:l,$=A=>{s&&P.reportValidity&&(P.setCustomValidity(z(A)?"":A||""),P.reportValidity())},O={},se=Te(l),Z=ae(l),Ve=se||Z,W=(_e||Re(l))&&p(l.value)&&p(b)||ye(l)&&l.value===""||b===""||Array.isArray(b)&&!b.length,Q=Et.bind(null,R,r,O),K=(A,V,k,U=G.maxLength,M=G.minLength)=>{const j=A?V:k;O[R]={type:A?U:M,message:j,ref:l,...Q(A?U:M,j)}};if(u?!Array.isArray(b)||!b.length:v&&(!Ve&&(W||T(b))||z(b)&&!b||Z&&!ot(d).isValid||se&&!ct(d).isValid)){const{value:A,message:V}=fe(v)?{value:!!v,message:v}:te(v);if(A&&(O[R]={type:G.required,message:V,ref:P,...Q(G.required,V)},!r))return $(V),O}if(!W&&(!T(w)||!T(F))){let A,V;const k=te(F),U=te(w);if(!T(b)&&!isNaN(b)){const M=l.valueAsNumber||b&&+b;T(k.value)||(A=M>k.value),T(U.value)||(V=M<U.value)}else{const M=l.valueAsDate||new Date(b),j=ue=>new Date(new Date().toDateString()+" "+ue),X=l.type=="time",ie=l.type=="week";H(k.value)&&b&&(A=X?j(b)>j(k.value):ie?b>k.value:M>new Date(k.value)),H(U.value)&&b&&(V=X?j(b)<j(U.value):ie?b<U.value:M<new Date(U.value))}if((A||V)&&(K(!!A,k.message,U.message,G.max,G.min),!r))return $(O[R].message),O}if((g||m)&&!W&&(H(b)||u&&Array.isArray(b))){const A=te(g),V=te(m),k=!T(A.value)&&b.length>+A.value,U=!T(V.value)&&b.length<+V.value;if((k||U)&&(K(k,A.message,V.message),!r))return $(O[R].message),O}if(_&&!W&&H(b)){const{value:A,message:V}=te(_);if(he(A)&&!b.match(A)&&(O[R]={type:G.pattern,message:V,ref:l,...Q(G.pattern,V)},!r))return $(V),O}if(q){if(J(q)){const A=await q(b,i),V=Xe(A,P);if(V&&(O[R]={...V,...Q(G.validate,V.message)},!r))return $(V.message),O}else if(C(q)){let A={};for(const V in q){if(!B(A)&&!r)break;const k=Xe(await q[V](b,i),P,V);k&&(A={...k,...Q(V,k.message)},$(k.message),r&&(O[R]=A))}if(!B(A)&&(O[R]={ref:P,...A},!r))return O}}return $(!0),O};function Ct(e,i){const r=i.slice(0,-1).length;let s=0;for(;s<r;)e=p(e)?s++:e[i[s++]];return e}function Ot(e){for(const i in e)if(e.hasOwnProperty(i)&&!p(e[i]))return!1;return!0}function L(e,i){const r=Array.isArray(i)?i:Le(i)?[i]:lt(i),s=r.length===1?e:Ct(e,r),u=r.length-1,l=r[u];return s&&delete s[l],u!==0&&(C(s)&&B(s)||Array.isArray(s)&&Ot(s))&&L(e,r.slice(0,-1)),e}function we(){let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}}var ge=e=>T(e)||!et(e);function Y(e,i){if(ge(e)||ge(i))return e===i;if(re(e)&&re(i))return e.getTime()===i.getTime();const r=Object.keys(e),s=Object.keys(i);if(r.length!==s.length)return!1;for(const u of r){const l=e[u];if(!s.includes(u))return!1;if(u!=="ref"){const d=i[u];if(re(l)&&re(d)||C(l)&&C(d)||Array.isArray(l)&&Array.isArray(d)?!Y(l,d):l!==d)return!1}}return!0}var ft=e=>e.type==="select-multiple",Lt=e=>Te(e)||ae(e),Se=e=>ye(e)&&e.isConnected,dt=e=>{for(const i in e)if(J(e[i]))return!0;return!1};function ve(e,i={}){const r=Array.isArray(e);if(C(e)||r)for(const s in e)Array.isArray(e[s])||C(e[s])&&!dt(e[s])?(i[s]=Array.isArray(e[s])?[]:{},ve(e[s],i[s])):T(e[s])||(i[s]=!0);return i}function yt(e,i,r){const s=Array.isArray(e);if(C(e)||s)for(const u in e)Array.isArray(e[u])||C(e[u])&&!dt(e[u])?p(i)||ge(r[u])?r[u]=Array.isArray(e[u])?ve(e[u],[]):{...ve(e[u])}:yt(e[u],T(i)?{}:i[u],r[u]):r[u]=!Y(e[u],i[u]);return r}var De=(e,i)=>yt(e,i,ve(i)),ht=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:s})=>p(e)?e:i?e===""?NaN:e&&+e:r&&H(e)?new Date(e):s?s(e):e;function ke(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return Re(i)?i.files:Te(i)?ct(e.refs).value:ft(i)?[...i.selectedOptions].map(({value:r})=>r):ae(i)?ot(e.refs).value:ht(p(i.value)?e.ref.value:i.value,e)}var Rt=(e,i,r,s)=>{const u={};for(const l of e){const d=f(i,l);d&&x(u,l,d._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:s}},ne=e=>p(e)?e:he(e)?e.source:C(e)?he(e.value)?e.value.source:e.value:e,Tt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ze(e,i,r){const s=f(e,r);if(s||Le(r))return{error:s,name:r};const u=r.split(".");for(;u.length;){const l=u.join("."),d=f(i,l),v=f(e,l);if(d&&!Array.isArray(d)&&r!==l)return{name:r};if(v&&v.type)return{name:l,error:v};u.pop()}return{name:r}}var Ut=(e,i,r,s,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(i||e):(r?s.isOnBlur:u.isOnBlur)?!e:(r?s.isOnChange:u.isOnChange)?e:!0,Mt=(e,i)=>!le(f(e,i)).length&&L(e,i);const Bt={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Pt(e={},i){let r={...Bt,...e},s={submitCount:0,isDirty:!1,isLoading:J(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},u={},l=C(r.defaultValues)||C(r.values)?N(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:N(l),v={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,w=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:we(),array:we(),state:we()},q=e.resetOptions&&e.resetOptions.keepDirtyValues,R=Ke(r.mode),_e=Ke(r.reValidateMode),oe=r.criteriaMode===I.all,be=t=>n=>{clearTimeout(w),w=setTimeout(t,n)},b=async t=>{if(F.isValid||t){const n=r.resolver?B((await W()).errors):await K(u,!0);n!==s.isValid&&_.state.next({isValid:n})}},P=t=>F.isValidating&&_.state.next({isValidating:t}),$=(t,n=[],a,y,c=!0,o=!0)=>{if(y&&a){if(v.action=!0,o&&Array.isArray(f(u,t))){const h=a(f(u,t),y.argA,y.argB);c&&x(u,t,h)}if(o&&Array.isArray(f(s.errors,t))){const h=a(f(s.errors,t),y.argA,y.argB);c&&x(s.errors,t,h),Mt(s.errors,t)}if(F.touchedFields&&o&&Array.isArray(f(s.touchedFields,t))){const h=a(f(s.touchedFields,t),y.argA,y.argB);c&&x(s.touchedFields,t,h)}F.dirtyFields&&(s.dirtyFields=De(l,d)),_.state.next({name:t,isDirty:V(t,n),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else x(d,t,n)},O=(t,n)=>{x(s.errors,t,n),_.state.next({errors:s.errors})},se=(t,n,a,y)=>{const c=f(u,t);if(c){const o=f(d,t,p(a)?f(l,t):a);p(o)||y&&y.defaultChecked||n?x(d,t,n?o:ke(c._f)):M(t,o),v.mount&&b()}},Z=(t,n,a,y,c)=>{let o=!1,h=!1;const D={name:t};if(!a||y){F.isDirty&&(h=s.isDirty,s.isDirty=D.isDirty=V(),o=h!==D.isDirty);const E=Y(f(l,t),n);h=f(s.dirtyFields,t),E?L(s.dirtyFields,t):x(s.dirtyFields,t,!0),D.dirtyFields=s.dirtyFields,o=o||F.dirtyFields&&h!==!E}if(a){const E=f(s.touchedFields,t);E||(x(s.touchedFields,t,a),D.touchedFields=s.touchedFields,o=o||F.touchedFields&&E!==a)}return o&&c&&_.state.next(D),o?D:{}},Ve=(t,n,a,y)=>{const c=f(s.errors,t),o=F.isValid&&z(n)&&s.isValid!==n;if(e.delayError&&a?(m=be(()=>O(t,a)),m(e.delayError)):(clearTimeout(w),m=null,a?x(s.errors,t,a):L(s.errors,t)),(a?!Y(c,a):c)||!B(y)||o){const h={...y,...o&&z(n)?{isValid:n}:{},errors:s.errors,name:t};s={...s,...h},_.state.next(h)}P(!1)},W=async t=>r.resolver(d,r.context,Rt(t||g.mount,u,r.criteriaMode,r.shouldUseNativeValidation)),Q=async t=>{const{errors:n}=await W(t);if(t)for(const a of t){const y=f(n,a);y?x(s.errors,a,y):L(s.errors,a)}else s.errors=n;return n},K=async(t,n,a={valid:!0})=>{for(const y in t){const c=t[y];if(c){const{_f:o,...h}=c;if(o){const D=g.array.has(o.name),E=await Ye(c,d,oe,r.shouldUseNativeValidation&&!n,D);if(E[o.name]&&(a.valid=!1,n))break;!n&&(f(E,o.name)?D?pt(s.errors,E,o.name):x(s.errors,o.name,E[o.name]):L(s.errors,o.name))}h&&await K(h,n,a)}}return a.valid},A=()=>{for(const t of g.unMount){const n=f(u,t);n&&(n._f.refs?n._f.refs.every(a=>!Se(a)):!Se(n._f.ref))&&Ae(t)}g.unMount=new Set},V=(t,n)=>(t&&n&&x(d,t,n),!Y(Ue(),l)),k=(t,n,a)=>at(t,g,{...v.mount?d:p(n)?l:H(t)?{[t]:n}:n},a,n),U=t=>le(f(v.mount?d:l,t,e.shouldUnregister?f(l,t,[]):[])),M=(t,n,a={})=>{const y=f(u,t);let c=n;if(y){const o=y._f;o&&(!o.disabled&&x(d,t,ht(n,o)),c=ye(o.ref)&&T(n)?"":n,ft(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?ae(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(D=>D===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Re(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||_.values.next({name:t,values:{...d}})))}(a.shouldDirty||a.shouldTouch)&&Z(t,c,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ue(t)},j=(t,n,a)=>{for(const y in n){const c=n[y],o=`${t}.${y}`,h=f(u,o);(g.array.has(t)||!ge(c)||h&&!h._f)&&!re(c)?j(o,c,a):M(o,c,a)}},X=(t,n,a={})=>{const y=f(u,t),c=g.array.has(t),o=N(n);x(d,t,o),c?(_.array.next({name:t,values:{...d}}),(F.isDirty||F.dirtyFields)&&a.shouldDirty&&_.state.next({name:t,dirtyFields:De(l,d),isDirty:V(t,o)})):y&&!y._f&&!T(o)?j(t,o,a):M(t,o,a),Ge(t,g)&&_.state.next({...s}),_.values.next({name:t,values:{...d}}),!v.mount&&i()},ie=async t=>{const n=t.target;let a=n.name,y=!0;const c=f(u,a),o=()=>n.type?ke(c._f):tt(t);if(c){let h,D;const E=o(),ee=t.type===de.BLUR||t.type===de.FOCUS_OUT,bt=!Tt(c._f)&&!r.resolver&&!f(s.errors,a)&&!c._f.deps||Ut(ee,f(s.touchedFields,a),s.isSubmitted,_e,R),xe=Ge(a,g,ee);x(d,a,E),ee?(c._f.onBlur&&c._f.onBlur(t),m&&m(0)):c._f.onChange&&c._f.onChange(t);const me=Z(a,E,ee,!1),Vt=!B(me)||xe;if(!ee&&_.values.next({name:a,type:t.type,values:{...d}}),bt)return F.isValid&&b(),Vt&&_.state.next({name:a,...xe?{}:me});if(!ee&&xe&&_.state.next({...s}),P(!0),r.resolver){const{errors:je}=await W([a]),At=Ze(s.errors,u,a),He=Ze(je,u,At.name||a);h=He.error,a=He.name,D=B(je)}else h=(await Ye(c,d,oe,r.shouldUseNativeValidation))[a],y=Number.isNaN(E)||E===f(d,a,E),y&&(h?D=!1:F.isValid&&(D=await K(u,!0)));y&&(c._f.deps&&ue(c._f.deps),Ve(a,D,h,me))}},ue=async(t,n={})=>{let a,y;const c=ce(t);if(P(!0),r.resolver){const o=await Q(p(t)?t:c);a=B(o),y=t?!c.some(h=>f(o,h)):a}else t?(y=(await Promise.all(c.map(async o=>{const h=f(u,o);return await K(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!s.isValid)&&b()):y=a=await K(u);return _.state.next({...!H(t)||F.isValid&&a!==s.isValid?{}:{name:t},...r.resolver||!t?{isValid:a}:{},errors:s.errors,isValidating:!1}),n.shouldFocus&&!y&&Ee(u,o=>o&&f(s.errors,o),t?c:g.mount),y},Ue=t=>{const n={...l,...v.mount?d:{}};return p(t)?n:H(t)?f(n,t):t.map(a=>f(n,a))},Me=(t,n)=>({invalid:!!f((n||s).errors,t),isDirty:!!f((n||s).dirtyFields,t),isTouched:!!f((n||s).touchedFields,t),error:f((n||s).errors,t)}),gt=t=>{t&&ce(t).forEach(n=>L(s.errors,n)),_.state.next({errors:t?s.errors:{}})},Be=(t,n,a)=>{const y=(f(u,t,{_f:{}})._f||{}).ref;x(s.errors,t,{...n,ref:y}),_.state.next({name:t,errors:s.errors,isValid:!1}),a&&a.shouldFocus&&y&&y.focus&&y.focus()},vt=(t,n)=>J(t)?_.values.subscribe({next:a=>t(k(void 0,n),a)}):k(t,n,!0),Ae=(t,n={})=>{for(const a of t?ce(t):g.mount)g.mount.delete(a),g.array.delete(a),n.keepValue||(L(u,a),L(d,a)),!n.keepError&&L(s.errors,a),!n.keepDirty&&L(s.dirtyFields,a),!n.keepTouched&&L(s.touchedFields,a),!r.shouldUnregister&&!n.keepDefaultValue&&L(l,a);_.values.next({values:{...d}}),_.state.next({...s,...n.keepDirty?{isDirty:V()}:{}}),!n.keepIsValid&&b()},Pe=({disabled:t,name:n,field:a,fields:y})=>{if(z(t)){const c=t?void 0:f(d,n,ke(a?a._f:f(y,n)._f));x(d,n,c),Z(n,c,!1,!1,!0)}},Fe=(t,n={})=>{let a=f(u,t);const y=z(n.disabled);return x(u,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...n}}),g.mount.add(t),a?Pe({field:a,disabled:n.disabled,name:t}):se(t,!0,n.value),{...y?{disabled:n.disabled}:{},...r.progressive?{required:!!n.required,min:ne(n.min),max:ne(n.max),minLength:ne(n.minLength),maxLength:ne(n.maxLength),pattern:ne(n.pattern)}:{},name:t,onChange:ie,onBlur:ie,ref:c=>{if(c){Fe(t,n),a=f(u,t);const o=p(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Lt(o),D=a._f.refs||[];if(h?D.find(E=>E===o):o===a._f.ref)return;x(u,t,{_f:{...a._f,...h?{refs:[...D.filter(Se),o,...Array.isArray(f(l,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else a=f(u,t,{}),a._f&&(a._f.mount=!1),(r.shouldUnregister||n.shouldUnregister)&&!(rt(g.array,t)&&v.action)&&g.unMount.add(t)}}},Ne=()=>r.shouldFocusError&&Ee(u,t=>t&&f(s.errors,t),g.mount),Ie=(t,n)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let y=N(d);if(_.state.next({isSubmitting:!0}),r.resolver){const{errors:c,values:o}=await W();s.errors=c,y=o}else await K(u);L(s.errors,"root"),B(s.errors)?(_.state.next({errors:{}}),await t(y,a)):(n&&await n({...s.errors},a),Ne(),setTimeout(Ne)),_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(s.errors),submitCount:s.submitCount+1,errors:s.errors})},_t=(t,n={})=>{f(u,t)&&(p(n.defaultValue)?X(t,f(l,t)):(X(t,n.defaultValue),x(l,t,n.defaultValue)),n.keepTouched||L(s.touchedFields,t),n.keepDirty||(L(s.dirtyFields,t),s.isDirty=n.defaultValue?V(t,f(l,t)):V()),n.keepError||(L(s.errors,t),F.isValid&&b()),_.state.next({...s}))},qe=(t,n={})=>{const a=t?N(t):l,y=N(a),c=t&&!B(t)?y:l;if(n.keepDefaultValues||(l=a),!n.keepValues){if(n.keepDirtyValues||q)for(const o of g.mount)f(s.dirtyFields,o)?x(c,o,f(d,o)):X(o,f(c,o));else{if(pe&&p(t))for(const o of g.mount){const h=f(u,o);if(h&&h._f){const D=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ye(D)){const E=D.closest("form");if(E){E.reset();break}}}}u={}}d=e.shouldUnregister?n.keepDefaultValues?N(l):{}:N(c),_.array.next({values:{...c}}),_.values.next({values:{...c}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!v.mount&&i(),v.mount=!F.isValid||!!n.keepIsValid,v.watch=!!e.shouldUnregister,_.state.next({submitCount:n.keepSubmitCount?s.submitCount:0,isDirty:n.keepDirty?s.isDirty:!!(n.keepDefaultValues&&!Y(t,l)),isSubmitted:n.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:n.keepDirtyValues?s.dirtyFields:n.keepDefaultValues&&t?De(l,t):{},touchedFields:n.keepTouched?s.touchedFields:{},errors:n.keepErrors?s.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},We=(t,n)=>qe(J(t)?t(d):t,n);return{control:{register:Fe,unregister:Ae,getFieldState:Me,handleSubmit:Ie,setError:Be,_executeSchema:W,_getWatch:k,_getDirty:V,_updateValid:b,_removeUnmounted:A,_updateFieldArray:$,_updateDisabledField:Pe,_getFieldArray:U,_reset:qe,_resetDefaultValues:()=>J(r.defaultValues)&&r.defaultValues().then(t=>{We(t,r.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:t=>{s={...s,...t}},_subjects:_,_proxyFormState:F,get _fields(){return u},get _formValues(){return d},get _state(){return v},set _state(t){v=t},get _defaultValues(){return l},get _names(){return g},set _names(t){g=t},get _formState(){return s},set _formState(t){s=t},get _options(){return r},set _options(t){r={...r,...t}}},trigger:ue,register:Fe,handleSubmit:Ie,watch:vt,setValue:X,getValues:Ue,reset:We,resetField:_t,clearErrors:gt,unregister:Ae,setError:Be,setFocus:(t,n={})=>{const a=f(u,t),y=a&&a._f;if(y){const c=y.refs?y.refs[0]:y.ref;c.focus&&(c.focus(),n.shouldSelect&&c.select())}},getFieldState:Me}}function Nt(e={}){const i=S.useRef(),r=S.useRef(),[s,u]=S.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Pt(e,()=>u(d=>({...d}))),formState:s});const l=i.current.control;return l._options=e,Oe({subject:l._subjects.state,next:d=>{ut(d,l._proxyFormState,l._updateFormState,!0)&&u({...l._formState})}}),S.useEffect(()=>{e.values&&!Y(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values):l._resetDefaultValues()},[e.values,l]),S.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),i.current.formState=it(s,l),i.current}const $t=({onSubmit:e,id:i,initialValues:r,children:s,method:u="onSubmit",width:l="100%",noValidate:d=!0})=>{const v=Nt({defaultValues:r,mode:u});return Ft.useEffect(()=>{if(r)for(const[g,m]of Object.entries(r))v.setValue(g,m)},[r]),$e.jsx(wt,{...v,children:$e.jsx("form",{id:i,style:{width:l},onSubmit:v.handleSubmit(e),onChange:u==="onChange"?v.handleSubmit(e):void 0,noValidate:d,children:typeof s=="function"?s(v):s})})};export{Ht as C,$t as F,kt as a,Ce as u};

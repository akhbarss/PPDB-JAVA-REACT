import{M as L,ax as N,r as B,Q as C,R as o,V as R,B as M,W as T,b0 as V}from"./index-dba9ce5e.js";var Q=Object.defineProperty,W=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,y=(r,e,a)=>e in r?Q(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,A=(r,e)=>{for(var a in e||(e={}))k.call(e,a)&&y(r,a,e[a]);if(v)for(var a of v(e))q.call(e,a)&&y(r,a,e[a]);return r},F=(r,e)=>W(r,Z(e)),G=L(r=>({root:F(A({},r.fn.cover()),{display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"})}));const H=G;var J=Object.defineProperty,K=Object.defineProperties,U=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(r,e,a)=>e in r?J(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,n=(r,e)=>{for(var a in e||(e={}))_.call(e,a)&&f(r,a,e[a]);if(s)for(var a of s(e))u.call(e,a)&&f(r,a,e[a]);return r},X=(r,e)=>K(r,U(e)),Y=(r,e)=>{var a={};for(var t in r)_.call(r,t)&&e.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&s)for(var t of s(r))e.indexOf(t)<0&&u.call(r,t)&&(a[t]=r[t]);return a};const ee={overlayOpacity:.75,transitionDuration:0,radius:0,zIndex:N("overlay")},re=B.forwardRef((r,e)=>{const a=C("LoadingOverlay",ee,r),{className:t,visible:O,loaderProps:m,overlayOpacity:P,overlayColor:g,transitionDuration:w,exitTransitionDuration:x,zIndex:l,style:b,loader:p,radius:D,overlayBlur:I,unstyled:c,variant:$,keepMounted:j}=a,E=Y(a,["className","visible","loaderProps","overlayOpacity","overlayColor","transitionDuration","exitTransitionDuration","zIndex","style","loader","radius","overlayBlur","unstyled","variant","keepMounted"]),{classes:h,cx:S,theme:i}=H(null,{name:"LoadingOverlay",unstyled:c,variant:$}),d=`calc(${l} + 1)`;return o.createElement(R,{keepMounted:j,duration:w,exitDuration:x,mounted:O,transition:"fade"},z=>o.createElement(M,n({className:S(h.root,t),style:X(n(n({},z),b),{zIndex:l}),ref:e},E),p?o.createElement("div",{style:{zIndex:d}},p):o.createElement(T,n({style:{zIndex:d}},m)),o.createElement(V,{opacity:P,zIndex:l,radius:D,blur:I,unstyled:c,color:g||(i.colorScheme==="dark"?i.colors.dark[5]:i.white)})))});re.displayName="@mantine/core/LoadingOverlay";export{re as L};

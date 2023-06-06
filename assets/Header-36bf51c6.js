import{N as x,u as L,a as k,r as p,j as e,l as N,c as z,O as C}from"./index-be930164.js";import{s as n}from"./styled-components.browser.esm-8968f678.js";import{G as D}from"./iconBase-d34e68f5.js";import{c as H,g as O,a as P,s as b,_ as c,u as U,b as F,d as T}from"./createSvgIcon-f49a5a1e.js";const $=n.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: var(--purple-color);
  box-shadow: var(--header-shadow);
`,V=n(x)`
  font-weight: 700;
  font-size: 26px;
  color: white;
  transition: var(--hover-transition);
  &:hover {
    color: var(--lettuce-color);
  }
  &.active {
    color: var(--lettuce-color);
  }
`,y=n.li`
  display: flex;
  align-items: center;
  gap: 26px;
`,A=n(x)`
  font-weight: 700;
  border-radius: 10px;
  padding: 10px 28px;
  background-color: var(--orange-color);
  transition: var(--hover-transition);
  &:hover {
    color: white;
    background-color: var(--lettuce-color);
  }
  &.active {
    color: white;
    background-color: var(--lettuce-color);
  }
`;n(x)``;function E(t){return D({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M116.832 543.664H671.28c17.696 0 32-14.336 32-32s-14.304-32-32-32H118.832l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194 189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248zM959.664 0H415.663c-35.36 0-64 28.656-64 64v288h64.416V103.024c0-21.376 17.344-38.72 38.72-38.72h464.72c21.391 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.328 38.72-38.72 38.72H454.816c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.416.08V960c0 35.344 28.64 64 64 64h543.984c35.36 0 64.016-28.656 64.016-64V64c-.015-35.344-28.671-64-64.015-64z"}}]})(t)}const _=n.div`
  width: 100px;
`,B=n.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: var(--orange-color);

  &:hover {
    width: 116px;
    border-radius: 40px;
    transition-duration: 0.3s;
    background-color: var(--lettuce-color);
  }

  &:active {
    transform: translate(2px, 2px);
  }
`,G=n.button`
  position: absolute;
  right: ${({isHover:t})=>t?"70%":"0%"};
  width: 0%;
  opacity: ${({isHover:t})=>t?1:0};
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition-duration: 0.3s;
`,q=n(E)`
  width: 16px;
  height: 16px;
  color: white;
  margin-left: 7px;
`,W=()=>{const t=L(),{user:o}=k(),[a,r]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:o.name}),e.jsx(_,{children:e.jsxs(B,{onClick:()=>t(N()),onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[e.jsx(q,{}),e.jsx(G,{type:"button",isHover:a,children:"Logout"})]})})]})},J={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},K=J,Q=H(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function X(t){return O("MuiAvatar",t)}P("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Y=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Z=t=>{const{classes:o,variant:a,colorDefault:r}=t;return T({root:["root",a,r&&"colorDefault"],img:["img"],fallback:["fallback"]},X,o)},tt=b("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],a.colorDefault&&o.colorDefault]}})(({theme:t,ownerState:o})=>c({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},o.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},o.variant==="square"&&{borderRadius:0},o.colorDefault&&c({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}))),et=b("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ot=b(Q,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,o)=>o.fallback})({width:"75%",height:"75%"});function rt({crossOrigin:t,referrerPolicy:o,src:a,srcSet:r}){const[i,l]=p.useState(!1);return p.useEffect(()=>{if(!a&&!r)return;l(!1);let d=!0;const s=new Image;return s.onload=()=>{d&&l("loaded")},s.onerror=()=>{d&&l("error")},s.crossOrigin=t,s.referrerPolicy=o,s.src=a,r&&(s.srcset=r),()=>{d=!1}},[t,o,a,r]),i}const at=p.forwardRef(function(o,a){const r=U({props:o,name:"MuiAvatar"}),{alt:i,children:l,className:d,component:s="div",imgProps:m,sizes:I,src:f,srcSet:h,variant:R="circular"}=r,M=F(r,Y);let u=null;const S=rt(c({},m,{src:f,srcSet:h})),j=f||h,w=j&&S!=="error",g=c({},r,{colorDefault:!w,component:s,variant:R}),v=Z(g);return w?u=e.jsx(et,c({alt:i,src:f,srcSet:h,sizes:I,ownerState:g,className:v.img},m)):l!=null?u=l:j&&i?u=i[0]:u=e.jsx(ot,{ownerState:g,className:v.fallback}),e.jsx(tt,c({as:s,ownerState:g,className:z(v.root,d),ref:a},M,{children:u}))}),st=at,dt=()=>{const{isLogin:t}=k();return e.jsxs(e.Fragment,{children:[e.jsxs($,{children:[t?e.jsx(st,{sx:{bgcolor:K[800]}}):e.jsx(V,{to:"/",children:"HOME"}),e.jsx("ul",{children:t?e.jsx(y,{children:e.jsx(W,{})}):e.jsxs(y,{children:[e.jsx(A,{to:"register",children:"Register"}),e.jsx(A,{to:"login",children:"Log in"})]})})]}),e.jsx(p.Suspense,{fallback:null,children:e.jsx(C,{})})]})};export{dt as default};

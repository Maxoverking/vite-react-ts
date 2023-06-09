import{N as b,u as O,a as U,b as x,r as p,j as t,l as C,d as D,e as H,O as L}from"./index-f81cb8fd.js";import{s}from"./styled-components.browser.esm-c7beb4c7.js";import{G as N,c as z,g as P,a as T,s as m,_ as c,u as V,b as F,d as $}from"./createSvgIcon-f26cbbb5.js";const E=s.div`
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
`,_=s(b)`
  font-family: "Titan One";
  font-size: 25px;
  color: white;
  transition: var(--hover-transition);
  &:hover {
    color: var(--lettuce-color);
  }
  &.active {
    color: var(--lettuce-color);
  }
  @media (max-width: 480px) {
    display: none;
  }
`,A=s.li`
  display: flex;
  align-items: center;
  gap: 26px;
`,k=s(b)`
  font-family: "Varela Round";
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
`;s(b)``;function B(e){return N({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M116.832 543.664H671.28c17.696 0 32-14.336 32-32s-14.304-32-32-32H118.832l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194 189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248zM959.664 0H415.663c-35.36 0-64 28.656-64 64v288h64.416V103.024c0-21.376 17.344-38.72 38.72-38.72h464.72c21.391 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.328 38.72-38.72 38.72H454.816c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.416.08V960c0 35.344 28.64 64 64 64h543.984c35.36 0 64.016-28.656 64.016-64V64c-.015-35.344-28.671-64-64.015-64z"}}]})(e)}const G=s.div`
  width: 100px;
`,q=s.h2`
  font-family: "Varela Round";
`,W=s.a`
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
`,J=s.button`
  font-family: "Varela Round";
  position: absolute;
  right: ${({isHover:e})=>e?"70%":"0%"};
  width: 0%;
  opacity: ${({isHover:e})=>e?1:0};
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition-duration: 0.3s;
`,K=s(B)`
  width: 16px;
  height: 16px;
  color: white;
  margin-left: 7px;
`,Q=()=>{const e=O(),o=U(),{user:r}=x(),[a,n]=p.useState(!1),l=()=>{e(C()),o(D())};return t.jsxs(t.Fragment,{children:[t.jsx(q,{children:r.name}),t.jsx(G,{children:t.jsxs(W,{onClick:l,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[t.jsx(K,{}),t.jsx(J,{type:"button",isHover:a,children:"Logout"})]})})]})},X={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},Y=X,Z=z(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function ee(e){return P("MuiAvatar",e)}T("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const te=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],oe=e=>{const{classes:o,variant:r,colorDefault:a}=e;return $({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},ee,o)},re=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],r.colorDefault&&o.colorDefault]}})(({theme:e,ownerState:o})=>c({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},o.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},o.variant==="square"&&{borderRadius:0},o.colorDefault&&c({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),ae=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),se=m(Z,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function ne({crossOrigin:e,referrerPolicy:o,src:r,srcSet:a}){const[n,l]=p.useState(!1);return p.useEffect(()=>{if(!r&&!a)return;l(!1);let d=!0;const i=new Image;return i.onload=()=>{d&&l("loaded")},i.onerror=()=>{d&&l("error")},i.crossOrigin=e,i.referrerPolicy=o,i.src=r,a&&(i.srcset=a),()=>{d=!1}},[e,o,r,a]),n}const ie=p.forwardRef(function(o,r){const a=V({props:o,name:"MuiAvatar"}),{alt:n,children:l,className:d,component:i="div",imgProps:j,sizes:R,src:g,srcSet:h,variant:I="circular"}=a,S=F(a,te);let u=null;const M=ne(c({},j,{src:g,srcSet:h})),w=g||h,y=w&&M!=="error",f=c({},a,{colorDefault:!y,component:i,variant:I}),v=oe(f);return y?u=t.jsx(ae,c({alt:n,src:g,srcSet:h,sizes:R,ownerState:f,className:v.img},j)):l!=null?u=l:w&&n?u=n[0]:u=t.jsx(se,{ownerState:f,className:v.fallback}),t.jsx(re,c({as:i,ownerState:f,className:H(v.root,d),ref:r},S,{children:u}))}),le=ie,pe=()=>{var r;const{user:e}=x(),{isLogin:o}=x();return t.jsxs(t.Fragment,{children:[t.jsxs(E,{children:[o?t.jsx(le,{sx:{bgcolor:Y[800]},children:(r=e.name)==null?void 0:r.slice(0,1).toUpperCase()}):t.jsx(_,{to:"/",children:"HOME"}),t.jsx("ul",{children:o?t.jsx(A,{children:t.jsx(Q,{})}):t.jsxs(A,{children:[t.jsx(k,{to:"register",children:"Register"}),t.jsx(k,{to:"login",children:"Log in"})]})})]}),t.jsx(p.Suspense,{fallback:null,children:t.jsx(L,{})})]})};export{pe as default};

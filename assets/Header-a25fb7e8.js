import{N as h,u as v,a as j,b as l,r as i,j as t,l as w,d as k,O as y}from"./index-30c81205.js";import{s as e}from"./styled-components.browser.esm-bd3a865c.js";import{G as T}from"./iconBase-1d625505.js";const H=e.div`
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
`,O=e(h)`
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
`,p=e.div`
  display: flex;
  gap: 18px;
`,x=e.div`
  display: flex;
  align-items: center;
`,u=e.li`
  display: flex;
  align-items: center;
  gap: 26px;
`,V=e.h2`
  font-family: "Varela Round";
  color: var(--white);
`,S=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: #4527a0;
  border-radius: 100px;
  @media (max-width: 400px) {
    display: none;
  }
`,g=e(h)`
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
`;e(h)``;function I(o){return T({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M116.832 543.664H671.28c17.696 0 32-14.336 32-32s-14.304-32-32-32H118.832l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194 189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248zM959.664 0H415.663c-35.36 0-64 28.656-64 64v288h64.416V103.024c0-21.376 17.344-38.72 38.72-38.72h464.72c21.391 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.328 38.72-38.72 38.72H454.816c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.416.08V960c0 35.344 28.64 64 64 64h543.984c35.36 0 64.016-28.656 64.016-64V64c-.015-35.344-28.671-64-64.015-64z"}}]})(o)}const E=e.div`
  width: 100px;
`,A=e.h2`
  font-family: "Varela Round";
`,L=e.a`
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
`,U=e.button`
  font-family: "Varela Round";
  position: absolute;
  right: ${({isHover:o})=>o?"70%":"0%"};
  width: 0%;
  opacity: ${({isHover:o})=>o?1:0};
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition-duration: 0.3s;
`,$=e(I)`
  width: 16px;
  height: 16px;
  color: white;
  margin-left: 7px;
`,C=()=>{const o=v(),r=j(),{user:s}=l(),[a,n]=i.useState(!1),b=()=>{o(w()),r(k())};return t.jsxs(t.Fragment,{children:[t.jsx(A,{children:s.name}),t.jsx(E,{children:t.jsxs(L,{onClick:b,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[t.jsx($,{}),t.jsx(U,{type:"button",isHover:a,children:"Logout"})]})})]})},M=e.div`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
`,R=e.input`
  opacity: 0;
  width: 0;
  height: 0;
`,d=e.div`
  --background: #28096b;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;
`,f=e.div`
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #fff000;
  background: var(--background);
  transition: 0.5s;
`,B=e(R)`
  &:checked + ${d} {
    background-color: #522ba7;
  }

  &:checked + ${d} ${f} {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }
`,D=document.getElementsByTagName("html"),c=D[0],m=()=>{const[o,r]=i.useState(!1),[s,a]=i.useState("light");localStorage.setItem("theme",s);const n=()=>{c&&(o?(r(!1),c.setAttribute("data-theme","light")):(r(!0),a("dark"),c.setAttribute("data-theme","dark")))};return t.jsxs(M,{onClick:n,children:[t.jsx(B,{type:"checkbox",checked:!o,onChange:n}),t.jsx(d,{children:t.jsx(f,{})})]})},_=()=>{var s;const{user:o}=l(),{isLogin:r}=l();return t.jsxs(t.Fragment,{children:[t.jsxs(H,{children:[r?t.jsxs(p,{children:[t.jsx(x,{children:t.jsx(m,{})}),t.jsx(S,{children:t.jsx(V,{children:(s=o.name)==null?void 0:s.slice(0,1).toUpperCase()})})]}):t.jsxs(p,{children:[t.jsx(x,{children:t.jsx(m,{})}),t.jsx(O,{to:"/",children:"HOME"})]}),t.jsx("ul",{children:r?t.jsx(u,{children:t.jsx(C,{})}):t.jsxs(u,{children:[t.jsx(g,{to:"register",children:"Register"}),t.jsx(g,{to:"login",children:"Log in"})]})})]}),t.jsx(i.Suspense,{fallback:null,children:t.jsx(y,{})})]})};export{_ as default};

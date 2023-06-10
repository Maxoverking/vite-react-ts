import{N as i,u as p,a as x,b as n,r as d,j as o,l as g,d as f,O as v}from"./index-cc0e647e.js";import{s as t}from"./styled-components.browser.esm-ebe17c1e.js";import{G as m}from"./iconBase-392aa3e6.js";const b=t.div`
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
`,j=t(i)`
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
`,c=t.li`
  display: flex;
  align-items: center;
  gap: 26px;
`,w=t.h2`
  font-family: "Varela Round";
  color: var(--white);
`,y=t.div`
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
`,l=t(i)`
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
`;t(i)``;function O(r){return m({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M116.832 543.664H671.28c17.696 0 32-14.336 32-32s-14.304-32-32-32H118.832l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194 189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248zM959.664 0H415.663c-35.36 0-64 28.656-64 64v288h64.416V103.024c0-21.376 17.344-38.72 38.72-38.72h464.72c21.391 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.328 38.72-38.72 38.72H454.816c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.416.08V960c0 35.344 28.64 64 64 64h543.984c35.36 0 64.016-28.656 64.016-64V64c-.015-35.344-28.671-64-64.015-64z"}}]})(r)}const H=t.div`
  width: 100px;
`,V=t.h2`
  font-family: "Varela Round";
`,k=t.a`
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
`,L=t.button`
  font-family: "Varela Round";
  position: absolute;
  right: ${({isHover:r})=>r?"70%":"0%"};
  width: 0%;
  opacity: ${({isHover:r})=>r?1:0};
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition-duration: 0.3s;
`,T=t(O)`
  width: 16px;
  height: 16px;
  color: white;
  margin-left: 7px;
`,U=()=>{const r=p(),e=x(),{user:s}=n(),[h,a]=d.useState(!1),u=()=>{r(g()),e(f())};return o.jsxs(o.Fragment,{children:[o.jsx(V,{children:s.name}),o.jsx(H,{children:o.jsxs(k,{onClick:u,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[o.jsx(T,{}),o.jsx(L,{type:"button",isHover:h,children:"Logout"})]})})]})},M=()=>{var s;const{user:r}=n(),{isLogin:e}=n();return o.jsxs(o.Fragment,{children:[o.jsxs(b,{children:[e?o.jsx(y,{children:o.jsx(w,{children:(s=r.name)==null?void 0:s.slice(0,1).toUpperCase()})}):o.jsx(j,{to:"/",children:"HOME"}),o.jsx("ul",{children:e?o.jsx(c,{children:o.jsx(U,{})}):o.jsxs(c,{children:[o.jsx(l,{to:"register",children:"Register"}),o.jsx(l,{to:"login",children:"Log in"})]})})]}),o.jsx(d.Suspense,{fallback:null,children:o.jsx(v,{})})]})};export{M as default};

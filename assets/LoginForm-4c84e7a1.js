import{a as w,r as n,j as a,f}from"./index-2fa659a4.js";import{l as b,D as j,F as v,a as E,b as y,c as F,B as S}from"./user-8ce5137e.js";import{T as p,a as T,V as C}from"./validationYup-d07c243d.js";import{s as h}from"./styled-components.browser.esm-795fca54.js";import"./iconBase-03bafdf3.js";const D=h.h2`
  font-family: "Varela Round";
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: var(--form-title);
`,L=h.button`
  right: 14%;
  bottom: 48%;
  width: 28px;
  height: 28px;
  background: transparent;
  @media (min-width: 480px) {
    position: absolute;
  }
`,B=()=>{const x=w(),[s,i]=n.useState(b),[e,l]=n.useState({}),[m,g]=n.useState(!0),d=t=>{const{name:o,value:r}=t.target;i({...s,[o]:r})},u=async t=>{t.preventDefault();try{await T.validate(s,{abortEarly:!1}),x(f(s)),i({email:"",password:""}),l({})}catch(o){if(console.log("objectERROR"),o instanceof C){const r={};o.inner.forEach(c=>{r[c.path]=c.message}),l(r)}}};return a.jsx(a.Fragment,{children:a.jsxs(j,{children:[a.jsx(D,{children:"Log in"}),a.jsxs(v,{onSubmit:u,children:[a.jsx(p,{label:"Email",variant:"standard",id:"email",name:"email",margin:"dense",autoComplete:"email",value:s.email,onChange:d,error:!!e.email,helperText:e.email}),a.jsx(p,{label:"Password",variant:"standard",id:"password",type:m?"password":"text",name:"password",margin:"dense",autoComplete:"password",value:s.password,onChange:d,error:!!e.password,helperText:e.password}),a.jsx(L,{type:"button",onClick:()=>g(t=>!t),children:m?a.jsx(E,{size:20}):a.jsx(y,{size:20})}),a.jsx(F,{children:a.jsx(S,{type:"submit",children:"Submit"})})]})]})})};export{B as default};

import{a as w,r as n,j as a,g as b}from"./index-f81cb8fd.js";import{l as f,D as j,F as v,a as E,b as y,c as F,B as S}from"./user-007b5b6b.js";import{T as c,a as T,V as C}from"./validationYup-abbc550c.js";import{s as h}from"./styled-components.browser.esm-c7beb4c7.js";import"./createSvgIcon-f26cbbb5.js";const D=h.h2`
  font-family: "Varela Round";
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
`,L=h.button`
  right: 14%;
  bottom: 48%;
  width: 28px;
  height: 28px;
  background: transparent;
  @media (min-width: 480px) {
    position: absolute;
  }
`,B=()=>{const g=w(),[s,i]=n.useState(f),[e,l]=n.useState({}),[d,x]=n.useState(!0),m=t=>{const{name:o,value:r}=t.target;i({...s,[o]:r})},u=async t=>{t.preventDefault();try{await T.validate(s,{abortEarly:!1}),g(b(s)),i({email:"",password:""}),l({})}catch(o){if(console.log("objectERROR"),o instanceof C){const r={};o.inner.forEach(p=>{r[p.path]=p.message}),l(r)}}};return a.jsx(a.Fragment,{children:a.jsxs(j,{children:[a.jsx(D,{children:"Log in"}),a.jsxs(v,{onSubmit:u,children:[a.jsx(c,{label:"Email",variant:"standard",id:"email",name:"email",margin:"dense",autoComplete:"email",value:s.email,onChange:m,error:!!e.email,helperText:e.email}),a.jsx(c,{label:"Password",variant:"standard",id:"password",type:d?"password":"text",name:"password",margin:"dense",autoComplete:"password",value:s.password,onChange:m,error:!!e.password,helperText:e.password}),a.jsx(L,{type:"button",onClick:()=>x(t=>!t),children:d?a.jsx(E,{size:20}):a.jsx(y,{size:20})}),a.jsx(F,{children:a.jsx(S,{type:"submit",children:"Submit"})})]})]})})};export{B as default};

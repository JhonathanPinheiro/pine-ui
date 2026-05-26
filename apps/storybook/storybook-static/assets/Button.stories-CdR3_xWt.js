import{j as t}from"./jsx-runtime-Z5uAzocK.js";import{r as er}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";function X(e){var n,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=X(e[n]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function Y(){for(var e,n,r=0,a="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=X(e))&&(a&&(a+=" "),a+=n);return a}const k=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,T=Y,ar=(e,n)=>r=>{var a;if((n==null?void 0:n.variants)==null)return T(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:i,defaultVariants:d}=n,j=Object.keys(i).map(s=>{const l=r==null?void 0:r[s],u=d==null?void 0:d[s];if(l===null)return null;const c=k(l)||k(u);return i[s][c]}),m=r&&Object.entries(r).reduce((s,l)=>{let[u,c]=l;return c===void 0||(s[u]=c),s},{}),w=n==null||(a=n.compoundVariants)===null||a===void 0?void 0:a.reduce((s,l)=>{let{class:u,className:c,...Z}=l;return Object.entries(Z).every(rr=>{let[S,B]=rr;return Array.isArray(B)?B.includes({...d,...m}[S]):{...d,...m}[S]===B})?[...s,u,c]:s},[]);return T(e,j,w,r==null?void 0:r.class,r==null?void 0:r.className)};function nr(...e){return Y(e)}const tr=()=>t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:t.jsx("circle",{cx:"7",cy:"7",r:"5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"24",strokeDashoffset:"8",children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 7 7",to:"360 7 7",dur:"0.7s",repeatCount:"indefinite"})})}),sr=ar(["inline-flex items-center justify-center gap-2","font-medium rounded-[var(--radius-md)]","border transition-all duration-150","focus-visible:outline-none focus-visible:ring-2","focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2","disabled:pointer-events-none disabled:opacity-40","select-none whitespace-nowrap cursor-pointer"],{variants:{variant:{primary:["bg-[var(--color-brand)] text-[var(--color-text-on-brand)]","border-[var(--color-brand)]","hover:bg-[var(--color-brand-hover)]","hover:shadow-[var(--shadow-pine)]","shadow-[var(--shadow-sm)]"],secondary:["bg-[var(--color-surface)] text-[var(--color-text)]","border-[var(--color-border)]","hover:bg-[var(--color-surface-hover)]","hover:border-[var(--color-border-strong)]","shadow-[var(--shadow-sm)]"],ghost:["bg-transparent text-[var(--color-text-secondary)]","border-transparent","hover:bg-[var(--color-surface-hover)]","hover:text-[var(--color-text)]"],danger:["bg-[var(--color-danger)] text-white","border-[var(--color-danger)]","hover:bg-[var(--color-danger-hover)]","shadow-[var(--shadow-sm)]"],link:["bg-transparent text-[var(--color-brand)]","border-transparent","hover:underline underline-offset-4","px-0 h-auto"]},size:{small:"h-7  px-2.5 text-xs",medium:"h-8  px-3   text-sm",large:"h-9  px-4   text-sm"},fullWidth:{true:"w-full",false:"w-auto"}},defaultVariants:{variant:"primary",size:"medium",fullWidth:!1}}),o=er.forwardRef(({variant:e,size:n,fullWidth:r,loading:a,leftIcon:i,rightIcon:d,disabled:j,children:m,className:w,...s},l)=>t.jsxs("button",{ref:l,disabled:j||a,"aria-busy":a,className:nr(sr({variant:e,size:n,fullWidth:r}),w),...s,children:[a&&t.jsx(tr,{}),!a&&i,m,!a&&d]}));o.displayName="Button";o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost' | 'danger' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'link'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const dr={title:"Components/Button",component:o,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","link"]},size:{control:"select",options:["small","medium","large"]},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},v={args:{variant:"primary",children:"Salvar alterações"}},p={args:{variant:"secondary",children:"Cancelar"}},g={args:{variant:"ghost",children:"Ver detalhes"}},h={args:{variant:"danger",children:"Excluir conta"}},y={args:{variant:"primary",loading:!0,children:"Salvando..."}},f={args:{variant:"primary",disabled:!0,children:"Indisponível"}},x={name:"↳ Todas as variantes",render:()=>t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center"},children:[t.jsx(o,{variant:"primary",children:"Primary"}),t.jsx(o,{variant:"secondary",children:"Secondary"}),t.jsx(o,{variant:"ghost",children:"Ghost"}),t.jsx(o,{variant:"danger",children:"Danger"}),t.jsx(o,{variant:"link",children:"Link"})]})},b={name:"↳ Todos os tamanhos",render:()=>t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center"},children:[t.jsx(o,{size:"small",children:"Small"}),t.jsx(o,{size:"medium",children:"Medium"}),t.jsx(o,{size:"large",children:"Large"})]})};var N,V,z;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Salvar alterações'
  }
}`,...(z=(V=v.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var C,W,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Cancelar'
  }
}`,...(A=(W=p.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var I,D,L;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ver detalhes'
  }
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var q,P,_;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Excluir conta'
  }
}`,...(_=(P=h.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var E,O,R;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    loading: true,
    children: 'Salvando...'
  }
}`,...(R=(O=y.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var G,M,H;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Indisponível'
  }
}`,...(H=(M=f.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var K,U,$;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: '↳ Todas as variantes',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="danger">Danger</Button>\r
      <Button variant="link">Link</Button>\r
    </div>
}`,...($=(U=x.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var F,J,Q;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '↳ Todos os tamanhos',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button size="small">Small</Button>\r
      <Button size="medium">Medium</Button>\r
      <Button size="large">Large</Button>\r
    </div>
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const cr=["Primary","Secondary","Ghost","Danger","Loading","Disabled","AllVariants","AllSizes"];export{b as AllSizes,x as AllVariants,h as Danger,f as Disabled,g as Ghost,y as Loading,v as Primary,p as Secondary,cr as __namedExportsOrder,dr as default};

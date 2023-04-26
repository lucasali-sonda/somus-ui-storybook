import{d as u,a as i,o as d,b as p,e as f,f as g,t as x,n as B,u as C}from"./vue.esm-bundler-c6b84fe6.js";const S=u({__name:"CSButton",props:{text:null,size:{default:"medium"}},emits:["click"],setup(e,{emit:o}){const t=e,a=i(()=>({small:"CSButton--small",medium:"CSButton--medium",large:"CSButton--large","x-large":"CSButton--x-large"})[t.size]);return(r,n)=>(d(),p("button",{class:B(["CSButton",[C(a)]]),onClick:n[0]||(n[0]=y=>o("click"))},[f(r.$slots,"default",{},()=>[g(x(t.text),1)],!0)],2))}}),_=(e,o)=>{const t=e.__vccOpts||e;for(const[a,r]of o)t[a]=r;return t},k=_(S,[["__scopeId","data-v-3a8cf7f7"]]),b={component:k,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large","x-large"]}}},s={args:{text:"Button"}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Button'
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const v=["Primary"];export{s as Primary,v as __namedExportsOrder,b as default};
//# sourceMappingURL=CSButton.stories-8215f48d.js.map

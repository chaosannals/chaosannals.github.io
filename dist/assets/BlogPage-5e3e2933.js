import{M as i,m as g,H as c}from"./index-e78ec221.js";import{d as l,r as _,k as p,l as u,m as d,b as h,e as f,g as m}from"./index-2de462e8.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const v={class:"blog-page"},x=["innerHTML"],B=l({__name:"BlogPage",setup(k){const n=_({content:""}),o=p(),r=new i(g({langPrefix:"hljs language-",highlight(e,t){const a=c.getLanguage(t)?t:"plaintext";return c.highlight(e,{language:a}).value}})),s=async e=>{const a=await(await fetch(e)).text();n.content=await r.parse(a)};return u(async()=>{o.query.path&&await s(o.query.path)}),d(async(e,t)=>{e.query.path&&await s(e.query.path)}),(e,t)=>(m(),h("div",v,[f("div",{class:"blog-content",innerHTML:n.content},null,8,x)]))}});const q=y(B,[["__scopeId","data-v-b4c4f821"]]);export{q as default};
import{C as m,D as F,x as S,d as N,r as V,c as x,a as h,b as p,e as u,f as s,h as c,w as k,E as l,G as C,t as _,p as D,j as O,F as z,g as P,_ as E}from"./index-46fc7095.js";import{f as T}from"./index-c4405eea.js";const g=t=>{if(m.isString(t)&&t.startsWith("#set")){const e=JSON.parse(t.substring(4));return console.log("de set",e),new Set(e)}else if(m.isPlainObject(t))for(const e in t)t[e]=g(t[e]);return console.log("de node",t),t},H=t=>{const e=JSON.parse(t);return g(e)},y=t=>{if(m.isSet(t))return"#set"+JSON.stringify(Array.from(t));if(m.isPlainObject(t)){const e={};for(const a in t)e[a]=y(t[a]);return e}return t},I=t=>{console.log("se tree 1",t);const e=y(t);return JSON.stringify(e)},J=F("timestamp",()=>{const t=S("yyyy-MM-dd HH:mm:ss.SSS"),e=S(new Set(["yyyy-MM-dd HH:mm:ss.SSS"]));return{timestampFormat:t,timestampFormats:e}},{persist:{serializer:{deserialize:H,serialize:I}}}),i=t=>(D("data-v-b98c861d"),t=t(),O(),t),M={class:"toolkit-timestamp-page"},U=i(()=>s("label",null,"时间戳：",-1)),$=i(()=>s("label",null,"格式：",-1)),j=["onClick"],B=i(()=>s("label",null,"结果：",-1)),K=i(()=>s("label",null,"日期：",-1)),R=i(()=>s("label",null,"结果：",-1)),A=N({__name:"TimestampPage",setup(t){const e=J(),a=V({timestampText:new Date().getTime().toString(),dateText:new Date().toUTCString()}),v=x(()=>{if(/^\d{10}$/.test(a.timestampText)){const n=new Date;return n.setTime(+`${a.timestampText}000`),T(n,e.timestampFormat)}if(/^\d{13}$/.test(a.timestampText)){const n=new Date;return n.setTime(Number(a.timestampText)),T(n,e.timestampFormat)}return"不是有效的时间戳"}),b=x(()=>Date.parse(a.dateText).toString()),w=()=>{e.timestampFormats.add(e.timestampFormat)};return(n,r)=>{const d=h("form-text-input");return p(),u("div",M,[s("div",null,[U,c(d,{modelValue:a.timestampText,"onUpdate:modelValue":r[0]||(r[0]=o=>a.timestampText=o)},null,8,["modelValue"])]),s("div",null,[$,c(d,{modelValue:l(e).timestampFormat,"onUpdate:modelValue":r[1]||(r[1]=o=>l(e).timestampFormat=o),onKeydown:C(w,["enter"])},{default:k(o=>[s("div",null,[(p(!0),u(z,null,P(l(e).timestampFormats,f=>(p(),u("div",{onClick:G=>{l(e).timestampFormat=f,o.done()}},[s("span",null,_(f),1)],8,j))),256))])]),_:1},8,["modelValue","onKeydown"])]),s("div",null,[B,s("span",null,_(v.value),1)]),s("div",null,[K,c(d,{modelValue:a.dateText,"onUpdate:modelValue":r[2]||(r[2]=o=>a.dateText=o)},null,8,["modelValue"])]),s("div",null,[R,s("span",null,_(b.value),1)])])}}});const q=E(A,[["__scopeId","data-v-b98c861d"]]);export{q as default};
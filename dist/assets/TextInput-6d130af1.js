var f=Object.defineProperty;var m=(s,e,o)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o;var p=(s,e,o)=>(m(s,typeof e!="symbol"?e+"":e,o),o);import{d as v,r as _,c as b,a as C,b as V,e as w,q as x,J as T,h,K as y,i as B,w as $,A as g,H as I,_ as k}from"./index-ccc8b050.js";class D{constructor(e=()=>{}){p(this,"isCancel",!1);p(this,"onCancel");this.onCancel=e.bind(this)}}async function F(s,e){return new Promise(o=>{setTimeout(()=>{e.isCancel?e.onCancel():o(null)},s)})}const N={class:"form-text-input"},P=v({__name:"TextInput",props:{modelValue:{}},emits:["update:modelValue"],setup(s,{emit:e}){const o=s,i=new D(function(){console.log(this),this.isCancel=!1}),n=_({popupVisible:!1}),u=b({get(){return o.modelValue},set(a){e("update:modelValue",a)}}),c=()=>{n.popupVisible=!0},r=async()=>{await F(400,i),n.popupVisible=!1};return(a,t)=>{const d=C("popup");return V(),w("div",N,[x(h("input",y({"onUpdate:modelValue":t[0]||(t[0]=l=>u.value=l)},a.$attrs,{onFocus:c,onBlur:r}),null,16),[[T,u.value]]),B(d,{class:"form-text-input-popup",visible:n.popupVisible,anchor:a.$el,onFocus:t[1]||(t[1]=l=>g(i).isCancel=!0),onBlur:t[2]||(t[2]=l=>n.popupVisible=!1)},{default:$(()=>[I(a.$slots,"default",{done:()=>n.popupVisible=!1},void 0,!0)]),_:3},8,["visible","anchor"])])}}});const E=k(P,[["__scopeId","data-v-b22b44f2"]]);export{E as default};

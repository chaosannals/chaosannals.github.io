import{ad as B,d as v,x,b7 as J,aw as O,a6 as Q,i as e,ak as h,ag as V,b2 as A,b3 as C,aE as k,m as E,an as W,a5 as R,a7 as X,V as z,b8 as D,au as Z,av as ee,aS as te,b9 as ne,b as S,c as N,e as _,w as s,F as T,h as ae,b5 as oe,O as se,a0 as g,t as P,_ as re}from"./index-61c8fe2f.js";import{B as K}from"./index-af1fbb40.js";import{L as ie,T as ce,C as le}from"./index-cd7c4712.js";const[U,j]=B("action-bar"),I=Symbol(U),de={placeholder:Boolean,safeAreaInsetBottom:Q};var ue=v({name:U,props:de,setup(i,{slots:n}){const o=x(),r=J(o,j),{linkChildren:t}=O(I);t();const c=()=>{var a;return e("div",{ref:o,class:[j(),{"van-safe-area-bottom":i.safeAreaInsetBottom}]},[(a=n.default)==null?void 0:a.call(n)])};return()=>i.placeholder?r(c):c()}});const pe=h(ue),[me,_e]=B("action-bar-button"),fe=V({},A,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var be=v({name:me,props:fe,setup(i,{slots:n}){const o=C(),{parent:r,index:t}=k(I),c=E(()=>{if(r){const l=r.children[t.value-1];return!(l&&"isButton"in l)}}),a=E(()=>{if(r){const l=r.children[t.value+1];return!(l&&"isButton"in l)}});return W({isButton:!0}),()=>{const{type:l,icon:d,text:u,color:p,loading:f,disabled:b}=i;return e(K,{class:_e([l,{last:a.value,first:c.value}]),size:"large",type:l,icon:d,color:p,loading:f,disabled:b,onClick:o},{default:()=>[n.default?n.default():u]})}}});const ge=h(be),[ve,y]=B("action-bar-icon"),xe=V({},A,{dot:Boolean,text:String,icon:String,color:String,badge:R,iconClass:X,badgeProps:Object,iconPrefix:String});var Be=v({name:ve,props:xe,setup(i,{slots:n}){const o=C();k(I);const r=()=>{const{dot:t,badge:c,icon:a,color:l,iconClass:d,badgeProps:u,iconPrefix:p}=i;return n.icon?e(D,z({dot:t,class:y("icon"),content:c},u),{default:n.icon}):e(Z,{tag:"div",dot:t,name:a,badge:c,color:l,class:[y("icon"),d],badgeProps:u,classPrefix:p},null)};return()=>e("div",{role:"button",class:y(),tabindex:0,onClick:o},[r(),n.default?n.default():i.text])}});const he=h(Be),[Y,Pe]=B("sidebar"),M=Symbol(Y),Se={modelValue:ee(0)};var ye=v({name:Y,props:Se,emits:["change","update:modelValue"],setup(i,{emit:n,slots:o}){const{linkChildren:r}=O(M),t=()=>+i.modelValue;return r({getActive:t,setActive:a=>{a!==t()&&(n("update:modelValue",a),n("change",a))}}),()=>{var a;return e("div",{role:"tablist",class:Pe()},[(a=o.default)==null?void 0:a.call(o)])}}});const Ve=h(ye),[Ae,F]=B("sidebar-item"),Ce=V({},A,{dot:Boolean,title:String,badge:R,disabled:Boolean,badgeProps:Object});var ke=v({name:Ae,props:Ce,emits:["click"],setup(i,{emit:n,slots:o}){const r=C(),{parent:t,index:c}=k(M);if(!t)return;const a=()=>{i.disabled||(n("click",c.value),t.setActive(c.value),r())};return()=>{const{dot:l,badge:d,title:u,disabled:p}=i,f=c.value===t.getActive();return e("div",{role:"tab",class:F({select:f,disabled:p}),tabindex:p?void 0:0,"aria-selected":f,onClick:a},[e(D,z({dot:l,class:F("text"),content:d},i.badgeProps),{default:()=>[o.title?o.title():u]})])}}});const Ie=h(ke);const $e={class:"shop-list"},we={class:"tag-column"},Le={class:"tag-row"},Ee=v({__name:"IndexPage",setup(i){const n=x(0),o=x(!1),r=x(!1),t=x([]),c=te(),a=async()=>{await oe(1e3);for(let d=0;d<10;d++)t.value.push(t.value.length+1);o.value=!1,t.value.length>=40&&(r.value=!0)},l=d=>{console.log("onSidebarChange",d)};return ne(()=>{c.isMdShowTabbar=!0}),(d,u)=>{const p=Ie,f=Ve,b=ce,$=K,q=le,G=ie,w=he,L=ge,H=pe;return S(),N(T,null,[_("div",$e,[e(f,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=m=>n.value=m),onChange:l},{default:s(()=>[e(p,{title:"标签名称",dot:""}),e(p,{title:"标签名称"}),e(p,{title:"标签名称"})]),_:1},8,["modelValue"]),e(G,{loading:o.value,"onUpdate:loading":u[1]||(u[1]=m=>o.value=m),finished:r.value,"finished-text":"没有更多了",onLoad:a},{default:s(()=>[(S(!0),N(T,null,ae(t.value,m=>(S(),se(q,{key:m,thumb:"https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"},{tag:s(()=>[_("div",we,[e(b,{mark:"",type:"primary"},{default:s(()=>[g("标签")]),_:1}),e(b,{mark:"",type:"primary"},{default:s(()=>[g("标签2")]),_:1})])]),tags:s(()=>[_("div",Le,[e(b,{plain:"",type:"primary"},{default:s(()=>[g("标签1")]),_:1}),e(b,{plain:""},{default:s(()=>[g("标签2")]),_:1})])]),title:s(()=>[_("span",null,"标题"+P(m),1)]),desc:s(()=>[_("p",null,[_("span",null,"商品描述 "+P(m),1)])]),price:s(()=>[_("span",null,"￥"+P(m.toFixed(2)),1)]),num:s(()=>[_("span",null,"x"+P(m),1)]),footer:s(()=>[e($,{size:"mini"},{default:s(()=>[g("按钮")]),_:1}),e($,{size:"mini"},{default:s(()=>[g("按钮")]),_:1})]),_:2},1024))),128))]),_:1},8,["loading","finished"])]),e(H,null,{default:s(()=>[e(w,{icon:"chat-o",text:"客服",dot:""}),e(w,{icon:"cart-o",text:"购物车",badge:"5",to:"/md/shop/car",replace:!1}),e(L,{type:"warning",text:"加入购物车"}),e(L,{type:"danger",text:"立即购买"})]),_:1})],64)}}});const Fe=re(Ee,[["__scopeId","data-v-3f44b514"]]);export{Fe as default};
import{ad as m,i as t,d as v,m as $,ag as B,bc as p,a5 as x,al as r,aY as w,ak as z,b2 as L,b3 as N,bd as U,au as q,ac as O}from"./index-61c8fe2f.js";const[A,s]=m("loading"),E=Array(12).fill(null).map((e,a)=>t("i",{class:s("line",String(a+1))},null)),V=t("svg",{class:s("circular"),viewBox:"25 25 50 50"},[t("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),Y={size:x,type:r("circular"),color:String,vertical:Boolean,textSize:x,textColor:String};var j=v({name:A,props:Y,setup(e,{slots:a}){const o=$(()=>B({color:e.color},p(e.size))),u=()=>{const i=e.type==="spinner"?E:V;return t("span",{class:s("spinner",e.type),style:o.value},[a.icon?a.icon():i])},g=()=>{var i;if(a.default)return t("span",{class:s("text"),style:{fontSize:w(e.textSize),color:(i=e.textColor)!=null?i:e.color}},[a.default()])};return()=>{const{type:i,vertical:f}=e;return t("div",{class:s([i,{vertical:f}]),"aria-live":"polite","aria-busy":!0},[u(),g()])}}});const F=z(j),[G,c]=m("button"),H=B({},L,{tag:r("button"),text:String,icon:String,type:r("default"),size:r("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:r("button"),loadingSize:x,loadingText:String,loadingType:String,iconPosition:r("left")});var J=v({name:G,props:H,emits:["click"],setup(e,{emit:a,slots:o}){const u=N(),g=()=>o.loading?o.loading():t(F,{size:e.loadingSize,type:e.loadingType,class:c("loading")},null),i=()=>{if(e.loading)return g();if(o.icon)return t("div",{class:c("icon")},[o.icon()]);if(e.icon)return t(q,{name:e.icon,class:c("icon"),classPrefix:e.iconPrefix},null)},f=()=>{let n;if(e.loading?n=e.loadingText:n=o.default?o.default():e.text,n)return t("span",{class:c("text")},[n])},P=()=>{const{color:n,plain:d}=e;if(n){const l={color:d?n:"white"};return d||(l.background=n),n.includes("gradient")?l.border=0:l.borderColor=n,l}},k=n=>{e.loading?O(n):e.disabled||(a("click",n),u())};return()=>{const{tag:n,type:d,size:l,block:I,round:T,plain:C,square:h,loading:R,disabled:y,hairline:S,nativeType:_,iconPosition:b}=e,D=[c([d,l,{plain:C,block:I,round:T,square:h,loading:R,disabled:y,hairline:S}]),{[U]:S}];return t(n,{type:_,class:D,style:P(),disabled:y,onClick:k},{default:()=>[t("div",{class:c("content")},[b==="left"&&i(),f(),b==="right"&&i()])]})}}});const M=z(J);export{M as B,F as L};
import{d as _,x as v,r as w,a1 as c,g as u,b as p,c as y,e as g,i as l,O as x,U as I,w as V,a0 as b,_ as T}from"./index-240e0f97.js";const U={class:"toolkit-image-craft-page"},C={class:"setting-bar"},k={class:"preview-box"},H=_({__name:"ImageCraftPage",setup(W){const d=[{value:1,text:"png",mime:"image/png",suffix:"png"},{value:2,text:"jpg",mime:"image/jpeg",suffix:"jpg",quality:.9},{value:3,text:"webp",mime:"image/webp",suffix:"webp",quality:.9}],r=v(),e=w({targetType:d[0],targetWidth:0,targetHeight:0}),m=()=>{r.value.width=e.targetWidth,r.value.height=e.targetHeight;const o=r.value.getContext("2d"),t=e.sourceImage;o==null||o.drawImage(t,0,0,t.width,t.height,0,0,e.targetWidth,e.targetHeight)};c(()=>e.targetWidth,o=>{if(e.sourceImage){const t=e.sourceImage.width/e.sourceImage.height;e.targetHeight=o/t,m()}}),c(()=>e.targetHeight,o=>{if(e.sourceImage){const t=e.sourceImage.width/e.sourceImage.height;e.targetWidth=o*t,m()}});const h=o=>{const t=o.target.files[0],i=URL.createObjectURL(t),a=new Image;a.onload=()=>{URL.revokeObjectURL(i),e.sourceImage=a,e.targetWidth=a.width,e.targetHeight=a.height,r.value.width=a.width,r.value.height=a.height;const s=r.value.getContext("2d");s==null||s.drawImage(a,0,0,a.width,a.height)},a.src=i},f=()=>{r.value.toBlob(o=>{const t=URL.createObjectURL(o),i=document.createElement("a");i.href=t,i.download=`download.${e.targetType.suffix}`,i.click()},e.targetType.mime,e.targetType.quality)};return(o,t)=>{const i=u("form-text-select"),a=u("form-number-input"),s=u("form-text-button");return p(),y("div",U,[g("div",C,[g("input",{type:"file",onInput:h},null,32),l(i,{modelValue:e.targetType,"onUpdate:modelValue":t[0]||(t[0]=n=>e.targetType=n),options:d},null,8,["modelValue"]),l(a,{modelValue:e.targetWidth,"onUpdate:modelValue":t[1]||(t[1]=n=>e.targetWidth=n)},null,8,["modelValue"]),l(a,{modelValue:e.targetHeight,"onUpdate:modelValue":t[2]||(t[2]=n=>e.targetHeight=n)},null,8,["modelValue"]),e.targetType.quality!=null?(p(),x(a,{key:0,modelValue:e.targetType.quality,"onUpdate:modelValue":t[3]||(t[3]=n=>e.targetType.quality=n)},null,8,["modelValue"])):I("",!0),l(s,{onClick:f},{default:V(()=>[b("保存")]),_:1})]),g("div",k,[g("canvas",{ref_key:"$canvas",ref:r},null,512)])])}}});const q=T(H,[["__scopeId","data-v-f93f06ca"]]);export{q as default};

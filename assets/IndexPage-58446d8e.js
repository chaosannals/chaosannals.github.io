import{a5 as P,a6 as A,a7 as U,x as g,a8 as le,a9 as ze,aa as me,ab as Re,a1 as B,ac as Le,ad as se,ae as Y,d as E,af as G,i as d,ag as ye,ah as $,ai as ge,aj as J,n as pe,ak as ke,al as j,am as L,m as q,an as Ce,ao as W,ap as ce,o as Ee,X as $e,aq as De,ar as xe,F as Ie,as as Me,at as Ne,V as Z,au as Ve,av as Oe,aw as Ye,ax as je,ay as we,az as He,r as Se,aA as Xe,aB as Fe,s as Ke,aC as Ue,aD as Ge,aE as qe,aF as ne,aG as ae,aH as K,aI as ie,aJ as Ze,aK as Je,f as We,b as te,c as re,w as ue,h as Qe,C as et,aL as tt,p as ot,j as nt,e as at,O as st,aM as ct,_ as lt}from"./index-240e0f97.js";import{u as de,C as it}from"./index-d2ad584c.js";import{L as rt,B as ut}from"./index-b7c4962e.js";const dt={show:Boolean,zIndex:P,overlay:A,duration:P,teleport:[String,Object],lockScroll:A,lazyRender:A,beforeClose:Function,overlayStyle:Object,overlayClass:U,transitionAppear:Boolean,closeOnClickOverlay:A};function ft(e,o){return e>o?"horizontal":o>e?"vertical":""}function _e(){const e=g(0),o=g(0),t=g(0),a=g(0),n=g(0),c=g(0),s=g(""),l=g(!0),r=()=>s.value==="vertical",v=()=>s.value==="horizontal",u=()=>{t.value=0,a.value=0,n.value=0,c.value=0,s.value="",l.value=!0};return{move:y=>{const x=y.touches[0];t.value=(x.clientX<0?0:x.clientX)-e.value,a.value=x.clientY-o.value,n.value=Math.abs(t.value),c.value=Math.abs(a.value);const I=10;(!s.value||n.value<I&&c.value<I)&&(s.value=ft(n.value,c.value)),l.value&&(n.value>le||c.value>le)&&(l.value=!1)},start:y=>{u(),e.value=y.touches[0].clientX,o.value=y.touches[0].clientY},reset:u,startX:e,startY:o,deltaX:t,deltaY:a,offsetX:n,offsetY:c,direction:s,isVertical:r,isHorizontal:v,isTap:l}}let N=0;const fe="van-overflow-hidden";function vt(e,o){const t=_e(),a="01",n="10",c=u=>{t.move(u);const h=t.deltaY.value>0?n:a,p=Le(u.target,e.value),{scrollHeight:y,offsetHeight:x,scrollTop:I}=p;let w="11";I===0?w=x>=y?"00":"01":I+x>=y&&(w="10"),w!=="11"&&t.isVertical()&&!(parseInt(w,2)&parseInt(h,2))&&se(u,!0)},s=()=>{document.addEventListener("touchstart",t.start),document.addEventListener("touchmove",c,{passive:!1}),N||document.body.classList.add(fe),N++},l=()=>{N&&(document.removeEventListener("touchstart",t.start),document.removeEventListener("touchmove",c),N--,N||document.body.classList.remove(fe))},r=()=>o()&&s(),v=()=>o()&&l();ze(r),me(v),Re(v),B(o,u=>{u?s():l()})}function be(e){const o=g(!1);return B(e,t=>{t&&(o.value=t)},{immediate:!0}),t=>()=>o.value?t():null}const[ht,mt]=Y("overlay"),yt={show:Boolean,zIndex:P,duration:P,className:U,lockScroll:A,lazyRender:A,customStyle:Object};var gt=E({name:ht,props:yt,setup(e,{slots:o}){const t=g(),a=be(()=>e.show||!e.lazyRender),n=s=>{e.lockScroll&&se(s,!0)},c=a(()=>{var s;const l=$(ge(e.zIndex),e.customStyle);return J(e.duration)&&(l.animationDuration=`${e.duration}s`),pe(d("div",{ref:t,style:l,class:[mt(),e.className]},[(s=o.default)==null?void 0:s.call(o)]),[[ke,e.show]])});return G("touchmove",n,{target:t}),()=>d(ye,{name:"van-fade",appear:!0},{default:c})}});const pt=j(gt),kt=$({},dt,{round:Boolean,position:L("center"),closeIcon:L("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:L("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ct,ve]=Y("popup");var xt=E({name:Ct,inheritAttrs:!1,props:kt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:o,attrs:t,slots:a}){let n,c;const s=g(),l=g(),r=be(()=>e.show||!e.lazyRender),v=q(()=>{const m={zIndex:s.value};if(J(e.duration)){const S=e.position==="center"?"animationDuration":"transitionDuration";m[S]=`${e.duration}s`}return m}),u=()=>{n||(n=!0,s.value=e.zIndex!==void 0?+e.zIndex:Me(),o("open"))},h=()=>{n&&Ne(e.beforeClose,{done(){n=!1,o("close"),o("update:show",!1)}})},p=m=>{o("clickOverlay",m),e.closeOnClickOverlay&&h()},y=()=>{if(e.overlay)return d(pt,Z({show:e.show,class:e.overlayClass,zIndex:s.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},de(),{onClick:p}),{default:a["overlay-content"]})},x=m=>{o("clickCloseIcon",m),h()},I=()=>{if(e.closeable)return d(Oe,{role:"button",tabindex:0,name:e.closeIcon,class:[ve("close-icon",e.closeIconPosition),Ve],classPrefix:e.iconPrefix,onClick:x},null)};let w;const Q=()=>{w&&clearTimeout(w),w=setTimeout(()=>{o("opened")})},H=()=>o("closed"),X=m=>o("keydown",m),ee=r(()=>{var m;const{round:S,position:i,safeAreaInsetTop:f,safeAreaInsetBottom:k}=e;return pe(d("div",Z({ref:l,style:v.value,role:"dialog",tabindex:0,class:[ve({round:S,[i]:i}),{"van-safe-area-top":f,"van-safe-area-bottom":k}],onKeydown:X},t,de()),[(m=a.default)==null?void 0:m.call(a),I()]),[[ke,e.show]])}),D=()=>{const{position:m,transition:S,transitionAppear:i}=e,f=m==="center"?"van-fade":`van-popup-slide-${m}`;return d(ye,{name:S||f,appear:i,onAfterEnter:Q,onAfterLeave:H},{default:ee})};return B(()=>e.show,m=>{m&&!n&&(u(),t.tabindex===0&&Ce(()=>{var S;(S=l.value)==null||S.focus()})),!m&&n&&(n=!1,o("close"))}),W({popupRef:l}),vt(l,()=>e.show&&e.lockScroll),G("popstate",()=>{e.closeOnPopstate&&(h(),c=!1)}),ce(()=>{e.show&&u()}),Ee(()=>{c&&(o("update:show",!0),c=!1)}),me(()=>{e.show&&e.teleport&&(h(),c=!0)}),$e(De,()=>e.show),()=>e.teleport?d(xe,{to:e.teleport},{default:()=>[y(),D()]}):d(Ie,null,[y(),D()])}});const It=j(xt);let V=0;function Ot(e){e?(V||document.body.classList.add("van-toast--unclickable"),V++):V&&(V--,V||document.body.classList.remove("van-toast--unclickable"))}const[wt,R]=Y("toast"),St=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],_t={icon:String,show:Boolean,type:L("text"),overlay:Boolean,message:P,iconSize:P,duration:we(2e3),position:L("middle"),teleport:[String,Object],wordBreak:String,className:U,iconPrefix:String,transition:L("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:U,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:P};var Te=E({name:wt,props:_t,emits:["update:show"],setup(e,{emit:o,slots:t}){let a,n=!1;const c=()=>{const h=e.show&&e.forbidClick;n!==h&&(n=h,Ot(n))},s=h=>o("update:show",h),l=()=>{e.closeOnClick&&s(!1)},r=()=>clearTimeout(a),v=()=>{const{icon:h,type:p,iconSize:y,iconPrefix:x,loadingType:I}=e;if(h||p==="success"||p==="fail")return d(Oe,{name:h||p,size:y,class:R("icon"),classPrefix:x},null);if(p==="loading")return d(rt,{class:R("loading"),size:y,type:I},null)},u=()=>{const{type:h,message:p}=e;if(t.message)return d("div",{class:R("text")},[t.message()]);if(J(p)&&p!=="")return h==="html"?d("div",{key:0,class:R("text"),innerHTML:String(p)},null):d("div",{class:R("text")},[p])};return B(()=>[e.show,e.forbidClick],c),B(()=>[e.show,e.type,e.message,e.duration],()=>{r(),e.show&&e.duration>0&&(a=setTimeout(()=>{s(!1)},e.duration))}),ce(c),Ye(c),()=>d(It,Z({class:[R([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:l,onClosed:r,"onUpdate:show":s},je(e,St)),{default:()=>[v(),u()]})}});function bt(){const e=Se({show:!1}),o=n=>{e.show=n},t=n=>{$(e,n,{transitionAppear:!0}),o(!0)},a=()=>o(!1);return W({open:t,close:a,toggle:o}),{open:t,close:a,state:e,toggle:o}}function Tt(e){const o=He(e),t=document.createElement("div");return document.body.appendChild(t),{instance:o.mount(t),unmount(){o.unmount(),document.body.removeChild(t)}}}const Pt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let F=[],Bt=!1,he=$({},Pt);const At=new Map;function zt(e){return Fe(e)?e:{message:e}}function Rt(){const{instance:e,unmount:o}=Tt({setup(){const t=g(""),{open:a,state:n,close:c,toggle:s}=bt(),l=()=>{},r=()=>d(Te,Z(n,{onClosed:l,"onUpdate:show":s}),null);return B(t,v=>{n.message=v}),Ke().render=r,{open:a,close:c,message:t}}});return e}function Lt(){if(!F.length||Bt){const e=Rt();F.push(e)}return F[F.length-1]}function Et(e={}){if(!Xe)return{};const o=Lt(),t=zt(e);return o.open($({},he,At.get(t.type||he.type),t)),o}j(Te);function $t(){const e="A".charCodeAt(0);return Array(26).fill("").map((t,a)=>String.fromCharCode(e+a))}const[Pe,oe]=Y("index-bar"),Dt={sticky:A,zIndex:P,teleport:[String,Object],highlightColor:String,stickyOffsetTop:we(0),indexList:{type:Array,default:$t}},Be=Symbol(Pe);var Mt=E({name:Pe,props:Dt,emits:["select","change"],setup(e,{emit:o,slots:t}){const a=g(),n=g(),c=g(""),s=_e(),l=Ue(a),{children:r,linkChildren:v}=Ge(Be);let u;v({props:e});const h=q(()=>{if(J(e.zIndex))return{zIndex:+e.zIndex+1}}),p=q(()=>{if(e.highlightColor)return{color:e.highlightColor}}),y=(i,f)=>{for(let k=r.length-1;k>=0;k--){const O=k>0?f[k-1].height:0,C=e.sticky?O+e.stickyOffsetTop:0;if(i+C>=f[k].top)return k}return-1},x=i=>r.find(f=>String(f.index)===i),I=()=>{if(qe(a))return;const{sticky:i,indexList:f}=e,k=ne(l.value),O=ae(l),C=r.map(z=>z.getRect(l.value,O));let _=-1;if(u){const z=x(u);if(z){const b=z.getRect(l.value,O);e.sticky&&e.stickyOffsetTop?_=y(b.top-e.stickyOffsetTop,C):_=y(b.top,C)}}else _=y(k,C);c.value=f[_],i&&r.forEach((z,b)=>{const{state:T,$el:Ae}=z;if(b===_||b===_-1){const M=Ae.getBoundingClientRect();T.left=M.left,T.width=M.width}else T.left=null,T.width=null;if(b===_)T.active=!0,T.top=Math.max(e.stickyOffsetTop,C[b].top-k)+O.top;else if(b===_-1&&u===""){const M=C[_].top-k;T.active=M>0,T.top=M+O.top-C[b].height}else T.active=!1}),u=""},w=()=>{Ce(I)};G("scroll",I,{target:l,passive:!0}),ce(w),B(()=>e.indexList,w),B(c,i=>{i&&o("change",i)});const Q=()=>e.indexList.map(i=>{const f=i===c.value;return d("span",{class:oe("index",{active:f}),style:f?p.value:void 0,"data-index":i},[i])}),H=i=>{u=String(i);const f=x(u);if(f){const k=ne(l.value),O=ae(l),{offsetHeight:C}=document.documentElement;if(f.$el.scrollIntoView(),k===C-O.height){I();return}e.sticky&&e.stickyOffsetTop&&(K()===C-O.height?ie(K()):ie(K()-e.stickyOffsetTop)),o("select",f.index)}},X=i=>{const{index:f}=i.dataset;f&&H(f)},ee=i=>{X(i.target)};let D;const m=i=>{if(s.move(i),s.isVertical()){se(i);const{clientX:f,clientY:k}=i.touches[0],O=document.elementFromPoint(f,k);if(O){const{index:C}=O.dataset;C&&D!==C&&(D=C,X(O))}}},S=()=>d("div",{ref:n,class:oe("sidebar"),style:h.value,onClick:ee,onTouchstartPassive:s.start},[Q()]);return W({scrollTo:H}),G("touchmove",m,{target:n}),()=>{var i;return d("div",{ref:a,class:oe()},[e.teleport?d(xe,{to:e.teleport},{default:()=>[S()]}):S(),(i=t.default)==null?void 0:i.call(t)])}}});const[Nt,Vt]=Y("index-anchor"),Yt={index:P};var jt=E({name:Nt,props:Yt,setup(e,{slots:o}){const t=Se({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),a=g(),{parent:n}=Ze(Be);if(!n)return;const c=()=>t.active&&n.props.sticky,s=q(()=>{const{zIndex:r,highlightColor:v}=n.props;if(c())return $(ge(r),{left:t.left?`${t.left}px`:void 0,width:t.width?`${t.width}px`:void 0,transform:t.top?`translate3d(0, ${t.top}px, 0)`:void 0,color:v})});return W({state:t,getRect:(r,v)=>{const u=ae(a);return t.rect.height=u.height,r===window||r===document.body?t.rect.top=u.top+K():t.rect.top=u.top+ne(r)-v.top,t.rect}}),()=>{const r=c();return d("div",{ref:a,style:{height:r?`${t.rect.height}px`:void 0}},[d("div",{style:s.value,class:[Vt({sticky:r}),{[Je]:r}]},[o.default?o.default():e.index])])}}});const Ht=j(jt),Xt=j(Mt);const Ft=e=>(ot("data-v-ec30fcd5"),e=e(),nt(),e),Kt={class:"md-index-page"},Ut=Ft(()=>at("span",null,"Toast",-1)),Gt=E({__name:"IndexPage",setup(e){const o=()=>{Et({message:"顶部展示",position:"top"})},t=a=>{ct.push(a)};return We(()=>{}),(a,n)=>{const c=ut,s=Ht,l=it,r=Xt;return te(),re("div",Kt,[d(c,{plain:"",type:"primary",onClick:o},{default:ue(()=>[Ut]),_:1}),d(r,null,{default:ue(()=>[d(s,{index:"路由"}),(te(!0),re(Ie,null,Qe(et(tt),v=>(te(),st(l,{title:v.path,onClick:u=>t(v.path)},null,8,["title","onClick"]))),256))]),_:1})])}}});const Wt=lt(Gt,[["__scopeId","data-v-ec30fcd5"]]);export{Wt as default};

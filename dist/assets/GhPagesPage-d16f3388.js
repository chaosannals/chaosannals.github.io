import{_ as e,b as t,c as o,e as s}from"./index-61c8fe2f.js";const n={},c={class:"github-pages-page"},_=s("p",null,"利用 git subtree 可以指定目录推送分支的功能：",-1),i=s("code",null," git subtree push --prefix dist origin gh-pages ",-1),a=s("p",null,"Settings -> Pages 下配置使用 gh-pages 分支。",-1),d=s("p",null,"此种方式有个缺陷：dist 作为生成物，必须被加入版本管理。",-1),l=s("p",null,"新版 GitHub Pages 支持选中 /(root) /docs 两个路径，所以完全可以不用上面这种方式，而是在这里选主分支，然后把生成的路径设置成 /docs 就可以",-1),h=s("h4",null,"关于 Vue 编译后是单页面，GitHub Pages是静态站且无法指定 URL 重写。",-1),r=s("p",null,"路由模式使用 WebHashHistory 启用锚点（/#）的模式，这样所有的路由就会一直指向 index.html 了。",-1),u=[_,i,a,d,l,h,r];function g(p,b){return t(),o("div",c,u)}const m=e(n,[["render",g]]);export{m as default};
<template>
    <div class="github-pages-page">
        <p>利用 git subtree 可以指定目录推送分支的功能：</p>
        <code>
            git subtree push --prefix dist origin gh-pages
        </code>
        <p>Settings -> Pages 下配置使用 gh-pages 分支。</p>
        <p>此种方式有个缺陷：dist 作为生成物，必须被加入版本管理。</p>
        <p>新版 GitHub Pages 支持选中 /(root)  /docs  两个路径，所以完全可以不用上面这种方式，而是在这里选主分支，然后把生成的路径设置成 /docs 就可以</p>

        <h4>关于 Vue 编译后是单页面，GitHub Pages是静态站且无法指定 URL 重写。</h4>
        <p>路由模式使用  WebHashHistory 启用锚点（/#）的模式，这样所有的路由就会一直指向 index.html 了。</p>
    </div>
</template>

<script setup lang="ts">

</script>
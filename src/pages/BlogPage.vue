<template>
    <div class="blog-page">
        <div class="blog-content" v-html="data.content"></div>
    </div>
</template>

<script setup lang="ts">
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { onActivated, reactive } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const data = reactive({
    content: "",
});
const route = useRoute();

const marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        }
    })
);

const loadBlog = async (url: string) => {
    const response = await fetch(url);
    const text = await response.text();
    data.content = await marked.parse(text);
}

onActivated(async () => {
    if (route.query.path) {
        await loadBlog(route.query.path as string);
    }
});

onBeforeRouteUpdate(async (to, _) => {
    if (to.query.path) {
        await loadBlog(to.query.path as string);
    }
});
</script>

<style scoped lang="scss">
.blog-page {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .blog-content {
        margin: 2vw 4vw;
        padding: 2em;
        background-color: #f4f4f4;
    }
}
</style>
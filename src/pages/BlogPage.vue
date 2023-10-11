<template>
    <div class="blog-page">
        <div v-html="data.content"></div>
    </div>
</template>

<script setup lang="ts">
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { onBeforeMount, reactive } from 'vue';
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

const loadBlog = async(url: string) => {
    const response = await fetch(url);
    const text = await response.text();
    data.content = await marked.parse(text);
}

onBeforeMount(async () => {
    await loadBlog(route.query.path as string);
});

onBeforeRouteUpdate(async (to, _) => {
    await loadBlog(to.query.path as string);
});
</script>
<!-- 首页 -->
<template>
    <div class="index-page">
        <h4>页面</h4>
        <div v-for="link in links" @click="onClickLink(link)" class="page-link">
            <span>{{ link }}</span>
        </div>
        <h4>博文</h4>
        <div v-for="blog in data.blogs">
            <router-link :to="blog.url" class="blog-link">
                <span>{{ blog.title }}</span>
                <span class="modify-time">{{ blog.mtime }}</span>
            </router-link>
            <div class="blog-summary" v-html="blog.summary"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, reactive } from 'vue';
import { routes } from '../router';
import { useRouter } from 'vue-router';
import { format } from 'date-fns';
import { fetchHeadUtf8 } from '../utils/io';
import WordArray from 'crypto-js/lib-typedarrays';
import Utf8 from 'crypto-js/enc-utf8';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

const marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        }
    })
);

const $router = useRouter();

const data = reactive({
    blogs: [],
} as {
    blogs: BlogMarkdownInfo[],
});

const links = computed(() => {
    return routes.map(i => i.path);
});

const loadSummary = async (path: string): Promise<string> => {
    const bytes = await fetchHeadUtf8(path, 100);
    //@ts-ignore
    const words = WordArray.create(bytes.buffer);
    const head = Utf8.stringify(words);
    return await marked.parse(head);;
}

onBeforeMount(async () => {
    const tasks = __MARKDOWN_FILES__.map(async i => {
        i.url = `/blog?path=${i.path}`;
        i.mtime = format(i.modifyAt, 'yyyy-MM-dd HH:ii:ss');
        i.summary = await loadSummary(i.path);
        return i;
    });
    const blogs = await Promise.all(tasks);
    data.blogs = blogs.sort((a, b) => a.modifyAt - b.modifyAt);
});

const onClickLink = (link: string) => $router.push(link);

</script>

<style scoped lang="scss">
.index-page {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;

    .page-link {
        font-size: 1vw;
        margin: 0.4vw;
        padding: 0.4vw;
        border: 1px solid #4f4f4f;
        border-radius: .4vw;
    }

    .blog-link {
        font-size: 1vw;
        margin: 0.4vw;
        padding: 0.4vw;
        border: 1px solid #4f4f4f;
        border-radius: .4vw;

        .modify-time {
            margin-left: 1vw;
            font-size: .8vw;
            color: gray;
        }
    }

    .blog-summary {
        background-color: #f4f4f4;
    }
}
</style>
<!-- 首页 -->
<template>
  <div class="index-page">
    <div class="page-boxes">
      <div v-for="link in links" @click="onClickLink(link)" class="page-link">
        <span>{{ link }}</span>
      </div>
    </div>
    <div class="blog-boxes">
      <div v-for="blog in data.blogs" class="blog-box">
        <router-link :to="blog.url" class="blog-link">
          <span>{{ blog.title }}</span>
          <span class="modify-time">{{ blog.ctime }}</span>
          <span class="modify-time">-</span>
          <span class="modify-time">{{ blog.mtime }}</span>
        </router-link>
        <div class="blog-summary" v-html="blog.summary"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, reactive } from "vue";
import { pcRoutes } from "../router";
import { useRouter } from "vue-router";
import { format } from "date-fns";
import { fetchHeadUtf8 } from "../utils/io";
import WordArray from "crypto-js/lib-typedarrays";
import Utf8 from "crypto-js/enc-utf8";
import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

const $router = useRouter();

const data = reactive({
  blogs: [],
} as {
  blogs: BlogMarkdownInfo[];
});

const links = computed(() => {
  return pcRoutes.map((i) => i.path);
});

const loadSummary = async (path: string): Promise<string> => {
  const bytes = await fetchHeadUtf8(path, 100);
  //@ts-ignore
  const words = WordArray.create(bytes.buffer);
  const head = Utf8.stringify(words);
  return await marked.parse(head);
};

onBeforeMount(async () => {
  // console.log('__MARKDOWN_FILES__', __MARKDOWN_FILES__);
  const tasks = __MARKDOWN_FILES__.map(async (i) => {
    i.url = `/blog?path=${i.path}`;
    i.ctime = format(i.createAt, "yyyy-MM-dd");
    i.mtime = format(i.modifyAt, "yyyy-MM-dd");
    i.summary = await loadSummary(i.path);
    return i;
  });
  const blogs = await Promise.all(tasks);
  data.blogs = blogs.sort((a, b) => b.modifyAt - a.modifyAt);
});

const onClickLink = (link: string) => $router.push(link);
</script>

<style scoped lang="scss">
.index-page {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;

  .page-boxes {
    display: flex;
    flex-direction: column;
  }

  .page-link {
    font-size: 1vw;
    margin: 0.4vw;
    padding: 0.4vw;
    border: 1px solid #4f4f4f;
    border-radius: 0.4vw;
  }

  .blog-boxes {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    height: 100%;
    margin: 0 2.4vw;

    .blog-box {
      margin: 2em 1em;
      padding: 2vw;
      border: 1px solid #4f4f4f;
    }
  }

  .blog-link {
    font-size: 1vw;
    margin: 0.4vw;
    padding: 0.4vw;
    border: 1px solid #4f4f4f;
    border-radius: 0.4vw;

    .modify-time {
      margin-left: 1vw;
      font-size: 0.8vw;
      color: gray;
    }
  }

  .blog-summary {
    background-color: #f4f4f4;
  }
}
</style>

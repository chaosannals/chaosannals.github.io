<!-- 首页 -->
<template>
    <div class="index-page">
        <h4>页面</h4>
        <div v-for="link in links" @click="onClickLink(link)" class="page-link">
            <span>{{ link }}</span>
        </div>
        <h4>博文</h4>
        <router-link v-for="blog in blogs" :to="blog.url" class="blog-link">
            <span>{{ blog.title }}</span>
            <span class="modify-time">{{ blog.mtime }}</span>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '../router';
import { useRouter } from 'vue-router';
import { format } from 'date-fns';

const $router = useRouter();

const links = computed(() => {
    return routes.map(i => i.path);
});

const blogs = __MARKDOWN_FILES__.map(i => {
    i.url = `/blog?path=${i.path}`;
    i.mtime = format(i.modifyAt, 'yyyy-MM-dd HH:ii:ss');
    return i;
}).sort((a, b) => a.modifyAt - b.modifyAt);

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
}
</style>
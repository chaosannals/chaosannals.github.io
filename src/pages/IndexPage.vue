<template>
    <div class="index-page">
        <div v-for="link in links" @click="onClickLink(link)" class="page-link">
            <span>{{ link }}</span>
        </div>
        <a v-for="blog in blogs" :href="blog.path">
            <span>{{ blog.title }}</span>
        </a>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '../router';
import { useRouter } from 'vue-router';

const $router = useRouter();

const links = computed(() => {
    return routes.map(i => i.path);
});

const blogs = __MARKDOWN_FILES__;

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
}
</style>
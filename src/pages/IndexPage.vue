<template>
    <div class="index-page">
        <div v-for="link in links" @click="onClickLink(link)">
            <span>{{ link }}</span>
        </div>
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

const onClickLink = (link: string) => $router.push(link);

</script>
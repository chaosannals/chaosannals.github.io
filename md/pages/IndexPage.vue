<template>
  <div class="md-index-page">
    <VanSwipe
      class="carousel"
      :autoplay="3000"
      indicator-color="white"
      lazy-render
    >
      <VanSwipeItem v-for="image in images" :keys="image">
        <img :src="image" />
      </VanSwipeItem>
    </VanSwipe>
    <VanDivider dashed>分割</VanDivider>
    <VanHighlight
      v-for="text in texts"
      :keywords="keywords"
      :source-string="text"
    />
    <VanDivider>分割</VanDivider>
    <VanButton plain type="primary" @click="onClickShowToast">
      <span>Toast</span>
    </VanButton>
    <VanIndexBar>
      <VanIndexAnchor index="路由" />
      <VanCell
        v-for="r in mdRoutes"
        :title="r.path"
        @click="onClickRouteTo(r.path)"
      />
    </VanIndexBar>
  </div>
</template>

<script lang="ts" setup>
import { showToast } from "vant";
import { mdRoutes, router } from "../../src/router";
import { computed, onBeforeMount } from "vue";
import { useAppStore } from "../../src/stores/app";

const appStore = useAppStore();

const texts = computed(() => {
  return [
    `指纹：（${appStore.visitorId}）`,
    `指纹：（${appStore.fingerprint}）`,
    "慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。",
  ];
});
const keywords = ["难题", "指纹"];

const images = [
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
];

const onClickShowToast = () => {
  showToast({
    message: "顶部展示",
    position: "top",
  });
};

const onClickRouteTo = (path: string) => {
  router.push(path);
};

onBeforeMount(() => {});
</script>

<style lang="scss" scoped>
.md-index-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .carousel :deep(.van-swipe-item) {
    color: #fff;
    width: 375px;
    height: 200px;
    text-align: center;
    background-color: #39a9ed;

    & > img {
      height: 100%;
    }
  }
}
</style>

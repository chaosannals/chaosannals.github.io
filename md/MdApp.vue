<template>
  <VanConfigProvider :theme="theme" class="md-app">
    <VanWatermark
      image="../src/assets/logo-banner.png"
      opacity="0.2"
      rotate="44"
      :full-page="true"
    />
    <VanNavBar
      title="ChaosAnnals's GitHub Pages"
      :left-arrow="appStore.hasBack"
      @click-left="onClickLeft"
    />
    <VanNoticeBar
      v-if="appStore.notice"
      left-icon="volume-o"
      :scrollable="true"
      :text="appStore.notice"
    />
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
    <VanTabbar
      v-if="appStore.isMdShowTabbar"
      v-model="active"
      :before-change="onBeforeChange"
    >
      <VanTabbarItem icon="home-o" name="home" to="/md/index" :replace="true"
        >首页</VanTabbarItem
      >
      <VanTabbarItem icon="search" name="dot" :dot="isDot">
        <span>点</span>
      </VanTabbarItem>
      <VanTabbarItem icon="friends-o" name="badge" :badge="countBadge"
        >标签</VanTabbarItem
      >
      <VanTabbarItem
        icon="shop-o"
        name="shop"
        to="/md/shop/index"
        :replace="false"
        >商城</VanTabbarItem
      >
    </VanTabbar>
  </VanConfigProvider>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { useAppStore } from "../src/stores/app";
import { useRouter } from "vue-router";
import { delay } from "../src/utils/time";

const theme = ref("light");
const active = ref(0);
const isDot = ref(false);
const countBadge = ref(0);
const appStore = useAppStore();
const router = useRouter();

const onClickLeft = () => {
  router.back();
};

const onBeforeChange = async (name: string) => {
  switch (name) {
    case "dot":
      isDot.value = !isDot.value;
      return false;
    case "badge":
      countBadge.value += 1;
      return false;
  }
  return true;
};

const NOTICE_DEMO = [
  "",
  "无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。",
  "不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。",
  "",
];

onBeforeMount(async () => {
  console.log("currentRoute", router.currentRoute);
  console.log("getRoutes", router.getRoutes());

  while (true) {
    await delay(6000);
    const ni = Math.floor(Math.random() * NOTICE_DEMO.length);
    appStore.notice = NOTICE_DEMO[ni];
  }
});
</script>

<style lang="scss" scoped>
.md-app {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>

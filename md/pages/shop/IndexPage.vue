<template>
  <VanActionBar>
    <VanActionBarIcon icon="chat-o" text="客服" dot />
    <VanActionBarIcon icon="cart-o" text="购物车" badge="5" />
    <VanActionBarButton type="warning" text="加入购物车" />
    <VanActionBarButton type="danger" text="立即购买" />
  </VanActionBar>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";
import { useAppStore } from "../../../src/stores/app";

const appStore = useAppStore();

onBeforeRouteLeave(() => {
  appStore.isMdShowTabbar = true;
});
</script>

<style lang="scss" scoped></style>

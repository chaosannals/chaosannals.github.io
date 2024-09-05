<template>
  <VanConfigProvider :theme="theme" class="md-app">
    <VanNavBar
      title="Vant 示例"
      :left-arrow="appStore.hasBack"
      @click-left="onClickLeft"
    />
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </VanConfigProvider>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { router } from "../src/router";
import { useAppStore } from "../src/stores/app";

const theme = ref('light');
const appStore = useAppStore();

const onClickLeft = () => {
  router.back();
};

onBeforeMount(() => {
  console.log("currentRoute", router.currentRoute);
  console.log("getRoutes", router.getRoutes());
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

<template>
  <ElAutoResizer @resize="onResize">
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </ElAutoResizer>
</template>

<script setup lang="ts">
import { ElAutoResizer } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import { swapMd } from "./router";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { onBeforeMount } from "vue";
import { useAppStore } from "./stores/app";

const route = useRoute();
const router = useRouter();
const appStore = useAppStore();

const onResize = (event: { width: number; height: number }) => {
  console.log("resize", event.width, event.height);
  const v = swapMd(route);
  if (v) {
    router.replace(v);
  }
};

onBeforeMount(async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  console.log("fingerprint:", result.visitorId);
  appStore.visitorId = result.visitorId;
});
</script>

<style lang="scss" scoped>
.watermark {
  width: 100%;
  height: 100%;
}
</style>

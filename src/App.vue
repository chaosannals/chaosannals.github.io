<template>
  <ElConfigProvider :locale="zhCn" size="small" :z-index="4000">
    <ElAutoResizer @resize="onResize">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </ElAutoResizer>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElAutoResizer, ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { useRoute, useRouter } from "vue-router";
import { swapMd } from "./router";

const route = useRoute();
const router = useRouter();

const onResize = (event: { width: number; height: number }) => {
  console.log("resize", event.width, event.height);
  const v = swapMd(route);
  if (v) {
    router.replace(v);
  }
};
</script>

<style scoped></style>

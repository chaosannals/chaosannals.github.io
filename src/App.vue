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

<style lang="scss" scoped>
.watermark {
  width: 100%;
  height: 100%;
}
</style>

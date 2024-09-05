<template>
  <ElAutoResizer @resize="onResize">
    <ElWatermark class="watermark" :font="font" :content="content">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </ElWatermark>
  </ElAutoResizer>
</template>

<script setup lang="ts">
import { ElAutoResizer } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import { swapMd } from "./router";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
const font = ref({
  color: "rgba(0, 0, 0, .15)",
});
const content = ref(["ChaosAnnals's", "GitHub Pages"]);

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

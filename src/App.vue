<template>
  <ElConfigProvider :locale="zhCn" size="small" :z-index="4000">
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { isMd } from "./utils/platform";
import { onBeforeMount, ref } from "vue";

const isM = ref(false);

onBeforeMount(() => {
  isM.value = isMd();
});
</script>

<style scoped></style>

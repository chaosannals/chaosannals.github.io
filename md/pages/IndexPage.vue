<template>
  <div class="md-index-page">
    <VanButton plain type="primary" @click="onClickShowToast">
      <span>Toast</span>
    </VanButton>
    <VanButton v-for="r in mdRoutes" plain @click="onClickRouteTo(r.path)">
      <span>{{ r.path }}</span>
    </VanButton>
  </div>
</template>

<script lang="ts" setup>
import { showToast } from "vant";
import { mdRoutes, router } from "../../src/router";
import { onBeforeMount } from "vue";

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
}
</style>

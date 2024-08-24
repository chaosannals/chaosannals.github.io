<template>
  <div class="md-index-page">
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

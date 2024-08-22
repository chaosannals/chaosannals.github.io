<template>
  <div class="md-index-page">
    <VanButton plain type="primary" @click="onClickShowToast">
      <span>Toast</span>
    </VanButton>
  </div>
</template>

<script lang="ts" setup>
import { showToast } from "vant";

const onClickShowToast = () => {
  showToast({
    message: "顶部展示",
    position: "top",
  });
};
</script>

<style lang="scss" scoped>
.md-index-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>

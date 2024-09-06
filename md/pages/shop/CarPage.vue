<template>
  <div class="shop-car-page">
    <VanList
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <VanSwipeCell class="car-item" v-for="item in items" :key="item">
        <VanCard thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg">
          <template #tag>
            <div class="tag-column">
              <VanTag mark type="primary">标签</VanTag>
              <VanTag mark type="primary">标签2</VanTag>
            </div>
          </template>
          <template #tags>
            <div class="tag-row">
              <VanTag plain type="primary">标签1</VanTag>
              <VanTag plain>标签2</VanTag>
            </div>
          </template>
          <template #title>
            <span>标题{{ item }}</span>
          </template>
          <template #desc>
            <p>
              <span>商品描述 {{ item }}</span>
            </p>
          </template>
          <template #price>
            <span>￥{{ item.toFixed(2) }}</span>
          </template>
          <template #num>
            <span>x{{ item }}</span>
          </template>
          <template #footer>
            <VanButton size="mini">按钮</VanButton>
            <VanButton size="mini">按钮</VanButton>
          </template>
        </VanCard>
        <template #right>
          <VanButton square type="danger">
            <span>删除</span>
          </VanButton>
        </template>
      </VanSwipeCell>
    </VanList>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { delay } from "../../../src/utils/time";

const loading = ref(false);
const finished = ref(false);
const items = ref<Array<number>>([]);

const onLoad = async () => {
  // 异步更新数据
  await delay(1000);
  for (let i = 0; i < 10; i++) {
    items.value.push(items.value.length + 1);
  }

  // 加载状态结束
  loading.value = false;

  // 数据全部加载完成
  if (items.value.length >= 40) {
    finished.value = true;
  }
};
</script>

<style lang="scss" scoped>
.car-item {
  margin: 10px 0;

  :deep(.van-button) {
    height: 100%;
  }
}
</style>

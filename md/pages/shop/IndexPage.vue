<template>
  <div class="shop-list">
    <VanSidebar v-model="active" @change="onSidebarChange">
      <VanSidebarItem title="标签名称" dot />
      <VanSidebarItem title="标签名称" />
      <VanSidebarItem title="标签名称" />
    </VanSidebar>
    <VanList
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <VanCard
        v-for="item in items"
        :key="item"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
      >
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
    </VanList>
  </div>
  <VanActionBar>
    <VanActionBarIcon icon="chat-o" text="客服" dot />
    <VanActionBarIcon icon="cart-o" text="购物车" badge="5" />
    <VanActionBarButton type="warning" text="加入购物车" />
    <VanActionBarButton type="danger" text="立即购买" />
  </VanActionBar>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";
import { useAppStore } from "../../../src/stores/app";
import { ref } from "vue";
import { delay } from "../../../src/utils/time";

const active = ref(0);
const loading = ref(false);
const finished = ref(false);
const items = ref<Array<number>>([]);
const appStore = useAppStore();

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

const onSidebarChange = (index: number) => {
  console.log("onSidebarChange", index);
};

onBeforeRouteLeave(() => {
  appStore.isMdShowTabbar = true;
});
</script>

<style lang="scss" scoped>
.shop-list {
  --van-sidebar-background: #fff;
  --van-sidebar-width: 120px;

  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow: hidden;
  margin-bottom: var(--van-action-bar-height);

  :deep(.van-list) {
    width: 100%;
    overflow: auto;
  }
}

.tag-column {
  display: flex;
  flex-direction: column;
  & > * {
    margin: 1px 0;
  }
}

.tag-row {
  display: flex;
  flex-direction: row;
  & > * {
    margin: 0 1px;
  }
}
</style>

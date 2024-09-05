<template>
  <ElConfigProvider :locale="zhCn" size="small" :z-index="4000">
    <ElMenu
      mode="horizontal"
      :ellipsis="false"
      :default-active="activeIndex"
      @select="onSelect"
    >
      <ElMenuItem index="logo">
        <img style="width: 100px" src="./assets/logo.svg" alt="Element logo" />
      </ElMenuItem>
      <ElSubMenu index="route">
        <template #title>
          <span>PC 路由</span>
        </template>
        <template v-for="r in pcRoutes">
          <ElSubMenu v-if="r.children" :key="r.path">
            <template #title>{{ r.name }}</template>
            <ElMenuItem
              v-for="child in r.children"
              :key="child.path"
              @click="onClickRouteTo(child.path)"
            >
              <span>{{ child.path }}</span>
            </ElMenuItem>
          </ElSubMenu>
          <template v-else>
            <ElMenuItem :key="r.path" @click="onClickRouteTo(r.path)">
              <span>{{ r.path }}</span>
            </ElMenuItem>
          </template>
        </template>
      </ElSubMenu>
    </ElMenu>
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { ref } from "vue";
import { pcRoutes } from "./router";
import { useRouter } from "vue-router";

const activeIndex = ref("logo");
const router = useRouter();

const onSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const onClickRouteTo = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
:deep(.el-menu--horizontal) {
  & > :deep(.el-menu-item:nth-child(1)) {
    margin-left: auto;
  }
}
</style>

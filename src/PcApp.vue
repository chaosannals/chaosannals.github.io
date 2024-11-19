<template>
  <ElConfigProvider :locale="zhCn" size="small" :z-index="4000">
    <ElWatermark class="watermark" :font="font" :content="content">
      <div class="pc-app">
        <ElMenu
          mode="horizontal"
          :ellipsis="false"
          :default-active="activeIndex"
          @select="onSelect"
        >
          <ElMenuItem index="logo" @click="onClickRouteTo('/index')">
            <img
              style="height: 64px"
              src="./assets/logo-banner.png"
              alt="Element logo"
            />
          </ElMenuItem>
          <ElMenuItem index="fingerprint">
            <span>{{ appStore.visitorId }}</span>
          </ElMenuItem>
          <ElMenuItem index="clientjs">
            <span>{{ appStore.fingerprint }}</span>
          </ElMenuItem>
          <ElMenuItem index="undetermined">待定</ElMenuItem>
          <ElSubMenu index="route">
            <template #title>
              <span>PC 路由</span>
            </template>
            <template v-for="r in pcRoutes" :key="r.path">
              <ElSubMenu v-if="r.children" :index="r.path">
                <template #title>{{ r.name }}</template>
                <ElMenuItem
                  v-for="child in r.children"
                  :key="child.path"
                  @click="onClickRouteTo(child.path)"
                >
                  <span>{{ child.path }}</span>
                </ElMenuItem>
              </ElSubMenu>
              <template v-else :key="r.path">
                <ElMenuItem @click="onClickRouteTo(r.path)">
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
      </div>
      <ElBacktop :right="100" :bottom="100" />
    </ElWatermark>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { ref } from "vue";
import { pcRoutes } from "./router";
import { useRouter } from "vue-router";
import { useAppStore } from "./stores/app";

const appStore = useAppStore();
const activeIndex = ref("undetermined");
const router = useRouter();
const font = ref({
  color: "rgba(0, 0, 0, .15)",
});
const content = ref(["ChaosAnnals's", "GitHub Pages"]);

const onSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const onClickRouteTo = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.pc-app {
  --el-menu-active-color: #313131;
  :deep(.el-menu--horizontal > .el-menu-item:nth-child(1)) {
    margin-right: auto;
  }
}
</style>

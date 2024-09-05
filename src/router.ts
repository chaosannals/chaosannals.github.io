import {
  type RouteLocationNormalized,
  type RouteRecordRaw,
  createRouter,
  createWebHashHistory,
} from "vue-router";

import { kebabCase } from "lodash";
import { isMd } from "./utils/platform";
import MdApp from "../md/MdApp.vue";
import PcApp from "./PcApp.vue";
import { useAppStore } from "./stores/app";

function makePages(
  pages: Record<string, () => Promise<unknown>>,
  prefix: string = "/"
): RouteRecordRaw[] {
  const result: RouteRecordRaw[] = [];
  for (const p of Object.keys(pages)) {
    const m = p.match(/.\/pages\/(.*)Page\.vue/);
    if (m) {
      const n = m[1]
        .split("/")
        .map((i) => kebabCase(i))
        .join("/");
      result.push({
        path: `${prefix}${n}`,
        alias: `${prefix}${n}.html`, // 调试服务器别名带后缀不可用，编译后是正常的。
        component: pages[p],
      });
    }
  }
  return result;
}

function makePcRoutes(): RouteRecordRaw[] {
  const pages = import.meta.glob("./pages/**/*Page.vue");
  return makePages(pages);
}

function makeMdRoutes(): RouteRecordRaw[] {
  const pages = import.meta.glob("../md/pages/**/*Page.vue");
  return makePages(pages, "/md/");
}

export const pcRoutes = makePcRoutes();
export const mdRoutes = makeMdRoutes();

function routePages(): RouteRecordRaw[] {
  const result: RouteRecordRaw[] = [
    {
      path: "/",
      component: PcApp,
      children: pcRoutes,
    },
    {
      path: "/md",
      component: MdApp,
      children: mdRoutes,
    },
  ];

  console.log("routes", result);

  return result;
}

export const routes = routePages();

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export const swapMd = (to: RouteLocationNormalized) => {
  if (isMd()) {
    if (!to.fullPath.startsWith("/md")) {
      console.log("redirect md", to.fullPath);
      return { path: "/md/index" };
    }
  } else {
    if (to.fullPath.startsWith("/md")) {
      console.log("redirect pc", to.fullPath);
      return { path: "/index" };
    }
  }
  return null;
};

router.beforeEach(async (to, from) => {
  const appStore = useAppStore();

  appStore.routeFrom = from;

  if (to.fullPath == "/md/shop/index") {
    appStore.isMdShowTabbar = false;
  }
  if (to.fullPath == "/md/index") {
    appStore.isMdShowTabbar = true;
  }

  const v = swapMd(to);
  if (v) {
    return v;
  }

  return true;
});

router.afterEach(async (to, from) => {
  const appStore = useAppStore();
  appStore.hasBack = router.options.history.state.back != null;
  console.log("history", router.options.history);
});

export default router;

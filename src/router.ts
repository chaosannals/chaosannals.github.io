import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

import { kebabCase } from "lodash";

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

function routePages(): RouteRecordRaw[] {
  const result: RouteRecordRaw[] = [
    {
      path: "/",
      component: () => import("./pages/IndexPage.vue"),
    },
  ];

  const pages = import.meta.glob("./pages/**/*Page.vue");
  const r1 = makePages(pages);
  r1.forEach((i) => result.push(i));

  const mdPages = import.meta.glob("../md/pages/**/*Page.vue");
  const r2 = makePages(mdPages, "/md/");
  r2.forEach((i) => result.push(i));

  console.log("routes", result);

  return result;
}

export const routes = routePages();

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

function isMd() {
  const r =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  console.log("isMd", r, navigator.userAgent);
  return r;
}

router.beforeEach(async (to, from) => {
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

  return true;
});

export default router;

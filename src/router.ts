import {
    RouteRecordRaw,
    createRouter,
    createWebHashHistory,
} from "vue-router";

import { kebabCase } from 'lodash';


function routePages(): RouteRecordRaw[] {
    const result: RouteRecordRaw[] = [
        {
            path: '/',
            component: () => import("./pages/IndexPage.vue"),
        }
    ];

    const pages = import.meta.glob('./pages/**/*Page.vue');
    for (const p of Object.keys(pages)) {
        const m = p.match(/.\/pages\/(.*)Page\.vue/);
        if (m) {
            const n = m[1]
                .split('/')
                .map(i => kebabCase(i))
                .join('/');
            result.push({
                path: `/${n}`,
                alias: `/${n}.html`, // 调试服务器别名带后缀不可用，编译后是正常的。
                component: pages[p],
            });
        }
    }
    console.log('routes', result);
    return result;
}

export const routes = routePages();

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router;
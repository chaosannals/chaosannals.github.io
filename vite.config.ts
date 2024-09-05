import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VantResolver } from "@vant/auto-import-resolver";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
// node 相关的模块 url path fs 因为 TS 没有申明，所以需要 @types/node 模块
import _ from "lodash";
import pxToViewport8 from "postcss-px-to-viewport-8-plugin";
import { globBlogMarkdownInfos } from "./inc/blog";

// GitHub Pages 静态服务器不支持在路径里的符号（以下正则）和 _ 开头
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;

const here = fileURLToPath(import.meta.url);
const projectDir = dirname(here);
const publicDir = join(projectDir, "public");

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    define: {
      __MARKDOWN_FILES__: await globBlogMarkdownInfos(publicDir),
    },
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName(name: string) {
            return _.trim(name, "_").replace(INVALID_CHAR_REGEX, "");
          },
        },
      },
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [VantResolver(), ElementPlusResolver()],
      }),
      Components({
        dirs: ["src/widgets"],
        resolvers: [VantResolver(), ElementPlusResolver()],
      }),
    ],
    css: {
      postcss: {
        plugins: [
          pxToViewport8({
            unitToConvert: 'px',
            unitPrecision: 5, // 单位转换后保留的精度
            propList: ['*'], // 能转化为vw的属性列表
            viewportWidth: 375,
            viewportUnit: "vw",
            fontViewportUnit: 'vw', // 字体使用的视口单位
            include: [/\/md\//],
            exclude: [/node_modules/],
            minPixelValue: 1,
            mediaQuery: true,
            replace: true,
          }),
        ],
      },
    },
  };
});

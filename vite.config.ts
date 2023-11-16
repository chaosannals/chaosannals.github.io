import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// node 相关的模块 url path fs 因为 TS 没有申明，所以需要 @types/node 模块
import _ from 'lodash';
import { globBlogMarkdownInfos } from './inc/blog';

const here = fileURLToPath(import.meta.url);
const projectDir = dirname(here);
const publicDir = join(projectDir, 'public');


// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    define: {
      __MARKDOWN_FILES__: await globBlogMarkdownInfos(publicDir),
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dirs: [
          'src/widgets',
        ],
        resolvers: [ElementPlusResolver()],
      }),
    ],
  };
});

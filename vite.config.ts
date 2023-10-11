import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { dirname, join, relative } from 'path';
import { openSync, readSync, readdirSync, statSync } from 'fs';
// node 相关的模块 url path fs 因为 TS 没有申明，所以需要 @types/node 模块
import _ from 'lodash';

const here = fileURLToPath(import.meta.url);
const projectDir = dirname(here);
const publicDir = join(projectDir, 'public');

function globDir(dirPath: string, suffix: string): string[] {
  const result = [];
  const names = readdirSync(dirPath);
  for (const name of names) {
    const path = join(dirPath, name);
    const stat = statSync(path);
    if (stat.isFile() && path.endsWith(suffix)) {
      result.push(path);
    } else if (stat.isDirectory()) {
      globDir(path, suffix).forEach(i => result.push(i));
    }
  }
  return result;
}

function readTitle(path: string) {
  const fd = openSync(path, 'r');
  const buffer = Buffer.alloc(1024);
  const end = readSync(fd, buffer);
  const content = buffer.subarray(0, end).toString('utf-8');
  const tailIndex = content.indexOf('\n');
  const title = tailIndex > 0 ? content.substring(0, tailIndex) : '';
  return _.trim(title, ' #\r\n');
}

// @ts-ignore
function globBlogMarkdownInfos(dirPath: string): BlogMarkdownInfo[] {
  const files = globDir(dirPath, '.md');
  const paths = files.map(p => {
    const path = relative(dirPath, p).replace('\\', '/');
    const title = readTitle(p);
    return {
      path: `/${path}`,
      title: title,
    };
  });
  console.log('globBlogMarkdownInfos', paths);
  return paths;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __MARKDOWN_FILES__: globBlogMarkdownInfos(publicDir),
  },
});

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { dirname, join, relative } from 'path';
import { openSync, readSync, readdirSync, statSync } from 'fs';
// node 相关的模块 url path fs 因为 TS 没有申明，所以需要 @types/node 模块
import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';
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

const gitOptions: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 4,
  trimmed: false,
};
console.log('git baseDir', process.cwd());
const git: SimpleGit = simpleGit(gitOptions);

async function gitLogTo(path: string) {
  return new Promise((resolve, reject) => {
    git.raw(['log', '--reverse', '--format=%ci', '--', path], (e, r) => {
      if (e) {
        reject(e);
      } else {
        resolve(r.split('\n').filter(i => !_.isEmpty(i)));
      }
    });
  });
}

// @ts-ignore
async function globBlogMarkdownInfos(dirPath: string): BlogMarkdownInfo[] {
  const files = globDir(dirPath, '.md');
  const tasks = files.map(async p => {
    const path = relative(dirPath, p).replace('\\', '/');
    const title = readTitle(p);
    const stat = statSync(p);

    //@ts-ignore
    const gitLog = await gitLogTo(p);
    return {
      path: `/${path}`,
      title: title,
      createAt: stat.birthtime.getTime(),
      modifyAt: stat.mtime.getTime(),
      gitLog: gitLog,
    };
  });
  const result = await Promise.all(tasks);
  console.log('globBlogMarkdownInfos', result);
  return result;
}

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    plugins: [vue()],
    define: {
      __MARKDOWN_FILES__: globBlogMarkdownInfos(publicDir),
    },
  };
});

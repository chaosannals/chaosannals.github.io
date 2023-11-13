/// <reference types="vite/client" />

declare class BlogMarkdownInfo {
    [x: string]: string;
    path: string;
    title: string;
    createAt: number;
    modifyAt: number;
    gitLog: string[];
}

declare const __MARKDOWN_FILES__: BlogMarkdownInfo[];

declare module "*.vue" {
    import type { DefineComponent } from "vue";

    const vueComponent: DefineComponent<{}, {}, any>;

    export default vueComponent;
}

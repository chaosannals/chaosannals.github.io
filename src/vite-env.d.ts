/// <reference types="vite/client" />

declare class BlogMarkdownInfo {
    path: string;
    title: string;
}

declare const __MARKDOWN_FILES__: BlogMarkdownInfo[];

declare module "*.vue" {
    import type { DefineComponent } from "vue";

    const vueComponent: DefineComponent<{}, {}, any>;

    export default vueComponent;
}

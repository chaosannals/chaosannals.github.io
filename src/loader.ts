import { defineAsyncComponent, type App, Component } from 'vue';
import { camelCase, upperFirst } from 'lodash';

export default {
    install(app: App) {
        const widgets = import.meta.glob('./widgets/**/*.vue');
        for (const p of Object.keys(widgets)) {
            const m = p.match(/.\/widgets\/(.*)\.vue/);
            if (m) {
                const n = upperFirst(camelCase(m[1]));
                const c = widgets[p] as () => Promise<Component>;
                app.component(n, defineAsyncComponent(c));
                console.log('register widget: ', n);
            }
        }
    },
};
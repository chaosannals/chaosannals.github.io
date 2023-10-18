import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import 'highlight.js/styles/github.css';
import 'normalize.css';
import App from './App.vue';
import router from './router';
import loader from './loader';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const persist = createPersistedState({
    storage: localStorage,
    key: id => `__perisited__${id}`,
    // auto: true, // 全局自动启动
});
const pinia = createPinia();
const app = createApp(App);

pinia.use(persist);
app.use(pinia);
app.use(router);
app.use(loader);
app.mount('#app');

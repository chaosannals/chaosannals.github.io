import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import 'vant/lib/index.css';
import 'highlight.js/styles/github.css';
import 'normalize.css';
import App from './App.vue';
import router from './router';
import { createPersistedState } from 'pinia-plugin-persistedstate';
//import { Toast } from 'vant';

const persist = createPersistedState({
    storage: localStorage,
    key: id => `__perisited__${id}`,
    // auto: true, // 全局自动启动
});
const pinia = createPinia();
const app = createApp(App);

pinia.use(persist);
//app.use(Toast);
app.use(pinia);
app.use(router);
app.mount('#app');

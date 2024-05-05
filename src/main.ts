import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.scss';
import App from './App.vue';
import router from './router';
import commonComponents from '@presentation/components/common';

const app = createApp(App);
const pinia = createPinia();

commonComponents.forEach(({ name, component }) => {
    app.component(name, component);
});

app.use(pinia).use(router).mount('#app');

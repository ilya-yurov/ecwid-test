import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.scss';
import App from './App.vue';
import router from './router';
import Vue3Toastify, { ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);
const pinia = createPinia();
const toasterOptions: ToastContainerOptions = {
    autoClose: 3000,
    position: 'bottom-left',
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: true
};

app.use(pinia).use(router).use(Vue3Toastify, toasterOptions).mount('#app');

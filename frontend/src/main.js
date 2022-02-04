import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Entery point in vue application

createApp(App).use(store).use(router).mount('#app');

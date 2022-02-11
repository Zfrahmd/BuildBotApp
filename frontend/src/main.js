import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// global directives & filters
import pinDirective from '@/directives/pin-directive';
import currencyFilter from '@/filters/currency-filter';

// Entery point in vue application
const app = createApp(App);

app.config.globalProperties.$filters = {
  currency: currencyFilter,
}

app.use(store)
.use(router)
.directive('pin', pinDirective)
.mount('#app');

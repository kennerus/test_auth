import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from 'vue-the-mask';

Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(VueTheMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
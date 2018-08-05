import Vue from 'vue';
import VueResource from 'vue-resource';
import VueApiRequest from 'vue-api-request';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueApiRequest);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

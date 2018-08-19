import Vue from 'vue';
import VueResource from 'vue-resource';
import VueApiRequest from 'vue-api-request';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueApiRequest);
Vue.use(VueMaterial);
Vue.use(VeeValidate);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

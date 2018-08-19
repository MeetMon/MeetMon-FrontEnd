import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueApiRequest from 'vue-api-request';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueApiRequest);
Vue.use(VueMaterial);
Vue.use(VeeValidate);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

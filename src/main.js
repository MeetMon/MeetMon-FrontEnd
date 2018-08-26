import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueApiRequest from 'vue-api-request';
import { MdButton, MdCard, MdField } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import VueTransmit from 'vue-transmit';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueApiRequest);
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(VueTransmit);
Vue.use(VeeValidate);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

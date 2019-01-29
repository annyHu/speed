import Vue from 'vue';
import { Picker } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/global.scss';


Vue.use(Picker);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

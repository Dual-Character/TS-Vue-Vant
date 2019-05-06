import Vue from 'vue';
import App from './App.vue';
import 'lib-flexible';
import './registerServiceWorker';
import './reset.less';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

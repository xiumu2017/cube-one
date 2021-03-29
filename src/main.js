import Vue from 'vue'
import './cube-ui'
import './login-ui'
import App from './App.vue'
import 'amfe-flexible'
import { router } from './router';
import store from './store';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')

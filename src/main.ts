import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/bootstrap/css/bootstrap.min.css';
import './assets/font-awesome/css/font-awesome.min.css';
import './assets/sb-admin/sb-admin.min.css';
import 'jquery'
import './assets/bootstrap/js/bootstrap.bundle.min.js';
import 'jquery.easing'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

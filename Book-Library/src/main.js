import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { routes } from './router'
import VueRouter from 'vue-router'
/*const router = new VueRouter({
  routes,
  mode: 'history'
})*/
Vue.use(VueRouter)

import { extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import tr from 'vee-validate/dist/locale/tr.json';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize('tr', tr);

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import './assets/custom.scss';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

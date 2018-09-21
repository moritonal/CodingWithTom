import Vue from 'vue';
import 'babel-polyfill';
import App from './App.vue';
import BootstrapVue from "bootstrap-vue"

//import VueRouter from "vue-router"

Vue.use(BootstrapVue);
//Vue.use(VueRouter);

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import "bootswatch/dist/darkly/bootstrap.css"

new Vue({
  el: '#app',
  render: h => h(App)
});

import Vue from 'vue';
import 'babel-polyfill';
import App from './App.vue';
import Editor from "./Editor.vue";
import BootstrapVue from "bootstrap-vue"

//import VueRouter from "vue-router"

Vue.use(BootstrapVue);
//Vue.use(VueRouter);

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import "bootswatch/dist/darkly/bootstrap.css"

console.log(window.location);

if (window.location.pathname.endsWith("/editor")) {
	
	new Vue({
		el: '#app',
		render: h => h(App)
	});

} else {
	new Vue({
		el: "#app",
		render: h => h(Editor)
	})
}
import Vue from 'vue'
import App from './App.vue'
import Ninja from './Ninjas.vue'
import Demo from './Demo.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './route'

Vue.component('ninjasss',Ninja);
Vue.component('demoss',Demo);

/*Vue.filter('to-uppercase',function(value){
	return value.toUpperCase();
})*/

Vue.use(VueRouter);

const router = new VueRouter({
	routes : Routes
})

Vue.filter('snippet',function(value){
   return value.slice(0,50) + '...';
})

Vue.use(VueResource)

//create event buss
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})

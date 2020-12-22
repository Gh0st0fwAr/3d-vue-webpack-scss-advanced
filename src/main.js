// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';
import axios from 'axios'
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
}

axios.defaults.baseURL = 'http://' + window.location.host

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab)
library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import '@/styles/main.scss';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.prototype.axios = axios;
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history',
    base: "/"
});



new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

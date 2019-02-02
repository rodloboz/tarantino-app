import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import './init/';
import store from './store';

Vue.config.productionTip = false

Vue.use(VueResource);
// Vue.http.options.credentials = true;
Vue.http.options.root = 'https://tarantino-quotes.herokuapp.com';
// Vue.http.options.root = 'http://localhost:3000';
// Vue.http.headers.common['Authorization'] = 'Quentin';
Vue.http.options.emulateJSONP = true;
// Vue.http.interceptors.push((request, next) => {
//   request.headers.set('Content-Type', 'application/json');
//   next();
// });

Vue.use(ElementUI, { locale });

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

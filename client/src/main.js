// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {sync} from "vuex-router-sync"
import store from "@/store/store"
import lineClamp from 'vue-line-clamp'
import moment from 'moment'
import axios from "axios"




Vue.use(moment);
Vue.use(axios);
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
});
Vue.use(lineClamp, {
  // plugin options
})

Vue.config.productionTip = false
Vue.use(BootstrapVue);

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

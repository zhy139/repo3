// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Head from './Head'
import List from './List'
import Dialog from './Dialog'
Vue.config.productionTip = false
Vue.component(Head.name,Head);
Vue.component(List.name,List);
Vue.component(Dialog.name,Dialog);
// var bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    bus:new Vue()
  }
})

import Vue from 'vue'
import ElementUI from "element-ui";
import App from './App.vue'
import router from './router'
import store from './store'
import "element-theme-chalk";



Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

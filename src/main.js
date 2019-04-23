import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iview from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
import '@/assets/icons/iconfont.css'
Vue.config.productionTip = false
Vue.use(iview);
new Vue({
  router,
  store,
  iview,
  axios,
  render: h => h(App)
}).$mount('#app')

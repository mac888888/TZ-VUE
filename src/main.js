// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import config from '@/config'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/icon/iconfont.css'
import moment from 'moment'
import axiosInit from '@/utils/interceptor'
import '@/utils/rem'

Vue.prototype.$m = moment
Vue.prototype.$config = config
Vue.config.productionTip = false
Vue.use(MintUI)
axiosInit(true, true)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

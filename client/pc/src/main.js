import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'; //引入组件库
import 'element-ui/lib/theme-chalk/index.css'; //引入组件库的css文件
import Axios from 'axios' //引入axios模块
import router from './router/index.js'
Vue.config.productionTip = false

Axios.defaults.baseURL= 'http:/localhost:9999';

Vue.prototype.$http = Axios

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

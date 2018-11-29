// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'  //引入axios
import Crypto from 'crypto'
import Vuex from 'vuex'

import headerTop from "@/components/header"   //引入组件
import footer from "@/components/footer"   //引入组件
import logo from "@/components/logo"   //引入组件

Vue.component("Header",headerTop);
Vue.component("Footer",footer);
Vue.component("logo",logo);
Vue.config.productionTip = false
Vue.use(MintUI)

Vue.prototype.$md5 = str=>{
	let md5 = Crypto.createHash('md5');
	return md5.update(str).digest('hex');
}

Axios.defaults.baseURL = 'http://localhost:9999';

Vue.prototype.$http = Axios;

Vue.use(Vuex);

Vue.prototype.$store = new Vuex.Store({
	state:{
		aboutFlag:0
	},
	mutations: {
		changeAbout(state,num){
			state.aboutFlag = num;
		}
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'; //引入组件库
import 'element-ui/lib/theme-chalk/index.css'; //引入组件库的css文件
import Axios from 'axios' //引入axios模块
import router from './router/index.js'
import Vuex from 'vuex'; //引入vuex模块
Vue.config.productionTip = false

Axios.defaults.baseURL = 'http:/localhost:9999';

Vue.prototype.$http = Axios

Vue.use(ElementUI);

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		topFlag: 0
	},
	mutations: {
		changeTopFlag(state,num) {
			state.topFlag = num;
		}
	}
})
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
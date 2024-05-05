import App from './App'
import store from './store'

// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui"

// import Mock from "mockjs"
// import './mock/index.js'

// Mock.setup({
// 	timeout: '200-600'
// });

Vue.prototype.$store = store

Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
	...App,
})
app.use(store)
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	
	return {
		app
	}
}
// #endif
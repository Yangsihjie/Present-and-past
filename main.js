import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//挂载全局icon组件
import MyIcon from 'components/icon/icon.vue'
Vue.component("MyIcon",MyIcon)

//获取设备状态栏高度挂载全局、
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

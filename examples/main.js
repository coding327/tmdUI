import Vue from 'vue'
import App from './App.vue'

// 开发组件时测试
// 完整引入
// import TMDUI from '../components/lib/index'
// import '../components/css/index.scss'
// Vue.use(TMDUI)

// 按需引入
// import { Demo } from '../components/lib/index'
// import '../components/css/demo.scss'
// Vue.use(Demo)

// 开发完后打包测试
// 完整引入
// import TMDUI from '../dist/index.umd'
// import '../dist/css/index.css'
// Vue.use(TMDUI)

// 按需引入
// import { Demo } from '../dist/index.umd'
// import '../dist/css/index.css'
// Vue.use(Demo)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

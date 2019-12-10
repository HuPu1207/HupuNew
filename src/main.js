/*
 * @Author: CoolWind
 * @Date: 2019-12-09 09:11:57
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-10 11:14:38
 * @Description: 
 */

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/iconfont.css';
import router from './router/index'
import store from './store'

// 引入router时，变量名必须用小写，与插件同名，否则页面出不来

import Antd from 'ant-design-vue';

// import Mint from 'mint-ui';

// import Axios from 'axios'
import VideoPlayer from 'vue-video-player'

Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(router);
// Vue.use(Mint); 
Vue.use(Antd);
Vue.use(VideoPlayer);

// Axios.defaults.baseURL = '/api/';

Vue.config.productionTip = false
// const store=new Vuex.Store({
//   state:{token:''}
// })

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

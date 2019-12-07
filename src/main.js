/*
 * @Author: 赵新朋
 * @Date: 2019-11-26 10:02:42
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-05 20:54:10
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import Axios from 'axios'
import VideoPlayer from 'vue-video-player'
import store from './store'

Vue.use(VideoPlayer);
Vue.use(ElementUI);
Axios.defaults.baseURL = '/api/';
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'; 

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router,
}).$mount('#app')

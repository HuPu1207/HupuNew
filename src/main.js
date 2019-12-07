/*
 * @Author: your name
 * @Date: 2019-11-26 17:36:38
 * @LastEditTime: 2019-12-02 22:00:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store  from './store'
import router from './router'
import ElementUI from 'element-ui'; 
// import './assets/font/iconfont.css'; 
import './assets/font/iconfont.css';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

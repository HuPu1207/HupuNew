/*
 * @Author: CoolWind
 * @Date: 2019-11-26 09:13:29
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-02 09:39:14
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
// 引入router时，变量名必须用小写，与插件同名，否则页面出不来
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mint from 'mint-ui';
Vue.use(Mint); 

Vue.use(Antd);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')

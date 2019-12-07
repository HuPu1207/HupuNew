/*
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/font/iconfont.css';
import router from './router'
import store from './store'

// import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(router);

// const store=new Vuex.Store({
//   state:{token:''}
// })

new Vue({
  render: h => h(App),
  router,
  store,
=======
 * @Author: CoolWind
 * @Date: 2019-11-26 09:13:29
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-02 09:39:14
=======
 * @Author: 赵新朋
 * @Date: 2019-11-26 10:02:42
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-05 20:54:10
>>>>>>> zxp
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
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
>>>>>>> LPF
=======
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
>>>>>>> cq
=======
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
>>>>>>> zxp
}).$mount('#app')

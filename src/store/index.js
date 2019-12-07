/*
 * @Author: 赵新朋
 * @Date: 2019-12-05 21:01:56
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-05 21:09:36
 * @Description: 
 */
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
	state:{
		footerCls:[
			true,
			false,
			false,
			false
		],
		content:""
	},
	mutations:{
		changeFooterCls(state,index){
			if(index<0 || index>state.footerCls.length-1){
				return;
			}
			state.footerCls.forEach((item,index,arr)=>{
				arr[index]=false;
			});
			state.footerCls[index]=true;
		},
		sousuo(state,con){
			state.content=con;
		}
	},
	actions:{
		
	}
})

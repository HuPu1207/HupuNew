/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-19 16:18:23
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 */
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
    // 存储数据
    state:{
        footerCls:[
            true,
            false,
            false,
            false,
            false
        ]
        
    },
    getters:{

    },
    // 跟踪状态的，修改数据的
    mutations:{
        changeFooterCls(state,index){
            // 合法性判断(健壮性)
            if(index<0 || index>state.footerCls.length-1){
                return;
            }
            state.footerCls.forEach((item,index,arr)=>{
                // console.log(index);
                // console.log(arr);
                // console.log(item);
                arr[index]=false;
            });
            state.footerCls[index]=true;
        }
    },
    // 有异步操作，异步操作完成后，提交mutations
    // actions:{    //没有异步操作的时候，可以不要actions

    // }
})

/*
 * @Author: your name
 * @Date: 2019-11-04 17:24:20
 * @LastEditTime: 2019-12-07 11:22:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\vueone\src\router\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{//存储数据的
        imgs:[],
        count:0 
    },
    getters:{

    },
    mutations:{//跟踪状态,修改数据的
        getBanner(state,imgs){
            // if(!imgs.isArry()){
            //     return;
            // }
            state.imgs=imgs;
            state.count = imgs.length;
        }
    },
    actions:{//有异步操作的,异步操作完成后，提交mutations
        getBanner(context,func){
            fetch("http://localhost:3000/cqshoes")
            .then(res=>{
                return res.json()
            })
            .then(data=>{
                // this.imgs=data;
                context.commit('getBanner',data)
                func();  
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
})

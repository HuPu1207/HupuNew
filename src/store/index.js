/*
 * @Author: CoolWind
 * @Date: 2019-11-26 20:43:00
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-07 10:04:14
 * @Description: 
 */
import Vue from 'vue';
// cli 3.0引入vuex，x要小写
import VueX from 'vuex';

Vue.use(VueX);

let moduleA = {
    state: {
        kinds: [],
        currId: "",
        allLists: {},
        currList: [],
        oldList: "",
        currP: "",
        showFont: false
    },
    mutations: {
        // 获取论坛左边的所有类型
        getKinds(state,data){
            state.kinds = data;
            state.currId = data[0].kindid;
            state.currP = data[0].kindname;
        },
        // 改变论坛左边的ID，改变li样式
        changeKindid(state,info){
            state.currId = info.id;
            state.currP = info.name;
        },
        // 获取论坛右边的子类型
        getLists(state,data){
            state.allLists = data;
            for(let key in data){
                if(key==state.currId){
                    state.currList = data[key];
                }
            }
        },
        showFont(state){
            state.showFont = ! state.showFont;
        }
    },
    actions: {
        // 获取左边的类型
        getKinds(context){       
            fetch('http://localhost:3000/LPFkinds')
            .then(res=>res.json())
            .then(data=>{
                context.commit('getKinds',data);
            })
        },
        // 获取右边的类型
        getLists(context){
            fetch('http://localhost:3000/LPFkindlists')
            .then(res=>res.json())
            .then(data=>{
                context.commit('getLists',data)
            })
        }
    }
}

export default new VueX.Store({
    modules: {
        a: moduleA
    }
})
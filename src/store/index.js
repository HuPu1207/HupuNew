// LPF---moduleA ZS---moduleB CQ---moduleC ZXP---moduleD
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

let moduleB = {
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
}

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

let moduleC = {
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
}

let moduleD = {
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
	}
}

export default new VueX.Store({
    modules: {
        a: moduleA,
        b: moduleB,
        c: moduleC,
        d: moduleD
    }
})
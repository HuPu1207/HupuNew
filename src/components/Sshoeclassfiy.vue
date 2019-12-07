<!--
 * @Author: your name
 * @Date: 2019-11-09 10:15:47
 * @LastEditTime: 2019-11-28 17:54:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\vueone\src\components\FuwuClassify.vue
 -->
<template>
    <div class="box">
        <ul>
            <div style="display:none" >{{typename}}</div>
            <li v-for="(shoe,index) in shoes" :key="index" @click="btnNext">
                <img :src="shoe.img" alt="">
                <span>{{shoe.name}}</span>
                <span>￥{{shoe.price}}</span>
             </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:'Sshoeclassfiiy',
    props:['typename'],
    data(){
        return{
             allGoods:[],
             shoes:[],
        }
    },
    created() {
     //从后端获取数据     
     fetch('http://localhost:3000/cqshoes')
     .then(res=>{ 
         return res.json()
     })
     .then(data=>{
          this.allGoods = data;
         this.shoes = this.getGoodsByType(this.allGoods);
     })
     .catch(err=>{
         console.log(err);
     });
  },
    beforeUpdate(){
        console.log("数据更新了------------：");
        this.shoes = this.getGoodsByType(this.allGoods);
    },
    methods:{
        getGoodsByType(data){//根据类型获取数据
            let arr=[];
            for(let i in data){
                if(data[i].type==this.typename){
                    arr.push(data[i]);
                }
            }
            return arr;
        },
		btnNext(){
			this.$router.push({path:'/Detailpage'})
		}
  },

}
</script>
<style scoped>
.box{
    width: 96%;
    margin: 0 auto;
}
ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
ul li{
    width: 33%;
    height: 1.4rem;
    background-color: white;
    margin-bottom: .1rem;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
}
ul li img{
    display: block;
    width: 94%;
    height: .76rem;
    margin: 0 auto;
}
span{
    display: block;
    width: 94%;
    color: #666;
    margin: .05rem auto;
    text-align: center;
}
</style>

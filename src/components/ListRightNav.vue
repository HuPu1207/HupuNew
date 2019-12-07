<!--
 * @Author: your name
 * @Date: 2019-11-28 21:45:42
 * @LastEditTime: 2019-12-07 10:53:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\ListRightNav.vue
 -->
<template>
    <div class="box">
        <ul class="cq_news_box">
        <h3>----热门系列----</h3>
            <div style="display:none">{{typename}}</div>
			<router-link to="/ShopDeatilPage">
				<li v-for="(type,index) in types" :key="index" @click="btnNext">
				    <img :src="type.img" alt="">
				    <span>{{type.name}}</span>
				</li>
			</router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name:"ListRightNav",
    props:['typename'],
    data(){
        return{
            allGoods:[],
            types:[]
        }
    },
    created(){
        fetch("http://localhost:3000/cqlistTypesShoes")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.allGoods=data;
            // this.currtype=this.shoes[0].name
            this.types=this.getGoodsByType(this.allGoods);
        })
        .catch(err=>{s
            console.log(err)
        })
    },
    beforeUpdate(){
        console.log("数据更新了...")
        this.types=this.getGoodsByType(this.allGoods)
    },
    methods:{
        getGoodsByType(data){
            let arr=[];
            for(let i in data){
                if(data[i].type==this.typename){
                    arr.push(data[i])
                }
            }
            return arr;
        },
		btnNext(){
			this.$router.push({path:'/ShopDeatilPage'})
			
		}
    }
}
</script>
<style scoped>
.box{
    width: 70%;
    /* float: right; */
}
.cq_news_box{
    width: 100%;
    height: 5rem;
    float: right;
    background-color: white;
    /* display:flex; */
    /* flex-wrap: wrap; */
}
 h3{
    width: 100%;
    height: .3rem;
    /* background-color: chartreuse; */
    font-size: .16rem;
    line-height: .3rem;
    text-align: center;
    color: #666;
}
.cq_news_box li{
    width: 33.3%;
    height: 1rem;
    /* background-color: blue; */
    float: left;
}
.cq_news_box li img{
    display: block;
    width: 94%;
    height: .5rem;
    margin: 0 auto;
}
span{
    display: block;
    width: 94%;
    color: #666;
    font-size: .14rem;
    margin: .05rem auto;
    text-align: center;
}
</style>
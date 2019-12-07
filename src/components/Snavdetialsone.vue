<!--
 * @Author: your name
 * @Date: 2019-11-27 21:06:43
 * @LastEditTime: 2019-12-07 11:22:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\Snavdetialsone.vue
 -->
<template>
    <div class="box">
        <ul>
            <div style="display:none" >{{typename}}</div>
            <li v-for="(goodsname,index) in goodsnames" :key="index">
                <img :src="goodsname.img" alt="">
                <!-- <span class="span">{{goodsname.name}}</span> -->
                <span class="span">{{goodsname.desp}}</span>
                <span class="span">￥{{goodsname.price}}</span>
             </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Snavdetialsone",
    props:['typename'],
    data(){
        return{
            allGoods:[],
            goodsnames:[]
        }
    },
    created(){
        console.log(this.typename);
        fetch("http://localhost:3000/cqgoodsnamesone")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.allGoods=data;
            this.goodsnames=this.getGoodsByType(this.allGoods);
        })
        .catch(err=>{
            console.log(err)
        })
    },
    beforeUpdate(){
        // console.log("数据更新了...")
        
        this.goodsnames=this.getGoodsByType(this.allGoods)
        
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
        }
    }
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
    height: 1.8rem;
    background-color: white;
    /* margin-bottom: .1rem; */
}
ul li img{
    display: block;
    width: 80%;
    height: .6rem;
    margin: 0 auto;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
}
.span{
    display: block;
    margin: .1rem auto;
    width:94%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
<!--
 * @Author: your name
 * @Date: 2019-11-27 20:31:04
 * @LastEditTime: 2019-12-07 11:22:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\Snavlistone.vue
 -->
<template>
    <div class="box">
        <h3>最大热牌</h3>
        <ul class="cq_nav_box1">
            <li v-for="(goodsname,index) in goodsnames" :key="index" @click="changetype(goodsname.name,index)" :class="{active:curIndex == index}"> 
                {{goodsname.name}}
            </li>
        </ul>
        <div class="cq_news_box2">
            <Snavdetialsone :typename="currtype"></Snavdetialsone>
            <!-- <Snavdetialsone></Snavdetialsone> -->
        </div>
    </div>
</template>

<script>
// 子组件模块的引入
import Snavdetialsone from './Snavdetialsone'
export default {
    name:"Snavlistone",
    props:['typename'],
    data(){
        return{
            goodsnames:[],
            currtype:"",
            curIndex:0
        }
    },
    components:{
        Snavdetialsone
    },
    created(){
        fetch(" http://localhost:3000/cqtypesone")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.goodsnames = data;
            this.currtype = this.goodsnames[0].name;
            console.log(this.currtype)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
      changetype(typename,index){
          console.log(typename);
          this.currtype = typename;
          this.curIndex = index;
      }
  }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 100%;
}
h3{
    width: 28%;
    height: .4rem;
    font-size:.2rem;
    line-height: .4rem;
    text-align: center;
    background-color: white;
}
.cq_nav_box1{
    width: 100%;
    height: .4rem;
    background-color: white;
    margin-bottom: .2rem;
    display: flex;
    line-height: .4rem;
    padding-bottom: .02rem;
    overflow-x: auto;
    justify-content: space-around;
}
.active{
    color: #333;
    font-size: .18rem;
    font-weight: bold;
    background: url(../assets/img/bg1.jpg) center bottom no-repeat;
}
.cq_news_box2{
    width: 100%;
}
</style>
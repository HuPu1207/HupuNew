<!--
 * @Author: your name
 * @Date: 2019-11-28 15:23:43
 * @LastEditTime: 2019-12-07 11:22:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\Sshoenav.vue
 -->
<template>
    <div class="box">
        <h3>实战篮球鞋</h3>
        <ul class="cq_nav_box">
            <li v-for="(shoe,index) in shoes" :key="index" @click="changeType(shoe.name,index)" :class="{active:curIndex==index}">
               {{shoe.name}}
            </li>
        </ul>
        <div>
            <Sshoeclassfiy :typename="currtype"></Sshoeclassfiy>
        </div>
    </div>
</template>
<script>
import Sshoeclassfiy from './Sshoeclassfiy';

export default {
    name:"Sshoenav",
    data(){
        return{
            shoes:[],
            currtype:"",
            curIndex:0
        }
    },
    components:{
        Sshoeclassfiy
    },
    created(){
        fetch(" http://localhost:3000/cqshoetype")
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.shoes=data;
            this.currtype=this.shoes[0].name
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        changeType(typename,index){
            console.log(typename);
            this.currtype=typename;
            this.curIndex=index;
        }
    }
}
</script>
<style scoped>
.box{
    width: 100%;
}
h3{
    width: 33%;
    height: .4rem;
    font-size:.2rem;
    text-align: center;
    margin-top: .1rem;
    line-height: .4rem;
    background-color: white;
}
.cq_nav_box{
    width: 100%;
    height: .4rem;
    background-color: crimson; 
}
.cq_nav_box{
    width: 100%;
    height: .4rem;
    background-color: white;
    margin-bottom: .1rem;
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
.cq_img_box{
    width: 100%;
    height: 1.4rem;
    margin: 0 auto;
    background-color: white;
    display: flex;
}
.cq_img_box img{
    width: 94%;
    height: .8rem;
    display: block;
    margin: 0 auto;
    /* flex-wrap: wrap; */
}
.cq_img_box span{
    display: block;
    margin: .1rem auto;
    text-align: center;
}
</style>
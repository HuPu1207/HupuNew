<!--
 * @Author: your name
 * @Date: 2019-11-28 17:04:18
 * @LastEditTime: 2019-12-07 11:20:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\ListLeftNav.vue
 -->
<template>
    <div class="box">
        <ul>
            <li v-for="(type,index) in types" :key="index" @click="changetype(type.name,index)" :class="{active:curIndex==index}">
                <span>{{type.name}}</span>
                <span  :key="index" :class="{san:curIndex==index}"></span>
            </li>
        </ul>
        <!-- cq_right_box -->
        <div class="cq_right_box">
            <ListRightNav :typename="currtype"></ListRightNav>
        </div>
    </div>
</template>
<script>
import ListRightNav from './ListRightNav'

export default {
    name:"ListLeftNav",
    props:['typename'],
    data(){
        return{
            types:[],
            currtype:"",
            curIndex:0
        }
    },
    components:{
        ListRightNav
    },
    created(){
        fetch("  http://localhost:3000/cqlistTypes")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.types=data;
             this.currtype=this.shoes[0].name
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        changetype(typename,index){
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
    /* display: flex; */
}
ul{
    width: 30%;
    /* height:5rem; */
    background-color: rgb(246, 245, 245);
    float: left;
    margin-bottom: .1rem;
    margin-top: .5rem;
}
ul li{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    border-bottom: 1px solid #999;
    text-align: center;
}
ul li:hover .san{
    display: block;
}
.san{
    display: block;
    width:0;
    height:0;
    /* margin-left: .95rem; */
    margin-top: -.36rem;
    border-top:10px solid transparent;
    border-bottom:10px solid transparent;
    border-left:10px solid #cc3333;
}
.active{
    background-color: white;
}
.cq_right_box{
    width: 70%;
    height: 1rem;
    float: right;
    margin-top: .5rem;
    /* background-color: #cc3333; */
}
</style>
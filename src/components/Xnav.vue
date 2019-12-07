<!--
 * @Author: 赵新朋
 * @Date: 2019-11-26 11:05:08
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-04 16:58:49
 * @Description: 
 -->
<template>
    <div class="nav">
        <ul class="FirstLevel">
            <li :class="{aFcls:currCls==index}" v-for="(item,index) in navs" :key="index" @click="changeItem(item,index)">
                {{item.name}}
            </li>
        </ul>
        <ul class="Secondary" v-show="isShow">
            <li :class="{bFcls:Cls==index}" v-for="(itema,index) in schedule" :key="index" @click="changeCls(itema,index)">{{itema}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Xnav",
    data(){
        return{
            navs:[],
            schedule:["赛程","战队榜","选手榜","英雄榜"],
            currCls: 4,
            isShow:true,
            Cls:0
        }
    },
    created(){
        fetch('http://localhost:3000/Nav')
        .then(res=>{
           return res.json()
        })
        .then(data=>{
            this.navs=data
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        changeItem(item,index){
            this.currCls = index;
            console.log(item.name)
            if(item.name=="英雄联盟"||item.name=="王者荣耀"){
                this.isShow=true;
            }else{
                this.isShow=false

            }
        },
       changeCls(itema,index){
           this.Cls=index;
       } 
    }
}
</script>
<style lang="scss" scoped>
    .nav{
        top: .5rem;
        width:100%;
        overflow: hidden;
        overflow-x: auto;
        border-bottom: 1px solid rgb(233, 233, 233);
        background-color: #fff;
        .FirstLevel{
            width: 100%;
            height: .4rem;
            display: flex;
            overflow-x: auto;
            border-bottom: 1px solid rgb(233, 233, 233);
            li{
                font-size:14px;
                color: #666;
                line-height: .4rem;
                white-space: nowrap;
                text-align: center;
                margin-left: 16px;
            }
            .aFcls{
                font-size:16px;
                font-weight: bold;
                color:#000;
                border-bottom:1px solid rgb(210, 67, 67);
            }
        }
        .Secondary{
            width: 100%;
            height: .3rem;
            display: flex;
            li{
                font-size:10px;
                color: #666660;
                line-height: .3rem;
                white-space: nowrap;
                text-align: center;
                margin-left: 16px;
            }
            .bFcls{
                font-size: 14px;
                color: #c01d2e;
            }
        }
    }

</style>
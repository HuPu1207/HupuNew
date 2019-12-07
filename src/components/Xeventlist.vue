<!--
 * @Author: 赵新朋
 * @Date: 2019-11-28 14:25:35
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-04 16:29:00
 * @Description: 
 -->
<template>
    <div class="eventlist">
        <ul>
            <li v-for="(item,index) in datas" :key="index" @click="pathone">
                <h3>{{item.data}}</h3>
                <div class="match" v-for="(ite,index) in item.msg" :key="index">
                    <p class="title">
                        <b>{{ite.statu}}</b>
                        <em>{{ite.format}}</em>
                    </p>
                    <div class="info" >
                        <p v-for="(it,index) in ite.clan" :key="index">
                            <img :src="it.imgsrc" alt="">
                            <span>{{it.name}}</span>
                            <span>{{it.score}}</span>
                        </p>
                    </div>
                    <p class="collect">
                        <span>集锦</span> 
                        <img src="../../public/img/play.jpg" alt="">
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Xeventlist",
    data(){
        return{
            datas:[]
        }
    },
    created(){
        fetch("http://localhost:3000/infomation")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.datas=data
            console.log(this.datas)
        })
    },
    methods:{
        pathone(){
            this.$router.push({path:'/ListDetail'})
        }
    }
}
</script>
<style lang="scss" scoped>
.eventlist{
    margin-bottom: .5rem;
    width: 100%;
    overflow-y: auto;
    overflow: hidden;
    h3{
        display: block;
        width: 100%;
        height: .27rem;
        font-size: 12px;
        color: #000;
        font-weight: 600;
        background-color: #f6f7fb;
        line-height: .27rem;
        overflow: hidden;
        padding-left: 16px;
        border-bottom: 1px solid #f6f6f6;
    }
    .match{
        width: 100%;
        height: .7rem;
        padding-top: .1rem;
        border-bottom: 1px solid #f6f6f6;
        .title{
            float: left;
            height: .6rem;
            width: .9rem;
            margin-left: 16px;
            padding-right:4px;
            font-size: 10px;
            border-right: 1px solid #999;
            b{
                display: block;
            }
            em{
                display: block;
                font-style: normal;
                color: #666;
            }
        }
        .info{
            float: left;
            height: .6rem;
            width: 1.8rem;
            p{
                height: .3rem;
                line-height: .3rem;
                font-size: 14px;
                padding-left: 16px;
                img{
                    width: .25rem;
                    height: .25rem;
                    margin-right: 6px;
                    float: left;
                    margin-top: 3px;
                }
                span:first-child{
                    float: left;
                }
                span:last-child{
                    width: .2rem;
                    text-align: center;
                    float: right;
                }
            }
        }
        .collect{
            height: .6rem;
            line-height: .6rem;
            float: left;
            padding-left: 18px;
            span{
                float: left;
                font-size: 14px;
                color: #666;
            }
            img{
                float: left;
                width: 18px;
                height: 18px;
                padding-top: 21px;
            }
        }
    }
}
</style>
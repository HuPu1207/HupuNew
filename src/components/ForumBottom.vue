<!--
 * @Author: CoolWind
 * @Date: 2019-11-29 20:03:00
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-30 19:40:40
 * @Description: 
 -->
<template>
    <div class="forumBottom">
        <span>评论：</span>
        <div @click="showFont">
            <img src="../assets/images/coment01.jpg" alt="">
            <p>我来评论...</p>
        </div>
        <div>
            <i class="el-icon-chat-line-square"></i>
            <span>200</span>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'ForumBottom',
    data(){
        return{
            
        }
    },
    methods:{
        // postMsg(){
        //     axios.put('http://localhost:3000/LPFComments',{
        //             "body": {
        //                 "10005": [
        //                     {
        //                         "author": "kkkkobe",
        //                         "authorImg": "images/author04.jpg",
        //                         "date": "2019.1.3",
        //                         "comment": "令狐冲天下第二",
        //                         "lightnum": 150
        //                     }
        //                 ]
        //             },
        //             "headers": {
        //                 "Content-type": "application/json; charset=UTF-8"
        //             }
        //         }
        //     )
        //     .then(res=>{
        //         window.console.log(res.data);
        //     })
        //     .catch(err=>{
        //         window.console.log("出错了："+err);
        //     })
        // }
        showFont(){
            this.$store.commit('showFont');
        }
    }
}
</script>

<style scoped>
    p{
        margin-bottom: 0;
    }
    .forumBottom{
        width: 100%;
        height: .5rem;
        position: fixed;
        bottom: 0;
        background: white;
        border-top: 1px solid #ececec;
        box-sizing: border-box;
        padding: 0 .13rem;
    }
    .forumBottom>span{
        float: left;
        color: #a5a5a5;
        font-size: .12rem;
        padding-top: .12rem;
    }
    .forumBottom>div:nth-of-type(1){
        width: 1.35rem;
        border-bottom: 1px solid #878787;
        font-size: .14rem;
        color: #878787;
        float: left;
        padding-top: .11rem;
        padding-bottom: .07rem;
        margin-left: .1rem;
    }
    .forumBottom>div img{
        width: .16rem;
        height: .16rem;
        float: left;
    }
    .forumBottom>div p{
        padding-left: .25rem;
    }
    .forumBottom>div:nth-of-type(2){
        float: right;
        font-size: .12rem;
        color:#929292;
    }
    .forumBottom>div:nth-of-type(2) i,.forumBottom>div:nth-of-type(2) span{
        display: block;
    }
    .forumBottom>div:nth-of-type(2) .el-icon-chat-line-square{
        font-size: .15rem;
        text-align: center;
        padding-top: .1rem;
    }
</style>
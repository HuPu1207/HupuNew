<!--
 * @Author: CoolWind
 * @Date: 2019-11-29 17:14:14
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-07 10:03:17
 * @Description: 
 -->
<template>
    <div class="forumComment loadBox">
        <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="isLoadAll" ref="loadmore">
            <!-- 热门评论 -->
            <div class="hotComment">
                <div class="hotCommentTop">
                    <p><img src="../assets/images/hotcoment01.jpg" alt=""><span>这些回复亮了</span></p>
                    <p><span>最早回复</span><img src="../assets/images/hotcoment02.jpg" alt=""></p>
                </div>
                <ul class="hotCommentList">
                    <li v-for="(list,index) in hotObjComments" :key="index">
                        <div class="hotCommentList01">
                            <div>
                                <img :src="list.authorImg" alt="">
                                <p>
                                    <span>{{list.author}}</span>
                                    <span>{{list.date}}</span>
                                </p>
                            </div>
                            <div>
                                <img src="../assets/images/coment003.jpg" alt="">
                            </div>
                        </div>
                        <p class="hotCommentList02">
                            {{list.comment}}
                        </p>
                        <div class="hotCommentList03">
                            <div class="hotCommentList03box">   
                                <p @touchstart="lightAdd($event)"><img src="../assets/images/coment002.jpg" alt="">亮了<span ref="lightnums">({{list.lightnum}})</span></p>
                                <p><img src="../assets/images/coment001.jpg" alt="">回复</p>
                                <p><img src="../assets/images/coment004.jpg" alt=""></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 剩余评论 -->
            <div class="allComment">
                <div class="hotCommentTop">
                    <p><img src="../assets/images/hotcoment01.jpg" alt=""><span>全部回复</span></p>
                    <p><span>最早回复</span><img src="../assets/images/hotcoment02.jpg" alt=""></p>
                </div>
                <ul class="allCommentList">
                    <li v-for="(list,index) in coldObjComments" :key="index">
                        <div class="allCommentList01">
                            <div>
                                <img :src="list.authorImg" alt="">
                                <p>
                                    <span>{{list.author}}</span>
                                    <span>{{list.date}}</span>
                                </p>
                            </div>
                            <div>
                                <img src="../assets/images/coment003.jpg" alt="">
                            </div>
                        </div>
                        <p class="allCommentList02">
                            {{list.comment}}
                        </p>
                        <div class="allCommentList03">
                            <div class="allCommentList03box">
                                <p><img src="../assets/images/coment002.jpg" alt="">亮了<span>({{list.lightnum}})</span></p>
                                <p><img src="../assets/images/coment001.jpg" alt="">回复</p>
                                <p><img src="../assets/images/coment004.jpg" alt=""></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 提示 -->
            <p class="zeroComment">
                ---暂时没有更多评论了，上拉刷新试试---
            </p>
        </mt-loadmore>
        <!-- <a-pagination @change="onChange" :current="current" :total="30" class="pagiCls"/> -->
    </div>
</template>

<script>
// import Vue from 'vue';
// import pagination from 'ant-design-vue';
// Vue.use(pagination);

import Vue from 'vue';
import { Loadmore } from 'mint-ui';
Vue.use(Loadmore);

export default {
    name: 'ForumComment',
    props: ['id'],
    data(){
        return {
            currcomments: [],
            hotObjComments: [],
            coldObjComments: [],
            current: 1,
            isLoadAll: false,
            bottomStatus: ""
        }
    },
    created(){
        fetch('http://localhost:3000/LPFComments')
        .then(res=>res.json())
        .then(data=>{
            for(let key in data){
                if(key == this.id){
                    this.currcomments = data[key];
                }
            }
            this.getHotObjComments(this.currcomments);
            this.getColdObjComments(this.currcomments);
        })
    },
    methods: {
        getHotObjComments(arrObj){
            let max = arrObj[0].lightnum;
            let maxIndex = 0;
            for(var i=0;i<arrObj.length;i++){
                if(arrObj[i].lightnum>max){
                    max = arrObj[i].lightnum;
                    maxIndex = i;
                }
            }
            this.hotObjComments.push(arrObj[maxIndex]);
            if(this.hotObjComments.length<=2){
                arrObj.splice(maxIndex,1);
                this.getHotObjComments(arrObj);
            }else{
                return this.hotObjComments;
            }      
        },
        getColdObjComments(arrObj){
            let min = arrObj[0].lightnum;
            let minIndex = 0;
            for(var i=0;i<arrObj.length;i++){
                if(arrObj[i].lightnum<min){
                    min = arrObj[i].lightnum;
                    minIndex = i;
                }
            }
            this.coldObjComments.push(arrObj[minIndex]);
            if(this.coldObjComments.length<=4){
                arrObj.splice(minIndex,1);
                this.getColdObjComments(arrObj);
            }else{
                return this.coldObjComments;
            }      
        },
        lightAdd(e){
            let oldNum = e.target.lastElementChild.innerHTML;
            let newNum = oldNum.replace(/\(/,"");
            newNum = newNum.replace(/\)/,"");
            window.console.log(newNum);
        },
        onChange(current) {
            this.current = current;
        },
        loadBottom() {
            fetch('http://localhost:3000/LPFComments')
            .then(res=>res.json())
            .then(data=>{
                for(let key in data){
                    if(key == this.id){
                        this.currcomments = data[key];
                    }
                }
                this.getHotObjComments(this.currcomments);
                this.getColdObjComments(this.currcomments);
            });
            this.$refs.loadmore.onBottomLoaded();
        }
    }
}
</script>

<style scoped>
    ul{
        margin-bottom: 0;
    }
    p{
        margin-bottom: 0;
    }
    .forumComment{
        width: 100%;
    }
    .loadBox{
        overflow-y: scroll;
    }
    .hotCommentTop{ 
        width: 100%;
        height: .35rem;
        box-sizing: border-box;
        padding: 0 .13rem;
        line-height: .35rem;
        background: #fff9fe;
        margin: .1rem 0;
    }
    .hotCommentTop p:nth-of-type(1){
        float: left;
        font-size: .13rem;
        color: #5c5c5c;
    }
    .hotCommentTop p img{
        margin-top: .1rem;
    }
    .hotCommentTop p:nth-of-type(1) img{
        width: .04rem;
        height: .13rem;
        float: left;
        margin-right: .05rem;
    }
    .hotCommentTop p:nth-of-type(1) span{
        float: left;
    }
    .hotCommentTop p:nth-of-type(2){
        float: right;
    }
    .hotCommentTop p:nth-of-type(2) span{
        float: left;
        font-size: .13rem;
        color: #212020;
    }
    .hotCommentTop p:nth-of-type(2) img{
        width: .12rem;
        height: .13rem;
        float: left;
        margin-left: .05rem;
    }
    .hotCommentList,.allCommentList{
        width: 100%;
    }
    .hotCommentList li,.allCommentList li{
        width: 100%;
        padding-top: .12rem;
    }
    .hotCommentList01,.allCommentList01{
        width: 100%;
        padding: 0 .13rem;
        box-sizing: border-box;
        overflow: hidden;
    }
    .hotCommentList01>div:nth-of-type(1),.allCommentList01>div:nth-of-type(1){
        float: left;
    }
    .hotCommentList01>div:nth-of-type(2),.allCommentList01>div:nth-of-type(2){
        float: right;
    }
    .hotCommentList01>div:nth-of-type(1) img,.allCommentList01>div:nth-of-type(1) img{
        width: .32rem;
        height: .32rem;
        float: left;
        margin-right: .1rem;
    }
    .hotCommentList01>div:nth-of-type(1) p,.allCommentList01>div:nth-of-type(1) p{
        float: left;
    }
    .hotCommentList01>div:nth-of-type(1) p span,.allCommentList01>div:nth-of-type(1) p span{
        display: block;
    }
    .hotCommentList01>div:nth-of-type(1) p span:nth-of-type(1),.allCommentList01>div:nth-of-type(1) p span:nth-of-type(1){
        font-size: .12rem;
        color: #333333;
    }
    .hotCommentList01>div:nth-of-type(1) p span:nth-of-type(2),.allCommentList01>div:nth-of-type(1) p span:nth-of-type(2){
        font-size: .10rem;
        color: #878787;
    }
    .hotCommentList01>div:nth-of-type(2) img,.allCommentList01>div:nth-of-type(2) img{
        width: .16rem;
        height: .16rem;
        display: block;
    } 
    .hotCommentList02,.allCommentList02{
        width: 100%;
        box-sizing: border-box;
        font-size: .14rem;
        color: #000000;
        padding: .12rem .13rem .27rem .55rem;
    }
    .hotCommentList03,.allCommentList03{
        width: 100%;
        box-sizing: border-box;
        padding-left: .55rem;
        padding-right: .13rem;
        font-size: .11rem;
        color: #878787;
    }
    .hotCommentList03box,.allCommentList03box{
        border-bottom: .03rem solid #fcfcfc;   
        overflow: hidden; 
        padding-bottom: .07rem;
    }
    .hotCommentList03 p img,.allCommentList03 p img{
        width: .14rem;
        height: .18rem;
        display: block;
        float: left;
    }
    .hotCommentList03 .hotCommentList03box p:nth-of-type(3) img,.allCommentList03 .allCommentList03box p:nth-of-type(3) img{
        width: .16rem;
        height: .16rem;
    }
    .hotCommentList03 p:nth-of-type(1),.allCommentList03 p:nth-of-type(1){
        margin-right: .2rem;
    }
    .hotCommentList03 p:nth-of-type(1),.hotCommentList03 p:nth-of-type(2),.allCommentList03 p:nth-of-type(1),.allCommentList03 p:nth-of-type(2){
        float: left;
    }
    .hotCommentList03 p:nth-of-type(1) img,.hotCommentList03 p:nth-of-type(2) img,.allCommentList03 p:nth-of-type(1) img,.allCommentList03 p:nth-of-type(2) img{
        margin-right: .05rem;
    }
    .hotCommentList03 p:nth-of-type(3),.allCommentList03 p:nth-of-type(3){
        float: right;
    }
    .zeroComment{
        width: 100%;
        box-sizing: border-box;
        padding: .13rem;
        color: #878787;
        font-size: .12rem;
        text-align: center;
        margin-bottom: .4rem;
    }
    .mint-loadmore-bottom{
        display: block;
        margin: 0 auto;
    }
    .pagiCls{
        margin-bottom: .5rem;
    }
</style>
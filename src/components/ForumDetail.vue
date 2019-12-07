<!--
 * @Author: CoolWind
 * @Date: 2019-11-29 15:05:02
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-07 10:03:25
 * @Description: 
 -->
<template>
    <div class="forumdetail">
        <div class="themeId">{{id}}</div>
        <div class="detailTitle">
            <p>{{currtheme.title}}</p>
        </div>
        <div class="detailAuthor">
            <img :src="currtheme.authorImg" alt="">
            <div class="authorInfo">
                <p>{{currtheme.author}}</p>
                <p>
                    <span>{{currtheme.date}}</span>
                    <span>阅读&nbsp;{{currtheme.pageview}}</span>
                </p>              
            </div>
        </div>
        <div class="detailContent">
            <p>{{currtheme.content}}</p>
            <img :src="currtheme.contentImg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForumDetail',
    props: ['id'],
    data(){
        return {
            themoObj: [],
            currtheme: {}
        }
    },
    created(){
        // window.console.log('详情组件的id：'+this.id);
        fetch('http://localhost:3000/LPFtheme')
        .then(res=>res.json())
        .then(data=>{
            this.themoObj = data;
            for(let i in this.themoObj){
                if(this.themoObj[i].themeid == this.id){
                    this.currtheme = this.themoObj[i]
                }
            }
        })
        .catch(err=>{
            window.console.log('出错了：'+err);
        })
    }
}
</script>

<style scoped>
    p{
        margin: 0;
    }
    .themeId{
        display: none;
    }
    .forumdetail{
        width: 100%;
        box-sizing: border-box;
        padding: 0 .13rem;
    }
    .detailTitle{
        width: 100%;
        font-size: .21rem;
        color: #000000;
        padding-top: .1rem;
    }
    .detailAuthor{
        padding: .25rem 0;
    }
    .detailAuthor::after{
        content: "";
        width: 0;
        height: 0;
        clear: both;
        display: block;
        visibility: hidden;
    }
    .detailAuthor img{
        width: .32rem;
        height: .32rem;
        float: left;
        margin-right: .1rem;
    }
    .detailAuthor .authorInfo{
        float: left;
    }
    .authorInfo p:nth-of-type(1){
        font-size: .13rem;
        color: #575757;
        line-height: .13rem;
    }
    .authorInfo p:nth-of-type(2){
        font-size: .1rem;
        color: #8f8d8d;
        padding-top: .02rem;
    }
    .authorInfo p:nth-of-type(2) span{
        float: left;
    }
    .authorInfo p:nth-of-type(2) span:nth-of-type(1){
        margin-right: .12rem;
    }
    .detailContent{
        font-size: .17rem;
        color: #1c1c1c;
    }
    .detailContent img{
        display: block;
        width: 3.5rem;
        margin: .2rem auto 0;
    }
</style>
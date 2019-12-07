<!--
 * @Author: CoolWind
 * @Date: 2019-11-26 14:58:57
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-07 10:02:37
 * @Description: 
 -->
<template>
    <ul class="ForumBot01">
        <li v-for="(theme,index) in themelists" :key="index" > 
            <router-link :to='"/LPF_ForumDetailPage/"+theme.themeid'>
                <div class="liTop">
                    <img :src="theme.themeImg" alt="">
                    <span>{{theme.themekind}}</span>
                    <span>{{theme.author}}</span>
                </div>
                <div class="liCont">
                    <p>{{theme.title}}</p>
                </div>
                <div class="liBot">
                    <img src="../assets/images/coment00.jpg" alt="">
                    <span>{{theme.pageview}}</span>
                </div>
            </router-link>
        </li>
        <!-- <li>
            <div class="liTop">
                <img src="../assets/images/nba03.jpg" alt="">
                <span>真实娱乐圈</span>
                <span>皇马1号</span>
            </div>
            <div class="liCont">
                <p>陈坤啊陈坤</p>
            </div>
            <div class="liBot">
                <img src="../assets/images/coment00.jpg" alt="">
                <span>1000</span>
            </div>
        </li> -->
    </ul>
</template>

<script>

export default {
    name: 'ForumBot01',
    data(){
        return {
            themelists: []
        }
    },
    created(){
        fetch('http://localhost:3000/LPFtheme')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.themelists = data;
        })
        // .catch(err=>{
        //     // console.log('出错了：'+err);
        // })
    }
}
</script>

<style scoped>
    p{
        margin-bottom: 0;
    }
    li{
        box-sizing: content-box;
    }
    .ForumBot01{
        width: 100%;
    }
    .ForumBot01 li{
        width: 100%;
        box-sizing: border-box;
        padding: 0 .1rem;
        border: 1px solid #f1f1f1;
    }
    .ForumBot01 li span{
        float: left;
    }
    .liTop{
        padding: .13rem 0;
        overflow: hidden;
        line-height: .2rem;
    }
    .liTop img{
        float: left;
        width: .2rem;
        height: .2rem;
    }
    .liTop span:nth-of-type(1){
        font-size: .12rem;
        color: #8f9092;
        font-weight: bold;
        margin: 0 .1rem 0 .02rem;
    }
    .liTop span:nth-of-type(2){
        font-size: .12rem;
        color: #b0b0b2;
    }
    .liCont{
        font-size: .15rem;
        color: #191919;
        padding-bottom: .13rem;
    }
    .liBot{
        font-size: .1rem;
        color: #b0b0b2;
        padding-bottom: .12rem;
        overflow: hidden;
    }
    .liBot img{
        float: left;
        width: .12rem;
        height: .12rem;
    }
</style>
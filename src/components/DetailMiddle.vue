<!--
 * @Author: your name
 * @Date: 2019-12-02 09:18:07
 * @LastEditTime: 2019-12-07 11:20:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\DetailMiddle.vue
 -->
<template>
    <div class="box">
        <h4>adidas D Rose 10 active Orange 白黑橙</h4>
        <p>
            <span>选择配色</span>
            <span  @click="changeColor">全部配色</span>
        </p>
        <ul class="cq_img_box">
            <li v-for="(img,index) in imgs" :key="index" @click="changetype(img.img,index)" :class="{active:curIndex==index}">
                <img :src="img.img" alt="">
                <span>{{img.name}}</span>
            </li>
        </ul>
        <p>
            <span>选择尺码</span>
            <span>请选择尺码</span>
        </p>
        <ul class="cq_icon_box">
            <li>
                <span class="iconfont icon-security"></span>
                <span>正品保障</span>
            </li>
            <li>
                <span class="iconfont icon-daifahuo"></span>
                <span>严审货源</span>            
            <li>
                <span class="iconfont icon-shouhou"></span>
                <span>售后无忧</span>
            </li>
            <li>
                <span class="iconfont icon-icon1"></span>
                <span>专业鉴别</span>
            </li>
        </ul>
        <div class="cq_news_box">
            <h4>活动</h4>
            <p>
                <i class="el-icon-discount"></i>
                <span>识货团购</span>
                <span>adidas D Rose 10限时588抢购</span>
            </p>
            <span>查看详情</span>
        </div>
        <!-- imagebox -->
        <div class="cq_imagebox" v-show="isShow">
            <p>
                <span>请选择你喜欢的颜色</span>
                <i class="el-icon-close"  @click="noneBtn"></i>
            </p>
            <li v-for="(img,index) in imgs" :key="index">
                <img :src="img.img" alt="">
            </li>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailMiddle",
    data(){
        return{
            imgs:[],
            curIndex:0,
            isShow:false
        }
    },
    created(){
        fetch("http://localhost:3000/cqshoes")
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            // this.imgs=data;
            for(var i=0;i<6;i++){
                this.imgs.push(data[i])
            }
            //  this.currtype=this.imgs[0].name
            // this.imgs=this.getGoodsByType(this.allGoods)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        // AllColor(){}
       changetype(typename,index){
            console.log(typename);
            this.currtype=typename;
            this.curIndex=index;
        },
        changeColor(){
            this.isShow=true
        },
        noneBtn(){
            this.isShow=false
        }
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    position: relative;
}
h4{
    width: 98%;
    height: .5rem;
    margin: 0 auto;
    line-height: .22rem;
    color: #333;
    font-size: .2rem;
    font-weight: 600;
}
p{
    width: 96%;
    height: .5rem;
    margin: 0 auto;
    border-bottom: 1px solid #999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .16rem;
}
p span{
    margin: 0 .1rem;
}
p span:last-child{
    color: rgb(61, 61, 246);
}
.cq_img_box{
    width: 100%;
    height: 1.1rem;
    display: flex;
    overflow-x: auto;
    margin-top: .1rem;
}
.cq_img_box li{
    flex-shrink: 0;
    width: 24%;
    height: 1rem;
    margin: 0 .05rem;
    text-align: center;
    border: 1px solid #999;
}
.cq_img_box li img{
    width: 98%;
    height: .56rem;
    margin: .1rem auto;
}
.active{
    border: 1px solid red !important;
}

.cq_icon_box{
    width: 100%;
    height: .8rem;
    background-color: white;
    margin-top: .1rem;
    display: flex;
}
.cq_icon_box li{
    width: 25%;
    height: .8rem;
    text-align: center;
}
.cq_icon_box li span{
    display: block;
    font-size: .27rem;
    color:rgb(0, 0, 0); 
    margin:.1rem auto;
}
.cq_icon_box li span:last-child{
    font-size: .14rem;
}

.cq_news_box{
    width: 100%;
    height: .8rem;
    background-color: white;
    margin: .1rem auto;
}
.cq_news_box h4{
    height: .2rem;
    font-size: .2rem;
    color: black;
    font-weight: normal;
}
.cq_news_box p{
    width: 100%;
    height: .4rem;
    /* background-color: chocolate; */
}
i{
    color: #ff3333;
    font-size: .22rem;
}
.cq_news_box p span{
    color: rgb(73, 70, 70);
}
.cq_news_box p span:nth-child(2){
    color: black;
    font-size: .2rem;
}
.cq_news_box span{
    color: blue;
}
.cq_imagebox{
    width: 100%;
    height:5.6rem;
    background-color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 100;
}
.cq_imagebox li{
    width: 33.33%;
    float: left;
}

.cq_imagebox p i{
    color: #333;
     font-size: .24rem;
}

.cq_imagebox li img{
    display: block;
    width: 90%;
    margin: .1rem auto;
    
}
/* .cq_footer{
    width: 100%;
    height: .5rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    margin-top: .5rem;
}
.cq_footer div{
    width: 30%;
    height: .5rem;
    float: left;
    text-align: center;
}
.cq_footer div span{
    display: block;
    font-size: .18rem;
    color: #cc0000;
}
.cq_footer div span:last-child{
    font-size: .14rem;
    color: #333;
}
.cq_footer input{
    display: block;
    float: right;
    width: 30%;
    height: .36rem;
    line-height: .36rem;
    background-color: #cc0000;
    border:none;
    font-size:.14rem;
    color: #fff;
    margin: .07rem .2rem 0 0;
    border-radius: 4px;
} */
</style>
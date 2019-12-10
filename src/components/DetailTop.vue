<!--
 * @Author: your name
 * @Date: 2019-11-30 20:50:00
 * @LastEditTime: 2019-12-10 10:42:50
 * @LastEditors: CoolWind
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\DetailTop.vue
 -->
<template>
    <div class="box">
        <div class="cq_box_top">
           <i class="el-icon-arrow-left" @click="back"></i>
           <i class="el-icon-more"></i>
        </div>
        <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(img,index) in $store.state.imgs" :key="index">
                    <img :src="img.img" alt="">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"

export default {
    name:"DetailTop",
    data(){
        return{
            imgs:[]
        }
    },
    created(){
        this.$store.c.dispatch('getBanner',()=>{
                 this.$nextTick(function(){
                let swiper = new Swiper('.swiper-container', {
                        keyboard : true,
                        // virtualTranslate : true,
                        loop: true,
                        autoplay:true,
                        pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                        },
                    });
                })
            });
        },
    methods:{
        back(){
            this.$router.push({path:'/ShListPage'})
        }
    }
}
</script>
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.box{
    width: 100%;
    height: 100%;
}
.cq_box_top{
    width: 100%;
    height: .5rem;
    background-color: rgb(177, 10, 10);
    position: fixed;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
i{
    line-height: .5rem;
    height: .5rem;
    font-size:.24rem; 
    margin:0 .14rem;
    color: #fff;
}
.swiper-container {
    width: 100%;
    height: 1.6rem;
    margin-top: .5rem;
    margin-left: auto;
    margin-right: auto;
}
.swiper-slide img{
    width: 55%;
    height: 65%;
    margin-top: .2rem;
    margin-bottom: .5rem;
}
.swiper-slide {
    overflow: hidden;
    width: 100%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-container{
    --swiper-theme-color:#666;
}

</style>
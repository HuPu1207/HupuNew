<!--
 * @Author: your name
 * @Date: 2019-11-26 17:43:47
 * @LastEditTime: 2019-12-07 11:21:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\Sbanner.vue
 -->
<template>
    <div class="box">
         <!-- 轮播图-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <img :src="img.src" class="image">
                </div>
            </div>
            <!-- 豆豆 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";

export default {
    name:"Sbanner",
    data(){
        return{
            imgs:[]
        }
    },
    created(){
        fetch('http://localhost:3000/cqbannerimgs')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.imgs=data;
            this.$nextTick(function(){
            let swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                    spaceBetween: 1,
                    // centeredSlides: true,
                    loop: true,
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                })
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
body{
    overflow: hidden;
}
.box{
    width:100%;
    height: 100%;
    background-color: coral;
    margin-top: .5rem;
}

.swiper-wrapper{
    width: 80%;
}
.swiper-container{
    width: 100%;
    height: 2rem;
}
.image{
    width:100%;
    height: 1.5rem;
    margin-bottom:.2rem;
    border-radius: .1rem;
}
.swiper-slide {
    width: 100%;
    text-align: center;
    background: rgb(246, 246, 246);
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
    transition: 300ms;
    transform: scale(0.8);
}
.swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1);
}
.swiper-container{
    --swiper-theme-color: #ff3300;
}


</style>
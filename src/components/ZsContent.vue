<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="content" v-show="isShow">
    <!-- <div style="display:none" >{{typename}}</div> -->
    <ul >
        <li v-for="(content,index) in List" :key="index">
            <router-link to="/Index">
                <img :src="content.img" alt="">
                <span>{{content.name}}</span>
            </router-link>
        </li>

        <!-- 静态页面-->
        <!--<li>
            <router-link to="/Index">
                <img :src="imgObj.imgUrl01" alt="">
                <span>比赛</span>
            </router-link>
        </li>
        <li>
            <router-link to="/Index">
                <img :src="imgObj.imgUrl02" alt="">
                <span>排行</span>
            </router-link>
        </li>
        <li>
            <router-link to="/Index">
                <img :src="imgObj.imgUrl03" alt="">
                <span>视频</span>
            </router-link>
        </li>
        <li>
            <router-link to="/Index">
                <img :src="imgObj.imgUrl04" alt="">
                <span>视频</span>
            </router-link>
        </li>
        <li>
            <router-link to="/Index">
                <img :src="imgObj.imgUrl05" alt="">
                <span>装备</span>
            </router-link>
        </li> -->
    </ul>
  </div>
</template>

<script>
import Axios from "axios"

export default {
  name: 'ZsContent',
  props:['typename'],
  data(){
    return{
        // AllList:[],
        List:[],
        isShow:true,
    }
    // return{
    //     imgObj:{
    //         imgUrl01:require("../assets/img/a01.jpg"),
    //         imgUrl02:require("../assets/img/a02.jpg"),
    //         imgUrl03:require("../assets/img/a03.jpg"),
    //         imgUrl04:require("../assets/img/a04.jpg"),
    //         imgUrl05:require("../assets/img/a05.jpg"),
    //     }
    // }
  },
  created(){
      Axios.get('http://localhost:3000/ZsContent')
      .then((res)=>{
        this.List=res.data;
      })
      .catch(err=>{
          console.log(err);
      })
  },
  methods:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
    width:100%;
    height:.86rem;
    background: #ffffff;
    border-bottom: 1px solid #f6f6f6;
    // margin-top: .45rem;
    ul{
        width:100%;
        height:.86rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            a{
                color:#434247;
            }
            .iconfont{
                font-size:.22rem; 
                color:#434247;
            }
            span{
                display: block;
                margin-top: .15rem;
            }
            span:last-child{
                font-size:.1rem;
            }
            img{
                width: .28rem;
                height: .28rem;
            }
        }
    }
  }
</style>
<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: CoolWind
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
        margin-bottom: 0;
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
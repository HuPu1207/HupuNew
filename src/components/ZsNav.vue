<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="nav">
    <ul>
        <li v-for="(N,index) in List" :key="index" @click="changetype(N.name,index)" :class="{active:curIndex == index}">
            {{N.name}}
        </li>
        <div class="set">
            <span class="iconfont icon-gengduo"></span>
        </div>
    </ul>
    <!-- 新加 -->
    <div class="showgame">
        <Game :typename="currtype"></Game>
        <ZsContent v-if="isShow"></ZsContent>
        <ZsList :typename="currtype"></ZsList>
    </div>
  </div>
</template>

<script>
import Game from './Game';
import ZsContent from './ZsContent';
import ZsList from './ZsList';

export default {
  name: 'ZsNav',

  data(){
      return{
          List:[],
          currtype:"",
          curIndex:1,
          isShow:true,
      }
  },
  components:{
      Game,
      ZsContent,
      ZsList,
  },
  created(){
      fetch('http://localhost:3000/IndexNav')
      .then(res=>{
          return res.json();
      })
      .then(data=>{
        this.List=data;
        // console.log(data);
        this.currtype=this.List[1].name;
        console.log(this.currtype);
        // this.isShow=false;
      })
      .catch(err=>{
       console.log(err);
     })
  },
  methods:{
      changetype(typename,index){   
          console.log(typename);
        //   console.log(index);
        this.currtype=typename;
        this.curIndex=index;
        if(this.currtype=="推荐"||this.currtype=="英雄联盟"||this.currtype=="影视娱乐"||this.currtype=="关注"){
            // console.log(this.currtype);
            this.isShow=false;
        }else{
            this.isShow=true;
        }
      }
  }
}
</script>

<style lang="scss" scoped>
    .nav{
        width:100%;
        height:.48rem;
        // position: fixed;
        ul{
            width:100%;
            overflow-x:auto;
            line-height:.48rem;
            display: -webkit-box;
            color:#bdbec2;
            background:#ffffff;
            position: fixed;
            li{
                font-size:.13rem;
                margin-right:.21rem;
            }
            li:first-child{
                margin-left: .15rem;
            }
        }
        .set{
            width:.4rem;
            height:.48rem;
            background:#ffffff;
            text-align:center;
            line-height:.48rem;
            position:fixed;
            right:0;
            top:.5rem;
            .icon-gengduo{
                font-size:.09rem;
                color:#414048;
            }
        }
        //新加
        .showgame{
            width:100%;
            // height:2.15rem;
            // background: #ecedef;
            overflow: hidden;
            // margin-top: .5rem;
        }
    }
    .active{
        color: #c01d2e;
        font-size: .13rem;
        background: url(../assets/img/bg1.jpg) center bottom no-repeat;
    }
</style>
<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="game">
    <div style="display:none" >{{typename}}</div>
    <div class="box" v-for="(game,index) in GameList" :key="index">
        <!-- <router-link  :to='"/IndexDetialPage/"+list.id'> -->
            <div class="top">
                <h5>{{game.GameName}}</h5>
                <!-- <p ref="show" v-show="isShow">{{game.Time}}</p> -->
                <p v-if="game.Time!=''">{{game.Time}}</p>
            </div>
            <div class="bottom">
                <div class="imgbox">
                    <img :src="game.Pic1" alt="">
                    <span>{{game.Name1}}</span>
                </div>
                <div class="imgbox">
                    <p>{{game.Num}}</p>
                </div>
                <div class="imgbox">
                    <img :src="game.Pic2" alt="">
                    <span>{{game.Name2}}</span>
                </div>
            </div>
        <!-- </router-link> -->
    </div>

    <!-- 静态页面 -->
    <!-- <div class="box">
        <div class="top">
            <h5>常规赛</h5>
            <p>第三节 2.0秒</p>
        </div>
        <div class="bottom">
            <div class="imgbox">
                <img :src="imgObj.imgUrl01" alt="">
                <span>76人</span>
            </div>
            <div class="imgbox">
                <p>80-81</p>
            </div>
            <div class="imgbox">
                <img :src="imgObj.imgUrl02" alt="">
                <span>猛龙</span>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="top">
            <h5>常规赛</h5>
            <p>第二节 结束</p>
        </div>
        <div class="bottom">
            <div class="imgbox">
                <img :src="imgObj.imgUrl03" alt="">
                <span>开拓者</span>
            </div>
            <div class="imgbox">
                <p>62-54</p>
            </div>
            <div class="imgbox">
                <img :src="imgObj.imgUrl04" alt="">
                <span>公牛</span>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="top">
            <h5>常规赛</h5>
            <p>第二节 8:15</p>
        </div>
        <div class="bottom">
            <div class="imgbox">
                <img :src="imgObj.imgUrl05" alt="">
                <span>湖人</span>
            </div>
            <div class="imgbox">
                <p>33-30</p>
            </div>
            <div class="imgbox">
                <img :src="imgObj.imgUrl06" alt="">
                <span>马刺</span>
            </div>
        </div>
    </div>
    <div class="box">
        <div class="top">
            <h5>常规赛</h5>
            <p>第三节 2.0秒</p>
        </div>
        <div class="bottom">
            <div class="imgbox">
                <img :src="imgObj.imgUrl07" alt="">
                <span>雷霆</span>
            </div>
            <div class="imgbox">
                <p>今日11:30</p>
            </div>
            <div class="imgbox">
                <img :src="imgObj.imgUrl08" alt="">
                <span>勇士</span>
            </div>
        </div>
    </div> -->
  </div>
</template>

<script>
import Axios from "axios"

export default {
  name: 'Game',
  props:['typename'],  //NBA  国际足球.....
  data(){
      return{
        allGameList:[],
        GameList:[],
        // isShow:true,

      }
    // return{
    //     imgObj:{
    //         imgUrl01:require("../assets/img/game01.jpg"),
    //         imgUrl02:require("../assets/img/game02.jpg"),
    //         imgUrl03:require("../assets/img/game03.jpg"),
    //         imgUrl04:require("../assets/img/game04.jpg"),
    //         imgUrl05:require("../assets/img/game05.jpg"),
    //         imgUrl06:require("../assets/img/game06.jpg"),
    //         imgUrl07:require("../assets/img/game07.jpg"),
    //         imgUrl08:require("../assets/img/game08.jpg")
    //     }
    // }
  },
  created(){
      Axios.get('http://localhost:3000/Game')
      .then((res)=>{
          this.allGameList=res.data;
          this.GameList=this.getGamesByType(this.allGameList);
      })
      .catch(err=>{
          console.log(err);
      })
  },
  beforeUpdate(){
    //   console.log("测试测试测试game");
      this.GameList=this.getGamesByType(this.allGameList);
  },
  methods: {
    getGamesByType(data){//根据类型获取数据
        let arr=[];
        for(let i in data){
        if(data[i].type==this.typename){
            arr.push(data[i]);
        }
    }
        return arr;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.game{
    width:100%;
    // height:2.15rem;
    background: #ecedef;
    overflow: hidden;
    margin-top: .48rem;
    .box{
        width: 1.74rem;
        height: .95rem;
        background: #ffffff;
        border-radius: 5px;
        margin-top: .09rem;
        float: left;
        margin-left: 9px;
        .top{
            height: .25rem;
            h5{
                width: .7rem;
                line-height: .25rem;
                text-align: center;
                font-size:.1rem;
                float: left;
                color: #83868f;
                font-weight: normal;
            }
            p{
                width: 0.8rem;
                height: .18rem;
                background: #c01d2e;
                float: right;
                font-size: .08rem;
                text-align: center;
                border-radius: 10px;
                margin: 3px .08rem 0 0;
                color: #ffffff;
                border-bottom: 1px solid #9b2e3a;
            }
        }
        .bottom{
            height: .7rem;
            display: flex;
            align-items: center;
            .imgbox{
                // width: 33.33%;
                text-align: center;
                img{
                    width: .39rem;
                    height: .39rem;
                    text-align: center;
                    margin-left: 10px;
                    border-radius: 50%;
                }
                span{
                    display: block;
                    color: #1c1f26;
                    font-size: .1rem;
                    margin-top: 3px;
                }
                p{
                    width: .7rem;
                    margin-bottom: 0.17rem;
                    margin-left: -6px;
                }
            }
        }
    }
    .box:last-child{
        margin-bottom: .09rem;
    }
}
</style>
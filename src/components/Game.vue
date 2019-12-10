<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: CoolWind
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="game">
    <div style="display:none" >{{typename}}</div>
    <div class="box" v-for="(game,index) in GameList" :key="index">
        <router-link to="/ListDetail">
            <div class="top">
                <h5>{{game.GameName}}</h5>
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
        </router-link>
    </div>
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
      }
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
            display: flex;
            justify-content: space-between;
            h5{
                width: .7rem;
                line-height: .25rem;
                text-align: center;
                font-size:.1rem;
                color: #83868f;
                font-weight: normal;
            }
            p{
                width: 0.8rem;
                height: .18rem;
                background: #c01d2e;
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
            justify-content: space-around;
            box-sizing: border-box;
            padding: 0 0.1rem;
            .imgbox{
                // width: 33.33%;
                text-align: center;
                img{
                    width: .39rem;
                    height: .39rem;
                    text-align: center;
                    // margin-left: 10px;
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
                }
            }
        }
    }
    .box:last-child{
        margin-bottom: .09rem;
    }
    a{
        color: #83868f;
    }
}
</style>
<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="comments">
    <div class="Ftop">
        <div class="top">
            <div class="topleft">
                <img src="../assets/img/comment02.jpg" alt="">
                <span>评论</span>
                <!-- <span>{{type}}</span> -->
            </div>
            <div class="topright">
                <span>最早回复</span>
                <img src="../assets/img/comment01.jpg" alt="">
            </div>
    </div>
        </div>
    <div class="content" v-for="(commont,index) in currcomment" :key="index" >
        <div class="C_left">
            <img :src="commont.Useravatar" alt="">
        </div>
        <div class="C_right">
            <div class="R_top">
                <p>{{commont.UserName}}</p>
                <img src="../assets/img/more.jpg" alt="">
            </div>
            <div class="R_time">
                42分钟前
            </div>
            <div class="R_content">
                {{commont.UserContent}}
            </div>
            <div class="R_bottom">
                <span class="iconfont icon-liangle-zuqiu"></span>
                <span class="typeface">亮了({{commont.Light}})</span>
                <span class="iconfont icon-xinxi"></span>
                <span class="typeface">评论({{commont.Transpond}})</span>
                <span class="iconfont icon-huifu"></span>
                <span class="typeface">回复</span>
                <span class="iconfont icon-zhuanfa"></span>
            </div>
        </div>
    </div>
    <span class="has" v-show="ifComment">还没有评论，快来抢占沙发</span>
<!--     
    <div class="content">
        <div class="C_left">
            <img src="../assets/img/u01.jpg" alt="">
        </div>
        <div class="C_right">
            <div class="R_top">
                <p>不听话的Chirs</p>
                <img src="../assets/img/more.jpg" alt="">
            </div>
            <div class="R_time">
                42分钟前
            </div>
            <div class="R_content">
                詹皇威武，打的太好了，看的很激动詹皇威武，打的太好了，看的很激动。
                詹皇威武，打的太好了，看的很激动詹皇威武，打的太好了，看的很激动。
            </div>
            <div class="R_bottom">
                <span class="iconfont icon-liangle-zuqiu"></span>
                <span class="typeface">亮了(168)</span>
                <span class="iconfont icon-xinxi"></span>
                <span class="typeface">评论(38)</span>
                <span class="iconfont icon-huifu"></span>
                <span class="typeface">回复</span>
                <span class="iconfont icon-zhuanfa"></span>
            </div>
        </div>
    </div> -->
  </div>
</template>

<script>
import Axios from "axios"

export default {
  name: 'ZsComment',
  props:['id'],
//   props:['id','type'],
  data(){
      return{
        allcomment: {},     //所有评论
        currcomment: [],     
        currcomment01: [],
        obj:{
            '这些回复亮了':'getHot',
            '冷门回复':'getCold'
        },
        hot: [],
        cold: []
      }
  },
  computed:{
      ifComment(){
        if(!this.currcomment) {
          return true;
        }
        let arr = Object.keys(this.currcomment);
        return arr.length==0;
        return true;
      }
  },
  created() {
     //从后端获取数据     
     Axios.get('http://localhost:3000/Zscomment')
     .then(res=>{ 
        // console.log(res.data);
        this.allcomment =res.data;
        this.currcomment = this.allcomment[this.id];  //对应id的所有评论
        // console.log("---------");
        // console.log(this.currcomment);

        // let currtype= this.obj[this.type];
        // this.currcomment01 = this[currtype](this.currcomment);
        // console.log(currtype);   //getHot  getCold
        // console.log(this.currcomment01);

        // this.currcomment01 = this[this.obj[this.type]](this.currcomment);
        // console.log(this.obj[this.type]);   //getHot  getCold
        // console.log(this[this.obj[this.type]](this.currcomment));   
     })
     .catch(err=>{
         console.log(err);
     });
  },
  methods:{
    // getHot(currcomment){
    //     console.log(currcomment+"--------------------")
    //     let max = currcomment[0].Light;
    //     let maxIndex = 0;
    //     for(var i=0;i<currcomment.length;i++){
    //         if(currcomment[i].Light>max){
    //             max = currcomment[i].Light;
    //             maxIndex = i;
    //         }
    //         this.hot.push(currcomment[maxIndex]);
    //     }  
    //     if(this.hot.length<=3){         //前三条
    //         // currcomment.splice(minIndex,1);

    //         currcomment.splice(0,1,maxIndex);
    //         this.getHot(currcomment);
    //     }else{
    //         // console.log(this.hot);
    //         return this.hot;
    //     }      
    // },
    // getCold(currcomment){
    //     let min = currcomment[0].Light;
    //     let minIndex = 0;
    //     for(var i=0;i<currcomment.length;i++){
    //         if(currcomment[i].Light<min){
    //             min = currcomment[i].Light;
    //             minIndex = i;
    //         }
    //         this.cold.push(currcomment[minIndex]);
    //     }
    //     if(this.cold.length<2){        //后两条
    //         // currcomment.splice(minIndex,1);
    //         currcomment.splice(0,1,maxIndex);
    //         this.getCold(currcomment);
    //     }else{
    //         // console.log(this.cold);
    //         return this.cold;
    //     }      
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.comments{
    width: 100%;
    margin-bottom: .48rem;
    .Ftop{
        width: 100%;
        background: #fbfbfb;
        height: .36rem;
        .top{
            width: 95%;
            height: .36rem;
            margin: 0 auto;
            .topleft{
                width: 1.3rem;
                height: 100%;
                float: left;
                display: flex;
                align-items: center;
                img{
                    width: 5px;
                    height: .125rem;
                    float: left;
                    margin-right: .05rem;
                }
                span{
                    float: left;
                    font-size: .14rem;
                    color: #4e5158;
                }
            }
            .topright{
                width: .8rem;
                height: 100%;
                float: right;
                display: flex;
                align-items: center;
                justify-content: space-between;
                img{
                    width: .12rem;
                    height: .13rem;
                }
                span{
                    font-size: .14rem;
                    color: #191c23;
                }
            }
        }
    }
    .content{
        width: 95%;
        height: 1.5rem;
        margin: 0 auto;
        .C_left{
            width: .37rem;
            height: 1.5rem;
            float: left;
            img{
                width: .33rem;
                height: .33rem;
                border-radius: 6px;
                margin-top: .17rem;
            }
        }
        .C_right{
            width: 3.18rem;
            height: 100%;
            float: right;
            border-bottom: 1px solid #fafafa;
            .R_top{
                height: .2rem;
                margin-top: .17rem;
                p{
                    font-size: .14rem;
                    color: #4e5158;
                    float: left;
                }
                img{
                    width: .1rem;
                    height: .2rem;
                    float: right;
                }
            }
            .R_time{
                color: #7c7e84;
                font-size: .1rem;
            }
            .R_content{
                margin-top: .16rem;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .R_bottom{
                margin-top: .2rem;
                span{
                    float: left;
                }
                .iconfont{
                    font-size: .16rem;
                    margin-right: 3px;
                }
                .typeface{
                    font-size: .12rem;
                    margin-right: .1rem;
                }
                .icon-zhuanfa{
                    float: right;
                }
            }
        }
    }
    .has{
        margin-left: .2rem;
    }
}
</style>
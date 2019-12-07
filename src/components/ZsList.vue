<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="list">
    <div style="display:none" >{{typename}}</div>
    <ul>
        <li v-for="(list,index) in List" :key="index">
            <router-link  :to='"/IndexDetialPage/"+list.id'>
                <div class="left">
                    <h3>{{list.Title}}</h3>
                    <div class="dian">
                        <span><img :src="msg" alt=""></span>
                        <span>{{list.Msg}}</span>
                        <span><img :src="light" alt=""></span>
                        <span>{{list.Light}}</span>
                        <span>置顶</span>
                    </div>
                </div>
                <div class="right">
                    <img :src="list.Img" alt="">
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios"

export default {
  name: 'ZsList',
  props:['typename'],
  data(){
      return{
        msg:require("../assets/img/message.jpg"),
        light:require("../assets/img/light.jpg"),
        // img:require("../assets/img/b01.jpg"),
        AllList:[],
        List:[]
      }
  },
  created(){
    Axios.get('http://localhost:3000/ZsList')
        .then((res)=>{
            // console.log(res.data);
            this.AllList=res.data;
            this.List=this.getListsByType(this.AllList);
        })
        .catch(err=>{
            console.log(err);
        })
  },
  beforeUpdate(){
    //   console.log("测试测试测试game");
      this.List=this.getListsByType(this.AllList);
  },
  methods: {
    getListsByType(data){//根据类型获取数据
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
.list{
    width:100%;
    border-bottom: 1px solid #ffffff;    
    margin-top: .1rem;
    margin-bottom: .57rem;
    ul{
        li{
            height:.95rem;
            border-bottom: 1px solid #f6f6f6;
            .left{
                width: 67%;
                height: .95rem;
                float: left;
                h3{
                    // height: .69rem;
                    font-weight: normal;
                    color: #aaaaaa;
                    font-size: .15rem;
                    margin-left: .16rem;
                    letter-spacing: 1px;
                    margin-top: .17rem;
                }
                .dian{
                    margin-top: .16rem;
                    span{
                        float: left;
                        font-size: .1rem;
                        color: #96999e;
                        img{
                            width: .12rem;
                            height: .12rem;
                        }
                    }
                    span:first-child{
                        margin-left: .18rem;
                        margin-right: .05rem;
                    }
                    span:last-child{
                        width: .24rem;
                        height: .15rem;
                        float: right;
                        color: #ff3f4c;
                        border: 1px solid #d39297;
                        text-align: center;
                        line-height: .15rem;
                    }
                    span:nth-child(3){
                        margin-left: .18rem;
                        margin-right: .05rem;
                    }
                }
            }
            .right{    
                /* width: 33%; */
                height: .95rem;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: .9rem;
                    height: .68rem;
                    text-align: center;
                    line-height: .68rem;
                }
            }
        }
    }
  }
</style>
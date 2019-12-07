<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="comment">
        <div class="speak">
            <p>第一页</p>
            <div class="write">
                <div class="box" @click="show()">
                    <span class="iconfont icon-xiepinglun"></span>
                    我来评论...
                </div>
            </div>
            <div class="zhuan">
                <div class="icon">
                    <span class="iconfont icon-xinxi"></span>
                    <span>91</span>
                </div>
                <div class="icon icon_two">
                    <span class="iconfont icon-dianzan"></span>
                    <span>91</span>
                </div>
                <div class="icon">
                    <span class="iconfont icon-zhuanfa"></span>
                    <span>91</span>
                </div>
            </div>
        </div>
        <mt-popup v-if="isshow" v-model="popupVisible" position="middle" class="show">
            <WriteComment></WriteComment>
        </mt-popup>
  </div>
</template>

<script>
import WriteComment from '../components/WriteComment.vue'

import Vue from 'vue';
Vue.component(Popup.name, Popup);
import { Popup } from 'mint-ui';

import Axios from "axios"


export default {
  name: 'ZsWriteComment',
  data(){
      return{
        popupVisible:false,
        isshow:false,
      }
  },
  components:{
      WriteComment
  },
  methods:{
      show(){
        this.popupVisible=true; 
        this.isshow=true;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.comment{
    width: 100%;
    height: .46rem;
    margin: 0 auto;
    background: #ffffff;
    border-top: 1px solid #dddce1;
    p{
        width: .62rem;
        height: 100%;
        line-height: .46rem;
        float: left;
        margin-left: .1rem;
        font-size: .13rem;
        color: #96999f;
    }
    .write{
        width: 1.35rem;
        height: 100%;
        float: left;
        .box{
            width: 100%;
            height: .25rem;
            margin-top: .1rem;
            border-bottom: 3px solid #9699a0;
            color: #827f93;
            .icon-xiepinglun{
                font-size: .17rem;
                margin-right: .05rem;
            }
        }
    }
    .zhuan{
        width: 1.27rem;
        height: 100%;
        float: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
            width: .44rem;
            text-align: center;
            // height: .05rem;
            .iconfont{
                font-size: .2rem;
            }
            span{
                display: block;
                width: .44rem;
                // height: .05rem;
            }
        }
    }
    .show{
        width: 100%;
    }
}
</style>
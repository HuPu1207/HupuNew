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
      
  </div>
</template>

<script>

export default {
  name: 'ZsMessage',

  data(){
      return{
        
      }
  },
  components:{

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
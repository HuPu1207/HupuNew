<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: CoolWind
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="bottom">
    <ul>
        <li class="index">
            <router-link to="/Index">
                <!-- <span class="iconfont icon-weibiaoti1"></span>
                <span>首页</span> -->
                <div :class="{'red':footerCls[0]}" @touchstart="changeCls(0)">
                    <span class="iconfont icon-weibiaoti1"></span>
                    <p>首页</p>
                </div>
            </router-link>
        </li>
        <li>
            <router-link to="/List">
                <!-- <span class="iconfont icon-wodebisai"></span>
                <span>比赛</span> -->
                <div :class="{'red':footerCls[1]}" @touchstart="changeCls(1)">
                    <span class="iconfont icon-wodebisai"></span>
                    <p>比赛</p>
                </div>
            </router-link>
        </li> 
        <li>
            <router-link to="/LPF_ForumPage">
                <!-- <span class="iconfont icon-shequ"></span>
                <span>社区</span> -->
                <div :class="{'red':footerCls[2]}" @touchstart="changeCls(2)">
                    <span class="iconfont icon-shequ"></span>
                    <p>社区</p>
                </div>
            </router-link>
        </li>
        <li>
            <router-link to="/ShIndex">
                <!-- <span class="iconfont icon-xiezi"></span>
                <span>识货</span> -->
                <div :class="{'red':footerCls[3]}" @touchstart="changeCls(3)">
                    <span class="iconfont icon-xiezi"></span>
                    <p>识货</p>
                </div>
            </router-link>
        </li>
        <li>
            <router-link to="/ZsMore">
            <!-- <span class="iconfont icon-gengduo1"></span>
                <span>更多</span> -->
                <div :class="{'red':footerCls[4]}" @touchstart="changeCls(4)">
                    <span class="iconfont icon-gengduo1"></span>
                    <p>更多</p>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ZsFooter',
  data(){
      return {

      }
  },
  computed:{
      footerCls(){
          return this.$store.state.b.footerCls;
      }
  },
  methods:{
      changeCls(index){
          console.log(index);
          //提交mutations
          this.$store.commit('changeFooterCls',index);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bottom{
    width:100%;
    height:.56rem;
    background: #ffffff;
    ul{
        width:100%;
        height:.56rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            text-align: center;
            a{
                color: #434247;
                .red{
                    .iconfont{
                        font-size:.2rem; 
                        color: #c01d2e !important;
                    }
                    p{
                        color: #c01d2e !important;
                    }
                }
            }
        }
    }
  }
</style>
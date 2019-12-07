<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: 赵新朋
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="top">
    <ul>
        <li class="index">
            <router-link to="/Index">
                <span class="iconfont icon-weibiaoti1"></span>
                <span>首页</span>
            </router-link>
        </li>
        <li>
            <router-link to="/Index">
                <span class="iconfont icon-wodebisai"></span>
                <span>比赛</span>
            </router-link>
        </li>
        <li>
            <router-link to="/Index">
                <span class="iconfont icon-shequ"></span>
                <span>社区</span>
            </router-link>
        </li>
        <li>
            <router-link to="/Index">
                <span class="iconfont icon-xiezi"></span>
                <span>识货</span>
            </router-link>
        </li>
        <li>
            <router-link to="/Index">
            <span class="iconfont icon-gengduo1"></span>
                <span>更多</span>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ZsFooter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.top{
    position: fixed;
    bottom: 0;
    width:100%;
    height:.56;
    background: #ffffff;
    background: orange;
    ul{
        width:100%;
        height:.56rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            .iconfont{
                font-size:.22rem; 
                color:#434247;
            }
            span{
                display: block;
            }
            span:last-child{
                font-size:.1rem;
                margin-top:2px;
            }
        }
    }
  }
</style>
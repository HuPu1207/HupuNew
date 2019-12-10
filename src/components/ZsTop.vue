<!--
 * @Author: CoolWind
 * @Date: 2019-12-09 09:11:57
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-10 09:55:57
 * @Description: 
 -->

<template>
  <div class="top">
    <h1><em>HUPU</em></h1>
    <div class="midtop">
      <div class="midbox">
        <i class="el-icon-search"></i>
        <p>杜兰特 | 库里 | 哈特</p>
      </div>
    </div>
    <div class="righttop">
      <span class="iconfont icon-fabu"></span>
      <span class="icon">发布</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZsTop',
}
</script>

<style lang="scss" scoped>
.top{
    width:100%;
    height:.5rem;
    background:#c01d2e;
  }
  h1{
    width:.83rem;
    // line-height:.5rem;
    text-align:center;
    font-size:.15rem;
    float:left;
    color:#fefefe;
    padding-top: .15rem;
  }
  .midtop{
    width:2.41rem;
    height:.5rem;
    float:left;
    display:flex;
    align-items:center;
  }
  i{
    font-size:.16rem;
    color:#ffdbe0;
    margin:0 10px 0 4px;
    float:left;
    line-height:.28rem;
  }
  p{
    font-size:.12rem;
    color:#fefdfe;
    float:left;
  }
  .righttop{
    width:.5rem;
    text-align:center;
    float:left;
    margin-top:.08rem;
    color:#fefefe;
  }
  .midbox{
    width:100%;
    height:.28rem;
    border-bottom:1px solid #ea6e7b;
    line-height:.28rem;
  }
  span{
    display:block;
  }
  .icon-fabu{
    font-size:.16rem;
  }
  .icon{
    font-size:.1rem;
  }
  </style>
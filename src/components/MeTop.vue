<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-12-06 14:48:55
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->

<template>
    <div class="metop">
        <div class="one">
            <span class="iconfont icon-shoucang"></span>
            <p>收藏</p>
        </div>
        <div class="one mid">
            <span class="iconfont icon-yejian"></span>
            <p>夜间</p>
        </div>
        <div class="one" @click="goSet">
            <span class="iconfont icon-shezhi"></span>
            <p>设置</p>
        </div>
    </div>  
</template>

<script>

export default {
  name: 'MeTop',
  data () {
    return {
      
    }
  },
  methods:{
      goSet(){
          this.$router.push({
              path:"/Index"
          })
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.metop{
    width:100%;
    height: .44rem;
    background: #e92b2b;
    display: flex;
    align-items: center;
    .one{
        width: .3rem;
        font-size: .08rem;
        text-align: center;
        .iconfont{
            font-size: .18rem;
        }
    }
    .one:first-child{
        margin-left: 2.5rem;
    }
    .mid{
        margin: 0 .1rem;
    }
}

</style>

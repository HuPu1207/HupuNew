<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-12-06 16:27:47
 * @LastEditors: CoolWind
 * @lastEditTime: Do not Edit
 -->

<template>
    <div class="melogin"> 
        <div class="Box">
            <div class="one">
                <span class="iconfont icon-liulanjilu"></span>
                <p>浏览记录</p>
            </div>
            <div class="one">
                <span class="iconfont icon-yijianfankui"></span>
                <p>消息</p>
            </div>
            <div class="one">
                <span class="iconfont icon-erji"></span>
                <p>意见反馈</p>
            </div>
        </div>
    </div>  
</template>

<script>

export default {
  name: 'melogin',
  data () {
    return {
      
    }
  },
  methods:{
      
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.melogin{
    width:100%;
    height: .72rem;
    background: #ffffff;
    display: flex;
    align-items: center;
    .Box{
        width: 3.56rem;
        height: .68rem;
        margin: 0 auto;
        box-shadow: 0 0 3px 2px #cccccc;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .one{
            // width: .55rem;
            font-size: .12rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .iconfont{
                font-size: .24rem;
            }
            p{
                margin-bottom: 0;
            }
        }
    }
}

</style>

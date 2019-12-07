<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-12-02 18:01:41
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="box">
        <!--左箭头-->  
        <img  src="../assets/img/back.png" @click="back()" /> 
        <div class="backcenter">
        <span>新闻</span> 
        </div>
        <span class="last">···</span>
    </div>  
</template>

<script>

export default {
  name: 'ZsBack',
  data () {
    return {
      
    }
  },
  methods:{
      back(){
        this.$router.go(-1);
      }
  }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: .33rem;
    margin: 0 auto;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: .17rem;
        height: .17rem;    
        float: left;
        margin-left: .1rem;
        line-height: .39rem;
    }
    .backcenter{
        float: left;
        font-size: .16rem;
        span{
            display: block;
            line-height: .3rem;
        }
    }
    .last{
        width: .35rem;
        font-size: .3rem;
        text-align: center;
        float: right;
        line-height: .3rem;
        margin-right: .1rem;
    }
}
</style>

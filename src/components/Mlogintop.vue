<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-12-06 15:01:43
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="box"> 
        <div class="mac">
          <i class="el-icon-close" @click="back()"></i>
        </div>
    </div>  
</template>

<script>

export default {
  name: 'Mlogintop',
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

<style scoped>
.box{
    background: white;
    width: 100%;
    height: .3rem;
    margin-bottom: .1rem;
}
.mac{
    width: 85%;
    margin: 0 auto;
    height: .3rem;
    display: flex;
    align-items: center;
    margin-left: .2rem;
}
.el-icon-close{
  font-size: 22px;
}
</style>

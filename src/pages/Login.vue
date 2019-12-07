<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: zxs
 * @LastEditTime: 2019-12-06 21:27:30
 -->
<template>
  <div class="box">
      <Mlogintop></Mlogintop>
      <Mloginlog></Mloginlog>
      <Mloginmiddle></Mloginmiddle>
      
  </div>
</template>

<script>
import Mlogintop from '../components/Mlogintop';
import Mloginlog from '../components/Mloginlog';
import Mloginmiddle from '../components/Mloginmiddle';

export default {
  name: 'Login',
  data () {
    return {
      
    }
  },
  components:{
      Mlogintop,Mloginlog,Mloginmiddle
  }
}
</script>

<style scoped lang="scss">

</style>

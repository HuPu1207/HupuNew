<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-12-06 14:48:01
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="box">
      <Mloginlog></Mloginlog>
      <Mzhuce></Mzhuce>
  </div>
</template>

<script>
import Mloginlog from '../components/Mloginlog';
import Mzhuce from '../components/Mzhuce';

export default {
  name: 'ZsRegister',
  data () {
    return {
      
    }
  },
  components:{
      Mloginlog,Mzhuce
  }
}
</script>

<style scoped lang="scss">

</style>

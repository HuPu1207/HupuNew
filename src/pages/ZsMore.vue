<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-12-06 15:09:44
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="box">
      <MeTop></MeTop>
      <MeLogin></MeLogin>
      <MeSee></MeSee>
    <ZsFooter class="bottom"></ZsFooter>
  </div>
</template>

<script>
import MeTop from '../components/MeTop';
import MeLogin from '../components/MeLogin';
import MeSee from '../components/MeSee';
import ZsFooter from '../components/ZsFooter';

export default {
  name: 'ZsMore',
  data () {
    return {
      
    }
  },
  components:{
      MeTop,
      MeLogin,
      MeSee,
      ZsFooter
  }
}
</script>

<style scoped lang="scss">

.bottom{
  position: fixed;
  bottom: 0;
}
</style>

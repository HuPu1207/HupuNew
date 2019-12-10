<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: CoolWind
 * @lastEditTime: Do not Edit
 -->
<template>
<div id="box">
    <ZsTop class="Indextop"></ZsTop>

    <div class="center">
      <ZsNav></ZsNav>
      
      <!-- <Game></Game> -->
      <!-- <ZsContent></ZsContent> -->
      <!-- <ZsList></ZsList> -->
    </div>
    <ZsFooter class="bottom"></ZsFooter>
</div>
</template>

<script>
import ZsTop from '../components/ZsTop.vue'
import ZsNav from '../components/ZsNav.vue'
import ZsFooter from '../components/ZsFooter.vue'
// import Game from '../components/Game.vue'
// import ZsContent from '../components/ZsContent.vue'
// import ZsList from '../components/ZsList.vue'

export default {
  name: 'Index',
  data(){
    return {}
  },
  components: {
      ZsTop,
      ZsNav,
      ZsFooter,
      // Game,
      // ZsContent,
      // ZsList
  }
}
</script>

<style scoped>
.box{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Indextop{
  position: fixed;
  top: 0;
}
.bottom{
  position: fixed;
  bottom: 0;
}
.center{
  flex:1;
  /* overflow-y: auto; */
  margin-top: .48rem;
  margin-bottom: .56rem;
}
</style>

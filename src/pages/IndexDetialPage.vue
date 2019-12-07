<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
<div class="box">
    <ZsBack class="topfix"></ZsBack>
    <div class="center">
      <ZsListDetial :id="id"></ZsListDetial>
      <ZsSource></ZsSource>
      <ZsComment :id="id"></ZsComment>
       <!-- <ZsComment :id="id" type="这些回复亮了"></ZsComment> -->
      <!--<ZsComment :id="id" type="冷门回复"></ZsComment> -->
    </div>
    <ZsWriteComment class="bottomfix"></ZsWriteComment>
</div>
</template>

<script>
import ZsBack from '../components/ZsBack'
import ZsListDetial from '../components/ZsListDetial'
import ZsWriteComment from '../components/ZsWriteComment'
import ZsSource from '../components/ZsSource'
import ZsComment from '../components/ZsComment'

export default {
  name: 'Index',
  props:['id'],

  data(){
    return {}
  },
  components: {
      ZsBack,
      ZsListDetial,
      ZsWriteComment,
      ZsSource,
      ZsComment
  }
}
</script>

<style scoped>
.topfix{
  position: fixed;
  top: 0;
}
.bottomfix{
  position: fixed;
  bottom: 0;
  margin: 0 auto;
}
</style>
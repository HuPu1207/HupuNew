<!--
 * @Author: 赵新朋
 * @Date: 2019-11-26 10:02:42
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-05 19:14:01
 * @Description: 
 -->
<template>
  <div id="app">
     <Battle></Battle>
     <Infomatch></Infomatch>
  </div>
</template>
<script>
import Battle from '@/components/Battle.vue'
import Infomatch from '@/components/Infomatch.vue'

export default {
  name: 'app',
  components: {
    Battle,Infomatch
    
  }
  
}
</script>

<style scoped>
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,td,input,textarea{
	margin:0;
	padding:0;
}
ul,ol,li{
	list-style: none;
}
a{
	text-decoration:none;
}
img{
	border:none;
	display: block;
}
body{
	font-family: "微软雅黑";
}
html{
	font-size: 26.67vw;
}
html,body{
	width: 100%;
	height: 100%;
}
.navtop{
    position: sticky;
    overflow-x: auto;
    top: 0;
}
</style>

<!--
 * @Author: 赵新朋
 * @Date: 2019-11-26 10:02:42
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-09 14:36:24
 * @Description: 
 -->
<template>
  <div id="app1">
     <Battle></Battle>
     <Infomatch></Infomatch>
  </div>
</template>
<script>
import Battle from '@/components/Battle.vue'
import Infomatch from '@/components/Infomatch.vue'

export default {
  name: 'app1',
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

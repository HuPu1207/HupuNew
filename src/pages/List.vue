<!--
 * @Author: 赵新朋
 * @Date: 2019-11-26 10:02:42
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-10 10:02:50
 * @Description: 
 -->
<template>
  <div id="app1">
      <div class="navtop">
        <ZsTop></ZsTop>
        <Xnav></Xnav>
      </div>
	<Xeventlist></Xeventlist>
	<ZsFooter class="fix"></ZsFooter>
  </div>
</template>

<script>
import Xnav from '@/components/Xnav.vue'
import ZsTop from '@/components/ZsTop'
import Xeventlist from '@/components/Xeventlist'
import ZsFooter from '@/components/ZsFooter'
// import Pubu from './components/Pubu'

export default {
  name: 'app1',
  components: {
    Xnav,ZsTop,ZsFooter,Xeventlist
    
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
.fix{
  position: fixed;
  bottom: 0;
}

</style>

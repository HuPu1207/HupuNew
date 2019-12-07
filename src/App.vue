<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div id="app">
    <!-- <Index></Index> -->
    <router-view></router-view>   
  </div>
</template>

<script>
// import Index from './pages/Index.vue'

export default {
  name: 'app',
  components: {
    // Index
  }
}
</script>

<style>
#app{
  width:100%
}
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
	display: -webkit-flex;
	-webkit-flex-direction:column;
  	font-size:14px;
}
html{
	font-size: 26.67vw;
}
</style>

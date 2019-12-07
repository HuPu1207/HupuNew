<!--
 * @Author: 赵新朋
 * @Date: 2019-11-26 10:02:42
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-02 09:00:06
 * @Description: 
 -->
<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>

<style>
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
</style>

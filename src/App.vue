<!--
 * @Author: CoolWind
 * @Date: 2019-12-09 09:11:57
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-10 09:46:48
 * @Description: 
 -->

<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {}
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  width:100%;
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
html,body{
	width: 100%;
	height: 100%;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
  font-family: "微软雅黑";
	/* display: -webkit-flex;
	-webkit-flex-direction:column; */
  font-size:14px;
}

</style>

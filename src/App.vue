<!--
 * @Author: your name
 * @Date: 2019-11-26 17:36:38
 * @LastEditTime: 2019-11-28 19:52:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\App.vue
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
    return{

    }
  }
 }
</script>

<style>

*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
}
/* #app { 
  margin-top: 5px;
} */
ul,li{
  list-style: none;
}
</style>

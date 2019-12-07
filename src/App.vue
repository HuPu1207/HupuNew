<!--
 * @Author: CoolWind
 * @Date: 2019-11-26 09:13:29
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-02 14:12:55
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
    touch-action: none;
  }
  html,body{
    height: 100%;
  }
  html{
    font-size: 26.67vw;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
</style>

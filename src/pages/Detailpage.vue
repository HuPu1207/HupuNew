<!--
 * @Author: your name
 * @Date: 2019-11-30 21:05:52
 * @LastEditTime: 2019-12-03 09:52:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\pages\Detailpage.vue
 -->
<template>
    <div class="box">
        <DetailTop></DetailTop>
        <DetailMiddle></DetailMiddle>
        <DetailBottom></DetailBottom>
    </div>
</template>
<script>
import DetailTop from '../components/DetailTop';
import DetailMiddle from '../components/DetailMiddle';
import DetailBottom from '../components/DetailBottom';
export default {
    name:"Detailpage",
    data(){
        return{

        }
    },
    components:{
        DetailTop,DetailMiddle,DetailBottom
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 100%;
}
</style>
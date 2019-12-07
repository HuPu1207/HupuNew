<!--
 * @Author: your name
 * @Date: 2019-11-26 17:46:39
 * @LastEditTime: 2019-11-30 19:08:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\pages\Sh.vue
 -->
<template>
    <div class="box">
        <ZsTop class="shtop"></ZsTop>
        <ListLeftNav></ListLeftNav>
        <!-- <ListRightNav></ListRightNav> -->
    </div>
</template>
<script>
import ZsTop from '../components/ZsTop';
import ListLeftNav from '../components/ListLeftNav';
// import ListRightNav from '../components/ListRightNav';

export default {
    name:"ShListPage",
    data(){
        return{

        }
    },
    components:{
        ZsTop,ListLeftNav
    }
}
</script>
<style  scoped>
/* body{
    flex-direction: column;
} */
.box{
    width: 100%;
    height: 100%;
    background-color:white;
}
.shtop{
    width: 100%;
    height: .5rem;
    position: fixed;
    top: 0;
    z-index: 88;
}

</style>
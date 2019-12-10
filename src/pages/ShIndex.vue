<!--
 * @Author: your name
 * @Date: 2019-11-26 17:46:39
 * @LastEditTime: 2019-12-10 10:45:34
 * @LastEditors: CoolWind
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\pages\Sh.vue
 -->
<template>
    <div class="box">
        <ZsTop class="shtop"></ZsTop>
        <div>
            <Sbanner class="cq_banner_box1"></Sbanner>
            <Sgoodsdetail></Sgoodsdetail>
            <Snavlistone></Snavlistone>
            <Sshoenav></Sshoenav>
        </div>
        <ZsFooter class="fix"></ZsFooter>
    </div>
</template>
<script>
import ZsTop from '../components/ZsTop';
import Sbanner from '../components/Sbanner';
import Sgoodsdetail from '../components/Sgoodsdetail';
import Snavlistone from '../components/Snavlistone';
import Sshoenav from '../components/Sshoenav';
import Sshoeclassfiy from '../components/Sshoeclassfiy';
import ZsFooter from '../components/ZsFooter';

export default {
    name:"ShIndex",
    data(){
        return{

        }
    },
    components:{
        ZsTop,Sbanner,Sgoodsdetail,Snavlistone,Sshoenav,Sshoeclassfiy,ZsFooter
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
.fix{
    position: fixed;
    bottom: 0;
}
</style>
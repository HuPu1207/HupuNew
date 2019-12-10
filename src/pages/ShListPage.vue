<!--
 * @Author: your name
 * @Date: 2019-11-26 17:46:39
 * @LastEditTime: 2019-12-10 10:56:03
 * @LastEditors: CoolWind
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\pages\Sh.vue
 -->
<template>
    <div class="box">
        <!-- <ZsTop class="shtop"></ZsTop> -->
        <div class="top_box">
			<i class="el-icon-arrow-left"  @click="btn01"></i>
			<span>识货团购</span>
		</div>
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
    },
    methods:{
        btn01(){
            this.$router.push({path:'/ShIndex'})
        }
    }
}
</script>
<style lang="scss" scoped>
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
.top_box{
		width: 100%;
		height: .5rem;
		background-color: #C01D2E;
		display: flex;
		line-height: .5rem;
		color: white;
		position: fixed;
		top:0;
		z-index: 100;
		i{
			width: 5%;
			height: .5rem;
			line-height: .5rem;
			font-size: .24rem;
			text-indent: .1rem;
		}
		span{
			margin: 0 auto;
			display: block;
			width: 34%;
			height: .5rem;
			font-size: .22rem;
			text-align: center;
		}
	}
</style>
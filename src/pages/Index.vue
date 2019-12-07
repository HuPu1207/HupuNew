<<<<<<< HEAD
<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
<div id="box">
    <ZsTop class="Indextop"></ZsTop>

    <div class="center">
      <ZsNav></ZsNav>
      
      <!-- <Game></Game> -->
      <!-- <ZsContent></ZsContent> -->
      <!-- <ZsList></ZsList> -->
    </div>
    <ZsFooter class="bottom"></ZsFooter>
</div>
</template>

<script>
import ZsTop from '../components/ZsTop.vue'
import ZsNav from '../components/ZsNav.vue'
import ZsFooter from '../components/ZsFooter.vue'
// import Game from '../components/Game.vue'
// import ZsContent from '../components/ZsContent.vue'
// import ZsList from '../components/ZsList.vue'

export default {
  name: 'Index',
  data(){
    return {}
  },
  components: {
      ZsTop,
      ZsNav,
      ZsFooter,
      // Game,
      // ZsContent,
      // ZsList
  }
}
</script>

<style scoped>
.box{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Indextop{
  position: fixed;
  top: 0;
}
.bottom{
  position: fixed;
  bottom: 0;
}
.center{
  flex:1;
  /* overflow-y: auto; */
  margin-top: .48rem;
  margin-bottom: .56rem;
}
</style>
=======
<!--
 * @Author: 赵新朋
 * @Date: 2019-12-05 20:23:20
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-05 21:00:51
 * @Description: 
 -->
<template>
	<div class="index">
		<IndexTitle class="indextitle"></IndexTitle>
		<IndexMine class="mine"></IndexMine>
		<IndexCon></IndexCon>
		<IndexReMen></IndexReMen>
		<IndexYan></IndexYan>
		<IndexHuRen></IndexHuRen>
		<IndexTui></IndexTui>
		<router-link to="">
			<div class="gengduo">
				点击查看更多
			</div>
		</router-link>
		<!-- <shipin></shipin> -->
		<ZsFooter class="foo"></ZsFooter>	
	</div>
</template>

<script>
	import IndexTitle from '../components/IndexTitle';
	import IndexCon from '../components/IndexCon';
	import IndexMine from '../components/IndexMine';
	import IndexReMen from '../components/IndexReMen';
	import IndexYan from '../components/IndexYan';
	import IndexHuRen from '../components/IndexHuRen';
	import IndexTui from '../components/IndexTui';
	import ZsFooter from '../components/ZsFooter';
	import shipin from '../components/shipin';
	
	export default {
		name: 'Index',
		data() {
			return {

			}
		},
		components: {
			IndexTitle,IndexCon,IndexMine,IndexReMen,IndexYan,IndexHuRen,IndexTui,ZsFooter,shipin
		}
	}
	
</script>

<style lang="scss" scoped>
	.index{
		width: 100%;
		overflow: hidden;
		.indextitle{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10;
		}
		.mine{
			margin-top: .4rem;
		}
		.gengduo{
			width: 100%;
			height: .78rem;
			color: #9699a0;
			font-size: .14rem;
			line-height: .7rem;
			text-align: center;
			border-bottom: .1rem solid #fffbff;
			margin-bottom: .5rem;
		}
		.foo{
			position: fixed;
			left: 0;
			bottom: 0;
		}
	}
</style>
>>>>>>> zxp

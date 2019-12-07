<!--
 * @Author: your name
 * @Date: 2019-12-04 14:19:00
 * @LastEditTime: 2019-12-07 10:53:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tabappf:\myvue\hupu\src\pages\ShopDeatilPage.vue
 -->
<template>
	<div class="box">
		<ShopPageTop></ShopPageTop>
	</div>
</template>
	
<script>
import ShopPageTop from '../components/ShopPageTop';
export default{
	name:"ShopDeatilPage",
	data(){
		return{
			
		}
	},
	components:{
		ShopPageTop
	}
}
	
</script>

<style scoped>
	.box{
		width: 100%;
	}
	
</style>

<!--
 * @Author: 赵新朋
 * @Date: 2019-12-05 20:48:37
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-05 20:57:37
 * @Description: 
 -->
<template>
	<div class="indexmine">
		<img class="touxiang" src="img/touxiang.jpg" alt="" />
		<p><span class="ming">亲</span>，您好</p>
		<img class="xingxing" src="img/indexxx.png" alt="" />
		<img class="jiantou" src="img/indexjt.png" alt="" />
		<span class="tj">根据关注为您推荐首页</span>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped="scoped">
	.indexmine{
		width: 94%;
		margin: 0 auto;
		height: .42rem;
		/*background: pink;*/
		padding-top: .2rem;
		.touxiang{
			width: .29rem;
			height: .29rem;
			float: left;
		}
		p{
			color: #3d3d3d;
			font-size: .12rem;	
			display: inline-block;
			line-height: .3rem;
			margin-left: .08rem;
			.ming{
				float: left;
				color: #3d3d3d;
				font-size: .12rem;	
			}
		}
		
		.tj{
			color: #9c9c9c;
			font-size: .11rem;
			line-height: .3rem;
			float: right;
			margin-right: .12rem;
		}
		.jiantou{
			width: .12rem;
			float: right;
			margin-right: .1rem;
		}
		.xingxing{
			width: .24rem;
			float: right;
		}
	}
</style>
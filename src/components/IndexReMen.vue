<template>
	<div class="indexremen">
		<ul>
			<div class="remen">
				<span class="shijian">11月26日</span>
				<span class="tt">热门<br />比赛</span>
				<span class="chang"><span class="cishu">{{this.remens.length}}</span>场</span>
			</div>

			<li v-for="(remen,index) in remens" :key="index">
				<router-link to="">
					<div>
						<span class="leibie">{{remen.tilte}}</span>
						<img class="hui" src="img/indexhuifang.jpg" alt="" />
						<router-link to="">
							<span class="huifang">锦集，回放</span>
						</router-link>
					</div>
					<div class="bisai">
						<img class="img1" :src="remen.duiwu1img" alt="" />
						<span class="dui">{{remen.duiwu1}}</span>
						<span class="fen">{{remen.duiwu1fen}}</span>
						<span class="jian"></span>
					</div>
					<div class="bisai">
						<img class="img1" :src="remen.duiwu2img" alt="" />
						<span class="dui">{{remen.duiwu2}}</span>
						<span class="fen2">{{remen.duiwu2fen}}</span>
					</div>
				</router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"IndexReMen",
	    data(){
	        return {
	            remens:[
	                
	            ]
	        }
	    },
	    created(){
		    axios.get('/remen')
		    .then((response)=> {
		        console.log(response.data);
		        this.remens = response.data;
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
	  	},
	
	}
</script>

<style lang="scss" scoped="scoped">
	.indexremen{
		width: 94%;
		margin: 0 auto;
		padding-bottom: .11rem;
		/*background: pink;*/
		ul{
			display:flex;
			padding-top: .12rem;
			overflow-x: auto;
			.remen{
				background: #f7f7f7;
				width: .72rem;
				text-align:center;
				margin-right:.1rem;
				.shijian{
					display: block;
					color: #262626;
					font-size: .1rem;
					height: .24rem;
					width: .7rem;
					line-height: .24rem;
					background: white;
					margin: 0 auto;
				}
				.tt{
					margin: 0 auto;
					margin-top: 4px;
					display: block;
					width: .7rem;
					height: .42rem;
					line-height: .21rem;
					color: #262626;
					font-size: .14rem;
					background: white;
					font-weight: bold;
				}
				.chang{
					margin: 0 auto;
					margin-top: 2px;
					display: block;
					color: #262626;
					font-size: .1rem;
					width: .7rem;
					height: .25rem;
					line-height: .25rem;
					background: white;
					.cishu{
						font-size: .13rem;
					}
				}
			}
			li{
				flex-shrink: 0;
				width: 1.7rem;
				height: .95rem;
				background: white;
				margin-right: .1rem;
				border: 2px solid #f7f7f7;
				border-radius: 5px;
				padding-left: .1rem;
				.leibie{
					line-height: .24rem;
					color: #9a9a9a;
					font-size: .09rem;
				}
				.huifang{
					line-height: .24rem;
					color: #9a9a9a;
					font-size: .09rem;
					float: right;
				}
				.hui{
					width: .1rem;
					height: .1rem;
					float: right;
					margin-top: .08rem;
					margin-right: .09rem;
					margin-left: .04rem;
				}
				.bisai{
					height: .35rem;
					line-height: .35rem;
					position: relative;
					/*background: pink;*/
					.img1{
						float: left;
						width: .25rem;
						height: .25rem;
						margin-top: .04rem;
						margin-right: .05rem;
					}
					.dui{
						color: #1f1f1f;
						font-size: .13rem;
					}
					.fen{
						color: #212121;
						font-size: .14rem;
						float: right;
						margin-right: .1rem;
					}
					.fen2{
						color: #95989f;
						font-size: .13rem;
						float: right;
						margin-right: .1rem;
					}
					.jian{
						display: block;
						width: 0px;
						height: 0px;
						border: .06rem solid;
						border-color: transparent #202020 transparent transparent;
						position: absolute;
						right: 0;
						top: .11rem;
					}
				}
			}
		}
	}
</style>
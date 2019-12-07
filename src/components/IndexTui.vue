<template>
	<div class="indextui">
		<div class="tui">
			<ul>
				<li v-for="(duiwu,index) in tui" :key="index">
					<router-link to="">
						<div class="tt">
							<img class="tou" :src="duiwu.touimg" alt="" />
							<span class="name">{{duiwu.name}}</span>
							<span class="guan">+关注</span>
						</div>
						<p>{{duiwu.hua}}</p>
						<img class="img2" :src="duiwu.img" alt="" />
						<div class="shenping">
							<img class="shen" src="img/shen.jpg" alt="" />
							<span class="ping">{{duiwu.ping}}:</span>
							<span class="shuo">{{duiwu.shuo}}</span>
						</div>
						<div class="ff">
							<i class="el-icon-chat-square"></i>
							<span>{{duiwu.lin}}</span>
							<i class="el-icon-thumb i2"></i>
							<span>{{duiwu.zan}}</span>
							<i class="el-icon-close i3"></i>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"IndexTui",
	    data(){
	        return {
	            tui:{}
	        }
	    },
	    created(){
		    axios.get('/tui')
		    .then((response)=> {
		        console.log(response.data);
		        this.tui = response.data;
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
	  	},
	
	}
</script>

<style lang="scss" scoped="scoped">
	.indextui{
		width: 100%;
		.tui{
			width: 94%;
			margin: 0 auto;
			li{
				border-bottom: .11rem solid #fffbff;
				.tt{
					width: 100%;
					height: .35rem;
					.tou{
						width: .31rem;
						height: .31rem;
						padding-top: .02rem;
						float: left;
					}
					.name{
						color: #414141;
						font-size: .13rem;
						line-height: .35rem;
						margin-left: .08rem;
					}
					.guan{
						display: block;
						float: right;
						width: .62rem;
						height: .21rem;
						border: 1px solid #dfdfe1;
						border-radius: 5px;
						color: #535458;
						font-size: .12rem;
						line-height: .21rem;
						text-align: center;
						margin-top: .06rem;
					}
				}
				p{
					color: #1d1d1d;
					font-size: .15rem;
					line-height: .22rem;
					letter-spacing: 4px;
				}
				.img2{
					width: 2.04rem;
					height: 1.5rem;
					margin-top: .07rem;
					margin-bottom: .12rem;
				}
				.shenping{
					width: 100%;
					height: .4rem;
					background: #f8f8f8;
					border-radius: 5px;
					.shen{
						width: .3rem;
						height: .17rem;
						float: left;
						margin-top: .1rem;
						margin-left: .12rem;
					}
					.ping{
						color: #96979b;
						font-size: .12rem;
						margin-left: 8px;
						line-height: .4rem;
					}
					.shuo{
						color: #0c0c0c;
						font-size: .12rem;
						margin-left: .06rem;
						line-height: .4rem;
					}
				}
				.ff{
					width: 100%;
					height: .42rem;
					i{
						margin-left: .18rem;
						color: #9a9ba0;
						font-size: .14rem;
						line-height: .42rem;
					}
					span{
						color: #9a9ba0;
						font-size: .08rem;
						line-height: .42rem;
					}
					.i2{
						margin-left: .15rem;
					}
					.i3{
						float: right;
						margin-right: .1rem;
					}
				}
			}
		}
	}
</style>
<template>
	<div class="box">
		<!-- top_box -->
		<div class="top_box">
			<span>购物车</span>
			<span>管理</span>
		</div>
		<!-- ad_box -->
		<div class="ad_box" v-show="isShow">
			<span>您有90元现金红包待领取，速领!</span>
			<i class="el-icon-close" @click="btn"></i>
		</div>
		<!-- car_box -->
		<div class="car_box">
			<div>
				<input type="checkbox" v-model="Checkbox" @click="ADDBtn">
				<span>油腻叔 you need S</span>
				<span>领劵</span>
			</div>
			<div>
				<input type="checkbox" v-model="Checkbox" @click="ADDBtn">
				<div>
					<img src="../../public/img/shoe8.jpg" alt="">
				</div>
				<div>
					<p>油腻叔adidas哈登5篮球鞋 boost缓震</p>
					<span>pb黑白;41</span>
					<span>taobao双12</span>
					<span>库存紧张</span>
					<span>￥{{Price}}</span>
					<div>
						<input type="button" value="-" @click="btndel">
						<input type="text" :value="count">
						<input type="button" value="+" @click="btnadd">
					</div>
				</div>
			</div>
		</div>
		<!-- result_box -->
		<div class="result_box">
			<div>
				<input type="checkbox" v-model="Checkbox" @click="allBtn">
				<span >全选</span>
			</div>
			<div>
				<span>合计:</span>
				<span>￥{{countPrice}}</span>
				<span>结算</span>
			</div>
		</div>
		<!-- footer_box -->
		<ul class="footer_box">
			<li>
				<router-link to="/">
					<span class="iconfont icon-1"></span>
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<span class="iconfont icon-faxian"></span>
				<span>微淘</span>
			</li>
			<li>
				<span class="iconfont icon-tongzhi"></span>
				<span>消息</span>
			</li>
			<li>
				<span class="iconfont icon-gouwuche"></span>
				<span>购物车</span>
			</li>
			<li @click="backIndex">
				<span class="iconfont icon-wode"></span>
				<span>我的</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"GoodsTop",
		data(){
			return{
				isShow:true,
				count:1,
				Price:457,
				countPrice:0,
				Checkbox:false
			}
		},
		methods:{
			btn(){
				this.isShow=false
			},
			btnadd(){
				if(this.count>=5){
					return 
				}
				this.count++;
				console.log(this.count)
				console.log(this.Price)
				this.countPrice=this.Price*this.count;
				console.log(this.countPrice)
			},
			btndel(){
				if(this.count>1){
					this.count--;
					if(this.Price<this.countPrice){
						this.countPrice=this.countPrice-this.Price;
						console.log(this.count)
						console.log(this.countPrice)
					}
				}
			},
			ADDBtn(){
				this.Checkbox=true
			},
			allBtn(){
					this.countPrice=this.Price;
					this.count=1
			},
			backIndex(){
				this.$router.push({path:'/'})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.top_box{
		width: 100%;
		height: .5rem;
		line-height: .5rem;
		background-color: #cc0000;
		position: fixed;
		top: 0;
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		span{
			font-size: .18rem;
			margin: 0 .1rem;
			color: white;
		}
	}
	.ad_box{
		width: 90%;
		height: .4rem;
		background-color: #feefe6;
		margin: .6rem auto .1rem;
		border-radius: 8px;
		line-height: .4rem;
		display: flex;
		justify-content: space-between;
		span{
			font-size: .14rem;
			color: #FF0000;
		}
		i{
			width: .24rem;
			height: .22rem;
			text-align: center;
			line-height: .22rem;
			border-top-right-radius: 10px;
			border-bottom-left-radius: 10px;
			display: block;
			background-color: #999999;
			color: white;
		}
	}
	.car_box{
		width: 94%;
		height: 2.7rem;
		background-color: #fff;
		margin: .1rem auto;
		border-radius: 8px;
		div:nth-child(1){
			width: 100%;
			height: .4rem;
			border-radius: 8px;
			background-color: #fff;
			display: flex;
			// line-height: .4rem;
			justify-content: space-between;
			align-items: center;
			input{
				display: block;
				width: .2rem;
				height: .2rem;
				margin-left: .1rem;
			}
			span:nth-child(2){
				font-size: .19rem;
			}
			span:nth-child(3){
				margin-right: .1rem;
			}
		}
		div:nth-child(2){
			width:100% ;
			height:2.3rem;
			background-color: #fff8f4;
			border-bottom-left-radius: 8px;
			border-bottom-right-radius: 8px;
			display: flex;
			align-items: center;
			input{
				width: 10%;
				height: .2rem;
			}
			div:nth-child(2){
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				width: 32%;
				height: 2.3rem;
				// background-color: pink;
				img{
					width: 100%;
				}
			}
			div:nth-child(3){
				width: 58%;
				height: 2.3rem;
				border-bottom-right-radius: 8px;
				padding: 0 .1rem;
				position: relative;
				// background-color:yellowgreen;
				p{
					font-size: .16rem;
					margin:.1rem auto;
				}
				span{
					display: block;
					width: .8rem;
					height: .3rem;
					margin: .1rem 0;
					text-align: center;
					line-height: .3rem;
				}
				span:nth-child(2){
					color: #999;
					border-radius: 4px;
					background-color: #efebe8;
				}
				span:nth-child(3){
					width: .9rem;
					height: .3rem;
					color: #fff;
					font-size: .12rem;
					border-radius: 4px;
					background-color:#ff4d00;
				}
				span:nth-child(4){
					color: #ff4d00;
					font-size: .18rem;
				}
				span:nth-child(5){
					color: #ff4d00;
					font-size: .18rem;
				}
				div:nth-child(6){
					width: 1.2rem;
					height: .36rem;
					background-color: #ffffff;
					position: absolute;
					right: 0;
					bottom: .12rem;
					display: flex;
					// justify-content: space-between;
					align-items: center;
					input{
						border: none;
						outline: none;
						text-align: center;
						font-size: .2rem;
					}
					input:nth-child(1){
						width: .3rem;
						height: .36rem;
					}
					input:nth-child(2){
						width: .59rem;
						height: .36rem;
					}
					input:nth-child(3){
						width: .3rem;
						height: .36rem;
					}
				}
			}
		}
	}

	.result_box{
		width: 100%;
		height: .6rem;
		border-top: 1px solid #999;
		background-color: #fff;
		position: fixed;
		bottom: .5rem;
		display: flex;
		justify-content: space-between;
		div{
			width: 55%;
			height: .6rem;
			// line-height: .6rem;
			// background-color: pink;
		}
		div:first-child{
			width: 40%;
			display: flex;
			align-items: center;
			input{
				width: .22rem;
				height: .22rem;
				margin: 0 .1rem;
				vertical-align: middle;
			}
			span{
				font-size: .2rem;
				color: #666;
			}
		}
		div:last-child{
			display: flex;
			align-items: center;
			justify-content: space-between;
			span{
				font-size: .18rem;
				color: #666;
			}
			span:nth-child(2){
				font-size: .16rem;
				color: #cc0000;
			}
			span:nth-child(3){
				display: block;
				width: 1rem;
				height: .36rem;
				line-height: .36rem;
				background-color: #cc0000;
				font-size: .16rem;
				color: #ff650a;
				text-align: center;
				border-radius: .1rem;
				font-size: .18rem;
				color: white;
			}
		}
	}

	.footer_box{
		width: 100%;
		height: .5rem;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		z-index: 1000;
		display: flex;
		li{
			width: 20%;
			height: .5rem;
			// background-color: #EA6E7B;
			text-align: center;
			span{
				display: block;
				color: #333;
			}
			span:first-child{
				font-size: .26rem;
			}
			span:last-child{
				font-size: .14rem;
			}
		}
	}
</style>

<template>
	<div class="box">
		<div class="top_box">
			<i class="el-icon-arrow-left"  @click="btn01"></i>
			<span>识货团购</span>
		</div>
		<div class="img_box">
			<img :src="imgsrc" class="img" >
			<ul>
				<div style="display:none" >{{typename}}</div>
				<li v-for="(shoe,index) in shoes" :key="index" @click="btn(shoe.img)">
				    <img :src="shoe.img" alt="">
				</li>
			</ul>
			<p>adidas 19款篮球鞋 利拉德5代</p>
			<p>
				<span>￥459</span>
				<span>￥869</span>
				<span>距离结束还有两天</span>
			</p>
			<div class="goubox">
				<span>识货团购</span>
				<span>.精选店铺</span>
				<span>.严选单品</span>
				<span>.专员销售</span>
				<span>.违规必查</span>
			</div>
			<div class="juanbox">
				<span>参团方式</span>
				<img src="img/bg8.jpg" alt="">
				<span>领劵></span>
			</div>
			<div class="bgbox">
				<h3>商品详情</h3>
				<img src="img/bg9.jpg" alt="">
			</div>
		</div>
		<div class="footer">
			<div>
				<i class="el-icon-service"></i>
				<span>客服</span>
			</div>
			<div>
				<i class="el-icon-s-unfold"></i>
				<span>分享</span>
			</div>
			<input type="button" value="立即购买"  @click="lookBtn1">
		</div>
		<div class="lookbox" v-show="isShowtwo">
			<i class="el-icon-warning" v-show="isShowsan"></i>
			<i class="el-icon-loading" v-show="isShowfor"></i>
			<p>虎扑正在尝试开启淘宝，是否尝试开启</p>
			<div>
				<input type="button" value="取消" @click="btndel">
				<input type="button" value="允许" @click="btnadd">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"ShopPageTop",
		props:['typename'],
		data(){
			return{
				imgsrc:"img/shoe1.jpg",
				shoes:[],
				isShowtwo:false,
				isShowsan:true,
				isShowfor:false
			}
		},
		created(){
			fetch("http://localhost:3000/cqshoes")
			.then(res=>{
				return res.json();
			})
			.then(data=>{
				// this.shoes=data;
				console.log(data)
				for(var i=0;i<5;i++){
					this.shoes.push(data[i])
				}
			})
			.catch(err=>{
				console.log(err)
			})
		},
		methods:{
			btn(str){
				this.imgsrc=str
				// console.log(this.imgsrc)
			},
			btn01(){
				this.$router.push({path:'/ShListPage'})
			},
			lookBtn1(){
				this.isShowtwo=true
			},
			btndel(){
				this.isShowtwo=false
			},
			btnadd(){
				this.isShowsan=false,
					this.isShowfor=true,
				setTimeout(()=>{
					this.$router.push({path:'/GoodsCarPage'})
				},3000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: 100%;
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
	.img_box{
			margin-top: .5rem;
			width: 100%;
			.img{
				width: 2.4rem;
				height: 1.3rem;
				margin: 0 auto;
				display: block;
			}
			ul{
				width: 100%;
				height: .6rem;
				margin-top: .28rem;
				background-color: white;
				display: flex;
				justify-content: space-around;
				li{	
					width: 14%;
					height: .5rem;
					display: flex;
					box-shadow: 0 0 2px #999;
					background-color: white;
					justify-content: center;
					align-items: center;
					img{
						// margin: 0 auto;
						display: block;
						width: 90%;
						height: .32rem;
					}
				}
			}
			p{
				font-size: .18rem;
				text-indent: .1rem;
				font-weight: 1000;
			}
			P:nth-child(4){
				font-weight: normal;
				margin-top: .12rem;
				span:nth-child(1){
					color: #cc0000;
				}
				span:nth-child(2){
					font-size: .14rem;
					margin-left: .1rem;
					text-decoration: line-through;
				}
				span:nth-child(3){
					float: right;
					color: #999;
					font-size: .16rem;
				}
			}
			.goubox{
				width: 90%;
				height:.42rem;
				background-color: #ffccff;
				margin: .1rem auto;
				border-radius: 4px;
				display: flex;
				align-items: center;
				color: #666;
				font-size: .14rem;
				justify-content: space-around;
				span:nth-child(1){
					color: #000000;
					font-size: .16rem;
					font-weight: 1000;
					
				}
			}
			.juanbox{
				width: 100%;
				height: .8rem;
				background-color: #fff;
				line-height: .8rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				span:nth-child(1){
					width: 20%;
					height: .8rem;
					font-size: .18rem;
					color: #333;
					font-weight: 1000;
				}
				img{
					width: 1.5rem;
					height: .42rem;
				}
				span:nth-child(3){
					width: 16%;
					height: .8rem;
					color: #666;
					text-align: center;
					line-height: .8rem;
					font-size: .18rem;
				}
			}
			.bgbox{
				width: 100%;
				h3{
					width: 100%;
					height: .4rem;
					background-color: white;
					font-size:.2rem;
					line-height: .4rem;
				}
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	.footer{
		width: 100%;
		height: .5rem;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		z-index: 100;
		display: flex;
		div{
			width: 24%;
			height: .46rem;
			text-align: center;
			color: #666;
			// background-color: tomato;
			i{
				font-size: .26rem;
				padding-top: .04rem;
			}
			span{
				display: block;
				font-size: .14rem;
			}
		}
		input{
			width: 70%;
			height: .5rem;
			border: none;
			outline: none;
			background-color: #cc0000;
			font-size: .18rem;
			color:white;
		}
	}
	.lookbox{
		width: 90%;
		height: 1.7rem;
		padding-top: .3rem;
		background-color: ghostwhite;
		position: fixed;
		bottom: .1rem;
		left: .2rem;
		z-index: 1000;
		margin: 0 auto;
		i{
			font-size: .36rem;
			color:#FF3300;
			display: block;
			text-align: center;
		}
		p{
			line-height: .5rem;
			font-size: .18rem;
			text-align: center;
		}
		div{
			width: 100%;
			height: .5rem;
			background-color: white;
			display: flex;
			justify-content: center;
			align-items: center;
			border-top: 1px solid #999;
			input{
				width: 40%;
				height: .4rem;
				background-color: #FF0000;
				border: none;
				outline: none;
				font-size: .18rem;
				color: white;
				display: block;
				border-radius: 10px;
			}
		}
	}
</style>

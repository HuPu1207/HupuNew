<template>
	
	<!--对象遍历 
    <div v-for="(value, key, index) in object">
        {{ index }}. {{ key }} - {{ value }}
    </div>

         数组对象遍历 
    <div v-for="(value, key, index) in objectArray">
	        姓名：{{value.name}}
	        年龄:{{value.age}}
    </div>-->
    <div class="title">
    	<div class="indexTitle">
			<router-link to="/Search">
				<i class="el-icon-search sousuo"></i>
			</router-link>
			<div class="fen">
				<ul>
					<li v-for="value in fenlei">{{ value }}</li>
					<span></span>
				</ul>
			</div>
			<router-link to="/FenLei">
				<i class="el-icon-menu fenlei"></i>
			</router-link>
		</div>
    </div>
</template>

<script>
	import axios from 'axios';

	export default {
	    name:"IndexTitle",
	    data(){
	        return {
	            fenlei:{}
	        }
	    },
	    created(){
		    axios.get('/fenlei')
		    .then((response)=> {
		        console.log(response.data);
		        this.fenlei = response.data[0];
		    })
		    .catch(function (error) {
		        console.log(error);
		    });
	  	},
	
	}
</script>

<style lang="scss" scoped="scoped">
	.title{
		width: 100%;
		box-shadow: 0px 2px 10px gainsboro;
		background: white;
	}
	.indexTitle{
		width: 94%;
		height: .4rem;
		line-height: .4rem;
		margin: 0 auto;
		i{
			font-size: .18rem;
			line-height: .4rem;
		}
		.sousuo{
			float: left;
			color: #202020;
		}
		.fenlei{
			float: right;
			color: #202020;
		}
		.fen{
			display: inline-block;
			ul{
				position: relative;
				width: 3.02rem;
				display: flex;
				overflow-x: auto;
				margin-left: .06rem;
				li{
					margin: 0 .14rem;
					flex-shrink: 0;
					color: #232323;
					font-size: .13rem;
				}
				li:first-child{
					font-size: .17rem;
				}
			}
			span{
				position: absolute;
				bottom: 4px;
				left: .18rem;
				width: .25rem;
				height: 2px;
				background: #0e65f3;
			}
		}
	}
</style>
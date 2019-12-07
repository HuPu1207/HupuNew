<!--
 * @Author: your name
 * @Date: 2019-12-03 09:50:54
 * @LastEditTime: 2019-12-03 12:02:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\DetailBottom.vue
 -->
<template>
    <div class="box">
        <p>
            时间到了2019年，重新回到了赛场的罗斯依旧在赛场上坚持,依旧给我们带来了感动和坚持，
            他的签名鞋也来到了第十代，但热度和曝光度也越开越少...
            <span v-show="isShow">不禁有些唏嘘 但热度和曝光度也越开越少。不禁有些唏嘘</span>
            <span @click="lookBtn" v-show="isShowone" class="span">查看更多</span>
        </p>
        <div class="div1">
            <h4>咨询热评</h4>
            <img src="img/shoe1.jpg" alt="">
            <div>
                <p>新鞋开箱|枯木又逢春|十年终有约——罗斯十代入手</p>
                <p>搬运君推荐</p>
            </div>
        </div>
        <div class="div1">
            <h4>咨询热评</h4>
            <img src="img/shoe1.jpg" alt="">
            <div>
                <p>新鞋开箱|枯木又逢春|十年终有约——罗斯十代入手</p>
                <p>搬运君推荐</p>
            </div>
        </div>
        <!-- footer -->
        <div class="cq_footer">
            <div>
                <span>￥457</span>
                <span>识货app全网价</span>
            </div>
            <input type="button" value="加入购物车" @click="addCar">
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailBottom",
    data(){
        return{
            isShow:false,
            isShowone:true
        }
    },
    methods:{
        lookBtn(){
             this.isShow=true;
             this.isShowone=false;
        },
		addCar(){
			this.$router.push({path:'/GoodsCarPage'})
		}
    }
}
</script>
<style lang="scss" scoped>
.box{
    width: 100%;
    margin-bottom: .6rem;
    p{
        width: 100%;
        background-color: white;
        font-size: .14rem;
        position: relative;
        text-indent: .1rem;
        margin-bottom: .1rem;
        .span{
            position: absolute;
            right: 0;
            bottom: 0;
            color: blue;
        }
    }
    .div1{
        width: 100%;
        height: .9rem;
        margin: .12rem auto;
        h4{
            width: 100%;
            height: .22rem;
            font-size: .18rem;
            color: black;
            text-indent: .1rem;
        }
        img{
            display: block;
            width: 26%;
            height: .66rem;
            float: left;
        }
        div{
            float: right;
            width: 70%;
            height: .68rem;
        }
    }
   .cq_footer{
    width: 100%;
    height: .5rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    margin-top: .5rem;
    div{
        width: 30%;
        height: .5rem;
        float: left;
        text-align: center;
        span{
            display: block;
            font-size: .18rem;
            color: #cc0000;
        }
        span:last-child{
            font-size: .14rem;
            color: #333;
        }
    }
    input{
        display: block;
        float: right;
        width: 30%;
        height: .36rem;
        line-height: .36rem;
        background-color: #cc0000;
        border:none;
        font-size:.14rem;
        color: #fff;
        margin: .07rem .2rem 0 0;
        border-radius: 4px;
        } 
    }
}

</style>
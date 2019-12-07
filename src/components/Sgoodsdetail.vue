<!--
 * @Author: your name
 * @Date: 2019-11-26 20:44:47
 * @LastEditTime: 2019-12-07 11:21:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \html11f:\myvue\hupu\src\components\Sgoodsdetail.vue
 -->
<template>
    <div class="box">
      
          <!-- cq_img_box1 -->
        <ul class="cq_img_box1">
			<li v-for="(goodsname,index) in goodsnames" v-bind:key="index" @click="backBtn">
				<img :src="goodsname.img" alt="">
				<span>{{goodsname.name}}</span>
			</li>
        </ul>
        <div class="cq_news_box2">
            <h3>识货团购</h3>
            <span>167件上新</span>
            <div class="san"></div>
            <p>正品低价&nbsp;&nbsp;&nbsp;&nbsp;售后无忧&nbsp;&nbsp;&nbsp;&nbsp;每天十点更新</p>
        </div>
        <!-- cq_nav-box3 -->
        <ul class="cq_nav-box3">
            <li>
                <img src="img/img9.jpg" alt="">
                <span>4.5折</span>
                <span>￥268</span>
            </li>
            <li>
                <img src="img/10.jpg" alt="">
                <span>3.9折</span>
                <span>￥169</span>
            </li>
            <li>
                <img src="img/img9.jpg" alt="">
                <span>2.1</span>
                <span>￥45</span>
            </li>
            <li>
                <img src="img/10.jpg" alt="">
                <span>1.2折</span>
                <span>￥25</span>
            </li>
        </ul>
        <!-- cq_img_box4 -->
        <div class="cq_img_box4">
            <img src="img/bg6.jpg" alt="">
            <img src="img/bg7.jpg" alt="">
        </div>
        <div class="cq_middle_box5"></div>
    </div>
</template>
<script>
export default {
   name:'Sgoodsdetail',
    data(){
        return{
             goodsnames:[]
        }
    },
    created() {
     //从后端获取数据     
     fetch('http://localhost:3000/cqgoodsnames')
     .then(res=>{ 
        return res.json();
     })
     .then(data=>{
         this.goodsnames =data;
    })
    .catch(err=>{
        console.log(err);
    });
    },
	methods:{
		backBtn(){
			this.$router.push({path:'/ShListPage'})
		}
	}
}
</script>
<style scoped>
.box{
    height: 100%;
}
.cq_img_box1{
    width: 100%;
    height: 1rem;
    display: flex;
}
.cq_img_box1 li{
    width: 20%;
    height: 1rem;
    text-align: center;
    background-color: white;
}
.cq_img_box1 li img{
    width: 100%;
    height: .7rem;
    display: block;
    margin-bottom: .1rem;
}
.cq_news_box2{
    width:100%;
    height:.8rem;
    background-color: rgb(246, 246, 246);
    margin-top: .1rem;
    overflow: hidden;
}
.cq_news_box2 h3{
    width: 20%;
    height: .3rem;
    float: left;
    font-size:.16rem;
    color: #333;
    line-height: .3rem;
    margin-top: .18rem;
    margin-left: .1rem;
    text-align: center;
    /* background-color: darkgoldenrod; */
}
.cq_news_box2 span{
    display: block;
    float: left;
    text-align: center;
    width: 20%;
    height: .26rem;
    font-size: .12rem;
    line-height: .26rem;
    color: white;
    margin-top: .19rem;
    margin-left: .1rem;
    background-color: #333;
    border-top-left-radius: 4px;
    border-top-right-radius:4px; 
    border-bottom-right-radius:4px; 
}
.cq_news_box2 p{
    width: 100%;
    height: .3rem;
    /* background-color: pink; */
    font-size: .14rem;
    color: #999;
    line-height: .3rem;
    padding-left: .16rem;
}
.san{
    width:0;
    height:0;
    margin-left: .95rem;
    margin-top: .34rem;
    border-top:10px solid transparent;
    border-bottom:10px solid transparent;
    border-left:10px solid #333;

}
/* cq_nav-box3 */
.cq_nav-box3{
    width: 100%;
    height: 1.07rem;
}
.cq_nav-box3{
    width: 100%;
    height: 1.07rem;
    display: flex;
    background-color: rgb(246, 246, 246);
}
.cq_nav-box3 li{
    width: 25%;
    height: 1.07rem;
    text-align: center;
}
.cq_nav-box3 li img{
    width: 90%;
    height: .6rem;
    display: block;
    margin: 0 auto;
}
.cq_nav-box3 li span{
    width: 50%;
    height: .18rem;
    background-color: #cc3333;
    display: block;
    margin:.05rem auto;
    font-size:.12rem;
    line-height: .18rem;
}
.cq_nav-box3 li span:nth-child(2){
    border-radius: 4px;
    color: white;
}
.cq_nav-box3 li span:nth-child(3){
    background-color: white;
    font-weight: bold;
}
/*cq_img_box4  */
.cq_img_box4{
    width:92%;
    height: 1rem;
    /* background-color: red; */
    margin: .1rem auto;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
}
.cq_img_box4 img{
    width: 48%;
    height: 1rem;
    border-radius: 10px;
}
.cq_middle_box5{
    width: .2rem;
    height: 4px;
    background-color: #333;
    margin:.1rem auto;
    border-radius: 4px;
}
</style>
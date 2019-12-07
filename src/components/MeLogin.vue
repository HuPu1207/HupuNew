<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-12-06 16:27:47
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->

<template>
    <div class="melogin"> 
       <div class="left">
           <span class="iconfont icon-touxiang"></span>
       </div>
        <!-- 未登录时 -->
        <div v-show="loginStyle">
            <h2>未登录 请
                <router-link to="/Login">
                    登录
                </router-link>
            </h2>
        </div>
        <!-- 登录后 -->
        <div class="welcom" v-show="welcomStyle">
            欢迎您：<span v-html="user"></span>&nbsp;&nbsp;
            <input @click="btnLogout" type="button" value="退出">
        </div>
       <img src="../assets/img/Memore.jpg" alt="">
    </div>  
</template>

<script>
// import {getCookie} from '../assets/js/fun.js';
// import {removeCookie} from '../assets/js/fun.js';

export default {
  name: 'MeLogin',
  data () {
    return {
        loginStyle:false,
        welcomStyle:false,
        user:""
    }
  },
  created(){
      this.ShowUser();    //调用
  },
  methods:{
    ShowUser(){
        let user=localStorage.getItem("userPhone");
        console.log(user);
        if(user!=null){
            this.user = user;
            this.loginStyle = false;
            this.welcomStyle = true;
            // this.str=user;
        }
        else{
            this.loginStyle = true;
            this.welcomStyle = false;
        }

    },
    btnLogout(){
        let user=localStorage.getItem("userPhone");
        if(user!=null){
            let user=localStorage.removeItem("userPhone");
            console.log(user);
            this.loginStyle = true;
            this.welcomStyle = false;
        }else{
            setTimeout(()=>{
                localStorage.setItem('',this.userPhone);
                Toast("退出成功")
                this.$router.push('/');
            },1100);
        }
    // this.ShowUser();
        }
    }
}
</script>

<style lang="scss" scoped="" type="text/css">
.melogin{
    width:100%;
    height: .68rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: #ffffff;
    position: relative;
    .left{
        width: .92rem;
        height: .68rem;
        line-height: .68rem;
        float: left;
        span{
            font-size: .42rem;
            margin-left: .15rem;
        }
    }
    h2{
        font-size: .12rem;
        margin-left: .1rem;
        a{
            color: #c01d2e;
            font-size: .16rem;
            // margin-left: .1rem;  
        }
    }
    img{
        width: .07rem;
        height: .2rem;
        display: block;
        // margin-left: 1.55rem;
        position: absolute;
        right: .2rem;
    }
    .welcom{
        margin-left: .1rem;
    }
}

</style>

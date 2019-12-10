<!--
 * @Descripttion: ""
 * @version: v1.0.0
 * @Author: mac
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: zxs
 * @LastEditTime: 2019-12-10 11:51:58
 -->
<template>
    <div class="box"> 
        <div class="box1">
            <div class="middle">
                <div class="middle1">
                    <div class="middle2">
                        <div class="middle3">账户登录</div>
                        <div class="middle4"  @touchstart="middle3">短信登录</div>
                        <div class="middle_1">
                        </div>
                    </div>
                    <div class="middle5">
                        <p>用户名/手机号</p>
                        <input type="text" ref="patClear" v-model="userPhone" class="inpute" placeholder="请输入用户名或手机号" onfocus="this.placeholder=''" onblur="this.placeholder='请输入用户名或手机号'">
                    </div>
                    <div class="middle5 middle6">
                        <p>密码</p>
                        <input type="password" ref="pathClear" v-model="password" class="inpute" placeholder="请输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'">
                    </div>
                    <div class="middle5 middle7">
                        <router-link to="/ZsRegister"><span class="spaa"><i class="el-icon-back"></i> 前往注册</span> </router-link>
                            <router-link to=/ZSForget>
                                <span class="spa">
                                    忘记密码?
                                </span>
                            </router-link>   
                    </div>

                </div>
            </div>
            <div class="middle middle10" v-if="show">
                <div class="middle1">
                    <div class="middle2">
                        <div class="middle3 middle9"  @click="middle4">账户登录</div>
                        <div class="middle4 middle8">短信登录</div>
                        <div class="middle_1">
                        </div>
                    </div>
                    <div class="middle5">
                        <p>用户名/手机号</p>
                        <input type="text" ref="patClear" v-model="userPhone" id="phone" class="inpute" placeholder="请输入用户名或手机号" onfocus="this.placeholder=''" onblur="this.placeholder='请输入用户名或手机号'">
                    </div>
                    <div class="middle5 middle6">
                        <p>验证码</p>
                        <input type="password" ref="paClear" v-model="code" id="code" class="inpute" placeholder="请输入验证码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入验证码'">
                        <button class="btn1" id="o" @click="send()"  v-if="show">获取验证码</button>
                        <!-- <button class="btn1" id="o" @click="send()">验证码已发送</button> -->
                    </div>
                    <div class="middle5 middle7">
                       <router-link to="/ZsRegister"> <span class="spaa"><i class="el-icon-back"></i> 前往注册</span> </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="mot">
            <div class="motu">
                <button class="mouti"  @click="loginCheck()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                <button class="mouti mouyy" v-if="show" @click="loginCheck1()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            </div>
            <div class="footer1">
                <div class="footer2">
                    
                </div>
                <span>第三方登录</span>
                <div class="footer3">
                </div>
            </div>
            <div class="footer4">
                <img src="../assets/img/wechat.jpg" alt="">
                &nbsp;&nbsp;&nbsp;&nbsp;<img src="../assets/img/qq.jpg" alt="">
            </div>
        </div>
    </div>  
</template>

<script>
import {addCookie} from '../assets/js/fun.js';
import { Toast } from 'mint-ui';
import axios from 'axios';

export default {
  name: 'Mloginmiddle',
  data () {
    return {
        show:false,
        userPhone: '',
        password: '',
        code:'',
        id:''
    }
  },
  methods:{
    middle3:function(){
        this.show = !this.show
    },
    middle4(){
        this.show = !this.show
    },
    //发送验证码
    send(){
        var phoneVal = document.getElementById("phone").value;
        if(phoneVal ==""){
            Toast('手机号或密码不能为空');
        }else{
        //   axios.post('/user/login_phone/'+this.username);
            Toast('验证码已发送');
        }
    },
    //账户登录
    loginCheck(){
    //   localStorage.setItem('userPhone',this.userPhone);
        if(this.userPhone =="" || this.password ==""){
            Toast('手机号或密码不能为空');
        }else{
        axios.get('http://localhost:3000/login?userPhone='+this.userPhone)
        .then(res=>{
            console.log(res.data);
            if(this.userPhone==res.data[0].userPhone && this.password==res.data[0].userpass){
            setTimeout(()=>{
                this.id=res.data[0].id
                console.log(this.id)
                localStorage.setItem('id',this.id);
                localStorage.setItem('userPhone',this.userPhone);
                Toast("登录成功")
                this.$router.push('/');
            },1100);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
            this.$refs.pathClear.value =''
            this.$refs.patClear.value =''
    },
    loginCheck1(){
            // var phoneVal=document.getElementById("phone").value;
            // var codeVal=document.getElementById("code").value;
            localStorage.setItem('userPhone',this.userPhone);
            if(this.userPhone ==""|| this.code ==""){
                Toast('手机号或验证码不能为空');
                return;
            }else{
                setTimeout(()=>{
                    localStorage.setItem('userPhone',this.userPhone);
                    Toast("登录成功")
                    this.$router.push('/');
                },1100);
            }
            this.$refs.patClear.value =''
            this.$refs.paClear.value =''
        }
    },

  }
</script>

<style lang="scss" scoped="" type="text/css">
p{
    margin-bottom: 0 !important;
}
.box1{
    position: relative;
}
.middle10{
    position: absolute;
    top: 0;
    left: 0;
}
.motu{
    position: relative;
}
.mouyy{
    position: absolute;
    top: 0.3rem;
    background: #f85220
}
.el-icon-close{
  font-size: 22px;
}
.middle{
    width: 100%;
    height: 2.45rem;
    .middle1{
        width: 95%;
        height: 100%;
        background: #ffffff;
        margin: 0 auto;
        border-radius: 10px;
        .middle2{
            display: flex;
            justify-content: center;
            position: relative;
            .middle3{
                box-sizing: border-box;
                position: absolute;
                top: -.15rem;
                left: .6rem;
                width: 1.2rem;
                height: .3rem;
                margin-right: .05rem;
                border-radius: 20px;
                color:#f77575;
                border: 1px solid #f77575;
                z-index: 2;
                text-align: center;
                line-height: .3rem;
                font-size: 15px;
                background: #ffffff;
                box-shadow:3px 3px 5px rgb(219, 218, 218);
            }  
            .middle4{
                box-sizing: border-box;
                position: absolute;
                top: -.15rem;
                right: .6rem;
                width: 1.3rem;
                height: .3rem;
                // margin-right: .05rem;
                border-radius: 20px;
                box-shadow:3px 3px 5px rgb(219, 218, 218);
                text-align: center;
                line-height: .3rem;
                font-size: 15px;
                background: #ffffff;
                color:#828282
            } 
            .middle8{
                border: 1px solid #f77575;
                color: #f77575;
                z-index: 5;
            }
            .middle9{
                border: none;
                color:#828282
            }
            .middle_1{
                width: 85%;
                height: .4rem;
            }
        }
        .middle5{
            width: 85%;
            height: .6rem;
            margin: 0 auto;
            p{
                font-size: 16px;
                color:#f77575
            }
            .inpute{
                outline: none;
                border: none;
                height: .35rem;
                width: 100%;
                border-bottom: 1px solid #e6e6e6;
                box-sizing: border-box ;
                margin-top: .08rem; 
            }
            // .inputs{
            //     outline: none;
            //     border: none;
            // } 
        }
        .middle6{
            margin-top: .1rem;
            position: relative;
            .btn1{
                position: absolute;
                right: 0;
                top: .3rem;
                border: none;
                background: #ffffff;
                border-radius: 30px;
                border:  1px solid #f77575;
                outline: none;
                width: 1rem;
                height: .3rem;
                color: #f77575

            }
        }
        .middle7{
            margin-top: .1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .spaa{
                color: #828282
            }
            .spa{
                color: #f77575
            }
        }
        
    }
}
.mot{
     margin-bottom: 1rem;
    width: 95%;
    height: 2.6rem;
    margin: 0 auto;
    .motu{
        width: 100%;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content:center;
        .mouti{
            width: 1.2rem;
            height: .4rem;
            background: #c01d2e;
            border-radius: 50px;
            text-align: center;
            line-height: .4rem;
            color: #ffffff;
            font-size: 16px;
            
                outline: none;
                border: none;
        }
   
    } 
    .footer1{
        width: 80%;
        height: .8rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
         span{
             color: #666;
         }
        .footer2{
            width:.9rem ;
            height: 1px;
            background: #666666;
        }   
          .footer3{
            width:.9rem ;
            height: 1px;
            background: #666666;
        } 
    }
      .footer4{
            width: 80%;
            height: .7rem;
            margin: 0 auto;
            text-align: center;
            display: flex;
            justify-content: space-around;
            
            img{
                margin-top: .1rem;
                width: .45rem;
                height: .45rem;
            }
        }
}
</style>

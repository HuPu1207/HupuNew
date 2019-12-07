<template>
    <div class="box"> 
        <div class="box1">
            <div class="middle">
                <div class="middle1">
                    <div class="middlel"></div>
                    <div class="middle5">
                        <p>用户名/手机号</p>
                        <input type="text" ref="patClear" v-model="userPhone" class="inpute" placeholder="请输入用户名或手机号" onfocus="this.placeholder=''" onblur="this.placeholder='请输入用户名或手机号'">
                    </div>
                    <div class="middle5 middle6">
                        <p>旧密码</p>
                        <input type="password" ref="pathClear" v-model="password" class="inpute" placeholder="请输入原来的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入原来的密码'">
                        <!-- <el-input class="inpute inputs" v-model="password" placeholder="请输入密码"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'" clearable show-password></el-input> -->
                    </div>
                    
                    <div class="middle5 middle6">
                        <p>新密码</p>
                        <input type="password" ref="paClear" v-model="newpassword" class="inpute" placeholder="请输入密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入新密码'">
                        <!-- <el-input class="inpute inputs" v-model="password" placeholder="请输入密码"  onfocus="this.placeholder=''" onblur="this.placeholder='请输入密码'" clearable show-password></el-input> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="mot">
            <div class="motu">
                <button class="mouti"  @touchstart="loginCheck">提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</button>
            </div>
        </div>
    </div>  
</template>

<script>
import { Toast } from 'mint-ui';
import axios from 'axios';

export default {
  name: 'Mloginmiddle',
  data () {
    return {
        show:false,
        userPhone: '',
        password: '',
        newpassword:''
    }
  },
  methods:{
      loginCheck(){
          localStorage.setItem('userPhone',this.userPhone);
           console.log(this.password)
          if(this.userPhone =="" || this.password =="" || this.newpassword ==""){
              Toast('亲！你必须的在相应的文本框中输入对应的内容');
          }else{
            let id=localStorage.getItem("id")
            console.log(id)
             axios({
                    method:"patch",
                    url:"http://localhost:3000/login/"+id,  
                    data:{
                        userpass:this.password,
                       
                    }
                })
                .then((data)=>{
                    // console.log(data); 
                    console.log("修改成功");
                    // console.log(data); 
                    // console.log("修改成功");
                    // this.$router.push({
                        path: '/Login'
                        
                    // })
                })

            setTimeout(()=>{
                 Toast("提交成功")
                this.$router.push('/');
            },1100);
        }
        
              this.$refs.pathClear.value =''
              this.$refs.patClear.value =''
              this.$refs.paClear.value =''
      }
  }
}
</script>

<style lang="scss" scoped="" type="text/css">
.box1{
    position: relative;
}
.middle10{
    position: absolute;
    top: 0;
    left: 0;
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
        .middlel{
            width: 100%;
            height: .2rem;
        }
        .middle2{
            display: flex;
            justify-content: center;
            position: relative;
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
            margin-top: .1rem
        }        
    }
}
.mot{
     margin-bottom: 1rem;
    width: 95%;
    height: 2.7rem;
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
}
</style>

<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-12-05 17:43:52
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
    <div class="box">
       <div class="comm">
           <div class="top">
               <div class="L">
                    <input v-model="bind" type="text" @keyup="getInput" placeholder="说点什么">
               </div>
               <div class="R">
                   <div class="R_T">
                       <img src="../assets/img/c02.jpg" alt="">
                   </div>
                   <div class="R_B">
                       <span v-if="ifChange" class="red" @click="handelClick()">发表</span>
                       <span v-if="!ifChange" class="gray">发表</span>
                   </div>
               </div>
           </div>
           <div class="bottom">
               <img src="../assets/img/c01.jpg" alt="">
               <p>图片</p>
           </div>
       </div>
    </div>  
</template>

<script>
import Axios from "axios"

export default {
  name: 'WriteComment',
//   props:['id'],
  

  data () {
    return {
      bind:'',
      ifChange:false,
    //   comment:[],
    }
  },
    created(){
        // console.log(this.id)
        // Axios.get('http://localhost:3000/Zscomment/'+this.id)
        // .then(res=>{
        //     this.comment = res.data;
        //     console.log(this.comment);
        //     console.log("---------------")
        // })
        // .catch(err=>{
        // console.log(err);
        // })
    },
  methods:{
      getInput(){
        if(this.bind.length>=1){
            this.ifChange=true;
        }else{
            this.ifChange=false;
        }
      },
    //   handelClick(){
    //       Axios({
    //         method:"post",
    //         url:"http://localhost:3000/Zscomment",
    //         data:{
    //             UserContent:this.UserContent,
    //         }
    //       })
    //       .then((res)=>{
    //           console.log(res.data)
    //       })
    //       .catch(err=>{
    //           console.log(err);
    //       })
    //   }
  }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 1.12rem;
    background: #ffffff;
    .comm{
        height: 1.12rem;
        .top{
            height: .63rem;
            border-bottom: 1px solid #f6f6f6;
            .L{
                width: 2.74rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                float: left;
                input{
                    width: 2.4rem;
                    height: .35rem;
                    outline: none;
                    border: 0;
                }
            }
            .R{
                width: 1rem;
                height: 100%;
                float: right;
                .R_T{
                    img{
                        width: .14rem;
                        height: .14rem;
                        margin-left: .75rem;
                        margin-top: .1rem;
                    }
                }
                .R_B{
                    span{
                        display: block;
                        width: .53rem;
                        height: .28rem;
                        border-radius: 5px;
                        margin-top: .1rem;
                        margin-left: .45rem;
                        font-size: .14rem;
                        // background: #d9d9d9;
                        text-align: center;
                        line-height: .28rem;
                    }
                    .red{
                        background: #c01d2e;
                    }
                    .gray{
                        background: #d9d9d9;
                    }
                }
            }
        }
        .bottom{
            height: .49rem;
            display: flex;
            align-items: center;
            overflow: hidden;
            img{
                width: .25rem;
                height: .25rem;
                margin-right: .1rem;
                margin-left: .1rem;
            }
            p{
                width: .3rem;
                height: .3rem;
                line-height: .25rem;
            }
        }
    }
}
</style>

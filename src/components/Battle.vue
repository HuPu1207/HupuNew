<!--
 * @Author: 赵新朋
 * @Date: 2019-12-02 14:28:43
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-12-04 16:23:36
 * @Description: 
 -->
<template>
    <div class="btop">
        <p class="back">
            <i class="el-icon-arrow-left" @click="back"></i>
            <span>战报</span>
        </p>
        <p class="bleft">
            <img src="img/bskt.jpg" alt="">
            <span>SKT</span>
        </p>
        <div class="bcenter">
            <p>S9全求总决赛&nbsp;&nbsp;&nbsp;小组赛</p>
            <p>
                <span>1</span>
                <span>-</span>
                <span>0</span>
            </p>
            <p>
               <span>[BO&nbsp;&nbsp;1]</span>
               &nbsp;&nbsp;<span>10-20</span>&nbsp;&nbsp;
               <span>00：00</span>&nbsp;&nbsp;
               <span>已结束</span>
            </p>
        </div>
        <p class="bright">
            <img src="img/bcg.jpg" alt="">
            <span>CG</span>
        </p>
        <p class="bottom">
            <span>战报</span>
            <span>赛况</span>
            <span>热线</span>
        </p>
    </div>
</template>
<script>
export default {
     methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .btop{
        position: sticky;
        top: 0;
        width: 100%;
        overflow: hidden;
        background: url('~@/../public/img/bgc.jpeg') center center no-repeat;
        background-size: 100% 100%;
        .back{
            width: 100%;
            line-height: .3rem;
            height: .3rem;   
            font-size: 18px;
            color: #fff;
            font-weight: 900;
           .el-icon-arrow-left{
               float: left;
               font-weight: 900;
               line-height: .3rem;
               font-size: 20px;
               margin-left: 18px;
           } 
           span{
               margin-left: 1.3rem;
           }
        }
        .bleft{
            width: .97rem;
            height: .99rem;
            float: left;
            font-size: 18px;
            color: #fff;
            margin: 0 auto;
            text-align: center;
            img{
                width: .52rem;
                height: .52rem;
                border-radius: 50%;
                margin-top: 23px;
                margin-left: 22px;
            }
        }
        .bcenter{
            width: 1.8rem;
            height: .99rem;
            float: left;
            text-align: center;
            color: #fff;
            margin-top: 23px;
            p:nth-child(1){
                height: .26rem;
                font-size: 16px;
                text-align: center;
                color: #fff;
                line-height: .26rem;
            }
            p:nth-child(2){
                height: .37rem;
                font-size: 26px;
                color: #fff;
                line-height: .37rem;
                font-weight: 900;
            }
            p:nth-child(3){
                height: .36rem;
                font-size:12px;
            }
        }
        .bright{
            width: .97rem;
            height: .99rem;
            float: left;
            font-size: 18px;
            color: #fff;
            margin: 0 auto;
            text-align: center;
            img{
                width: .52rem;
                height: .52rem;
                border-radius: 50%;
                margin-top: 23px;
                margin-left: 22px;
            }
        }
        .bottom{
            width: 100%;
            height: .43rem;
            clear: both;
            background-color: #fff;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;;
            border-bottom: 1px solid #ececec;
            font-size: 20px;
            line-height: .43rem;
            span{
                display: block;
                float: left;
                width: .5rem;
                text-align: center;
                color: #7c7c7c;
            }
            span:nth-child(1){
                margin-left: 18px;
            }
        }
    }
</style>
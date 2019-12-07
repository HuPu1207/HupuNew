<!--
 * @Author: CoolWind
 * @Date: 2019-12-02 14:59:27
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-02 17:27:43
 * @Description: 
 -->
<template>
    <div class="subjectTitle">
        <div :style="{background: bgcStyle}" class="subTitle01">
            <div class="subTitleTop">
                <span class="iconfont icon-back" @touchstart="goBack()"></span>
                <span class="iconfont icon-more"></span>
                <span class="iconfont icon-search"></span>
            </div>
            <div class="subTitleCont">
                <p>{{subTitle.ObjectName}}</p>
                <p>{{subTitle.ObjectDesc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/css/iconfont.css';

export default {
    name: 'SubjectTitle',
    props: ['id'],
    data() {
        return {
            subTitle: {},
            bgcStyle: ""
        }
    },
    created() {
        fetch('http://localhost:3000/LPFObjects')
        .then(res=>res.json())
        .then(data=>{
            for(let i=0;i<data.length;i++){
                if(data[i].ObjectId==this.id){
                    this.subTitle = data[i];
                    this.bgcStyle = data[i].ObjectImg;
                }
            }
        })
        .catch(err=>{
            window.console.log("服务器出错了："+err);
        })
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
    .subjectTitle{
        width: 100%;
        .subTitle01{
            background-size: 100% 100% !important; 
        }
        .subTitleTop{
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            .iconfont{
                color: white;
                font-size: .25rem;
            }
            .iconfont:nth-of-type(1){
                float: left;
                padding-left: .05rem;
            }
            .iconfont:nth-of-type(2){
                float: right;
                padding-right: .1rem;
            }
            .iconfont:nth-of-type(3){
                float: right;
                padding-right: .1rem;
            }
        }
        .subTitleCont{
            width: 100%;
            box-sizing: border-box;
            padding: 0.2rem .1rem;
            p:nth-of-type(1){
                font-size: .2rem;
                color: white;
                margin-bottom: 0.1rem;
            }
            p:nth-of-type(2){
                font-size: .15rem;
                color: white;
            }
        }
    }
    
    
</style>
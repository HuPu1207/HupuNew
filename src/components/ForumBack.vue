<!--
 * @Author: CoolWind
 * @Date: 2019-11-29 14:45:45
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-07 10:02:26
 * @Description: 
 -->
<template>
    <div class="forumBack">
        <a-icon type="left" @touchstart="goBack()"/>
        <span>{{currId}}</span>
        <a-icon type="ellipsis" />
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'ant-design-vue';
// import '../assets/css/antd.css';

Vue.use(Icon);

export default {
    name: 'ForumBack',
    props: ['id'],
    data(){
        return {
            currId: ""
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
    created(){
        fetch('http://localhost:3000/LPFtheme')
        .then(res=>res.json())
        .then(data=>{
            for(var i=0;i<data.length;i++){
                if(data[i].themeid==this.id){
                    this.currId = data[i].themekind;
                }
            }
        })
        .catch(err=>{
            window.console.log(err);
        })
    }
}
</script>

<style scoped>
    .forumBack{
        width: 3.75rem;
        height: .3rem;
        line-height: .3rem;
        box-sizing: border-box;
        padding: 0 .13rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .forumBack>span{
        font-size: .15rem;
        color: #0c0c0c;
    }
</style>
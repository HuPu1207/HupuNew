<!--
 * @Author: CoolWind
 * @Date: 2019-12-02 16:58:44
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-07 10:03:42
 * @Description: 
 -->
<template>
    <div class="subComment">
        <ul class="subTop">
            <li v-for="(item,index) in Items" :key="index" :class="{'activeLi': currCls==index}"  @touchstart="checkItem(index)">
                {{item}}
            </li>
        </ul>
        <ul class="subContent">
            <li v-for="(subList,index) in subLists" :key="index">
                <router-link :to='"/LPF_SubjectDetailPage/"+subList.themeid'>
                    <p>{{subList.author}}</p>
                    <p>{{subList.title}}</p>
                    <p><span><img src="../assets/images/coment00.jpg" alt=""></span><span>{{subList.pageview}}</span></p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'SubjectComment',
    props: ['id'],
    data(){
        return {
            Items: ['最新回复','最新发布','24小时榜'],
            currCls: "0",
            allsubLists: {},
            subLists: []
        }
    },
    methods: {
        checkItem(index){
            this.currCls = index;
        },
        checkId(index){
            window.console.log(index);
        }
    },
    created(){
        fetch('http://localhost:3000/LPFSubjectComment')
        .then(res=>res.json())
        .then(data=>{
            this.allsubLists = data;
            for(let key in this.allsubLists){
                if(key==this.id){
                    this.subLists = this.allsubLists[key];
                }
            }
        })
        .catch(err=>{
            window.console.log('出错了：'+err);
        })
    }
}
</script>

<style lang="scss" scoped>
    ul{
        margin-bottom: 0;
    }
    .subComment{
        width: 100%;
        .subTop{
            width: 100%;
            height: .45rem;
            border-bottom: 1px solid #eeeeee;
            display: flex;
            box-sizing: border-box;
            padding: 0 .1rem;
            li{
                box-sizing: border-box;
                height: .45rem;
                line-height: .45rem;
                font-size: .14rem;
                color: #b5b5b5;
                margin-right: .18rem;
            }
            .activeLi{
                border-bottom: 1px solid #7b001f;
                font-size: .16rem;
                font-weight: bold;
                color: #0b0b13;
            }
        }
        .subContent{
            width: 100%;
            box-sizing: border-box;
            li{ 
                padding: 0.1rem .1rem .15rem;
                border-bottom: 1px solid #e2e2e2;
                p{
                    margin-bottom: 0;
                }
                p:nth-of-type(1){
                    font-size: .12rem;
                    color: #8c8c8c;
                }
                p:nth-of-type(2){
                    font-size: .16rem;
                    color: #030303;
                    padding: .1rem 0 .2rem;
                }
                p:nth-of-type(3){
                    font-size: .12rem;
                    color: #6e6e6e;
                    overflow: hidden;
                    img{
                        width: .14rem;
                        height: .14rem;
                        display: block;
                    }
                    span{
                        float: left;
                        line-height: .14rem;
                    }
                    span:nth-of-type(1){
                        margin-right: .05rem;
                    }
                }
            }
        }
    }
</style>
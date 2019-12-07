<!--
 * @Author: CoolWind
 * @Date: 2019-11-26 14:10:34
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-30 19:52:21
 * @Description: 
 -->
<template>
    <div class="forumbox">
        <ul class="forumTop">
            <li v-for='(item,index) in itemLis' :key="index" @click="changeItem(item,index)" :class="{activeLi: currCls==index}">
                {{item}}
            </li>
        </ul>
        <ForumBot01 v-show="isBotShow"></ForumBot01>
        <ForumBot02 v-show="!isBotShow"></ForumBot02>
    </div>
</template>

<script>
import ForumBot01 from './ForumBot01';
import ForumBot02 from './ForumBot02';

export default {
    name: 'ForumTop',
    data() {
        return {
            itemLis: ['关注','话题'],
            currCls: 0,
            isBotShow: true
        }
    },
    methods: {
        changeItem(item,index){
            this.currCls = index;
            this.isBotShow = !this.isBotShow;
        }
    },
    components: {
        ForumBot01,ForumBot02
    }
}
</script>

<style scoped>
    ul{
        margin-bottom: 0;
    }
    li{
        box-sizing: content-box;
    }
    .forumTop{
        width: 100%;
        height: .45rem;
        border-bottom: 1px solid #ececec;
        font-size: .13rem;
        color: #b9b9b9;
        line-height: .45rem;
        box-sizing: border-box;
        padding-left: .25rem;
    }
    .forumTop li{
        width: .38rem;
        height: .45rem;
        text-align: center;
        padding: 0 .1rem;
        margin-top: -1px;
        float: left;
    }
    
    .activeLi{
        border-bottom: 1px solid #7e0014;
        font-size: .16rem;
        color: #1e1d24;
        font-weight: bold;
    }
</style>
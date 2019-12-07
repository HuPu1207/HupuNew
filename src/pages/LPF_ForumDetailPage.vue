<!--
 * @Author: CoolWind
 * @Date: 2019-11-28 19:16:28
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-03 09:53:06
 * @Description: 
 -->
<template>
    <div class="forumdetial">
        <ForumBack :id="id"></ForumBack>
        <ForumDetail :id="id"></ForumDetail>
        <ForumComment :id="id"></ForumComment>
        <ForumBottom></ForumBottom>
        <ForumFont v-show="$store.state.a.showFont"></ForumFont>
    </div>
</template>

<script>
import ForumBack from '../components/ForumBack';
import ForumDetail from '../components/ForumDetail';
import ForumComment from '../components/ForumComment';
import ForumBottom from '../components/ForumBottom';
import ForumFont from '../components/ForumFont';

export default {
    name: 'LPF_ForumDetailPage',
    props: ['id'],
    data(){
        return{
            isLoadAll: false
        }
    },
    components: {
        ForumBack,ForumDetail,ForumComment,ForumFont,ForumBottom
    },
    created(){
        // window.console.log('详情页面的id：'+this.id);
    }
}
</script>

<style scoped>
    .forumdetial{
        font-size: .12rem;
    }
</style>
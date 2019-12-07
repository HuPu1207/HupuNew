<!--
 * @Author: CoolWind
 * @Date: 2019-12-03 09:13:57
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-03 09:57:50
 * @Description: 
 -->
<template>
    <div class="SubjectDetail">
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
    name: 'LPF_SubjectDetail',
    props: ['id'],
    data(){
        return{
            isLoadAll: false
        }
    },
    components: {
        ForumBack,ForumDetail,ForumComment,ForumBottom,ForumFont
    },
    created(){
        // window.console.log('详情页面的id：'+this.id);
    }
}
</script>

<style scoped>
    .SubjectDetail{
        width: 100%;
    }
</style>
<!--
 * @Author: CoolWind
 * @Date: 2019-11-26 19:49:12
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-28 19:09:39
 * @Description: 
 -->
<template>
    <div class="forumBot02">
        <ForumBotItem></ForumBotItem>
        <ForumBotList></ForumBotList>
    </div>
</template>

<script>
import ForumBotItem from './ForumBotItem';
import ForumBotList from './ForumBotList';

export default {
    name: "ForumBot02",
    components: {
        ForumBotItem,ForumBotList
    }
}
</script>

<style scoped>
    .forumBot02{
        font-size: .12rem;
        overflow: hidden;
    }
</style>
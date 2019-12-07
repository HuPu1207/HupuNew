<!--
 * @Author: CoolWind
 * @Date: 2019-11-26 10:22:01
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-26 14:57:05
 * @Description: 
 -->
<template>
    <div class="forum">
        <div class="search"></div>
        <div class="content">
            <ForumTop></ForumTop>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import ForumTop from '@/components/ForumTop';

export default {
    name: 'LPF_ForumPage',
    data() {
        return {

        }
    },
    components: {
        ForumTop
    }
}
</script>

<style scoped>
    
    .forum{
        height: 100%;
    }
    .search{
        width: 100%;
        height: .5rem;
        background: #c31d33;
        position: fixed;
        top: 0;
    }
    .footer{
        width: 100%;
        height: .5rem;
        background: #c31d33;
        position: fixed;
        bottom: 0;
    }
    .content{
        width: 100%;
        margin-top: .5rem;
        margin-bottom: .5rem;
        /* height: 100%; */
        /* overflow-y: auto; */
        font-size: .12rem;
    }
</style>
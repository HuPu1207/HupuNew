<!--
 * @Author: CoolWind
 * @Date: 2019-11-26 10:22:01
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-10 09:59:47
 * @Description: 
 -->
<template>
    <div class="forum">
        <ZsTop class="search"></ZsTop>
        <div class="content">
            <ForumTop></ForumTop>
        </div>
        <ZsFooter class="footer"></ZsFooter>
    </div>
</template>

<script>
import ForumTop from '@/components/ForumTop';
import ZsTop from '@/components/ZsTop';
import ZsFooter from '@/components/ZsFooter';

export default {
    name: 'LPF_ForumPage',
    data() {
        return {

        }
    },
    components: {
        ForumTop,
        ZsTop,
        ZsFooter
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
        /* width: 100%;
        height: .5rem;
        background: #c31d33; */
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
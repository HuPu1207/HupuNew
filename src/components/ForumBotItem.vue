<!--
 * @Author: CoolWind
 * @Date: 2019-11-26 19:56:17
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-11-28 19:11:18
 * @Description: 
 -->
<template>
    <ul class="botItem">
        <li v-for="kind in $store.state.a.kinds" :key="kind.kindid" @touchstart="changeKindid({id:kind.kindid,name:kind.kindname})" :class="{'activeli': $store.state.a.currId==kind.kindid}">
            {{kind.kindname}}
        </li>
    </ul>
    <!-- overflow-y -->
</template>

<script>

export default {
    name: 'ForumBotItem',
    data(){
        return {
            curIn: 0
        }
    },
    created(){      
        this.$store.dispatch('getKinds');     
    },
    // created(){
    //     fetch('http://localhost:3000/LPFkinds')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.kinds = data;
    //         this.currKind = data[0].kindid;
    //     })
    // },
    methods:{
        changeKindid(info){
            this.$store.commit('changeKindid',info);
        }
    }
}
</script>

<style scoped>
    .botItem{
        width: .75rem;
        float: left;
        overflow-y: auto;
    }
    .botItem li{
        width: 100%;
        height: .47rem;
        background: #f4f7fc;
        color: #7b7e84;
        font-size: .13rem;
        line-height: .47rem;
        text-align: center;
    }
    .activeli{
        color: #bb3148 !important;
        background: white !important;
    }
</style>
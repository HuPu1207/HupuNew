<!--
 * @Author: CoolWind
 * @Date: 2019-11-26 19:56:35
 * @LastEditors: CoolWind
 * @LastEditTime: 2019-12-07 10:03:03
 * @Description: 
 -->
<template>
    <div class="botlist">
        <p>{{$store.state.a.currP}}</p>
        <ul>
            <li v-for="list in currList" :key="list.kindlistid" >
                <router-link :to='"/LPF_SubjectPage/"+list.kindlistid'>
                    <img :src="list.kindlistimg" alt="">
                    <span>{{list.kindlistname}}</span>
                </router-link>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: "ForumBotList",
    data(){
        return {
            allLists: {},
            currList: [],
            oldId: ""
        }
    },
    created(){
        fetch('http://localhost:3000/LPFkindlists')
        .then(res=>res.json())
        .then(data=>{
            this.allLists = data;
            for(let key in data){
                if(key==this.$store.state.a.currId){
                    this.currList = data[key];
                }
            }
        })
    },
    beforeUpdate(){
        if(this.oldId != this.$store.state.a.currId){
            this.oldId = this.$store.state.a.currId;
            fetch('http://localhost:3000/LPFkindlists')
            .then(res=>res.json())
            .then(data=>{
                this.allLists = data;
                for(let key in data){
                    if(key==this.$store.state.a.currId){
                        this.currList = data[key];
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
    a{
        color: #181818;
    }
    .botlist{
        width: 2.99rem;
        float: left;
    }
    .botlist>p{
        font-size: .12rem;
        color: #909090;
        font-weight: bold;
        padding: .15rem;
    }
    .botlist>ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .botlist>ul>li{
        width: 33.333%;
        flex-shrink: 0;
        font-size: .12rem;
        color: #181818;
        padding: .1rem 0;
    }
    .botlist>ul>li img{
        display: block;
        width: .36rem;
        height: .36rem;
        margin: 0 auto .08rem;
    }
    .botlist>ul>li span{
        display: block;
        width: .8rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        margin: 0 auto;
        text-overflow: ellipsis;
    }
</style>
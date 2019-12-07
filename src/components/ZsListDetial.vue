
<template>
    <div class="box">
      <div class="title">
          <span>[留言板]{{detial.Title}}</span>
      </div>
      <div class="news">
          <img src="../assets/img/hupu.png" alt="">
          <div class="read">
            <span class="lanqiu">虎扑篮球新闻</span>
            <span class="time">44分钟前</span>
            <span class="time readcount">阅读19862</span>
          </div>
      </div>
      <div class="listContent">
        <img :src="detial.Img01" alt="">
        <p>
          {{detial.Text}}
        </p>
      </div>
    </div>  
</template>

<script>
import Axios from "axios"

export default {
  name: 'ZsListDetial',
  props:['id'],

  data () {
    return {
      detial:{}
    }
  },
  created() {
    // console.log("-----------")
    // console.log(this.id);    
    Axios.get('http://localhost:3000/ZsList/'+this.id)
    .then(res=>{ 
        // console.log(res.data);
        this.detial = res.data.Detial[0];
        // console.log(res.data.Detial[0].Title);
    })
    .catch(err=>{
        console.log(err);
    });
  }
  // methods:{

  // }
}
</script>

<style lang="scss" scoped>
.box{
  margin-top: .33rem;
  .title{
    width: 95%;
    margin: 0 auto;
    height: .75rem;
    font-size: .2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    span{     //多行文本省略号
      display: block;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      // border-style: solid;      //边框
    }
  }
  .news{
    width: 95%;
    height: .4rem;
    margin: 0 auto;
    img{
      width: .32rem;
      height: .32rem;
      float: left;
      margin-right: .1rem;
      margin-top: .04rem;
    }
    .read{
      span{
        display: block;
      }
      .lanqiu{
        width: 100%;
        font-size: .14rem;
      }
      .time{
        float: left;
        font-size: .09rem;
        margin-top: .04rem;
      }
      .readcount{
        margin-left: .1rem;
      }
    }
  }
  .listContent{
    width: 95%;
    margin: 0 auto;
    margin-top: .1rem;
    img{
      width: 100%;
      height: 100%;
    }
    p{
      font-size: .16rem;
      color: #3c3c3c;
      margin-top: .1rem;
    }
  }
}
</style>

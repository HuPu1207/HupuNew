<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: zxs
 * @Date: 2019-11-26 10:31:15
 * @LastEditors: zxs
 * @lastEditTime: Do not Edit
 -->
<template>
  <div class="sourse">
        <p>
          来源：<a href="http://www.taobao.com">Instagram</a>
        </p>
        <p class="name">
            标签：
            <span>
                <a href="http://www.taobao.com">湖人</a>
            </span>
            <span>
                <a href="http://www.taobao.com">魔术师约翰逊</a>
            </span>
            <span>
                <a href="http://www.taobao.com">勒布朗-詹姆斯</a>
            </span>
            <span>
                <a href="http://www.taobao.com">安东尼-戴维斯</a>
            </span>
        </p>
  </div>
</template>

<script>
import Axios from "axios"

export default {
  name: 'ZsSource',
  data(){
      return{
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sourse{
    width: 95%;
    height: 1.04rem;
    margin: 0 auto;
    margin-top: .5rem;
    p{
        font-size: .18rem;
        a{
            font-size: .14rem;
            color: #3a76eb;
        }
    }
    .name{
        span{
            display: inline-block;
            height: .2rem;
            line-height: .2rem;
            border: 1px solid #3a76eb;
            border-radius: 10px;
            margin-right: .05rem;
        }
        a{
            margin: 0 .1rem;
            display: block;
        }
    }
}
</style>
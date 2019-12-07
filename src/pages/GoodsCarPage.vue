<template>
  <div class="box">
	<GoodsTop></GoodsTop>
  </div>
</template>

<script>
import GoodsTop from '../components/GoodsTop';

  export default{
    name:"GoodsCarPage",
    data(){
      return{
			
      }
    },
    components:{
		GoodsTop
    }
  }
</script>

<style lang="scss" scoped="scoped">
  .box{
	  width: 100%;
	  // height: 8rem;
	  background-color: ghostwhite;
  }
  
</style>

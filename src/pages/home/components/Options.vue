<template>
  <div class='options-wrap'>
     <div class='options-left'>
       <span class='iconfont icon-location'></span>
       <span>定位</span>
     </div>
     <div class='options-right'>
       <span class='iconfont icon-wangluo'></span>
       <span>必游榜单</span>
     </div>
  </div>
</template>

<script>
  export default{
    name:'HomeOptions',
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
  .options-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top:1px solid #eee;
    background: #fff;
  }
  .options-wrap div{
    flex:1;
    text-align: center;
    padding:0.2rem 0rem;
    border-right:1px solid #eee;
  }
  .options-wrap>div:last-child{
    border:none;
  }
</style>

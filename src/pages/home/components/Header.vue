<template>
  <div class='header'>
     <div class='header-left'>
        <span class='iconfont icon-fanhui'></span>
     </div>
     <div class='header-input'>
         <span class='iconfont icon-sousuo'></span>
         <input type="text" placeholder="输入城市/景点/游玩主题">
     </div>
     <div class='header-right'>
        <span class='cur-city'>北京</span>
        <span class='iconfont icon-triangle-down'></span>
     </div>
  </div>
</template>

<script>
  export default {
    name:'HomeHeader',
    data (){
      return {

      }
    }
  }
</script>

<style scoped>
  .header{
     display:flex;
     flex-direction: row;
     flex-wrap: nowrap;
     justify-content: space-between;
     align-items: center;
     background-color: #00bcd4;
     color:#fff;
     height:0.8rem;
  }
  .header-left{
    width:0.7rem;
    text-align: center;
  }
  .header-left span{
    font-size:0.13rem;
  }
  .header-input{
      flex:1;
      background-color: #fff;
      border-radius: 0.08rem;
      height: 0.6rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      color:#ccc;
  }
  .header-input span{
      font-size:0.4rem;
      margin:0rem 0.2rem;
  }
  .header-input input{
      width:80%;
  }
  .header-right{
     min-width:1.3rem;
     text-align: center;
     padding:0rem 0.1rem;
  }

</style>

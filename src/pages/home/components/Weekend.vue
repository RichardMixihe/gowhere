<template>
  <div class='weekend-wrap'>
    <div class='weekend-title'>
       <span class='iconfont icon-huomiao'></span>
       <span class='title'>周末去哪</span>
    </div>
    <div class='weekend-item'>
      <router-link
        to=''
        v-for='(item,index) in weekendlist'
        :key='index'
        class='item'>
         <img :src="item.imgUrl" alt="">
         <div class='item-desc'>
           <p>{{item.infotitle}}</p>
           <p>{{item.infoDesc}}</p>
         </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{
    name:'HomeWeekend',
    props:{
      weekendlist:Array
    },
    data (){
      return{

      }
    }
  }
</script>

<style scoped>
  .weekend-wrap{
    margin-top:0.2rem;
    background: #fff;
  }
  .weekend-title{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding:0.3rem 0.2rem;
  }
  .weekend-title span{
      margin-right:0.05rem;
      font-size:0.35rem;
  }
  .weekend-title span.icon-huomiao{
      color:red;
  }
  .weekend-item{
    display: flex;
    flex-direction: column;
  }
  .item{
      display: flex;
      flex-direction: column;
  }
  .item img{
    height:3rem;
  }
  .item .item-desc{
    padding:0.2rem;
  }
  .item .item-desc p{
    padding:0.1rem 0rem;
    color:dimgray;
  }
  .item .item-desc p:nth-child(1){
     font-size: .28rem;
     color:#000;
  }
  .item .item-desc p:nth-child(2){
     font-size: .2rem;
     overflow: hidden;
     white-space:nowrap !important;
     text-overflow: ellipsis;
  }
</style>

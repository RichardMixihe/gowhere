<template>
  <div class='swiper-wrap'>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for='(item,index) in swiperlist' :key='index'>
          <img :src="item.imgUrl" class='swiper-img'>
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:{
      swiperlist:Array
    },
    data() {
      return {
        swiperOptions:{
        	pagination:{
            el: '.swiper-pagination',
            clickable:true
          },
          loop:true
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .swiper-wrap{
     width:100%;
     height: 0;
     padding-bottom:25%;
     overflow: hidden;
     background: #eee;
  }
  .swiper-img{
    width:100%;
   height: 100%;
  }
  /* >>> 穿透 */
  .swiper-wrap >>> .swiper-pagination-bullet-active{
    background: #fff !important;
  }
</style>

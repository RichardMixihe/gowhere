<template>
   <div class='icons-wrap'>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for='(item,index) in swiperPages' :key='index'>
            <ul class='iconsList'>
              <li v-for='(citem,cindex) in item' :key='cindex' class='icon'>
                <router-link :to='citem.toUrl' class='iconLink'>
                   <img :src="citem.imgUrl" alt="" >
                   <span>{{citem.title}}</span>
                </router-link>
              </li>
            </ul>
        </swiper-slide>
        <!-- 分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
   </div>
</template>

<script>
  export default {
    name:'HomeIcons',
    props:{
      iconslist:Array
    },
    data(){
      return {
        swiperOptions:{
        	pagination:{
            el: '.swiper-pagination'
          },
          loop:true
        }
      }
    },
    mounted:function(){
      console.log(this.iconslist);
    },
    computed:{
      swiperPages:function(){
          let swiperPages = [];
          this.iconslist.forEach((item,index) => {
             let pagesIndex  = Math.floor(index/8);
             if(! swiperPages[pagesIndex]){
                swiperPages[pagesIndex] = [];
             }
             swiperPages[pagesIndex].push(item);
          });
          return swiperPages;
      }
    }
  }
</script>

<style scoped="scoped">
  .icons-wrap{
    width:100%;
    height: 0;
    padding-bottom:45%;
    background: #fff;
  }
  .icons-wrap >>> .swiper-container{
      width:100%;
      height: 0;
      padding-bottom:45%;
      overflow: hidden;
  }
  .iconsList{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
  }
  .iconsList .icon{
    width:25%;
    padding:0.2rem 0rem;
  }
  .icon .iconLink{
      width:100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color:#000;
  }
  .icon img{
    width:50%;
  }
  .icon span{
    width:100%;
    text-align: center;
    margin-top:0.03rem;
    overflow: hidden;
    white-space:nowrap !important;
    text-overflow: ellipsis;
  }
  .icons-wrap >>> .swiper-pagination-bullet{
     width:20px;
     height:2px;
     border-radius:0px;
  }

</style>

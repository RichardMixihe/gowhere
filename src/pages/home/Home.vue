<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperlist='SwiperList'></home-swiper>
    <home-icons  :iconslist='IconsList'></home-icons>
    <home-options></home-options>
    <home-recommend :recommendlist='RecommendList'></home-recommend>
    <home-weekend :weekendlist='WeekendList'></home-weekend>
  </div>
</template>

<script>
  import axios from 'axios'
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeOptions from './components/Options.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  export default {
    name:'Home',
    data (){
      return {
          SwiperList:[],
          IconsList:[],
          RecommendList:[],
          WeekendList:[]
      }
    },
    components:{
       HomeHeader,
       HomeSwiper,
       HomeIcons,
       HomeOptions,
       HomeRecommend,
       HomeWeekend
    },
    methods:{
      getHomeInfo:function(){
          //使用axios做异步请求
          axios.get('/goWhereData/Home.json').then((res)=>{
             let homeData = res.data.data;
             console.log('=======',homeData);
             this.SwiperList  = homeData.swiperList;
             this.IconsList  = homeData.iconsList;
             this.RecommendList  = homeData.recommendList;
             this.WeekendList  = homeData.weekendList;
          })
      }
    },
    mounted:function(){
      this.getHomeInfo();
    },
    activated:function(){  //一进入页面就触发；可用于初始化页面数据等
      this.getHomeInfo();
    }
  }
</script>

<style scoped>

</style>

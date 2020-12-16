<template>
  <div class='recommend-wrap'>
      <div class='rem-title'>
        <span class='iconfont icon-xin'></span>
        <span>热门推荐</span>
      </div>
      <div class='rem-item'>
        <router-link
          to=''
          v-for='(item,index) in recommendlist'
          :key='index'
          class='item'
        >
           <div class='item-img-wrap'>
              <img :src="item.imgUrl" alt="">
              <p>{{item.imgBadge}}</p>
           </div>
           <div class='item-info'>
              <div class='info-title'>{{item.infotitlel}}</div>
              <div class='info-rate'>
                <vue-rating-it
                   :score="item.infoRate"
                   :disabled='true'
                   :readonly='true'
                   size='0.1rem'></vue-rating-it>
                <span>{{item.infoComment}}条评论</span>
              </div>
              <div class='info-price'>
                <p class='price'>
                  <span>￥</span><span>{{item.infoPrice}}</span>起
                </p>
                <p>{{item.infoLocation}}</p>
              </div>
           </div>
        </router-link>
      </div>
      <div class='see-more'>
        查看所有产品
      </div>
  </div>
</template>

<script>
  import VueRatingIt from 'vue-rating-it'
  export default {
    name:'HomeRecommend',
    props:{
      recommendlist:Array
    },
    data (){
      return {
        rate:5
      }
    },
    components: {
       VueRatingIt
    }
  }
</script>

<style scoped="scoped">
  .recommend-wrap{
    margin-top:0.2rem;
    background: #fff;
    padding:0rem 0.2rem;
  }
  .rem-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding:0.3rem 0rem;
  }
  .rem-title span{
    margin-right:0.05rem;
    font-size:0.35rem;
  }
  .rem-title span.icon-xin{
    color:red;
  }
  .rem-item{
    display: flex;
    flex-direction: column;
  }
  .item{
    display: flex;
    flex-direction: row;
    margin:0.15rem 0rem;
  }
  .item .item-img-wrap{
    width:2rem;
    height: 2rem;
    position: relative;
  }
  .item .item-img-wrap img{
    width:100%;
  }
  .item .item-img-wrap p{
    position: absolute;
    left:0px;
    top:0px;
    background: orange;
    color:#fff;
    font-size:0.1rem !important;
    padding:0.05rem 0.1rem;
  }
  .item .item-info{
    margin-left:0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
  }
  .item .item-info > div{
      margin:0.15rem 0rem;
      color:#000;
  }
  .item .item-info .info-title{
      font-size:.3rem;
  }
  .item .item-info .info-rate{
     display: flex;
     flex-direction: row;
     color:dimgray;
  }
  .info-rate >>> .starfont.icon-star{
    margin-right:-3px !important;
  }
  .info-rate span{
    margin-left:0.5rem;
    font-size:0.12rem;
  }
  .item .item-info .info-price{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size:0.12rem;
    color:dimgray;
  }
  .info-price .price span{
    color:orange;
  }
  .info-price .price span:last-child{
    font-size:.4rem;
  }
  .see-more{
    height: .8rem;
    text-align: center;
    line-height: 0.8rem;
    color:#0074D9;
    border-top:1px solid #eee;
  }
</style>

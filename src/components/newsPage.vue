<template>
   <div class="news">
      <div class="news__background"></div>
      <div class="news__list">
         <div class="news__arrow news__arrow--prev">
            <img src="../images/vectorarrow.svg">
         </div>
         <div class="news__arrow news__arrow--next">
            <img src="../images/vectorarrow.svg">
         </div>
         <swiper ref="swiper" :options="swiperOptions" class="news__swiper">
            <swiperSlide v-for="item in posts" class="news__node">
               <router-link :to="`/news/node=${item.id}`">
                  <div class="news__image"><img src="../images/twoplanets.png"></div>
                  <div class="news__title">{{item.preview}}</div>
               </router-link>
            </swiperSlide>
            
         </swiper>
      </div>
   </div>
</template>

<script>

// import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide, directive } from 'vue-awesome-swiper';
// const { swiper, swiperSlide } = VueAwesomeSwiper
import 'swiper/swiper.scss'

export default {
   data() {
      return {
         swiperOptions: {
            slidesPerView: 2,
            spaceBetween: 160,
            navigation: {
               nextEl: '.news__arrow--next',
               prevEl: '.news__arrow--prev',
               disabledClass: 'news__arrow--disabled'
            }
         },
         posts: [],
      }
   },
   computed: {
      swiper() {
         return this.$refs.swiper.$swiper
      }
   },
   components: {
      swiper,
      swiperSlide
   },
   created() {
      var vm = this;
      vm.axios.get(vm.axios.defaults.baseURL + '/api/posts').then(r => {
            vm.posts = r.data;
         }).catch(err => {
            console.log(err.response.data.message)
      })
   }
   // directives: {
   //    swiper: directive
   // }
}
</script>
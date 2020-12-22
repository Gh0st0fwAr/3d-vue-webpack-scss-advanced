<template>
   <div class="news">
      <div class="news__background"></div>
      <div class="news__list">
         <div class="news__arrow news__arrow--prev">
            <svg class="news__svg">
               <use src="../images/vectorarrow.svg"></use>
            </svg>
         </div>
         <div class="news__arrow news__arrow--next"></div>
         <swiper ref="swiper" :options="swiperOptions" class="news__swiper">
            <swiperSlide  class="news__node">
               <router-link :to="'/news/node=1'">
                  <div class="news__image"><img src="../images/twoplanets.png"></div>
                  <div class="news__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, atque?</div>
               </router-link>
            </swiperSlide>
            <swiperSlide  class="news__node">
               <div class="news__image"><img src="../images/twoplanets.png"></div>
               <div class="news__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, atque?</div>
            </swiperSlide>
            <swiperSlide  class="news__node">
               <div class="news__image"><img src="../images/twoplanets.png"></div>
               <div class="news__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, atque?</div>
            </swiperSlide>
            <swiperSlide  class="news__node">
               <div class="news__image"><img src="../images/twoplanets.png"></div>
               <div class="news__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, atque?</div>
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
         }
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
   // directives: {
   //    swiper: directive
   // }
}
</script>
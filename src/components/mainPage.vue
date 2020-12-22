<template>
   <div class="overview">
      <div class="overview__mask"></div>
      <div class="overview__content">
         <div class="overview__video">
            <iframe src="https://www.youtube.com/embed/GXJWoCV0gtc?start=336" class="overview__videobox overview--box">Video</iframe>
         </div>
         <div class="overview__about">
            <div class="overview__slider">
               <div ref="slider" class="slider__list">
                  <img src="../images/slide1.png" class="slider__image">
                  <img src="../images/slide2.png" class="slider__image">
                  <img src="../images/slide3.png" class="slider__image">
               </div>
               <img src="../images/monitor.png" class="slider__mask">
               <font-awesome-icon :icon="['fas', 'caret-left']" @click="moveSlider('left')" class="slider__arrow slider__arrow--left"></font-awesome-icon>
               <font-awesome-icon :icon="['fas', 'caret-right']" @click="moveSlider('right')" class="slider__arrow slider__arrow--right"></font-awesome-icon>
            </div>
         </div>
         <div class="overview__info">
            <div class="info__socials">
               <a class="info__link">
                  <font-awesome-icon class="info__icon" :icon="['fab', 'vk']"></font-awesome-icon>
               </a>
               <a class="info__link">
                  <font-awesome-icon class="info__icon" :icon="['fab', 'twitter-square']"></font-awesome-icon>
               </a>
               <a class="info__link">
                  <font-awesome-icon class="info__icon" :icon="['fab', 'instagram']"></font-awesome-icon>
               </a>
               <a class="info__link">
                  <font-awesome-icon class="info__icon" :icon="['fab', 'facebook-square']"></font-awesome-icon>
               </a>
            </div>
            <div class="info__team">
               <div class="team__member">
                  <div class="team__contacts">
                     <div class="team__number">+7 985 336 80 01</div>
                     <div class="team__mail">neko1606@gmail.com</div>
                  </div>
                  <div class="team__name">Shevschenko Valeria</div>
                  <div class="team__pos">Frontend Lead</div>
               </div>

               <div class="team__member">
                  <div class="team__contacts">
                     <div class="team__number">+7 912 585 52 55</div>
                     <div class="team__mail">nkonshin@me.com</div>
                  </div>
                  <div class="team__name">Konshin Nikita</div>
                  <div class="team__pos">Frontend</div>
               </div>

               <div class="team__member">
                  <div class="team__contacts">
                     <div class="team__number">+7 985 688 10 30</div>
                     <div class="team__mail">zorza2011@mail.ru</div>
                  </div>
                  <div class="team__name">Aganova Alena</div>
                  <div class="team__pos">JavaGod</div>
               </div>
            </div>
            <div class="info__copyright">© 2020 Moscow, BMSTU, IU6-52B</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         sliderShift: 0,
         sliderWidth: 0,
         sliderChilds: 0,
         sliderStep : 0
      }
   },
   methods: {
      moveSlider(direction) {
         
         const childNodes = document.querySelectorAll('.slider__image')
         console.log(childNodes[0].offsetWidth)
         this.sliderChilds = 0;
         childNodes.forEach(child => {
            this.sliderChilds += 1;
         })
         this.sliderStep = childNodes[0].offsetWidth
         this.sliderWidth = childNodes[0].offsetWidth * this.sliderChilds

         
         var step;
         switch(direction) {
            case 'left':
               step = this.sliderShift - this.sliderStep;
               break;
            case 'right':
               step = this.sliderShift + this.sliderStep;
               break;
         }
         
         
         if (step < 0 || step == this.sliderWidth) {
            return
         } else {
            this.sliderShift = step
            this.$refs.slider.style.right = step + 'px'
         }
      }
   },
   mounted() {
      // console.log(this.$refs.slider.offsetWidth)
      // const childNodes = document.querySelectorAll('.slider__image')
      // console.log(childNodes[0].offsetWidth)
      // this.sliderChilds = 0;
      // childNodes.forEach(child => {
      //    this.sliderChilds += 1;
      // })
      // this.sliderStep = childNodes[0].offsetWidth
      // this.sliderWidth = childNodes[0].offsetWidth * this.sliderChilds + 'px'
      var vm = this;
  
      localStorage.getItem('token')
      // vm.axios.default.headers.common['Authorization'] = `Bearer ${r.data.accessToken}`
      
 
   }
}
</script>
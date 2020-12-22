<template>
   <div class="sound">
      <div class="sound__bg"></div>
      <div class="sound__subbg"></div>
      <div class="sound__list">
         <div class="sound__title">Soundtrack</div>
         <aplayer class="sound__player"
            :theme="'#E47194'"
            :music="{
               title: 'Юность в сапогах',
               artist: 'Господь Бог',
               src: gachi,
               pic: gachiPic,
               theme: 'red'
            }" />
         <aplayer class="sound__player"
            :theme="'#E47194'"
            :music="{
               title: 'Отче наш',
               artist: 'Варшавский филармонический оркестр',
               src: napas,
               pic: napasPic
            }" />
         <aplayer class="sound__player"
            :theme="'#E47194'"
            :music="{
               title: 'Квантовая физика',
               artist: 'Курс лекций Евтушенко В.У. МГУ 1983 г.',
               src: quantum,
               pic: quantumPic
            }" />
         <aplayer class="sound__player"
            :theme="'#E47194'"
            :music="{
               title: 'Терентий',
               artist: 'Уважай старость',
               src: terenti,
               pic: terentiPic
            }" />
                   
      </div>
/>
   </div>
</template>

<script>

import Aplayer from 'vue-aplayer';
import gachi from '../sounds/gachi.mp3'
import gachiPic from '../images/gachi.png'

import napas from '../sounds/napas.mp3'
import napasPic from '../images/napas.jpg'

import terenti from '../sounds/terenti.mp3'
import terentiPic from '../images/ded.jpg'

import quantum from '../sounds/quantum.mp3'
import quantumPic from '../images/quantum.jpg'

export default {
   components: {
      // VuetifyAudio: () => import('vuetify-audio')
      Aplayer
   },
   data() {
      return {
         gachi,
         gachiPic,
         napas,
         napasPic,
         terenti,
         terentiPic,
         quantum,
         quantumPic
      }
   }
}
</script>